import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import styles from "../../src/styles";
import { faPercent } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { TPerson } from "../../src/constants";
import uuid from 'react-native-uuid';
import { PeopleActionType, usePeopleContext } from "../../src/global-state/People";

export default function AddNewPerson() {
    const [name, setName] = useState('');
    const [percentage, setPercentage] = useState('');

    const {dispatchPeople} = usePeopleContext();

    function createPerson(): TPerson {
        return {name, percentage: isNaN(+percentage) ? 0 : +percentage, id: uuid.v4()};
    }

    function onSubmit(): void {
        const person = createPerson();
        dispatchPeople({type: PeopleActionType.AddPerson, payload: {person}});
    }

    return (
        <View style={styles.addNewOptionContainer}>
            <View style={styles.addNewOptionInputsWrapper}>
                <View style={styles.addNewOptionInputsContainer}>
                    <TextInput style={styles.addNewOptionNameInput}  placeholder="Name"  value={name} onChangeText={setName}></TextInput>

                    <TextInput style={styles.addNewPersonPercentageInput} placeholder="0" value={percentage} onChangeText={text => {
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

            <TouchableOpacity disabled={!name.length} 
                style={!name.length ? {...styles.addNewOptionSubmitButton, ...styles.addNewOptionSubmitButtonDisabled} : styles.addNewOptionSubmitButton} 
                onPress={onSubmit}>
                <Text style={styles.addNewOptionSubmitButtonText}>Create Person</Text>
            </TouchableOpacity>
        </View>
    )
}