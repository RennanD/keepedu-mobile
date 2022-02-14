import React, { useState, useContext, createContext, useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../services/api';

interface SignInData {
  email: string;
  password: string;
}

interface AuthContextData {
  user: UserData;
  loadingUser: boolean;
  singIn: (singInData: SignInData) => Promise<void>;
  singOut: () => Promise<void>;
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
    const { email } = data;

    const app_tenant = '2ca5d6dc-a2fe-11eb-bcbc-0242ac130002';

    const userData = {
      email,
      app_tenant,
      avatar:
        'https://objetivopi.keepedu.com.br/aluno/uploads/objreplay/imagens/ac32c5d2d2bd0351d686db09a6450801.jpeg',
      name: 'Rennan Oliveira',
    };

    api.defaults.headers.common.api_key =
      'cmVubmFuLnRlc3RlQGVtYWlsLmNvbTtzdHVkZW50OzJjYTVkNmRjLWEyZmUtMTFlYi1iY2JjLTAyNDJhYzEzMDAwMg==';

    setUser(userData);
    await AsyncStorage.setItem('@keepedu:user', JSON.stringify(userData));
  }

  async function handleSignOut() {
    setUser({} as UserData);
    await AsyncStorage.removeItem('@keepedu:user');
  }

  useEffect(() => {
    async function loadUser() {
      setLoadingUser(true);
      const loggedUser = await AsyncStorage.getItem('@keepedu:user');

      const parsedUser = loggedUser ? JSON.parse(loggedUser) : ({} as UserData);

      if (parsedUser.email) {
        api.defaults.headers.common.api_key =
          'cmVubmFuLnRlc3RlQGVtYWlsLmNvbTtzdHVkZW50OzJjYTVkNmRjLWEyZmUtMTFlYi1iY2JjLTAyNDJhYzEzMDAwMg==';
      }

      setUser(parsedUser);

      setLoadingUser(false);
    }

    loadUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loadingUser,
        singIn: handleSingIn,
        singOut: handleSignOut,
      }}
    >
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
