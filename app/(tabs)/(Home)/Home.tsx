import { Stack } from "expo-router";
import { Text, View } from "react-native";
import styles from '../../styles.ts';

export default function Home() {
    return (
        <View style={styles.homeContainer}>
            <Stack.Screen options={{
                headerShown: true,
            }}/>
        </View>
    )
}