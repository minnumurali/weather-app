import { View,StyleSheet,ToastAndroid, Alert} from 'react-native';
import { useState,useContext} from 'react';
import { Button, TextInput } from 'react-native-paper';
import { AppContext } from '../Context/Appcontext';



export default function Home({navigation}: any) {

   
  
   const [countryName,setCountryName] = useState<any>("")
   const [checkInput,setCheckInput] =useState<any>("")
   const {error,setError}= useContext(AppContext)

    const handleNavigation =()=> {
        
    

            navigation.navigate("CountryDetails",{countryName})
      

         
        
         
    

         
   
    
}
    console.log(countryName)
    return(
        <View style ={styles.container}>
           
           <TextInput
            style={styles.input}
            clearButtonMode= "always"
            mode='flat'
            theme={{ colors: { primary: '#6d94ed',underlineColor:'transparent',}}}
            value = {countryName}
             onChangeText = {setCountryName}
            // onChangeText = {(value)=>{setCountryName(value),setCheckInput(value)}}
            placeholder = "Enter country"
            testID="country"/>
          
            <Button 
             mode='contained'
             theme={{ colors: { primary: '#6d94ed'}}}
             labelStyle={{ color: "white"}}
             style = {styles.button}
             uppercase = {false}
             disabled = {!countryName}
             onPress = {handleNavigation}>Submit</Button>
          
        </View>   
       )
}
const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
     },
   
    input :{
        height : 60,
        width : "70%",
       
      
        
    },
    button : {
        marginTop : 50,
        // backgroundColor :'#6d94ed',
        borderRadius : 20,
      
    }
});
  