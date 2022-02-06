import React, { useState, useContext, createContext, useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

interface SignInData {
  email: string;
  password: string;
}

interface AuthContextData {
  user: UserData;
  loadingUser: boolean;
  singIn: (singInData: SignInData) => Promise<void>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

interface UserData {
  name: string;
  email: string;
  avatar: string;
  app_tenant: string;
}

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  const [user, setUser] = useState<UserData>({} as UserData);
  const [loadingUser, setLoadingUser] = useState(true);

  async function handleSingIn(data: SignInData) {
    const userData = {
      email: data.email,
      app_tenant: '2ca5d6dc-a2fe-11eb-bcbc-0242ac130002',
      avatar:
        'https://objetivopi.keepedu.com.br/aluno/uploads/objreplay/imagens/ac32c5d2d2bd0351d686db09a6450801.jpeg',
      name: 'Rennan Oliveira',
    };

    setUser(userData);
    await AsyncStorage.setItem('@keepedu:user', JSON.stringify(userData));
  }

  useEffect(() => {
    async function loadUser() {
      setLoadingUser(true);
      const loggedUser = await AsyncStorage.getItem('@keepedu:user');

      const parsedUser = loggedUser ? JSON.parse(loggedUser) : ({} as UserData);

      setUser(parsedUser);

      setLoadingUser(false);
    }

    loadUser();
  }, []);

  return (
    <AuthContext.Provider value={{ singIn: handleSingIn, user, loadingUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }

  return context;
}
