import { View } from "react-native";
import styles from "../styles.ts";
import AddButton from "../../components/Home/AddButton.tsx";

export default function Home() {
    return (
        <View style={styles.homeContainer}>
            <AddButton/>
        </View>
    )
}