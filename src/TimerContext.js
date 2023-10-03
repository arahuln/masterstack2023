import React, { createContext, useContext, useState } from 'react';

const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [timer, setTimer] = useState(600); // 10 minutes in seconds

  return (
    <TimerContext.Provider value={{ timer, setTimer }}>
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = () => {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error('useTimer must be used within a TimerProvider');
  }
  return context;
};
