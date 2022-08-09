
import { View, StyleSheet, Text, FlatList, Image, ScrollView, ToastAndroid, Alert } from 'react-native';
import { Button } from "react-native-paper";
import axios from "axios";
import { useEffect, useState,useContext } from 'react';
import { AppContext } from '../Context/Appcontext';


const CountryScreen = ({ navigation, route,props }: any) => {
    const [countryData, setCountryData] = useState<any>([])
     const {error, setError} = useContext(AppContext)
    
    const countryName = route.params.countryName

    const countryAPI = axios.create({
        baseURL: "https://restcountries.com/"
    })

    const getCountryDetails = () => {

        countryAPI.get(`v3.1/name/${countryName}`)
            .then((response: any) => setCountryData(response.data))
            .catch((error: any) => setError(false))
            console.log(error)
    }

    useEffect(() => getCountryDetails(), [])
    const handleNavigation = (capital:string) => {
       console.log(capital)
        navigation.navigate("CapitalWeather",{capital})
    }
    
    console.log("abc",countryData)
    console.log("weather",countryData.capital)


   
    return (
        <ScrollView>
        <View style={{ flex: 1 }}>
            {error&&
            <Text style={styles.errorMsg}>Please enter a proper name</Text>}
              
            <View>
                <Text style={styles.header}>Country Details</Text>
                <FlatList
                    data={countryData}
                    renderItem={(item:any) => {
                        
                        return (
                            
                            <View style ={styles.listView}>
                                <Text style ={styles.text}>Capital    : {item?.item?.capital}</Text>
                                <Text style ={styles.text}>population : {item?.item?.population}</Text>
                                <Text style ={styles.text}>latitude   : {item?.item?.latlng[0]}</Text>
                                <Text style ={styles.text}>longitude  : {item?.item?.latlng[1]}</Text>
                                <Text  style ={styles.text}>
                                <Image style = {styles.image} source= {{uri: item?.item?.flags.png}}/> 
                                </Text>
                               

                                <Button mode='contained'
                                 style ={styles.capButton}
                                 uppercase={false}
                                 onPress={()=>{handleNavigation(item?.item?.capital[0])}}>
                                 Capital Weather
                                </Button>

                            </View>
                            
                            
                        )
                    }}
                    keyExtractor={(item : any) => Math.random().toString(16).slice(2)}
                />
            </View>
          
        </View>
        </ScrollView>
    )
};
const styles = StyleSheet.create({

    container: {
        flex: 1,
       paddingHorizontal:15,
       paddingVertical:25,
       flexDirection:"row",
       justifyContent:"space-between",

       
    },
    header:{
   fontSize: 20,
   fontStyle:"normal",
   fontWeight:"bold",
   marginLeft : 75,
    padding : 10
  
    },

    text :{
      fontSize : 16,
      marginBottom : 20,
      paddingHorizontal:70,
     alignItems : "center"
    },
    listView:{
        padding :20,
       
        
    },
    image:{
        width : 30,
        height : 30,
        resizeMode : "fit",
        paddingLeft:70
    },
    capButton :{
        height : 50,
        width : 200,
        justifyContent : "center",
        marginLeft : 60,
        backgroundColor :'#6d94ed',
        marginTop: 30
    },
    errorMsg:{
      color:"red"
    }
    
})
export default CountryScreen;
