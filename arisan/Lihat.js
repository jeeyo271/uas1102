import React from 'react';
import { Text ,View,FlatList,StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import Header from "./Header";

import {ImageBackground} from 'react-native';  

const axios = require('axios');
export default class Lihat extends React.Component{
  static navigationOptions = {
    header: null
}
    constructor(props) {
        super(props);
        this.state = {
          data: [],
        };
    }
    componentDidMount(){
    axios.get("http://felyndapuspita.000webhostapp.com/mobile_uas/getKategoriPeserta.php")
    .then((response)=>{
      console.log(response.data);
      this.setState({ data:response.data });
    })
    .catch(function (error) {
    // handle error
    console.log(error);
  });

}
    render() {
        return (
          <ImageBackground source={require("./3.jpg")} style={{width:'100%',height:'100%'}}>   
            <View style={styles.vMain}></View>
            <View style={styles.containerMain}>
              <Header judul={"Bintang Arisan"} />
              <View >
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.data}
                    renderItem={({item}) => (
                        <ListItem style={styles.list} onPress={()=>this.props.navigation.navigate("Detail",{"id_peserta":item.id_peserta})}
                            title={item.nama}
                            titleStyle={{ color: '#7C3B81', fontWeight: 'bold' }}
                        />
                    )
                    }
                />
                </View>
            </View>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    flexDirection: 'column',
    //backgroundColor: '#7C3B81',
  },
  list:{
    marginTop: 10,
  },
});