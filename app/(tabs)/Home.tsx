import { View } from "react-native";
import styles from "../../src/styles.ts";
import AddButton from "../../src/components/Home/AddButton.tsx";
import { useMonthPickerEnabledContext } from "../../src/global-state/MonthPickerEnabled.tsx";
import MonthPicker from "../../src/components/Home/MonthPicker.tsx";

export default function Home() {
    const {monthPickerEnabled} = useMonthPickerEnabledContext();

    return (
        <View style={styles.homeContainer}>
            <AddButton/>

            {monthPickerEnabled ? (
                <MonthPicker/>
            ) : ''}
        </View>
    )
}