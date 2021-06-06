import React, { useEffect, useState } from 'react';

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
    ContainerAtividade,
    BotaoVoador
} from '../../components/styles';

import { Button, Skill } from '../../components/CommonButton'
import { ProgressBar, Colors } from 'react-native-paper'

function Disciplinas(navigation) {
    return (
        <>
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
                <Background source={require('../../assets/grafismos/grafismo_backgroud.png')}>
                    <Container>
                        <Texto>Disciplinas</Texto>
                        <ContainerGrupos>
                            <ContainerNome>
                                <View>
                                    <TextGrupos>Gestão do Design</TextGrupos>
                                    <Text style={styles.textoAV}>Professor(a): Marcelo Alvarenga</Text>
                                </View>
                            </ContainerNome>
                            <View style={{ width: '85%', justifyContent: 'flex-start', marginTop: 25 }}>
                                <Text style={styles.texto}>Skills</Text>
                            </View>

                            <ContainerSkills>
                                <Skill titulo='Liderança' bg='#4cb6e0' colorText='white' bold='bold' />
                                <Skill titulo='Empatia' bg='#4cb6e0' colorText='white' bold='bold' />
                                <Skill titulo='Gestão de Conflitos' bg='#4cb6e0' colorText='white' bold='bold' />
                                <Skill titulo='Comunicação' bg='#4cb6e0' colorText='white' bold='bold' />
                            </ContainerSkills>

                            <ContainerAtividade>
                                <View>
                                    <Text style={styles.textoAV}>Atividade ativa</Text>
                                </View>
                                <Button titulo='Acessar grupo' />
                            </ContainerAtividade>

                            <ContainerTextTarefas>
                                <Text style={styles.texto}>Tarefas concluídas</Text>
                            </ContainerTextTarefas>

                            <ContainerTarefas>
                                <ProgressBar progress={0.78} color={Colors.orange300} style={styles.bar} />
                                {/* <BarraProgresso/> */}
                                <Text style={styles.progresso}>78%</Text>
                            </ContainerTarefas>

                        </ContainerGrupos>

                        <ContainerGrupos>

                            <ContainerNome>
                                <View>
                                    <TextGrupos>Gestão do Design</TextGrupos>
                                    <Text style={styles.textoAV}>Professor(a): Marcelo Alvarenga</Text>
                                </View>
                            </ContainerNome>

                            <View style={{ width: '85%', justifyContent: 'flex-start', marginTop: 25 }}>
                                <Text style={styles.texto}>Skills</Text>
                            </View>

                            <ContainerSkills>
                                <Skill titulo='Liderança' bg='#4cb6e0' colorText='white' bold='bold' />
                                <Skill titulo='Empatia' bg='#4cb6e0' colorText='white' bold='bold' />
                                <Skill titulo='Gestão de Conflitos' bg='#4cb6e0' colorText='white' bold='bold' />
                                <Skill titulo='Comunicação' bg='#4cb6e0' colorText='white' bold='bold' />
                            </ContainerSkills>

                            <ContainerAtividade>
                                <View>
                                    <Text style={styles.textoAV}>Atividade ativa { }</Text>
                                </View>
                                <Button titulo='Acessar grupo' />
                            </ContainerAtividade>

                            <ContainerTextTarefas>
                                <Text style={styles.texto}>Tarefas concluídas</Text>
                            </ContainerTextTarefas>

                            <ContainerTarefas>
                                <ProgressBar progress={0.78} color={Colors.orange300} style={styles.bar} />
                                {/* <BarraProgresso/> */}
                                <Text style={styles.progresso}>78%</Text>
                            </ContainerTarefas>

                        </ContainerGrupos>

                        <ContainerGrupos>

                            <ContainerNome>
                                <View>
                                    <TextGrupos>Gestão do Design</TextGrupos>
                                    <Text style={styles.textoAV}>Professor(a): Marcelo Alvarenga</Text>
                                </View>
                            </ContainerNome>

                            <View style={{ width: '85%', justifyContent: 'flex-start', marginTop: 25 }}>
                                <Text style={styles.texto}>Skills</Text>
                            </View>

                            <ContainerSkills>
                                <Skill titulo='Liderança' bg='#4cb6e0' colorText='white' bold='bold' />
                                <Skill titulo='Empatia' bg='#4cb6e0' colorText='white' bold='bold' />
                                <Skill titulo='Gestão de Conflitos' bg='#4cb6e0' colorText='white' bold='bold' />
                                <Skill titulo='Comunicação' bg='#4cb6e0' colorText='white' bold='bold' />
                            </ContainerSkills>

                            <ContainerAtividade>
                                <View>
                                    <Text style={styles.textoAV}>Atividade ativa</Text>
                                </View>
                                <Button titulo='Acessar grupo' />
                            </ContainerAtividade>

                            <ContainerTextTarefas>
                                <Text style={styles.texto}>Tarefas concluídas</Text>
                            </ContainerTextTarefas>

                            <ContainerTarefas>
                                <ProgressBar progress={0.78} color={Colors.orange300} style={styles.bar} />
                                {/* <BarraProgresso/> */}
                                <Text style={styles.progresso}>78%</Text>
                            </ContainerTarefas>

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
            <BotaoVoador>
                <Image
                    source={require('../../assets/Plus.png')}
                    style={styles.floatingButtonStyle}
                />
            </BotaoVoador>
        </>
    );
};

export { Disciplinas }

const styles = StyleSheet.create({
    texto: {
        color: 'grey',
        fontSize: 17,
        marginTop: 10,

    },

    bar: {
        width: 220,
        height: 10,
        marginTop: 10,
        borderRadius: 50
    },

    progresso: {
        color: '#ed9e2f',
        fontSize: 17,
        paddingTop: 5,
        paddingLeft: 10,
    },

    textoAV: {
        color: 'grey',
        fontSize: 19,
        marginTop: 2
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