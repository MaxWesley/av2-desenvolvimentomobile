import styled from 'styled-components/native';

export const Background = styled.ImageBackground`
    flex: 1;
    justify-content: center;
    background-color: #4cb6e0;
    padding-bottom: 60px;
`;

export const BackgroundLogin = styled.ImageBackground`
    flex: 1;
`

export const Container = styled.View`
    padding: 60px 16px;
    align-items: flex-start;
`;

export const FundoTela = styled.Image`
`;

export const ContainerGrupos = styled.View`
    width: 100%;
    background-color: #fcfdff;
    flex: 1;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    
`;

export const ContainerNome = styled.View`
    flex-direction: row;
    flex: 1;
    width: 85%;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ContainerAtividade = styled.View`
flex-direction: row;
flex: 1;
width: 85%;
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 40px; 
`;

export const TextGrupos = styled.Text`
    font-size: 25px;
    font-weight: bold;
`;

export const ContainerAvatar = styled.View`
    flex-direction: row;
    flex: 1;
    width: 85%;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
`;

export const ContainerSkills = styled.View`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 85%;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 20px;
`;

export const ContainerTarefas = styled.View`
    flex-direction: row;
    flex: 1;
    width: 85%;
    margin-bottom: 20px;
`;
export const BarraProgresso = styled.View`
    height: 10px;
    margin-top: 10px;
    width: 215px;
    border-radius: 25px;
    background-color: #a819a8;
    
`;

export const BarraProgressoHTML = styled.View`
    height: 10px;
    margin-top: 10px;
    width: 270px;
    border-radius: 25px;
    background-color: #a819a8;  
`;

export const ContainerTextTarefas = styled.View`
    display: flex;
    justify-content: flex-start;
    width: 85%;
    margin-top: 10px;
`;
export const Texto = styled.Text`
    color: #ffffff;

    font-weight: bold;
    font-size: 35px;
    
    padding-right: 50%;
`;

export const ContainerFooter = styled.View`
    flex: 1;
    background-color: #42094a;
    padding-top: 10px;
    width: 100%;
`;

export const TextoFooter = styled.Text`
    color: white;
    margin-top: 35px;
    margin-bottom: -30px;
    font-size: 20px;
    text-align: center;
`;

export const RedesLinks = styled.View`
    flex-direction: row;
    margin-top: 70px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const ContainerImagem = styled.View`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 30px;
`;

export const NavBarFooter = styled.View`
    background-color: #a819a8;
    
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    height: 65px;
    width: 100%;
`;

export const TextNavBarFooter = styled.Text`
    font-size: 13px;
    color: white;

    padding-top: 5px;
`;

export const FooterIcon = styled.Image`
    width: 30px;
    height: 30px;
`;

export const BotaoVoador = styled.TouchableOpacity`
    position: absolute;
    right: 30px;
    bottom: 30px;

    width: 50px;
    height: 50px;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
`;

export const LogoIMG = styled.Image`
    position: absolute;
    top: 32px;
    left: 0;

    transform: scale(0.9, 0.9);
`