import { useCurrentDateContext } from "../../global-state/CurrentDate.";
import { Pressable, View, Text } from "react-native";
import styles from "../../styles";
import { useMonthPickerEnabledContext } from "../../global-state/MonthPickerEnabled.tsx";

export default function ChooseMonthButton() {
    const {currentDate} = useCurrentDateContext();
    const {setMonthPickerEnabled} = useMonthPickerEnabledContext();

    function getReadableDate(): string {
        const splitDate = currentDate.toDateString().split(' ');
        const [year, month] = [splitDate[3], splitDate[1]];

        return `${month} ${year}`;
    }

    return (
        <>
        <View>
            <Pressable style={styles.monthPickerButton} onPress={() => setMonthPickerEnabled(true)}>
                <Text style={styles.monthPickerButtonText}>{getReadableDate()}</Text>
            </Pressable>
        </View>
        </>
    )
}