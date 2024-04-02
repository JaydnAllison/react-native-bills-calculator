import { KeyboardAvoidingView, Text, TouchableOpacity } from "react-native";
import styles from "../styles.ts";
import { TJSXProps } from "../constants.ts";

type TDynamicConfirmButtonProps = {
    disabled: boolean,
    onPress: () => any,
    text?: string,
    offset?: number
} & TJSXProps;

export default function DynamicConfirmButton({disabled, onPress, text, offset}: TDynamicConfirmButtonProps) {
    return (
        <KeyboardAvoidingView style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'flex-end',
        }} keyboardVerticalOffset={300 - ((offset ?? 0) / 2)} behavior="padding">
            <TouchableOpacity disabled={disabled} 
                style={{...(disabled ? {...styles.addNewOptionSubmitButton, ...styles.addNewOptionSubmitButtonDisabled} : styles.addNewOptionSubmitButton),
                    bottom: 40 + (offset ?? 0)
                }} 
                onPress={onPress}>
                <Text style={styles.addNewOptionSubmitButtonText}>{text}</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}