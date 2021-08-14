import React from "react"
import { Dimensions, StyleSheet } from "react-native"

export default StyleSheet.create({
    container:{
        flex:1
    },
    body_container:{
        padding:10
    },
    image:{
        width:Dimensions.get("window").width,
        height:Dimensions.get("window").height/3,
        resizeMode:"contain",
        backgroundColor:"white"
    },
    title:{
        fontWeight:"bold",
        fontSize:25
    },
    desc:{
        fontStyle:"italic"
    },
    price:{
        fontWeight:"bold",
        textAlign:"right",
        fontSize:22
    }
})