import React, { useContext, useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
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
  const [selectedText, setSelectedText] = useState("");

  const handleFocus = () => {
    if (!showAskAgastya) {
      setShowToolbar(true);
    } else {
      Keyboard.dismiss();
    }
  };

  const handleSelectionChange = ({ nativeEvent: { selection } }) => {
    const { start, end } = selection;
    setSelectedText(body.substring(start, end));
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {showAskAgastya ? (
          <>
            <Text
              style={styles.titleText}
              selectable
              onPress={() => setShowToolbar(true)}
            >
              {title || "Title"}
            </Text>
            <Text
              style={styles.subtitleText}
              selectable
              onPress={() => setShowToolbar(true)}
            >
              {subtitle || "Sub Title"}
            </Text>
            <ScrollView>
              <Text
                style={styles.bodyText}
                selectable
                onPress={() => setShowToolbar(true)}
              >
                {body || "Start writing your story..."}
              </Text>
            </ScrollView>
          </>
        ) : (
          <>
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
              onSelectionChange={handleSelectionChange}
              multiline
            />
          </>
        )}
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
        {showAskAgastya && <AskAgastya body={selectedText} />}
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
    fontWeight: "bold",
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
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000",
    opacity: 0.5,
  },
  subtitleText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 50,
    color: "#333",
  },
  bodyText: {
    fontSize: 16,
    flex: 1,
    color: "#000",
    marginBottom: 20,
    textAlignVertical: "top",
  },
});

export default StoryScreen;
