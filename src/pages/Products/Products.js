import React,{useState,useEffect} from "react"
import {FlatList, SafeAreaView,Text,ActivityIndicator} from "react-native"
import URL from "../../Api"
import ProductCard from "../../components/ProductCard";
import useFetch from "../../hooks/useFetch";

function Products({navigation}){
    const {loading,data,error} = useFetch(URL);

    const handleProductSelect =(id) => {
        navigation.navigate("DetailPage",{id});
    }

    const renderProduct=({item}) =>{
        return <ProductCard product={item} onSelect={()=>handleProductSelect(item.id)} />
    }

    if(loading){
        return <ActivityIndicator size="large" color="#0000ff" />
    }

    if(error){
        return <Text>Hata</Text>
    }

    
    return (
        <SafeAreaView>
           <FlatList data={data} renderItem={renderProduct} />
        </SafeAreaView>
    )
}

export default Products