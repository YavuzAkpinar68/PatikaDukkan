import React, { useState } from "react";
import { SafeAreaView, View, Image, Text, StyleSheet, Dimensions } from "react-native";

const ProductCard = ({item}) => {
  

  return(
    <View style={styles.cardView}>
      <Image style={styles.image} source={{uri:item.image}}/>
      <View style={styles.textView}>
      <Text style={styles.text1}>{item.title}</Text>
      <Text style={styles.text2}>{item.price} TL</Text>
      </View>
    </View>
  )
}
export default ProductCard

const styles = StyleSheet.create({
  cardView:{
    backgroundColor:"bisque",
    borderWidth:1,
    margin:5,
    flexDirection:"row"
  },
  image:{
    minHeight:100,
    width:Dimensions.get("screen").width/4,
    resizeMode:"contain",
    backgroundColor:"white",
    
  },
  text1:{
    padding:5,
    fontSize:18,
    fontWeight:"900"
  },
  textView:{
    padding:10,
    flex:1,
    justifyContent:"space-between"
  },
  text2:{
    padding:5,
    fontSize:15,
    fontStyle:"italic",
    textAlign:"right",
    color:"black"
  }
})