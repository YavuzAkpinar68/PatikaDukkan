import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Products from "./pages/products/products";
import Detail from "./pages/detail";

const Stack = createNativeStackNavigator();

const Router = () => {
  return(
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen 
        name="ProductsPage" 
        component={Products} 
        options={{
          title:"Dukkan",
          headerTitleAlign:"center", 
          headerStyle:{backgroundColor:"silver"}}}/>
       <Stack.Screen 
        name="DetailPage"
        component={Detail}
        options={{
          title:"Detay Bilgi",
          headerTitleAlign:"center", 
          headerStyle:{backgroundColor:"silver"}}}/>
     </Stack.Navigator>
   </NavigationContainer>
  )
}
export default Router