import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { openDatabase } from "./db";

export default function AddJob() {
  const router = useRouter();
  const { username } = useLocalSearchParams<{ username: string }>();
  const [job, setJob] = useState("");

  async function addJob() {
    const db = await openDatabase();
    await db.runAsync("INSERT INTO tasks (title) VALUES (?);", job);
    alert("✅ Added: " + job);
    router.back(); // quay lại màn 2
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../assets/images/icon.png")} style={styles.avatar} />
        <View>
          <Text style={styles.hello}>Hi {username || "User"}</Text>
          <Text style={styles.sub}>Have a great day ahead</Text>
        </View>
      </View>

      <Text style={styles.title}>ADD YOUR JOB</Text>

      <View style={styles.inputBox}>
        <Ionicons name="document-text-outline" size={20} color="#888" />
        <TextInput
          placeholder="Input your job"
          style={styles.input}
          value={job}
          onChangeText={setJob}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={addJob}>
        <Text style={styles.buttonText}>FINISH →</Text>
      </TouchableOpacity>

      <Image source={require("../assets/images/note.png")} style={styles.noteImg} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  hello: { fontSize: 18, fontWeight: "bold" },
  sub: { color: "#666" },
  title: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginVertical: 30 },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 45,
    marginBottom: 20,
  },
  input: { flex: 1, marginLeft: 8 },
  button: {
    backgroundColor: "#00BFFF",
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
  noteImg: { width: 150, height: 150, alignSelf: "center", marginTop: 40 },
});
