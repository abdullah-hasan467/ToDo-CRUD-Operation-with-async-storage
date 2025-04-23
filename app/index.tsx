import Task from "@/components/Task";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const [task, setTask] = useState<string>(""); // specify task as a string
  const [taskItems, setTaskItems] = useState<string[]>([]);
  const handleAaddtask = () => {
    setTaskItems([...taskItems, task]);
    setTask(null);
    
  };

  return (
    <View style={styles.container}>
      {/* Today's Tasks  */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Task </Text>
      </View>

    

     <ScrollView>
     <View style={styles.items}>
      {
        taskItems.map ((items) =>{
          return <Task text={items} />
        })
      }
      </View>
     </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder="Wrtite Your Today's Task"
          value={task}
          onChangeText={(e) => setTask(e)}
        />
        <TouchableOpacity
          onPress={() => {
            handleAaddtask();
          }}
        >
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
