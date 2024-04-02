import { View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, SafeAreaView } from "react-native";
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

    function onRemovePressed(): void {
        Alert.alert(`Are you sure you want to remove ${person?.name}`, '', [
            {
                text: 'cancel',
                style: 'cancel',
            },

            {
                text: 'confirm',
                style: 'default',
                onPress: removePerson
            }
        ]);
    }

    function removePerson(): void {
        router.back(); //Must be called before the re render to avoid error 
        dispatchPeople({type: PeopleActionType.RemovePerson, payload: {id: id as string}});
    }

    return (
        <SafeAreaView style={styles.addNewOptionContainer}>
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
                <KeyboardAvoidingView style={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    alignItems: 'flex-end'
                }} keyboardVerticalOffset={280} behavior="padding">
                    <TouchableOpacity disabled={isConfirmButtonDisabled()} 
                        style={{...isConfirmButtonDisabled() ? {...styles.addNewOptionSubmitButton, ...styles.addNewOptionSubmitButtonDisabled} : styles.addNewOptionSubmitButton, 
                            bottom: 100,
                        }} 
                        onPress={onSubmit}>
                        <Text style={styles.addNewOptionSubmitButtonText}>Confirm Changes</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>

            

            <TouchableOpacity 
                style={styles.removePersonButton} 
                onPress={onRemovePressed}>
                <Text style={styles.addNewOptionSubmitButtonText}>Remove Person</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}