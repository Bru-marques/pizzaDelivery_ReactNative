import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import {
  Container,
  Content,
  Title,
  Brand,
  ForgotPasswordButton,
  ForgotPasswordLabel,
} from "./styles";
import brandingImg from "@assets/brand.png";
import { Input } from "@components/input";
import { Button } from "@components/button";

export function SignIn() {
  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <Content>
          <Brand source={brandingImg} />

          <Title>Login</Title>

          <Input
            placeholder="E-mail"
            type="secondary"
            autoCorrect={false}
            autoCapitalize="none"
          />
          <Input placeholder="Password" type="secondary" secureTextEntry />

          <ForgotPasswordButton>
            <ForgotPasswordLabel>Forgot password</ForgotPasswordLabel>
          </ForgotPasswordButton>
          <Button title="Login" />
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
}
