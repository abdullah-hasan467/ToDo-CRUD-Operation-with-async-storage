import Task from "@/components/Task";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { useState } from "react";

export default function Index() {
  const [task, setTask] = useState()
const handleAaddtask = () =>{
  console.log(task)

}

  return (
    <View style={styles.container}>
      {/* Today's Tasks  */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Task </Text>
      </View>

      <View style={styles.items}>
        <Task text={"Task 1"} />
        <Task text={"Task 2"} />
        <Task text={"Task 3"} />
        <Task text={"Task 4"} />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder="Wrtite Your Today's Task" value={task}  onChangeText={(e)=>setTask(e)}
        />
        <TouchableOpacity onPress={()=>{
          handleAaddtask()
        }}>
          <View style={styles.addwrapper}>
            <Text style={styles.addText}> + </Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAD",
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 25,
    paddingHorizontal: 20,
    backgroundColor: "#FFF",
    borderRadius: 25,
    borderColor: "#C0C0C0",
    width: 250,
  },
  addwrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {},
});
