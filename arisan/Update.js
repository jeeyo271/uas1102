import React from 'react';
import { StyleSheet,Text ,View,TextInput,TouchableHighlight,Image,FlatList, } from 'react-native';
import Header from "./Header";
import {ImageBackground} from 'react-native';

const axios = require('axios');
class Update extends React.Component{
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
          id_peserta:this.props.navigation.state.params.id_peserta,
            nama:'',
            alamat:'',
            nohp:'',
           
        };
    }


    componentDidMount(){ 
      axios.get("https://felyndapuspita.000webhostapp.com/mobile_uas/getAnggota.php?id_peserta="+ this.state.id_peserta)
      .then((response)=>{ 
      console.log(response.data); 
      this.setState({ data:response.data }); 
      }) 
      .catch(function (error) { 
          console.log(error); 
      }); 
  } 
  
    render() {
      handleSubmit = () => {
        axios.post('http://felyndapuspita.000webhostapp.com/mobile_uas/updatePeserta.php', {
          id_peserta: this.state.id_peserta,
          nama: this.state.nama,
          alamat: this.state.alamat,
          nohp: this.state.nohp,
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
        return (
            <ImageBackground source={require("./3.jpg")} style={{width:'100%',height:'100%'}}>  
            <View style={styles.containerMain}>
            <Header judul={"Update Peserta"} />
           <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={this.state.data}
                renderItem={({ item }) => ( 
                    <View>
        <View style={styles.box3}>           
        <View style={styles.box1}>
        <Text style={styles.Text}>Id Peserta </Text>
            <TextInput
                placeholder={item.id_peserta} 
                style={styles.textInput}
                onChangeText={id_peserta => this.setState({ id_peserta })}
            />
        </View>

        <View style={styles.box1}>
        <Text style={styles.Text}>Nama </Text>
            <TextInput
                placeholder={item.nama} 
                style={styles.textInput}
                onChangeText={nama => this.setState({ nama })}
            />
        </View>

        <View style={styles.box1}>
        <Text style={styles.Text}>Alamat </Text>
            <TextInput
                placeholder={item.alamat} 
                style={styles.textInput}
                onChangeText={alamat => this.setState({ alamat })}
            />
        </View>

        <View style={styles.box1}>
        <Text style={styles.Text}>No. Hp </Text>
            <TextInput
                placeholder={item.nohp} 
                style={styles.textInput}
                onChangeText={nohp => this.setState({ nohp })}
            />
        </View>
        </View>
  <View style={styles.box2}>
  <TouchableHighlight activeOpacity={0.5} style={styles.buttonStyle}  onPress={()=> handleSubmit()}>
      <Text style={styles.buttonText}>SAVE</Text>
  </TouchableHighlight>
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
        alignItems: "center",

    },
    box1: {
        width: "90%",
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 2,
        justifyContent: "space-between",
        flexDirection: "row"
    },
    textInput: {
        width: 200,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        borderWidth: 1,
    },
    buttonStyle: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
        backgroundColor: "#5E2E62",
        marginBottom: 20,
        height: 40,
        width: "45%",
        borderRadius: 5,
    },
    buttonText:{
        textAlign: "center",
        height: 40,
        width: "100%",
        marginTop: 10,
        color: "#FFFFFF",
        fontSize: 17,
      },
    box2: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
        marginBottom: 20,
        justifyContent: "space-around",
        flexDirection: "column",
        alignItems: "center",
        },
      box3: {
          width: "100%",
          paddingTop: 100,
          marginLeft: 2,
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          textAlign: 'center'
        },
        Text:{
            textAlign: "center",
            marginTop: 10,
            color: "black",
            fontSize: 15,
          },
    image:{
        width: 150,
        height: 150,
        marginTop: 2,
        borderColor: "#fff",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    uploadFoto:{
        width: 150,
        height: 150,
        marginTop: 10,
        borderColor: "#fff",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },
});
export default Update;