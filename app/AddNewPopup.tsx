import { ScrollView, View } from "react-native";
import styles from "../src/styles.ts";
import { faUser, faFileInvoiceDollar } from "@fortawesome/free-solid-svg-icons";
import AddNewOption from "../src/components/AddNewOption.tsx";

export default function AddNewPopup() {
    return (
        <ScrollView>
            <View style={styles.addNewPopupContainer}>
                <AddNewOption icon={faFileInvoiceDollar} route='AddNewBill'>Bill</AddNewOption>
                <AddNewOption icon={faUser} route='AddNewPerson'>Person</AddNewOption>
            </View>
        </ScrollView>
    )
}