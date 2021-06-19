import React, { useEffect, useState, useContext } from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native'
import { Avatar } from 'react-native-elements'

import {
    Container,
    Texto,
    ContainerGrupos,
    ContainerNome,
    ContainerAvatar,
    ContainerTarefas,
    ContainerSkills,
    TextGrupos,
    ContainerTextTarefas,
    ContainerFooter,
    TextoFooter,
    RedesLinks,
    ContainerImagem,
    Background
} from '../../components/styles'

import { Button, Skill } from '../../components/CommonButton'
import { ProgressBar, Colors } from 'react-native-paper';

import users from '../../services/db.json'

import { Context } from '../../contexts/users'

function Perfil(navigation) {
    const [data, setData]  = useState()

    const { signOut } = useContext(Context);

    function handlerSignOut() {
        signOut();
        console.warn('teste');
    }

    useEffect(() => {
        let user = users.users.find(user => user.id === 1)

        setData(user)
    }, [])

    return (
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
            <Background source={require('../../assets/grafismos/grafismo_backgroud.png')}>
                <Container>
                    <Texto>Meu perfil</Texto>
                    <ContainerGrupos>
                        <ContainerNome>
                            <View>
                                <TextGrupos>Dados pessoais</TextGrupos>
                            </View>
                            <Button titulo='Editar' corTexto='#c427cc' borderColor='#c427cc' />
                        </ContainerNome>
                        <ContainerAvatar style={{ marginTop: 20 }}>
                            <View />
                            <Avatar rounded source={require("../../assets/profile.png")} size={100} />
                            <View />
                        </ContainerAvatar>
                        <ContainerTextTarefas style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ ...styles.texto, fontSize: 23, fontWeight: 'bold' }}>{data?.profile?.name}</Text>
                            <Text style={styles.texto}>{data?.profile?.email}</Text>
                        </ContainerTextTarefas>
                        <ContainerTarefas
                            style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Skill
                                onPress={() => signOut()}
                                titulo={'Sair'}
                                colorText={'#c427cc'}
                                bold={'bold'}
                                fsize={20}
                            />
                        </ContainerTarefas>
                    </ContainerGrupos>

                    <ContainerGrupos>

                        <ContainerNome>
                            <View>
                                <TextGrupos>Minhas soft </TextGrupos>

                            </View>
                        </ContainerNome>

                        <ContainerSkills>
                            {
                                data?.skills?.softskills.map((soft, key) => {
                                    return <Skill key={key} titulo={soft} bg='#4cb6e0' colorText='white' bold='bold' />
                                })
                            }
                        </ContainerSkills>
                    </ContainerGrupos>

                    <ContainerGrupos>
                        <ContainerNome>
                            <View>
                                <TextGrupos>Minhas hard skills</TextGrupos>
                            </View>
                            <Button titulo='Editar' />
                        </ContainerNome>
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
                                <TextGrupos>Avaliações recebidas</TextGrupos>
                            </View>
                        </ContainerNome>

                        <ContainerAvatar style={{ marginTop: 20 }}>
                            <Avatar rounded source={require("../../assets/happy.png")} size={100} />
                            <View style={{ flex: 1, marginLeft: 15 }}>
                                <Text style={{ fontSize: 20, color: 'grey', fontWeight: 'bold' }}>Sua média</Text>
                                <Text style={styles.avaliacao}>{data?.public_datails?.rating}</Text>
                            </View>
                        </ContainerAvatar>

                        <View style={{ width: '85%', justifyContent: 'flex-start', marginTop: 25 }}>
                            <Text style={styles.texto}>Seus colegas te avaliaram com as seguintes soft skills</Text>
                        </View>

                        <ContainerSkills>
                            {
                                data?.skills?.softskills.map((soft, key) => {
                                    return <Skill key={key} titulo={soft} bg='#4cb6e0' colorText='white' bold='bold' />
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
    );
};

export { Perfil }

const styles = StyleSheet.create({
    texto: {
        color: 'grey',
        fontSize: 17,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    avaliacao: {
        color: '#2ac953',
        fontWeight: 'bold',
        fontSize: 50,
    },

    textoAV: {
        color: 'grey',
        fontSize: 20,
        marginTop: 2
    },

    bar: {
        width: 220,
        height: 10,
        marginTop: 10,
        borderRadius: 50
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

});