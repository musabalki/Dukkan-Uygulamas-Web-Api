import React from "react"
import { Text, Image, View, ActivityIndicator } from "react-native"
import useFetch from "../../hooks/useFetch"
import styles from "./Detail.style"
import URL from "../../Api"

function Detail({ route }) {
    const { id } = route.params
    const { loading, error, data } = useFetch(`${URL}/${id}`)

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />
    }

    if (error) {
        return <Text>Hata</Text>
    }

    return (
        <View>
            <Image style={styles.image} source={{ uri: data.image }} />
            <View style={styles.body_container}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.desc}>{data.description}</Text>
                <Text style={styles.price}>{data.price} TL</Text>
            </View>
        </View>
    )
}

export default Detail