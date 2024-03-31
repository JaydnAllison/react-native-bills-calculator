import { TouchableOpacity, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconDefinition, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles";
import { useRouter } from "expo-router";
import { TJSXProps } from "../constants";
import dismissAndPush from "../utils/dismissAndPush";

type TAddNewOptionProps = {
    route: string,
    icon: IconDefinition,
} & TJSXProps;

export default function AddNewOption({route, icon, children}: TAddNewOptionProps) {
    const router = useRouter();

    return (
        <TouchableOpacity style={styles.addNewPopupOption} onPress={() => dismissAndPush(router, route)}>
            <FontAwesomeIcon icon={icon} size={50}/>
            <Text style={styles.addNewPopupOptionText}>{children}</Text>
            <FontAwesomeIcon icon={faChevronRight} size={30}/>
        </TouchableOpacity>
    )
}