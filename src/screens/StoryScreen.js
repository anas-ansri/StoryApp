import React, { useContext, useState } from 'react';
import { View, TextInput, StyleSheet, Text, Keyboard, TouchableWithoutFeedback } from 'react-native';
import KeyboardToolbar from '../components/KeyboardToolbar';
import AskAgastya from '../components/AskAgastya';
import { StoryContext } from '../context/StoryContext';

const StoryScreen = () => {
  const { title, setTitle, subtitle, setSubtitle, body, setBody } = useContext(StoryContext);
  const [showToolbar, setShowToolbar] = useState(false);
  const [showAskAgastya, setShowAskAgastya] = useState(false);
  const [selectedTool, setSelectedTool] = useState('keyboard');

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
        <Text style={styles.header}>Write New Story</Text>
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
          placeholder="Body"
          value={body}
          onChangeText={setBody}
          onFocus={handleFocus}
          multiline
        />
        {showToolbar && (
          <KeyboardToolbar
            onKeyboardPress={() => {
              setShowAskAgastya(false);
              setSelectedTool('keyboard');
            }}
            onStarPress={() => {
              setShowAskAgastya(true);
              setSelectedTool('star');
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
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  titleInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  subtitleInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  bodyInput: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    textAlignVertical: 'top',
    borderRadius: 5,
  },
});

export default StoryScreen;