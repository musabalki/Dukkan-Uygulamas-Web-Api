import React from "react"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container:{
        backgroundColor:"#eeeeee",
        borderWidth:1,
        borderColor:"#bdbdbd",
        margin:10,
        flexDirection:"row"
    },
    image:{
        width:100,
        minHeight:100,
        resizeMode:"contain",
        backgroundColor:"white"
    },
    body_container:{
        flex:1,
        padding:10,
        justifyContent:"space-between"
    },
    title:{
        fontWeight:"bold",
        fontSize:17
    },
    price:{
        textAlign:"right",
        fontStyle:"italic",fontSize:15
    }
})