import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Alert } from "react-native";
import { MaterialIcons, FontAwesome, Feather } from "@expo/vector-icons";

const KeyboardToolbar = ({
  onKeyboardPress,
  onStarPress,
  selectedTool,
  setSelectedTool,
}) => {
  const handlePress = (tool) => {
    if (tool === "keyboard" || tool === "star") {
      setSelectedTool(tool);
    } else {
      Alert.alert(
        "Feature under development",
        "This feature is currently under development. Please check back later."
      );
    }
  };

  return (
    <View style={styles.toolbar}>
      <TouchableOpacity onPress={() => handlePress("add")}>
        <MaterialIcons
          name="add"
          size={24}
          color={selectedTool === "add" ? "black" : "#ccc"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          handlePress("keyboard");
          onKeyboardPress();
        }}
      >
        <MaterialIcons
          name="keyboard"
          size={24}
          color={selectedTool === "keyboard" ? "black" : "#ccc"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          handlePress("star");
          onStarPress();
        }}
      >
        <FontAwesome
          name="star"
          size={24}
          color={selectedTool === "star" ? "black" : "#ccc"}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress("text")}>
        <MaterialIcons
          name="text-fields"
          size={24}
          color={selectedTool === "text" ? "black" : "#ccc"}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress("mic")}>
        <Feather
          name="mic"
          size={24}
          color={selectedTool === "mic" ? "black" : "#ccc"}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress("upload")}>
        <View style={styles.uploadContainer}>
          <MaterialIcons
            name="photo-camera"
            size={24}
            color={selectedTool === "upload" ? "black" : "#ccc"}
          />
          <Text style={styles.uploadText}>Upload Cover</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: "white",
    height: 25,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderColor: "#ccc",
  },
  uploadContainer: {
    paddingLeft: 25,
    flexDirection: "row",
    alignItems: "center",
  },
  uploadText: {
    marginLeft: 5,
    color: "#ccc",
  },
});

export default KeyboardToolbar;
