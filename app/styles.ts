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
    }
});

export default styles;