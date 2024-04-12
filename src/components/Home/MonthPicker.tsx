import { FlatList, Pressable, View, Text, TouchableHighlight, GestureResponderEvent } from "react-native";
import styles from "../../styles";
import { useMonthPickerEnabledContext } from "../../global-state/MonthPickerEnabled";
import { Colours } from "../../constants";
import { useCurrentDateContext } from "../../global-state/CurrentDate.";
import { useState } from "react";

const enum ItemType {
    Month, 
    Year
}

const Months: Array<string> = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const YearRange: {min: number, max: number} = {
    min: new Date().getFullYear() - 30,
    max: new Date().getFullYear()
}

export default function MonthPicker(): JSX.Element {
    const {setMonthPickerEnabled} = useMonthPickerEnabledContext();
    const {currentDate, setCurrentDate} = useCurrentDateContext();

    const [selectedMonth, setSelectedMonth] = useState<number>(currentDate.getMonth());
    const [selectedYear, setSelectedYear] = useState<number>(currentDate.getFullYear());

    function onItemPressed(type: ItemType, value: number): void {
        switch (type) {
            case ItemType.Month:
                setSelectedMonth(value);
                break;
            case ItemType.Year:
                setSelectedYear(value);
                break;
            default:
                throw new Error('Selcted item type not supported');
        }

        setCurrentDate(new Date(selectedYear, selectedMonth));
    }

    return (
        <View style={styles.monthPickerContainer}>
            <Pressable style={{width: '100%', height: '100%', position: 'absolute'}} onPress={() => setMonthPickerEnabled(false)}/>

            <View style={styles.monthPickerWrapper}>
                <FlatList data={Months} renderItem={({item, index}) => (
                    <Pressable onPress={() => onItemPressed(ItemType.Month, index)}>
                        <View style={{
                            padding: 20,
                            ...selectedMonth === index ? {backgroundColor: Colours.secondaryColour} : {}
                        }}>
                            <Text style={{
                                fontSize: 30
                            }}>{item}</Text>
                        </View>
                    </Pressable>
                )} keyExtractor={(_, index) => index.toString()} contentContainerStyle={{
                    paddingBottom: 40,
                    paddingTop: 40
                }} showsVerticalScrollIndicator={false}/>

                <FlatList data={new Array(YearRange.max - YearRange.min + 1).fill('').map((_, index) => Math.min(YearRange.max, YearRange.min + index))
                }
                renderItem={({item}) => (
                    <Pressable onPress={() => onItemPressed(ItemType.Year, item)}>
                        <View style={{
                            padding: 20,
                            ...selectedYear === item ? {backgroundColor: Colours.secondaryColour} : {}
                        }}>
                            <Text style={{
                                fontSize: 30
                            }}>{item}</Text>
                        </View>
                    </Pressable>
                )} keyExtractor={(_, index) => index.toString()} contentContainerStyle={{
                    paddingBottom: 40,
                    paddingTop: 40,
                }} showsVerticalScrollIndicator={false}/>
            </View>
        </View>
    )
}