import { View,StyleSheet} from 'react-native';
import { useState} from 'react';
import { Button, TextInput } from 'react-native-paper';


export default function Home({navigation}: any) {
    const[state,setState]=useState(false)
   const [countryName,setCountryName] = useState("")
    const handleNavigation =()=> {
      
     console.log(countryName)       
        navigation.navigate("CountryDetails",{countryName})
        
    }
    console.log(countryName)
    return(
        <View style ={styles.container}>
            
           <TextInput
             style={styles.input}
            mode='outlined'
            value = {countryName}
            onChangeText = {setCountryName}
            label = "Enter country"/>
            <Button mode='contained'
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
        backgroundColor : "#e1e8e5",
        justifyContent : "center",
        alignItems : "center"
     },
    input :{
        height : 60,
        width : "50%",
        borderRadius : 10
    },
    button : {
        marginTop : 50,
        backgroundColor :'#6d94ed'
    }
});
  