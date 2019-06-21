import React, { Component } from "react";
import {View,Text,StyleSheet,TouchableHighlight,TextInput,ScrollView,Image} from "react-native";
import Header from "./Header";
import {ImageBackground} from 'react-native'; 
 
const axios = require('axios');
class AddPeminjaman extends Component {
    constructor(props) {
        super(props);
        this.state = {
          kode_peminjaman: '',
          nm_alat: '',
          waktu_pinjam: '',
          nm_peminjam: '',
          image:'',
          srcImg: '',
          uri:'',
          fileName:'',
          loading: false,

      }
  }
  upload(){
    this.uploadPicture();
    axios.post('http://fingkyagustin.000webhostapp.com/apiuas/tambahPeminjaman.php', {
        kode_peminjaman: this.state.kode_peminjaman,
        nm_alat: this.state.nm_alat,
        waktu_pinjam: this.state.waktu_pinjam,
        nm_peminjam: this.state.nm_peminjam,
        image: this.state.image
      })
      .then((response) => {
          console.log("Status update trx  "+response);
            console.log(response);
        }
      )
      .catch(function (error) {
        console.log(error);
      });
    }
    choosePicture = () => {
      console.log("upload");
      var ImagePicker = require("react-native-image-picker");
      var options = {
        title: "Pilih Gambar",
        storageOptions: {
          skipBackup: true,
          path: "images"
        }
      };
      ImagePicker.showImagePicker(options, response => {
        console.log("Response = ", response);
        if (response.didCancel) {
          console.log("User cancelled image picker");
        } else if (response.error) {
          console.log("ImagePicker Error: ", response.error);
        } else if (response.customButton) {
          console.log("User tapped custom button: ", response.customButton);
        } else {
          let source = { uri: response.uri };
          console.log(source);
          console.log(response.fileName);
          this.setState({
            srcImg: source,
            uri: response.uri,
            fileName: response.fileName,
            image: response.fileName
          });
        }
      });
    };
    uploadPicture = () => {
      const data = new FormData();
      data.append("fileToUpload", {
        uri: this.state.uri,
        type: "image/jpeg", // or photo.type
        name: this.state.fileName
      });
      const url =
        "http://fingkyagustin.000webhostapp.com/apiuas/Upload.php";
      fetch(url, {
        method: "post",
        body: data
      })
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson);
          this.setState({
            loading: false
          });
        });
    };
    submit () {
      this.upload();
    };
  render() {    
      return (
        <ImageBackground source={require("./1.jpg")} style={{width:'100%',height:'100%'}}>  
        <View style={styles.vMain}>
        <ScrollView>
            <View style={styles.vHeader}>
                <Header header={"FingkyAgustin 1715051068"} />
                <View style={styles.conPreview}>
                {(this.state.srcImg!='')&&
                (<Image source={this.state.srcImg} style={styles.uploadAvatar}/>)
                }
                 </View>
               	<View style={styles.box1}>
                  <View style={styles.textBox1}>
                    <Text>Kode Peminjaman</Text>
                  </View>
                  <TextInput
                    style={styles.txtBox1}
                    onChangeText={kode_peminjaman => this.setState({ kode_peminjaman })}
                  />
                </View>
                <View style={styles.box1}>
                  <Text>Nama Alat</Text>
                    <TextInput
                      style={styles.txtBox1}
                      onChangeText={nm_alat => this.setState({ nm_alat })}
                    />
                </View>
                <View style={styles.box1}>
                  <Text>Tanggal Pinjam</Text>
                    <TextInput
                      style={styles.txtBox1}
                      onChangeText={waktu_pinjam => this.setState({ waktu_pinjam })}
                    />
                </View>
                <View style={styles.box1}>
                  <Text>Nama Peminjam</Text>
                    <TextInput
                      style={styles.txtBox1}
                      onChangeText={nm_peminjam => this.setState({ nm_peminjam })}
                    />
                </View>
                <View style={styles.box2}>
                  <TouchableHighlight activeOpacity={0.5}
                    style={styles.BoxStyle2} onPress={()=> this.choosePicture() }>
                    <Text style={styles.txtBox2}>Pilih Foto</Text>
                  </TouchableHighlight>
                </View>
                <View style={styles.box3}>
                  <TouchableHighlight
                  activeOpacity={0.5}
                  style={styles.vButton}
                            onPress={() =>{this.upload();this.props.navigation.navigate('Main')}}>    
                  <Text style={styles.txtButton}>Add Data Peminjaman</Text>
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
        flex: 1,
        //backgroundColor: 'white',
    },
    vHeader: {
       flex: 1,
        //backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box1: {
        flex: 0.5,
        width: "90%",
        marginTop: 10,
        marginLeft: 2,
        paddingTop: 10,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    txtBox1: {
        width: 160,
        height: 50,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#cdbe97',
        alignItems: 'center',
        justifyContent: 'center', 
    },
    textBox1:{
        color: 'white',
        fontSize: 15,    
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
    box3: {
        flex: 0.8,
        margin:10,
        marginTop:10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    boxedit: {
      flex: 0.2,
      margin:10,
      marginTop:10,
      marginLeft:40,
      flexDirection: 'row',
      alignItems: 'center'
  },
    txtButton: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
    },
    uploadAvatar:{
      height: 200,
      width: 300,
      borderColor: '#cdbe97',
      marginBottom:20
    },
    conPreview:{
      flex:8,
      alignItems:'center',
      justifyContent:'center',
      borderColor: '#cdbe97',
    
  },
    vButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#cdbe97',
        borderRadius: 5,
        padding:20,
        margin:10,
        width: '100%',
        height: 50, 
    },
    txtBox2: {
        color: 'white',
        alignItems: 'center',
        fontSize: 15,
        textAlign: 'center',
    },
    gedit:{
      height: 25,
      width: 25,
      alignItems:'center',
      justifyContent:'center',
  },
    box2: {
        flex: 0.2,
        //backgroundColor: 'white',
        margin:10,
        flexDirection: 'row',
    },
    txtTeks: {
        color: 'black',
        fontSize: 18,
        marginBottom:10,
    }
});
export default AddPeminjaman;