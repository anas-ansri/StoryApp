import React, { useContext, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import KeyboardToolbar from "../components/KeyboardToolbar";
import AskAgastya from "../components/AskAgastya";
import { StoryContext } from "../context/StoryContext";

const StoryScreen = () => {
  const { title, setTitle, subtitle, setSubtitle, body, setBody } =
    useContext(StoryContext);
  const [showToolbar, setShowToolbar] = useState(false);
  const [showAskAgastya, setShowAskAgastya] = useState(false);
  const [selectedTool, setSelectedTool] = useState("keyboard");

  const handleFocus = () => {
    if (!showAskAgastya) {
      setShowToolbar(true);
    } else {
      Keyboard.dismiss();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <TextInput
          style={styles.titleInput}
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
          onFocus={handleFocus}
        />
        <TextInput
          style={styles.subtitleInput}
          placeholder="Sub Title"
          value={subtitle}
          onChangeText={setSubtitle}
          onFocus={handleFocus}
        />
        <TextInput
          style={styles.bodyInput}
          placeholder="Start writing your story..."
          value={body}
          onChangeText={setBody}
          onFocus={handleFocus}
          multiline
        />
        {showToolbar && (
          <KeyboardToolbar
            onKeyboardPress={() => {
              setShowAskAgastya(false);
              setSelectedTool("keyboard");
            }}
            onStarPress={() => {
              setShowAskAgastya(true);
              setSelectedTool("star");
            }}
            selectedTool={selectedTool}
            setSelectedTool={setSelectedTool}
          />
        )}
        {showAskAgastya && <AskAgastya body={body} />}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  titleInput: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000",
    opacity: 0.5,
  },
  subtitleInput: {
    fontSize: 16,
    forntWeight: "bold",
    marginTop: 10,
    marginBottom: 50,
    color: "#333",
  },
  bodyInput: {
    fontSize: 16,
    flex: 1,
    color: "#000",
    marginBottom: 20,
    textAlignVertical: "top",
  },
});

export default StoryScreen;
