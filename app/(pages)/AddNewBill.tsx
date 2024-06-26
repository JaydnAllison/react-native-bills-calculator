import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import styles from "../../src/styles";
import { TBill } from "../../src/constants";
import { useRouter } from "expo-router"; 

export default function AddNewBill() {
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const router = useRouter();

    function onSubmit(): void {
        router.back();
    }

    return (
        <View style={styles.addNewOptionContainer}>
            <View style={styles.addNewOptionInputsWrapper}>
                <View style={styles.addNewOptionInputsContainer}>
                    <TextInput style={styles.addNewOptionNameInput}  placeholder="Name"  value={name} onChangeText={setName}></TextInput>

                    <TextInput style={styles.addNewBillCostInput} placeholder="0.00" value={cost} onChangeText={text => {
                            if (isNaN(+text)) return;

                            setCost(Number(text).toFixed(2));
                        }} keyboardType="numeric"/>
                </View>
            </View>

            <TouchableOpacity disabled={!name.length} 
                style={!name.length ? {...styles.addNewOptionSubmitButton, ...styles.addNewOptionSubmitButtonDisabled} : styles.addNewOptionSubmitButton} 
                onPress={onSubmit}>
                <Text style={styles.addNewOptionSubmitButtonText}>Create Bill</Text>
            </TouchableOpacity>
        </View>
    )
}