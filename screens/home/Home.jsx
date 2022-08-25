import react from "react";
import {ScrollView, Text,TouchableOpacity,View}from "react-native";
const Home =({navigation})=>{
    return(
        
       
        <View style={{flex:1,backgroundColor:"#6699CC"}}>
        <View style={{flex:1/4,justifyContent:"center",alignItems:"center",margin:10,backgroundColor:"red"}}>
        <View style={{justifyContent:"space-around",flexDirection:"row",flex:1,}}>

        <TouchableOpacity 
        onPress={()=>{
            navigation.navigate('Opd') 
            
        }}
        
        style={{borderWidth:1,flex:1,margin:5,justifyContent:"center",alignItems:"center",backgroundColor:"grey",borderRadius:10}}>
               <Text>OPD</Text>
             </TouchableOpacity>
             <TouchableOpacity 
                 onPress={()=>{
                    navigation.navigate('Ipd') 
                    
                }}
             style={{borderWidth:1,flex:1,margin:5,justifyContent:"center",alignItems:"center",backgroundColor:"grey",borderRadius:10}}>

             <Text>IPD</Text>
             </TouchableOpacity>
           </View>
        </View>
        <View style={{flex:1/4,justifyContent:"center",alignItems:"center",margin:10}}>
        <View style={{justifyContent:"space-around",flexDirection:"row",flex:1,}}>

        <TouchableOpacity 
        onPress={()=>{
            navigation.navigate('Opd') 
            
        }}
        
        style={{borderWidth:1,flex:1,margin:5,justifyContent:"center",alignItems:"center",backgroundColor:"grey",borderRadius:10}}>
               <Text>OPD</Text>
             </TouchableOpacity>
             <TouchableOpacity 
                 onPress={()=>{
                    navigation.navigate('Ipd') 
                    
                }}
             style={{borderWidth:1,flex:1,margin:5,justifyContent:"center",alignItems:"center",backgroundColor:"grey",borderRadius:10}}>

             <Text>IPD</Text>
             </TouchableOpacity>
           </View>
        </View>
        <View style={{flex:1/4,justifyContent:"center",alignItems:"center",margin:10}}>
        <View style={{justifyContent:"space-around",flexDirection:"row",flex:1,}}>

        <TouchableOpacity  
         onPress={()=>{
            navigation.navigate('Doctor') 
            
        }}
        style={{borderWidth:1,flex:1,margin:5,justifyContent:"center",alignItems:"center",backgroundColor:"grey",borderRadius:10}}>

               <Text>Doctor</Text>
             </TouchableOpacity>
             <TouchableOpacity
             onPress={()=>{
                navigation.navigate('Doctor') 
                
            }}
              style={{borderWidth:1,flex:1,margin:5,justifyContent:"center",alignItems:"center",backgroundColor:"grey",borderRadius:10}}>

             <Text>accountent</Text>
             </TouchableOpacity>
           
           </View>
        </View>
        <View style={{flex:1/4,justifyContent:"center",alignItems:"center",margin:10}}>
        <View style={{justifyContent:"space-around",flexDirection:"row",flex:1,}}>
        <TouchableOpacity
        onPress={()=>{
            navigation.navigate('Satff') 
            
        }}
         style={{borderWidth:1,flex:1,margin:5,justifyContent:"center",alignItems:"center",backgroundColor:"grey",borderRadius:10}}>
               <Text>staff</Text>
             </TouchableOpacity>
             <TouchableOpacity 
             onPress={()=>{
                navigation.navigate('Pharma') 
                
            }}
             style={{borderWidth:1,flex:1,margin:5,justifyContent:"center",alignItems:"center",backgroundColor:"grey",borderRadius:10}}>
             <Text>Pharma</Text>
             </TouchableOpacity>
           
           </View>
        </View>
        
        </View>
    )
}
export default Home;