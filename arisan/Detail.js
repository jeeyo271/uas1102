import React from 'react';
import { View, FlatList, Text, StyleSheet,TouchableHighlight } from 'react-native';
import { ListItem, Card, Image } from 'react-native-elements';
import Header from "./Header";
import {ImageBackground} from 'react-native';

const axios = require('axios');
export default class Detail extends React.Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);
        this.state = {
            data: [],id_peserta:this.props.navigation.state.params.id_peserta,
        };
    }
    componentDidMount() {
        axios.get("https://felyndapuspita.000webhostapp.com/mobile_uas/getAnggota.php?id_peserta="+ this.state.id_peserta)
            .then((response) => {
                console.log(response.data);
                this.setState({ data: response.data });
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });

    }
    hapus = () => {
        axios.post('http://felyndapuspita.000webhostapp.com/mobile_uas/hapusPeserta.php', {
          id_peserta: this.state.id_peserta,
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    render() {
        return (
            <ImageBackground source={require("./3.jpg")} style={{width:'100%',height:'100%'}}>  
            <View style={styles.containerMain}>
                <Header judul={"Detail Peserta"} />
                <FlatList
                  
                  keyExtractor={(item, index) => index.toString()} 
                  data={this.state.data} 
                  renderItem={({ item }) => ( 
        <View >           
       <View>
                              <Card title="Detail  Peserta">
                                  <Text>Id Peserta : {item.id_peserta}</Text>
                                  <Text>Nama : {item.nama}</Text>
                                  <Text>Alamat : {item.alamat}</Text>
                                  <Text>No. Hp : {item.nohp}</Text>
                              </Card>
                           
                        <View style={styles.box1}>
                            <TouchableHighlight activeOpacity={0.5} style={styles.buttonStyle2}onPress={()=> this.props.navigation.navigate('Update',{id_peserta:item.id_peserta})}>
                                <Text style={styles.Text}>UPDATE</Text>
                            </TouchableHighlight>
                            <TouchableHighlight activeOpacity={0.5} style={styles.buttonStyle2} onPress={() => {this.hapus();this.props.navigation.navigate('Lihat')}}>
                                <Text style={styles.Text}>DELETE</Text>
                            </TouchableHighlight>
                        </View>
                        </View>
        </View>
            )} 
               /> 

                
            </View>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    containerMain: {
      flex: 1,
      flexDirection: 'column',
    },
  buttonStyle2: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    backgroundColor: "#5E2E62",
    marginTop: 20,
    marginBottom: 20,
    height: 30,
    width: "35%",
    borderRadius: 5,

  },
  
  Text:{
      textAlign: "center",
      height: 40,
      width: "100%",
      marginTop: 10,
      color: "#FFFFFF",
      fontSize: 17,
    },
  box1: {
    width: "100%",
    paddingTop: 20,
    marginTop: 10,
    marginLeft: 2,
    justifyContent: "space-between",
    flexDirection: "row"
  },
  });