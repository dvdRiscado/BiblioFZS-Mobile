import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    presenca:{
        width: "auto",
        height: 84,
        backgroundColor: "#161917",
        borderRadius:8,
        boxSizing: "border-box",
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal: 16,
        gap: 32,
    },
    presencaInfo:{
        width:"75%",
        gap:8
    },
    presencaLinha:{
        justifyContent: "space-between",
        flexDirection: "row",
    },
    presencaTexto:{
        color:"#fff",
        fontSize:18,
        fontWeight:"bold"
    },
    presencaTextoData:{
        color:"#d9d9d9",
        fontSize:12
    },
})