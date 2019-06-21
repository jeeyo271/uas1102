import React from 'react';
import {Text,View} from 'react-native';

const Header = (props) => {
    const { text, header } = styles;
    return (
        <View style={header}>
          <Text style={styles.text}> {props.judul} </Text>
        </View>
    );
};
const styles = {
  header: {
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 10, 
    paddingTop: 10,
  },
  text: {
    fontSize:14,
    color: "#fff",
    textAlign: "center"
  }
};
export default Header;