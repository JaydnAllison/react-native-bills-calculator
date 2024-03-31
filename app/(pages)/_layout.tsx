import { Stack } from "expo-router";

export default function() {
    return (
        <Stack>
            <Stack.Screen name='AddNewBill'/> 

            <Stack.Screen name='AddNewPerson'/>
        </Stack>
    )
}