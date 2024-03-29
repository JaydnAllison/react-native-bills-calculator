import { Tabs } from "expo-router";
import { Colours } from "../constants";
import { faUsers, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default function() {
    return (
        <Tabs screenOptions={{
            headerStyle: {
                backgroundColor: Colours.primaryColour,
            },
            headerTitleStyle: { 
                color: 'white'
            },

            tabBarStyle: {
                backgroundColor: Colours.primaryColour,
            },
            tabBarActiveTintColor: 'white'
        }}>
            <Tabs.Screen name='Home' options={{
                tabBarIcon: ({focused, size, color}) => <FontAwesomeIcon style={{
                    color
                }} icon={faHouse}/>
            }}/>

            <Tabs.Screen name='ManagePeople' options={{
                tabBarIcon: ({focused, size, color}) => <FontAwesomeIcon style={{
                    color
                }} icon={faUsers}/>
            }}/>
        </Tabs>
    )
}