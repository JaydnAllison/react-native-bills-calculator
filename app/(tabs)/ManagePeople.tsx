import { View, FlatList, Text } from "react-native";
import { TPerson } from "../../src/constants";
import { usePeopleContext } from "../../src/global-state/People";

export default function ManagePeople() {
    const {people} = usePeopleContext();

    console.log(people);

    return (
        <View>
            <FlatList data={people} keyExtractor={item => item.id as string} renderItem={({item}) => (
                <Text>{item.name}</Text>
            )}/>
        </View>
    )
}