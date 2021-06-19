import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #FFFFFF;
    width: 100%;
    min-height: 200px;

    border-radius: 12px;

    margin-top: 32px;

    padding: 16px;
`

export const Header = styled.View`
    flex-direction: row;

    justify-content: center;
`

export const Body = styled.View`
    padding-top: 32px;
`

export const TextHeader = styled.Text`
    font-size: 22px;

    color: ${props => props.enabled ? "#111111" : "#aaaaaa"};

    border-bottom-width: 2px;
    border-bottom-color: ${props => props.enabled ? "#94076a" : "transparent"};

    width: 40%;

    padding-bottom: 8px;

    text-align: center;
`

export const LabelInput = styled.Text`
    font-size: 16px;
    margin-bottom: 8px;
    color: #979797;
`

export const InputText = styled.TextInput`
    border: 1px solid #d2d2d2;

    border-radius: 4px;

    height: 50px;

    padding-left: 16px;
`

export const InputContainer = styled.View`
    padding: 0 16px 16px;
`

export const Footer = styled.View`
    padding: 0 16px;
    flex-direction: row;
`
export const ButtonLogin = styled.TouchableOpacity`
    height: 60px;
    background-color: #94076a;
    
    border-radius: 4px;
    justify-content: center;
    flex: 1;

    margin-right: ${props => props.marginRight || "0px"};
`

export const ButtonCadastro = styled.TouchableOpacity`
    height: 60px;
    border: 2px solid #94076a;
    background-color: #FFF;
    
    border-radius: 4px;
    justify-content: center;
    flex: 1;
`

export const TextButtonLogin = styled.Text`
    font-weight: bold;

    font-size: 18px;

    color: ${props => props.color || "#FFFFFF"};
    text-align: center;
`