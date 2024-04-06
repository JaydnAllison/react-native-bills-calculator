import { Pressable, ScrollView, View } from "react-native";
import styles from "../../styles";
import { useMonthPickerEnabledContext } from "../../global-state/MonthPickerEnabled";

export default function MonthPicker() {
    const {setMonthPickerEnabled} = useMonthPickerEnabledContext();

    return (
        <View style={styles.monthPickerContainer}>
            <Pressable style={{width: '100%', height: '100%', position: 'absolute'}} onPress={() => setMonthPickerEnabled(false)}/>

            <View style={styles.monthPickerWrapper}>

            </View>
        </View>
    )
}