import { Stack } from "expo-router";

export default function() {
    return (
        <Stack>
            <Stack.Screen name='AddNewPopup' options={{
                headerTitle: 'Add new',
                presentation: 'modal'
            }}/>

            <Stack.Screen name='AddNewBill' options={{
                presentation: 'modal'
            }}/> 

            <Stack.Screen name='AddNewPerson' options={{
                presentation: 'modal'
            }}/>
        </Stack>
    )
}