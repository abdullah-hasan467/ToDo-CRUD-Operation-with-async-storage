import Task from "@/components/Task";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Today's Tasks  */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Task </Text>
      </View>

      <View style={styles.items}>
        <Task  text={"Task 1"}/>
        <Task  text={"Task 2"}/>
        <Task  text={"Task 3"}/>
        <Task  text={"Task 4"}/>
       
      </View>
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
    paddingTop:30
  },
});
