import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Detail from "./pages/Detail"
import Products from "./pages/Products"

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="ProductPage" component={Products} options={{title:"Dükkan",headerStyle:{backgroundColor:"#2d323e"},headerTitleStyle:{color:"white"}}} />
                <Stack.Screen name="DetailPage" component={Detail} options={{title:"Detay",headerTintColor:"white",headerStyle:{backgroundColor:"#2d323e"},headerTitleStyle:{color:"white"}}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router