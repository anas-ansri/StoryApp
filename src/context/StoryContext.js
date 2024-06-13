import React, { createContext, useReducer, useContext } from 'react';

const StoryContext = createContext();

const initialState = {
  title: '',
  subtitle: '',
  body: '',
  responseText: '',
};

const storyReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TITLE':
      return { ...state, title: action.payload };
    case 'SET_SUBTITLE':
      return { ...state, subtitle: action.payload };
    case 'SET_BODY':
      return { ...state, body: action.payload };
    case 'SET_RESPONSE_TEXT':
      return { ...state, responseText: action.payload };
    default:
      return state;
  }
};

export const StoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storyReducer, initialState);

  return (
    <StoryContext.Provider value={{ state, dispatch }}>
      {children}
    </StoryContext.Provider>
  );
};

export const useStory = () => useContext(StoryContext);