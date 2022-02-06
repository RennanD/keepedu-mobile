import React, { useState } from 'react';

import { logoImage } from '../../assets';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  Logo,
  FormContainer,
  ButtonContainer,
  SingInInfo,
  Terms,
} from './styles';

export function SignIn(): JSX.Element {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const { singIn } = useAuth();

  async function handleSignIn() {
    setEmailError('');
    setPasswordError('');

    if (!email) {
      setEmailError('O e-mail é obrigatório');
      return;
    }

    if (!password) {
      setPasswordError('A senha é obrigatória');

      return;
    }

    await singIn({ email, password });
  }

  return (
    <Container>
      <Logo source={logoImage} />
      <FormContainer>
        <TextInput
          placeholder="Digite seu e-mail"
          icon="mail"
          label="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
          error={emailError}
        />
        <TextInput
          placeholder="Digite sua senha"
          icon="lock"
          label="Senha"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          error={passwordError}
        />

        <ButtonContainer>
          <Button onPress={handleSignIn} icon="log-in">
            Entrar
          </Button>
        </ButtonContainer>

        <SingInInfo>
          Ao fazer login você declara que está {'\n'} ciente e concorda com os{' '}
          <Terms>termos de uso</Terms>
        </SingInInfo>
      </FormContainer>
    </Container>
  );
}
