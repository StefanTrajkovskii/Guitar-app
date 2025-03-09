import React, { createContext, useContext } from 'react';

interface ThemeColors {
  primary: string;
  secondary: string;
  gradient: {
    from: string;
    to: string;
  };
  text: {
    primary: string;
    secondary: string;
  };
}

interface UserContextType {
  name: string;
  colors: ThemeColors;
}

const UserContext = createContext<UserContextType | null>(null);

const getThemeColors = (name: string): ThemeColors => {
  const lowerName = name.toLowerCase();
  
  // Default purple theme for Rojina and variations
  if (['rojina', 'malecka', 'roji', 'rojina tamang'].includes(lowerName)) {
    return {
      primary: 'purple',
      secondary: 'pink',
      gradient: {
        from: 'from-purple-100',
        to: 'to-pink-100'
      },
      text: {
        primary: 'text-purple-800',
        secondary: 'text-purple-600'
      }
    };
  }

  // Indigo theme for everyone else (replacing orange theme)
  return {
    primary: 'indigo',
    secondary: 'blue',
    gradient: {
      from: 'from-indigo-100',
      to: 'to-blue-100'
    },
    text: {
      primary: 'text-indigo-800',
      secondary: 'text-indigo-600'
    }
  };
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const name = localStorage.getItem('userName') || 'Guitarist';
  const colors = getThemeColors(name);

  return (
    <UserContext.Provider value={{ name, colors }}>
      {children}
    </UserContext.Provider>
  );
}; 