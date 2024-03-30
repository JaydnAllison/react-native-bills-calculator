import { View, Text, TextInput, TouchableOpacity, } from "react-native";
import { useState } from "react";
import styles from "../styles";
import { faPercent } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { TPerson } from "../constants";
import uuid from 'react-native-uuid';

export default function AddNewPerson() {
    const [name, setName] = useState('');
    const [percentage, setPercentage] = useState('');

    function createPerson(): TPerson {
        return {name, percentage: isNaN(+percentage) ? 0 : +percentage, id: uuid.v4()};
    }

    function onSubmit(): void {
        const person = createPerson();
    }

    return (
        <View style={styles.addNewPersonContainer}>
            <View style={styles.addNewPersonInputsWrapper}>
                <View style={styles.addNewPersonInputsContainer}>
                    <TextInput style={styles.addNewPersonNameInput}  placeholder="Name"  value={name} onChangeText={setName}></TextInput>

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