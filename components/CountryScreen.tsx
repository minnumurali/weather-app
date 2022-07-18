
import { View,  StyleSheet, Text, FlatList, Image } from "react-native"
import { Button } from "react-native-paper";
import axios from "axios";
import { useEffect, useState } from 'react';


const CountryScreen = ({ navigation, route }: any) => {
    const [countryData, setCountryData] = useState<any>([])
    const [error, setError] = useState(false)
    const countryName = route.params.countryName

    const countryAPI = axios.create({
        baseURL: "https://restcountries.com/"
    })

    const getCountryDetails = () => {

        countryAPI.get(`v3.1/name/${countryName}`)
            .then((response: any) => setCountryData(response.data))
            .catch((error: any) => setError(true))
    }

    useEffect(() => getCountryDetails(), [])
    const handleNavigation = (capital:string) => {
       console.log(capital)
        navigation.navigate("CapitalWeather",{capital})
    }
    
    console.log("abc",countryData)
    console.log("weather",countryData.capital)
   
    
    return (

        <View style={{ flex: 1 }}>
            {error && <Text> Please enter proper countryname</Text>}
            <View>
                <FlatList
                    data={countryData}
                    renderItem={(item:any) => {
                        
                        return (
                            <View style ={styles.listView}>
                                <Text style ={styles.text}>Capital : {item?.item?.capital}</Text>
                                <Text style ={styles.text}>population : {item?.item?.population}</Text>
                                <Text style ={styles.text}>latitude : {item?.item?.latlng[0]}</Text>
                                <Text style ={styles.text}>longitude : {item?.item?.latlng[1]}</Text>
                                <Image style = {styles.image} source={{uri: item?.item?.flags.png}}/>

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

    )
};
const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent :"center",
        alignItems : "center",
    },

    text :{
      fontSize : 16,
      marginBottom : 20
    },
    listView:{
        padding :20
    },
    image:{
        width : 200,
        height : 150,
        resizeMode : "fit"
    },
    capButton :{
        height : 50,
        width : 200,
        justifyContent : "center",
        marginLeft : 100,
        backgroundColor :'#6d94ed',
        marginTop: 30
       
        
    }
    
})
export default CountryScreen;
