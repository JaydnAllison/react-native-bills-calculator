import { Stack } from "expo-router";

export default function() {
    return (
        <Stack>
            <Stack.Screen name='AddNewPopup' options={{
                headerTitle: 'Add new',
                presentation: 'modal'
            }}/>
        </Stack>
    )
}