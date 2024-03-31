import { Stack } from "expo-router";
import PeopleProvider from "../src/global-state/People";

export default function () {
    return (
        <PeopleProvider>
            <Stack screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name='index'/>

                <Stack.Screen name='(tabs)'/>

                <Stack.Screen name='(pages)'/>

                <Stack.Screen name='AddNewPopup' options={{
                    presentation: 'modal',
                    headerTitle: 'Add new',
                    headerShown: true
                }}/>
            </Stack>
        </PeopleProvider>
    )
}