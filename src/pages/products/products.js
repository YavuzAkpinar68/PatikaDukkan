import useFetch from "../../hooks/Usefetch/usefetch";
import React from "react";
import {FlatList, SafeAreaView, Text } from "react-native";
import ProductCard from "./ProductCard";
import Loading from "../../components/Loading";

const API_URL = "https://fakestoreapi.com/products"

const Products = () => {
  const {loading, data, error} = useFetch()

  if (error) {
    return <Text>{error}</Text>
  }

  return(
    <SafeAreaView>{loading ? <Loading size="large"/> 
    :<FlatList data={data} renderItem={({item}) => <ProductCard item={item}/>}/>}
      
    </SafeAreaView>
  )
}
export default Products