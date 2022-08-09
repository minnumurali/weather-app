import { View, StyleSheet, Text, FlatList, Image } from "react-native"
import axios from "axios";
import { useEffect, useState } from 'react';


const CapitalWeather = ({ route }: any) => {
    const [capitalData, setCapitalData] = useState<any>('')
    const [weather,setWeather] = useState<any>([])
    // console.log(capitalData)
      const countryName = route.params.capital
    //  console.log(capital)

    const capitalAPI = axios.create({
         baseURL: "http://api.weatherstack.com/"
     })
    
    const getCapitalDetails = () => {

        capitalAPI.get(`current?access_key=47466e337586cc71a7c900741b132a6f&query=${countryName}`)
            .then((response: any) => setCapitalData(weather.concat(response.data)))
            .catch((err) => console.log(err))
    }
      
    useEffect(() => getCapitalDetails(), [])
  
    return (

        <View style={{ flex: 1 }}>
                <Text style={styles.header}>Capital Weather</Text>
                  
                            <View style ={styles.listView}>
                                <Text style ={styles.text}>temperature: {capitalData[0]?.current?.temperature}</Text>
                                <Text style ={styles.text}>wind_speed : {capitalData[0]?.current?.wind_speed}</Text>
                                <Text style ={styles.text}>precip : {capitalData[0]?.current?.precip}</Text>
                                <Text style ={styles.text}> Weather Icon :<Image style = {styles.image} source={{uri:capitalData[0]?.current?.weather_icons[0]}}/></Text>
                                
                            </View>
                        
                    
                
        </View>

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
        marginLeft : 77,
        padding : 10
       
         },

    text :{
        fontSize : 16,
        marginBottom : 20,
        paddingHorizontal:70,
        
    //    borderBottomWidth:1,
    //    borderBottomColor:"#1e1e1e1e",
      //  flexDirection:"column",
       
      //  justifyContent :"space-around",
       alignItems : "center"
    },
    listView:{
        padding :20
    },
    image:{
        width : 200,
        height : 150,
        width : 30,
        height : 30,
        resizeMode : "fit",
        paddingLeft:70
        // resizeMode : "fit"
    }
})
export default CapitalWeather;
