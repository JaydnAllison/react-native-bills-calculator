import { View } from "react-native";
import styles from "../../src/styles.ts";
import AddButton from "../../src/components/Home/AddButton.tsx";

export default function Home() {
    return (
        <View style={styles.homeContainer}>
            <AddButton/>
        </View>
    )
}