import React, { Component } from "react";
import {View,Text,StyleSheet,TouchableHighlight,TextInput,ScrollView,Alert,Image} from "react-native";

import {ImageBackground} from 'react-native';  
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: '',

      };
    }
    Login= () =>{
      if(this.state.username == 'fel' && this.state.password == '123'){
        this.props.navigation.navigate('Tambah')
      }else{
        Alert.alert('Masukan Username dan Password dengan Benar!!!');
    }
  }
  render() {     
      return (
        <ImageBackground source={require("./3.jpg")} style={{width:'100%',height:'100%'}}>   
        <View style={styles.vMain}>
        <ScrollView>       
                
                    <Image 
            			style={styles.gambar} 
            			source={require("./1.jpg")} 
            			resizeMode = "stretch" 
        			/> 
            <View style={styles.box}>
               	<View style={styles.box1}>
                    <Text style={styles.textInput}>Username</Text>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder="Username"  
                  onChangeText={username => this.setState({ username})}
                  />
                </View>
                <View style={styles.box1}>
                <Text style={styles.textInput}>Password</Text>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder="Password"
                  secureTextEntry={true}
                  onChangeText={password => this.setState({ password })}
                  />
                </View>
                <View style={styles.box2}>
                  <TouchableHighlight
                  activeOpacity={0.5}
                  style={styles.vButton}
                            onPress={() => this.Login()}>
                  <Text style={styles.txtButton}>LOGIN</Text>
                  </TouchableHighlight>
                  </View>
                </View>   
         
        </ScrollView>
      
        </View>
        </ImageBackground>
        
        );
      }
  }
   const styles = StyleSheet.create({
    vMain:{
      //flex: 1,
      
    },
    vHeader: {
        //flex: 1,
        //backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        flex: 0.8,
        backgroundColor: '#0099FF',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:500,
        borderRadius: 5,
        borderColor: '#cdbe97',
        margin:10
    },
    box1: {
        flex: 0.5,
        width: "90%",
        marginTop: 10,
        marginLeft: 10,
        paddingTop: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderRadius: 5,
    },
    gambar:{
        height: 150,
        width: 150,
        marginTop: 20,
        marginLeft:110,
    },
    txtBox1: {
      width: 220,
      height: 50,
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: '#6fa9aa',
      alignItems: 'center',
      justifyContent: 'center', 
      
    },
    textBox1:{
      color: 'white',
      fontSize: 15,    
    },
    textInput:{
        color: 'white',
        fontSize: 15,    
        marginTop: 16,
      },
    box2: {
      flex: 0.8,
      margin:10,
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderRadius: 5,
    },
    txtButton: {
      textAlign: 'center',
      marginTop: 10,
      color: 'black',
      fontSize: 20,
      width: '100%',
      height: 40, 
    },
    vButton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      borderRadius: 5,
      padding:20,
      margin:20,
      width: '100%',
      height: 50, 
    },
    txtTeks: {
      color: 'black',
      marginLeft:60,
      fontSize: 15,
      marginBottom:10,
    }
});
export default Login;