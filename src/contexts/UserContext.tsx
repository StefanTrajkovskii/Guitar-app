import React, { createContext, useContext } from 'react';

interface UserContextType {
  name: string;
}

const UserContext = createContext<UserContextType | null>(null);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const name = localStorage.getItem('userName') || 'Guitarist';

  return (
    <UserContext.Provider value={{ name }}>
      {children}
    </UserContext.Provider>
  );
}; 