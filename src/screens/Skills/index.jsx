import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native'
import { Avatar } from 'react-native-elements'
import {
    Container,
    Texto,
    ContainerGrupos,
    ContainerNome,
    ContainerSkills,
    ContainerTarefas,
    TextGrupos,
    ContainerTextTarefas,
    ContainerFooter,
    TextoFooter,
    RedesLinks,
    ContainerImagem,
    Background,
    BotaoVoador
} from '../../components/styles';

import { Button, Skill } from '../../components/CommonButton'
import { ProgressBar, Colors } from 'react-native-paper'

import users from '../../services/db.json'

function Skills(navigation) {
    const [data, setData] = useState()

    useEffect(() => {
        let user = users.users.find(user => user.id === 1)

        setData(user)
    }, [])

    return (
        <>
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
                <Background source={require('../../assets/grafismos/grafismo_backgroud.png')}>
                    <Container>
                        <Texto>Skills</Texto>
                        <ContainerGrupos>
                            {
                                data?.skills?.hardskills.map((hard, key) => {
                                    return (
                                        <>
                                            <ContainerTextTarefas key={key}>
                                                <Text style={styles.texto}>{hard.skill_name}</Text>
                                            </ContainerTextTarefas>
                                            <ContainerTarefas>
                                                <ProgressBar progress={Number(hard.nivel) / 10} color={Colors.purple500} style={styles.bar} />
                                                <Text style={styles.progresso}>{hard.nivel}</Text>
                                            </ContainerTarefas>
                                        </>
                                    )
                                })
                            }
                        </ContainerGrupos>

                        <ContainerGrupos>
                            <ContainerNome>
                                <View>
                                    <TextGrupos>Minhas soft skills</TextGrupos>
                                </View>
                                <Button titulo='Editar' />
                            </ContainerNome>

                            <ContainerSkills>
                                <Skill titulo='Liderança' bg='#4cb6e0' colorText='white' bold='bold' />
                                <Skill titulo='Empatia' bg='#4cb6e0' colorText='white' bold='bold' />
                                <Skill titulo='Gestão de Conflitos' bg='#4cb6e0' colorText='white' bold='bold' />
                                <Skill titulo='Comunicação' bg='#4cb6e0' colorText='white' bold='bold' />
                                <Skill titulo='Liderança' bg='#4cb6e0' colorText='white' bold='bold' />
                                <Skill titulo='Empatia' bg='#4cb6e0' colorText='white' bold='bold' />
                            </ContainerSkills>
                        </ContainerGrupos>

                        <ContainerGrupos>
                            <ContainerNome>
                                <View>
                                    <TextGrupos>Minhas hard skills</TextGrupos>
                                    <TextGrupos>de interesse</TextGrupos>
                                </View>
                                <Button titulo='Editar' />
                            </ContainerNome>

                            <ContainerSkills>
                                {
                                    data?.skills?.hardskills.map((hard, key) => {
                                        return <Skill key={key} titulo={hard.skill_name} bg='#4cb6e0' colorText='white' bold='bold' />
                                    })
                                }
                            </ContainerSkills>
                        </ContainerGrupos>

                    </Container>
                </Background>
                <ContainerFooter>
                    <TextoFooter>Contato</TextoFooter>
                    <TextoFooter>grupou_contato@gmail.com</TextoFooter>
                    <RedesLinks>
                        <Avatar rounded source={require("../../assets/icones/logo_linkedin.png")} size={50}></Avatar>
                        <Avatar rounded source={require("../../assets/icones/logo_instagram.png")} size={50}></Avatar>
                        <Avatar rounded source={require("../../assets/icones/logo_facebook.png")} size={50}></Avatar>
                    </RedesLinks>
                    <ContainerImagem>
                        <Image source={require('../../assets/grupou_bw.jpg')} />
                    </ContainerImagem>
                </ContainerFooter>
            </ScrollView>
            <BotaoVoador><Image source={require('../../assets/Plus.png')} style={styles.floatingButtonStyle} /></BotaoVoador>
        </>
    );
};


const styles = StyleSheet.create({
    texto: {
        color: 'grey',
        fontSize: 17,
    },

    bar: {
        width: 270,
        height: 10,
        marginTop: 10,
        borderRadius: 50
    },

    textoAV: {
        color: 'grey',
        fontSize: 19,
        marginTop: 2
    },

    progresso: {
        color: '#a819a8',
        fontSize: 17,
        paddingTop: 4,
        paddingLeft: 10,
    },

    navbarfooter: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    floatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        //backgroundColor:'black'
    },
});


export { Skills }