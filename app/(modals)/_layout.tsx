import { Stack } from "expo-router";

export default function() {
    <Stack>
        <Stack.Screen name='AddNewPopup' options={{
                    presentation: 'modal',
                }}/>
    </Stack>
}