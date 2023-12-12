import { StyleSheet, Text, View,TextInput,Button, TouchableOpacity, ToastAndroid, Alert} from 'react-native'
import React, { useState } from 'react'

 function signup({navigation}) {
  const [name,setname]=useState("")
  const [mobilenumber,setmobilenumber]=useState("")
  const [Password,setpassword]=useState("")
  return (
    <View>
    <View StyleSheet={styles.container}>
      <Text style={styles.title} >Please signup{[name,mobilenumber,Password]}</Text>
      <TextInput style={styles.top}onChangeText={newText => setname(newText)} placeholder='First Name'/>
      <TextInput style={styles.middle}onChangeText={newText =>setmobilenumber(newText)} placeholder='Mobile Number'/>
      <TextInput style={styles.middle}onChangeText={newText =>setpassword(newText)}placeholder='Passaword'/>
      </View>
      <View>
      <TouchableOpacity
      onPress={()=>{Alert.prompt("sdsdsd")}}
        style={styles.roundButton1}>
        <Text>signup</Text>
      </TouchableOpacity>
      </View>
      </View>
  )
}
const styles=StyleSheet.create({
  container:{
    backgroundColor:"yellow",
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  top:{
    borderRadius:5,
    margin:20,
    borderWidth:1,
    borderColor:"black",
    height:40
  },
  middle:{ 
borderRadius:5,
margin:20,
borderWidth:1,
borderColor:"black",
height:40
  },
  title:{
    textAlign:"center",
    fontStyle:"normal",
    textDecorationStyle:"solid",
    fontSize:25,
    fontWeight:"700"
  }, roundButton1: {
    width: 300,
    margin:20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'orange',
  },
})

export default signup