import * as React from "react";

import {
  Button,
  View,
  Text,
  StyleSheet,
  AppRegistry,
  TouchableOpacity
} from "react-native";

const styles = StyleSheet.create({
  statusBar: {
    height: 35,
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: 700,
    borderBottomWidth: 0.2,
    borderBottomColor: "#e1e1e1"
  },
  statusBarItem: {
    color: "#000"
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

const App = () => (
  <>
    <View style={styles.statusBar}>
      <TouchableOpacity onPress={() => alert("Touched!")}>
        <Text style={styles.statusBarItem}>9:30</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert("Touched!")}>
        <Text>Yo</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.button}>
      <Button
        color="gray"
        title="touch this"
        onPress={() => alert("Button!")}
      />
    </View>
  </>
);

const rootTag = document.getElementById("root");

AppRegistry.registerComponent("App", () => App);
AppRegistry.runApplication("App", { rootTag });
