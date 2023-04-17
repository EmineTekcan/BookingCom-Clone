import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import BookingsScreen from '../screens/BookingsScreen'
import ProfileScreen from '../screens/ProfileScreen'
import SavedScreen from '../screens/SavedScreen'
import { NavigationContainer } from '@react-navigation/native';
import SearchScreen from '../screens/SearchScreen'

import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const StackNavigation = () => {

    const Stack = createNativeStackNavigator()
    const Tab = createBottomTabNavigator()

    const Tabs = () => {
        return (
            <Tab.Navigator>
                <Tab.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{
                        tabBarLabel: "Home",
                        headerShown: false,
                        tabBarIcon: ({ focused }) => focused ? (
                            <Entypo name="home" size={24} color="black" />
                        ) : (
                            <AntDesign name="home" size={24} color="black" />
                        )
                    }}
                />
                <Tab.Screen
                    name='Saved'
                    component={SavedScreen}
                    options={{
                        tabBarLabel: "Saved",
                        headerShown: false,
                        tabBarIcon: ({ focused }) => focused ? (
                            <AntDesign name="heart" size={24} color="black" />
                        ) : (
                            <AntDesign name="hearto" size={24} color="black" />
                        )
                    }}
                />
                <Tab.Screen
                    name='Bookings'
                    component={BookingsScreen}
                    options={{
                        tabBarLabel: "Bookings",
                        headerShown: false,
                        tabBarIcon: ({ focused }) => focused ? (
                            <Ionicons name="notifications" size={24} color="black" />
                        ) : (
                            <Ionicons name="notifications-outline" size={24} color="black" />
                        )
                    }}
                />
                <Tab.Screen
                    name='Profile'
                    component={ProfileScreen}
                    options={{
                        tabBarLabel: "Profile",
                        headerShown: false,
                        tabBarIcon: ({ focused }) => focused ? (
                            <Ionicons name="person" size={24} color="black" />
                        ) : (
                            <Ionicons name="person-outline" size={24} color="black" />
                        )
                    }}
                />
            </Tab.Navigator>
        )
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Main' component={Tabs} options={{ headerShown: false }} />
                <Stack.Screen name='Search' component={SearchScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation
