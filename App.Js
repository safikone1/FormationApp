import {StatueBar} from 'expo-status-bar';
import React , {usesState} from 'react';
import {StyleSheet, Text,View, Button,TextInput}from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App(){
    const [phone, setPhone]=useState('')
    
    const getData =async()=>{
        try{
            const value =await AsyncStorage.getItem("@storage_key")
            if(value !==null){
                setPhone(JSON.parse(value))
            }
        }catch(e){
            console.log(e,'log:Erreus pendant la lecture?')
        }
    }
    const removeData=async()=>{
        try{
          await AsyncStorage.removeItem('@storage_key')
          alert('supprimer!')
  
        }catch(e){
          console.log(e,'log:Erreur pendant la suppression!')
        }
        console.log('Done')
      }
    return(
        <View style={styles.container}>
            <StatusBar style="auto"/>

            <Text>Read  Data </Text>
            <Text>            </Text> 

            <Text>     {phone}       </Text>  
            <Text>            </Text> 

            <Button
            onPress={()=>getData(phone)}
            title="Get Data"/>

            <Text>       </Text>

             <Button
             onPress={()=>removeData(phone)}
             title="remove Data"/>
            </View>
    );
}
const styles =StylesSheet.create({
    container:{
        flex:1,
        backgroundColor:'#8CF1B4',
        alignItems:'center',
        justifyContent:'center',

    },
});