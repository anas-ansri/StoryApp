import React from 'react';
import StackNavigator from './src/navigation/StackNavigator';
import { StoryProvider } from './src/context/StoryContext';

const App = () => {
  return (
    <StoryProvider>
      <StackNavigator />
    </StoryProvider>
  );
};

export default App;