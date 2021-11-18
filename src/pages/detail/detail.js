import React from "react";
import { StyleSheet, Text, Image, View, Dimensions, TouchableOpacity } from "react-native";

const Detail = (props) => {
  const data = props.route.params.data

  return(
    <View styles={styles.viewContainer}>
      <Image 
        style={styles.imageContainer}
        source={{uri:data.image}} />
      <View style={styles.titleViewContainer}>
        <Text style={styles.titleContainer}>{data.title}</Text>
        <Text style={styles.categoryTextContainer}>Category:   {data.category}</Text>
      </View>
      <View style={styles.descriptionViewContainer}>
        <Text style={styles.descriptionTextContainer}>Description: </Text>
        <Text style={styles.descriptionTextContainer}>{data.description}</Text>
      <View style={styles.priceView}>
        <Text>Price:   {data.price} TL</Text>
        <Text>Ratings:   {data.rating.rate}   {data.rating.count}</Text>
      </View>
      </View>
      <TouchableOpacity style={styles.buyNowContainer}>
        <Text style={styles.buyNowText}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  )
}
export default Detail

const styles = StyleSheet.create({
  viewContainer:{
    flex:1,
    paddingLeft:5
  },
  titleViewContainer:{
    padding:5,
  },
  imageContainer:{
    minHeight:100,
    height:Dimensions.get("screen").height/6,
    width:Dimensions.get("screen").width/3,
    resizeMode:"contain",
    backgroundColor:"white",
    margin:10,
    alignSelf:"center",
  },
  descriptionViewContainer:{
    
    borderRadius:15,
    borderWidth:1,
    justifyContent:"space-between"
  },
  priceView:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingTop:15,
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10,
    backgroundColor:"teal",
    paddingLeft:10,
    paddingRight:10,
  },
  titleContainer:{
    textAlign:"center",
    fontSize:20,
    fontWeight:"bold",
    textDecorationLine:"underline"
  },
  categoryTextContainer:{
    paddingTop:15,
    fontSize:15,
    padding:5
  },
  descriptionTextContainer:{
    fontSize:15,
    padding:10
  },
  buyNowContainer:{
    marginTop:30,
    alignItems:"center",
    backgroundColor:"pink",
    width:Dimensions.get("screen").width/2,
    alignSelf:"center",
    borderWidth:1,
    borderRadius:15
  },
  buyNowText:{
    fontSize:25,
    fontWeight:"bold",
    padding:10
  }
})