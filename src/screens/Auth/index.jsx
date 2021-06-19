import React from 'react';
import { BackgroundLogin, LogoIMG, Texto } from '../../components/styles';
import { InitialText } from './styles';
import { Text, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { TabLogin } from '../../components/TabLogin';

function Login() {

    return (
        <BackgroundLogin
            resizeMethod="resize"
            source={require('../../assets/background.png')}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
                <ScrollView
                    style={{
                        flex: 1,
                        width: "100%",
                        paddingHorizontal: 16,
                        paddingTop: 32,
                    }}>
                    <LogoIMG
                        source={require('../../assets/logo.png')}
                    />
                    <InitialText>
                        {`Problemas para formar um grupo de trabalho? \n`}
                        O <Text style={{ fontWeight: 'bold' }}>Grupou!</Text> resolve!
                    </InitialText>
                    <TabLogin />
                </ScrollView>
            </KeyboardAvoidingView>
        </BackgroundLogin>
    )
}

export { Login }