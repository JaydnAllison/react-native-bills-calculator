import { Tabs } from "expo-router";
import { Colours } from "../../src/constants.ts";
import { faUsers, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import ChooseMonthButton from "../../src/components/Home/ChooseMonthButton.tsx";
import CurrentDateProvider from "../../src/global-state/CurrentDate..tsx";
import MonthPickerEnabledProvider from "../../src/global-state/MonthPickerEnabled.tsx";

export default function() {
    return (
        <CurrentDateProvider>
            <MonthPickerEnabledProvider>
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
                            headerRight: () => (
                                <ChooseMonthButton/>
                            ),
                            tabBarIcon: ({focused, size, color}) => <FontAwesomeIcon style={{
                                color
                            }} icon={faHouse}/>
                        }}/>

                    <Tabs.Screen name='ManagePeople' options={{
                        headerRight: () => (
                            <ChooseMonthButton/>
                        ),
                        tabBarIcon: ({focused, size, color}) => <FontAwesomeIcon style={{
                            color
                        }} icon={faUsers}/>
                    }}/>
                </Tabs>
            </MonthPickerEnabledProvider>
        </CurrentDateProvider>
    )
}