import { View, FlatList, Text } from "react-native";
import { usePeopleContext } from "../../src/global-state/People";
import styles from "../../src/styles";
import AddNewOption from "../../src/components/AddNewOption";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function ManagePeople() {
    const {people} = usePeopleContext();

    return (
        <View style={styles.managePeopleContainer}>
            <FlatList data={people} keyExtractor={item => item.id as string} renderItem={({item}) => (
                <AddNewOption icon={faUser} route={`../people/${item.id}`}>{item.name}</AddNewOption>
            )}/>
        </View>
    )
}