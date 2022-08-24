import react from "react";
import {Text,View} from "react-native";
const Splacescreen=({navigation})=>{
    setTimeout(
        
        function() {
            navigation.navigate('Home') 

        }
        
        ,1000)

    
    return(
        <View>
            <Text>hello from splcae </Text>
        </View>
    )
}
export default Splacescreen;
