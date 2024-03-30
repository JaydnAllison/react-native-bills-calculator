import { StyleSheet } from "react-native";
import { Colours } from "./constants.ts";

const styles = StyleSheet.create({
    homeContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    },

    addButtonContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },

    addButton: {
        backgroundColor: Colours.primaryColour,
        borderRadius: 100,
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: 80,
        aspectRatio: '1/1',
        shadowColor: 'black',
        shadowOpacity: 0.6,
        shadowRadius: 1,
        shadowOffset: {width: 0, height: 4},
        margin: 10,
    },

    addButtonIcon: {
        color: 'white',
    },

    addNewPopupContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },

    addNewPopupOption: {
        backgroundColor: 'white',
        width: '95%',
        height: 100,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10,
        padding: 10,
        borderRadius: 15
    },

    addNewPopupOptionText: {
        fontSize: 40,
        textAlign: 'center',
    },

    addNewOptionContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: Colours.mutedPrimaryColour
    },

    addNewOptionInputsWrapper: {
        position: 'absolute',
        bottom: 0,
        borderRadius: 15,
        width: '100%',
        height: '70%',
        backgroundColor: 'white',
    },

    addNewOptionInputsContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '30%'
    },

    addNewOptionNameInput: {
        backgroundColor: Colours.textInput,
        width: '90%',
        borderRadius: 15,
        height: 50,
        padding: 10,
        fontSize: 20,
        margin: 20
    },

    addNewPersonPercentageInput: {
        backgroundColor: Colours.textInput,
        width: '25%',
        borderRadius: 15,
        height: 50,
        padding: 10,
        fontSize: 20,
        margin: 20
    },

    addNewOptionSubmitButton: {
        position: 'absolute',
        bottom: 40,
        borderRadius: 100,
        backgroundColor: Colours.primaryColour,
        width: '90%',
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    addNewOptionSubmitButtonDisabled: {
        opacity: 0.5,
    },

    addNewOptionSubmitButtonText: {
        color: 'white',
        fontSize: 20
    },

    addNewBillCostInput: {
        backgroundColor: Colours.textInput,
        width: '35%',
        borderRadius: 15,
        height: 50,
        padding: 10,
        fontSize: 20,
        margin: 20,
    },
});

export default styles;