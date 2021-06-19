import React, { useContext } from 'react'

import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import { Grupos } from './src/screens/Grupos'
import { Disciplinas } from './src/screens/Disciplinas'
import { Skills } from './src/screens/Skills'
import { Perfil } from './src/screens/Perfil'
import { Login } from './src/screens/Auth'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

import { Context } from './src/contexts/users'

function Routes() {
    const tabBarOptionsStyles = {
        borderColor: "transparent",
        backgroundColor: "#a819a8",
        height: 70,
        paddingBottom: 8,
        paddingTop: 8
    }

    function HandleIcons(route) {
        let icon = ''

        switch (route.name) {
            case 'Dashboard':
                icon = 'view-dashboard-outline'
                break;
            case 'Grupos':
                icon = 'account-group-outline'
                break;
            case 'Disciplinas':
                icon = 'book-open-variant'
                break;
            case 'Skills':
                icon = 'puzzle-outline'
                break;
            case 'Perfil':
                icon = 'account-outline'
                break;
        }

        return icon
    }

    const { user } = useContext(Context);

    if (!user) {
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen
                        name="Login"
                        component={Login}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Dashboard"
                tabBarOptions={{
                    activeTintColor: "#FFF",
                    inactiveTintColor: "#d870d8aa",
                    style: { ...tabBarOptionsStyles }
                }}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => {

                        return <MaterialCommunityIcon
                            name={HandleIcons(route)}
                            size={30}
                            color={color}
                        />
                    }
                })}
            >
                <Tab.Screen
                    name="Grupos"
                    component={Grupos}
                />
                <Tab.Screen
                    name="Disciplinas"
                    component={Disciplinas}
                />
                <Tab.Screen
                    name="Skills"
                    component={Skills}
                />
                <Tab.Screen
                    name="Perfil"
                    component={Perfil}
                />

            </Tab.Navigator>
        </NavigationContainer>
    )
}

export { Routes }