import React from 'react';
import { Text ,View,FlatList, StyleSheet,TouchableHighlight,ScrollView } from 'react-native';
import { ListItem, Card, Image } from 'react-native-elements';
import Header from "./Header";
import {ImageBackground} from 'react-native'; 


const axios = require('axios');
export default class ViewDetail extends React.Component{
    constructor(props) {
        super(props); 
        this.state = {
          data: [],kode_peminjaman:this.props.navigation.state.params.kode_peminjaman,
        };
    }
    componentDidMount(){
    axios.get("https://felyndapuspita.000webhostapp.com/mobile_uas/getAnggota.php?id_peserta="+ this.state.id_peserta)
    .then((response)=>{
      console.log(response.data);
      this.setState({ data:response.data });
    })
    .catch(function (error) {
    // handle error
    console.log(error);
  });

}
hapus = () => {
    axios.post('http://felyndapuspita.000webhostapp.com/mobile_uas/hapusPeserta.php', {
      kode_peminjaman: this.state.kode_peminjaman,
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
                <ScrollView>
            <View style={styles.vHeader}>
                <Header header={"Detail"} />
                <FlatList
               
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.data}
                    renderItem={({item}) => (
                        <View>
                        <View>
                    
                        <Card title="Detail Peserta">
                                  <Text>Id Peserta : {item.id_peserta}</Text>
                                  <Text>Nama : {item.nama}</Text>
                                  <Text>Alamat : {item.alamat}</Text>
                                  <Text>No. Hp : {item.nohp}</Text>
                            </Card>
                    </View>
                    <View style={styles.box1}>
                            <TouchableHighlight activeOpacity={0.5} style={styles.buttonStyle2}onPress={()=> this.props.navigation.navigate('Update',{id_peserta:item.id_peserta,id})}>
                                <Text style={styles.Text}>UPDATE</Text>
                            </TouchableHighlight>
                            <TouchableHighlight activeOpacity={0.5} style={styles.buttonStyle2} onPress={() => {this.hapus();this.props.navigation.navigate('Lihat')}}>
                                <Text style={styles.Text}>DELETE</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                   
                    )
                    }
                />
            </View>
            </ScrollView>
            </ImageBackground>
            
        )
    }
}
const styles = StyleSheet.create({
    vHeader: {
            flex: 1,
            //backgroundColor: '#ADD8E6',
        },
        boxitem1: {
            flex:0.8,
            width: 160,
            height: 50,
            backgroundColor: '#191970',
            borderWidth: 1,
            borderColor: '#191970',
            alignItems: 'center',
            justifyContent: 'center', 
        },
        BoxStyle1: {
            borderRadius: 5,
            justifyContent: 'center',
            marginBottom: 30, 
            padding: 20,
            width: '40%',
            height: 30,
            backgroundColor: '#cdbe97',
            marginTop:40,
            margin:10,
            marginLeft:20,
        },
        BoxStyle2: {
            borderRadius: 5,
            justifyContent: 'center',
            marginBottom: 30, 
            padding: 20,
            width: '40%',
            height: 30,
            backgroundColor: '#cdbe97',
            marginTop:40,
            margin:10,
        },
        box2: {
            flex: 0.2,
            //backgroundColor: 'white',
            margin:10,
            flexDirection: 'row',
        },
        txtBox2: {
            color: 'white',
            alignItems: 'center',
            fontSize: 15,
            textAlign: 'center',
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
    
