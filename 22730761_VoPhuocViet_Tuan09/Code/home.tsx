import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { openDatabase } from "./db";

export default function HomeScreen() {
  const router = useRouter();
  const { username } = useLocalSearchParams<{ username: string }>();
  const [db, setDb] = useState<any>(null);
  const [tasks, setTasks] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    (async () => {
      const database = await openDatabase();
      setDb(database);
      loadTasks(database);
    })();
  }, []);

  async function loadTasks(database = db) {
    if (!database) return;
    const res = await database.getAllAsync("SELECT * FROM tasks ORDER BY id DESC");
    setTasks(res);
  }

  // ✅ Hàm đổi trạng thái hoàn thành (tick/untick)
  async function toggleDone(id: number, done: number) {
    if (!db) return;
    await db.runAsync("UPDATE tasks SET done = ? WHERE id = ?", done ? 0 : 1, id);
    await loadTasks();
  }

  // ✅ Hàm xoá task
  async function deleteTask(id: number) {
    if (!db) return;
    await db.runAsync("DELETE FROM tasks WHERE id = ?", id);
    await loadTasks();
  }

  const filtered = tasks.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require("../assets/images/icon.png")}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.hello}>Hi {username || "User"}</Text>
          <Text style={styles.sub}>Have a great day ahead</Text>
        </View>
      </View>

      {/* Search */}
      <View style={styles.searchRow}>
        <Ionicons name="search" size={20} color="#555" />
        <TextInput
          placeholder="Search"
          value={search}
          onChangeText={setSearch}
          style={styles.searchInput}
        />
      </View>

      {/* List */}
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            {/* ✅ Bấm để đổi trạng thái */}
            <TouchableOpacity onPress={() => toggleDone(item.id, item.done)}>
              <Ionicons
                name={item.done ? "checkbox" : "square-outline"}
                size={24}
                color={item.done ? "#1c9963" : "#aaa"}
              />
            </TouchableOpacity>

            <Text
              style={[
                styles.itemText,
                item.done && {
                  textDecorationLine: "line-through",
                  color: "#999",
                },
              ]}
            >
              {item.title}
            </Text>

            <TouchableOpacity onPress={() => deleteTask(item.id)}>
              <MaterialIcons name="delete" size={22} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Add button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() =>
          router.push({ pathname: "/add-job" as const, params: { username } })
        }
      >
        <Ionicons name="add" size={32} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  hello: { fontSize: 18, fontWeight: "bold" },
  sub: { color: "#666" },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#00aaff",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  searchInput: { flex: 1, padding: 8 },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    justifyContent: "space-between",
  },
  itemText: { flex: 1, marginLeft: 10, fontSize: 16 },
  addButton: {
    position: "absolute",
    bottom: 30,
    right: 30,
    backgroundColor: "#00BFFF",
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
});
