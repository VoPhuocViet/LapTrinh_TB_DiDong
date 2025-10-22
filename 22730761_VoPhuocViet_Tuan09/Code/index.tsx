import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function ManageScreen() {
  const router = useRouter();
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MANAGE YOUR{"\n"}TASK</Text>

      <View style={styles.inputBox}>
        <Ionicons name="person-outline" size={20} color="#999" />
        <TextInput
          placeholder="Enter your name"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
       onPress={() =>
          router.push({ pathname: "/home", params: { username: name } })
}

      >
        <Text style={styles.btnText}>GET STARTED →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", color: "#8A2BE2", marginBottom: 40, textAlign: "center" },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 8,
    paddingHorizontal: 10,
    width: "80%",
    height: 45,
    marginBottom: 20,
  },
  input: { flex: 1, marginLeft: 8 },
  button: { backgroundColor: "#00BFFF", paddingVertical: 12, paddingHorizontal: 30, borderRadius: 8 },
  btnText: { color: "#fff", fontWeight: "bold" },
});
