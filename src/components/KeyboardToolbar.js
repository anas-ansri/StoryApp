import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { MaterialIcons, FontAwesome, Feather } from '@expo/vector-icons';

const KeyboardToolbar = ({ onKeyboardPress, onStarPress, selectedTool, setSelectedTool }) => {
  return (
    <View style={styles.toolbar}>
      <TouchableOpacity onPress={() => setSelectedTool('add')}>
        <MaterialIcons name="add" size={24} color={selectedTool === 'add' ? 'black' : '#ccc'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onKeyboardPress}>
        <MaterialIcons name="keyboard" size={24} color={selectedTool === 'keyboard' ? 'black' : '#ccc'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onStarPress}>
        <FontAwesome name="star" size={24} color={selectedTool === 'star' ? 'black' : '#ccc'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedTool('text')}>
        <MaterialIcons name="text-fields" size={24} color={selectedTool === 'text' ? 'black' : '#ccc'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedTool('mic')}>
        <Feather name="mic" size={24} color={selectedTool === 'mic' ? 'black' : '#ccc'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedTool('upload')}>
        <View style={styles.uploadContainer}>
          <MaterialIcons name="photo-camera" size={24} color={selectedTool === 'upload' ? 'black' : '#ccc'} />
          <Text style={styles.uploadText}>Upload Cover</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: 'white',
    height: 25,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderColor: '#ccc',
  },
  uploadContainer: {
    paddingLeft: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  uploadText: {
    marginLeft: 5,
    color: '#ccc',
  },
});

export default KeyboardToolbar;
