import { Stack } from "expo-router";
import PeopleProvider from "../global-state/People";

export default function () {
    return (
        <PeopleProvider>
            <Stack screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name='index'/>
                <Stack.Screen name='(tabs)'/>
                <Stack.Screen name='(modals)'/>
            </Stack>
        </PeopleProvider>
    )
}