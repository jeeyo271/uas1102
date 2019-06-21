import React, { Component } from "react";
import {View,Text,StyleSheet,Image,TouchableHighlight,} from "react-native";
import {ImageBackground} from 'react-native';  


class Menu extends Component {
  static navigationOptions = {
      header: null
  }
  
    render() {
        return (
            <ImageBackground source={require("./3.jpg")} style={{width:'100%',height:'100%'}}>   
            <View style={styles.vMain}>
          <View style={styles.containerMain}>
            <View style={styles.box2}>
              <View>
                <Image source={require("./1.jpg")} style={styles.image} />
              </View>
            </View>
            <View style={styles.box3}>
                <TouchableHighlight activeOpacity={0.5} style={styles.buttonStyle} onPress={() => this.props.navigation.navigate('AddPeminjaman')}>
                  <Text style={styles.buttonText}>Tambah</Text>
                </TouchableHighlight>
                <TouchableHighlight activeOpacity={0.5} style={styles.buttonStyle} onPress={() => this.props.navigation.navigate('Lihat')}>
                  <Text style={styles.buttonText}>Lihat</Text>
                </TouchableHighlight>
            </View>
          </View>
        </View>
        </ImageBackground>
        );
    }
}
// define your styles
const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    flexDirection: 'column',
    alignItems: "center",
    backgroundColor: '#7C3B81',
  },
  image: {
    height: 200,
    width: 240
  },
  buttonStyle: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    backgroundColor: "#0099FF",
    marginTop: 20,
    marginBottom: 20,
    height: 40,
    width: 200,
    borderRadius: 5
  },
  Text: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 20,
    marginTop: 20,
  },
  buttonText: {
    textAlign: "center",
    height: 40,
    width: "100%",
    marginTop: 10,
    color: "#FFFFFF",
    fontSize: 18
  },
  box2: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 40,
    flexDirection: "column",
    alignItems: "center"
  },
  box3: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 120,
    marginTop: 250,
    flexDirection: "column",
    alignItems: "center"
  },
});
export default Menu;