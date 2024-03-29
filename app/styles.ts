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
        fontSize: 50,
        textAlign: 'center',
    }
});

export default styles;