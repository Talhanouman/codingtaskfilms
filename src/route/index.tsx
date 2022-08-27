import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Detail, WishList } from '../container';
import { RootBottomParamList } from "../interfaces/navigation";

const Stack = createNativeStackNavigator<RootBottomParamList>();

export default () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Detail" component={Detail} />
                <Stack.Screen name="WishList" component={WishList} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}