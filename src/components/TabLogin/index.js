import React, { useEffect, useState, useContext } from 'react';

import {
    Container, TextHeader, Header, Body,
    InputText, InputContainer, LabelInput,
    ButtonLogin, Footer, TextButtonLogin,
    ButtonCadastro
} from './styles';

import { Context} from '../../contexts/users'

function TabLogin() {    
    const [active, setActive] = useState('login');

    function handleActivePress(button) {
        setActive(button)
    }

    return (
        <Container>
            <Header>
                <TextHeader
                    enabled={active === 'login'}
                    onPress={() => handleActivePress('login')}
                >Aluno</TextHeader>
                <TextHeader
                    enabled={active === 'cadastro'}
                    onPress={() => handleActivePress('cadastro')}
                >Professor</TextHeader>
            </Header>
            <Form />
        </Container>
    )
}

const Form = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { signIn, signUp } = useContext(Context);

    function handleSignIn() {
        try {
            signIn(email, password);
        } catch(err) {
            console.warn(err);
        }
    }

    function handleSignUp() {
        try {
            signUp(email, password);
        } catch(err) {
            console.warn(err);
        } 
    }

    return (
        <>
            <Body>
                <InputContainer>
                    <LabelInput>E-mail:</LabelInput>
                    <InputText
                        onChangeText={(email) => setEmail(email)}
                        placeholder="Seu e-mail"
                    />
                </InputContainer>
                <InputContainer>
                    <LabelInput>Senha:</LabelInput>
                    <InputText
                        onChangeText={(password) => setPassword(password)}
                        placeholder="Sua senha"
                        secureTextEntry={true}
                    />
                </InputContainer>
            </Body>
            <Footer>
                <ButtonLogin onPress={() => handleSignIn()} marginRight="16px">
                    <TextButtonLogin>Entrar</TextButtonLogin>
                </ButtonLogin>
                <ButtonCadastro onPress={() => handleSignUp()}>
                    <TextButtonLogin color="#94076a">Cadastrar</TextButtonLogin>
                </ButtonCadastro>
            </Footer>
        </>
    )
}

export { TabLogin }