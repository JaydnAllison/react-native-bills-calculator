import { TouchableOpacity, View } from "react-native"
import styles from "../../styles.ts";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "expo-router";

export default function AddButton() {
    const router = useRouter();
    
    return (
        <View style={styles.addButtonContainer}>
            <TouchableOpacity style={styles.addButton} onPress={() => router.push('AddNewPopup')}>
                <FontAwesomeIcon style={styles.addButtonIcon} icon={faPlus} size={50}/>
            </TouchableOpacity>
        </View>
    )
}