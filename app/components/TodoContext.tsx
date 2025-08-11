import React, { createContext, useContext } from 'react';
import { useTodoApp } from './UseTodo';

const TodoContext = createContext<ReturnType<typeof useTodoApp> | null>(null);

export const TodoProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const value = useTodoApp();
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export function useTodo() {
  const ctx = useContext(TodoContext);
  if (!ctx) throw new Error('useTodo must be inside a TodoProvider');
  return ctx;
}