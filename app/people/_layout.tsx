import { Stack, useLocalSearchParams } from "expo-router";
import { usePeopleContext } from "../../src/global-state/People";
import { TPerson } from "../../src/constants";

export default function() {
    const {id} = useLocalSearchParams();

    const {people} = usePeopleContext();

    return (
        <Stack>
            <Stack.Screen name='[id]' options={{
                headerTitle: people.find((person: TPerson) => person.id === id)?.name
            }}/>
        </Stack>
    )
}