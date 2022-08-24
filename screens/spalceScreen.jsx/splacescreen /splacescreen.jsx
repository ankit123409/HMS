import react from "react";
import {Text,View} from "react-native";
const Splacescreen=({navigation})=>{
    setTimeout(
        
        function() {
            navigation.navigate('Home') 

        }
        
        ,1000)

    
    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#446BAD"}}>
            <Text  style={{color:"white"}}>HOSPITALMANGE </Text>
        </View>
    )
}
export default Splacescreen;
