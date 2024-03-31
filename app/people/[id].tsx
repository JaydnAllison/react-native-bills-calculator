import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import styles from "../../src/styles";
import { faPercent } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { TPerson } from "../../src/constants";
import { PeopleActionType, usePeopleContext } from "../../src/global-state/People";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function PersonPage() {
    const {id} = useLocalSearchParams();

    const {people, dispatchPeople} = usePeopleContext();

    const person: TPerson | undefined = people.find((person: TPerson) => person.id === id);

    if (!person) {
        throw new Error('Person ID out of range');
    }

    const [name, setName] = useState<string>(person.name);
    const [percentage, setPercentage] = useState<string>(person.percentage.toString());

    const router = useRouter();

    function isConfirmButtonDisabled(): boolean {
        return name === person?.name && +percentage === person?.percentage;
    }

    function onSubmit(): void {
        if (+percentage !== person?.percentage) {
            dispatchPeople({type: PeopleActionType.ChangePersonPercentage, payload: {id: id as string, newPercentage: +percentage}});
        }
        if (name !== person?.name) {
            dispatchPeople({type: PeopleActionType.ChangePersonName, payload: {id: id as string, newName: name}});
        }
        router.back();
    }

    return (
        <View style={styles.addNewOptionContainer}>
            <View style={styles.addNewOptionInputsWrapper}>
                <View style={styles.addNewOptionInputsContainer}>
                    <TextInput style={styles.addNewOptionNameInput}  placeholder={person.name}  value={name} onChangeText={setName}></TextInput>

                    <TextInput style={styles.addNewPersonPercentageInput} placeholder={person.percentage.toString()} value={percentage} onChangeText={text => {
                        if (isNaN(+text) || +text > 100 || +text < 0) return;

                        setPercentage(text);
                    }} keyboardType="numeric"/>
                    <FontAwesomeIcon icon={faPercent} size={30} style={{
                        position: 'absolute',
                        left: '30%',
                        top: '72%'
                    }}/>
                </View>
            </View>

            {/* TODO: Create a remove button that brings up a popup asking if you are sure */}

            <TouchableOpacity disabled={isConfirmButtonDisabled()} 
                style={isConfirmButtonDisabled() ? {...styles.addNewOptionSubmitButton, ...styles.addNewOptionSubmitButtonDisabled} : styles.addNewOptionSubmitButton} 
                onPress={onSubmit}>
                <Text style={styles.addNewOptionSubmitButtonText}>Confirm Changes</Text>
            </TouchableOpacity>
        </View>
    )
}