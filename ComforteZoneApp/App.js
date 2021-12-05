import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/auth/Login'
import Registration from './src/auth/Registration'
import Home from './src/Home'
import EntryTest from './src/auth/EntryTest';
import UserPage from './components/tasks/user';
import HomePage from './components/homepage/homepage';
import TaskList from './components/tasks/tasklist';
import Task from './components/tasks/viewtask';
import Congrats from './components/tasks/grats';
import MySettings from './pages/Settings';
import PersonalInfo from './pages/personal_iformation';
import MyPrivacy from './pages/privacy';
import MyRecords from './pages/records';
import Achievement from './src/Achievments';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="EntryTest" component={EntryTest} />
            <Stack.Screen name="Registration" component={Registration} />
            <Stack.Screen name="HomePage" component={HomePage} options={{ title: 'Welcome' }}/>
            <Stack.Screen name="UserPage" component={UserPage} />
            <Stack.Screen name="TaskList" component={TaskList} />
            <Stack.Screen name="Task" component={Task} />
            <Stack.Screen name="Congrats" component={Congrats} />
            <Stack.Screen name="MySettings" component={MySettings} />
            <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
            <Stack.Screen name="MyPrivacy" component={MyPrivacy} />
            <Stack.Screen name="MyRecords" component={MyRecords} />
            <Stack.Screen name="Achievement" component={Achievement} />
        </Stack.Navigator>
        </NavigationContainer>
    )
}
