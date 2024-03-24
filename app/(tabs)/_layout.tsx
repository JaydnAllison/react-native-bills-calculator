import { Stack } from "expo-router";

export default function() {
    return (
        <Stack>
            <Stack.Screen name='(Home)/Home'/>
            <Stack.Screen name='(ManagePeople)/ManagePeople'/>
        </Stack>
    )
}