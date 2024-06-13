import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useStory } from '../context/StoryContext';

const StoryScreen = () => {
  const { state, dispatch } = useStory();
  const [showKeyboardBar, setShowKeyboardBar] = useState(false);
  const [askAgastyaMode, setAskAgastyaMode] = useState(false);
  const [inputText, setInputText] = useState('');

  const handleAskAgastya = (action) => {
    // Dummy response for demonstration
    const response = action === 'shorten' ? 'Shortened text' : 'Improved text';
    dispatch({ type: 'SET_RESPONSE_TEXT', payload: response });
  };

  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={styles.titleInput}
        placeholder="Title"
        value={state.title}
        onChangeText={(text) => dispatch({ type: 'SET_TITLE', payload: text })}
        onFocus={() => setShowKeyboardBar(true)}
      />
      <TextInput
        style={styles.subtitleInput}
        placeholder="Sub Title"
        value={state.subtitle}
        onChangeText={(text) => dispatch({ type: 'SET_SUBTITLE', payload: text })}
        onFocus={() => setShowKeyboardBar(true)}
      />
      <TextInput
        style={styles.bodyInput}
        placeholder="Write your story..."
        value={state.body}
        onChangeText={(text) => dispatch({ type: 'SET_BODY', payload: text })}
        onFocus={() => setShowKeyboardBar(true)}
        multiline
      />
      {showKeyboardBar && (
        <View style={styles.keyboardBar}>
          <TouchableOpacity onPress={() => setAskAgastyaMode(false)}>
            <Icon name="keyboard" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setAskAgastyaMode(true)}>
            <Icon name="star" size={30} />
          </TouchableOpacity>
        </View>
      )}
      {askAgastyaMode && (
        <View style={styles.askAgastyaContainer}>
          <Text style={styles.askAgastyaTitle}>Ask Agastya AI</Text>
          <TextInput
            style={styles.askAgastyaInput}
            placeholder="Ask me or choose an option"
            value={inputText}
            onChangeText={setInputText}
          />
          <TouchableOpacity onPress={() => handleAskAgastya('improve')}>
            <Icon name="arrow-forward" size={30} />
          </TouchableOpacity>
          <View style={styles.optionsContainer}>
            <TouchableOpacity onPress={() => handleAskAgastya('shorten')}>
              <Text style={styles.optionText}>Make it shorter</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleAskAgastya('improve')}>
              <Text style={styles.optionText}>Improve writing</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleAskAgastya('lengthen')}>
              <Text style={styles.optionText}>Make it longer</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleAskAgastya('summarize')}>
              <Text style={styles.optionText}>Summarize</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleAskAgastya('todo')}>
              <Text style={styles.optionText}>Make a To-Do list</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.responseText}>{state.responseText}</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  titleInput: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitleInput: {
    fontSize: 18,
    marginBottom: 20,
    color: '#666',
  },
  bodyInput: {
    fontSize: 16,
    flex: 1,
    color: '#333',
    marginBottom: 20,
    textAlignVertical: 'top',
  },
  keyboardBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  askAgastyaContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
  },
  askAgastyaTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  askAgastyaInput: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
    color: '#6200EE',
    marginBottom: 10,
  },
  responseText: {
    fontSize: 16,
    color: '#333',
    marginTop: 10,
  },
});

export default StoryScreen;
