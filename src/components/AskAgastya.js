import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, ScrollView } from 'react-native';

const AskAgastya = ({ body }) => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleRequest = (type) => {
    // Simulate a server response
    let dummyResponse = '';
    if (type === 'shorten') {
      dummyResponse = body.slice(0, 50) + '...';
    } else if (type === 'improve') {
      dummyResponse = 'Improved text: ' + body;
    }
    setResponse(dummyResponse);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ask me or choose an option"
        value={input}
        onChangeText={setInput}
      />
      {!response && (
        <ScrollView contentContainerStyle={styles.options}>
          <TouchableOpacity onPress={() => handleRequest('improve')}>
            <Text style={styles.optionText}>Correct Grammar & Spelling</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleRequest('improve')}>
            <Text style={styles.optionText}>Improve writing</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleRequest('improve')}>
            <Text style={styles.optionText}>Make it longer</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleRequest('shorten')}>
            <Text style={styles.optionText}>Make it shorter</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleRequest('shorten')}>
            <Text style={styles.optionText}>Summarize</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleRequest('improve')}>
            <Text style={styles.optionText}>Make a To-Do list</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
      {response && (
        <View style={styles.responseContainer}>
          <Text style={styles.response}>{response}</Text>
          <View style={styles.responseButtons}>
            <TouchableOpacity style={styles.responseButton} onPress={() => setResponse('')}>
              <Text style={styles.responseButtonText}>Clear</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.responseButton} onPress={() => {}}>
              <Text style={styles.responseButtonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#ccc',
  },
  input: {
    height: 46,
    borderColor: 'orange',
    borderWidth: 0.8,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  options: {
    flexDirection: 'column',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'semibold',
    paddingVertical: 8,
  },
  responseContainer: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginTop: 10,
  },
  response: {
    marginBottom: 10,
    fontSize: 16,
    color: '#333',
  },
  responseButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  responseButton: {
    backgroundColor: '#eeeeee',
    padding: 10,
    borderRadius: 5,
    width: '48%',
  },
  responseButtonText: {
    color: '#4c4c4c',
    textAlign: 'center',
    fontSize: 14,
  },
});

export default AskAgastya;