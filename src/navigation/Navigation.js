import React from "react";
import {Text, View, Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Dogs from '../screens/Dogs';
import Cats from '../screens/Cats';

const Tab = createBottomTabNavigator();

const Navigation = () => {
    return(
        <Tab.Navigator screenOptions={{
            tabBarStyle: {
                backgroundColor: '#000'
            },
            tabBarActiveTintColor: '#9F9F9F',
            tabBarInactiveTintColor: '#4a4e69'
        }}>
            <Tab.Screen name="dogs" component={Dogs} 
                options={{
                    title:'Dogs',
                    headerStyle: {
                        backgroundColor: '#0B2545'
                    },
                    headerTintColor: '#fff',
                    tabBarIcon: ({focused}) => (
                        <View>
                            <Image source={require('../icons/Dog.png')} resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#9F9F9F' : '#4a4e69'
                                }}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen name="cats" component={Cats} 
                options={{
                    title:'Cats',
                    headerStyle: {
                        backgroundColor: '#774E24'
                    },
                    headerTintColor: '#fff',
                    tabBarIcon: ({focused}) => (
                        <View>
                            <Image source={require('../icons/Cat.png')} resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#9F9F9F' : '#4a4e69'
                                }}
                            />
                        </View>
                    )
                }} 
            />
        </Tab.Navigator>
    );
}

export default Navigation;
