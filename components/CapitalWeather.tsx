import { View, StyleSheet, Text, FlatList, Image } from "react-native"
import axios from "axios";
import { useEffect, useState } from 'react';


const CapitalWeather = ({ route }: any) => {
    const [capitalData, setCapitalData] = useState<any>([])
     const [error, setError] = useState(false)
    

    const countryAPI = axios.create({
        baseURL: "http://api.weatherstack.com/"
    })

    const getCapitalDetails = () => {

        countryAPI.get(`current?
        access_key=47466e337586cc71a7c900741b132a6f&query =${capitalData}`)
            .then((response: any) => setCapitalData(response.data))
             .catch((error: any) => setError(true))
    }

    useEffect(() => getCapitalDetails(), [])
    
    return (

        <View style={{ flex: 1 }}>
                <FlatList
                    data={capitalData}
                    renderItem={(item:any) => {
                        
                        return (
                            <View style ={styles.listView}>
                                <Text style ={styles.text}>temperature: {item?.temperature}</Text>
                                <Text style ={styles.text}> wind_speed : {item?.wind_speed}</Text>
                                <Text style ={styles.text}>precip : {item?.precip}</Text>
                                <Image style = {styles.image} source={{uri:item?.weather_icons.png}}/>
                            </View>
                        )
                    }}
                    keyExtractor={(item : any) => item.area}
                />

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
    }
})
export default CapitalWeather;
