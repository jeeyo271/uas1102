import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from "./Login";
import Menu from "./Menu";
import Tambah from "./Tambah";
import Lihat from "./Lihat";
import Detail from "./Detail";
import Update from "./Update";


const AppContainer = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    Menu: {
      screen: Menu
    },
    Tambah: {
      screen: Tambah
    },
    Lihat: {
      screen: Lihat
    },
    Detail: {
      screen: Detail
    },
    Update: {
      screen: Update
    },
  },
  {
    initialRouteName: "Login"
  }
);
const Nav = createAppContainer(AppContainer);
export default class App extends React.Component {
    render() {
        return <Nav />;
    }
}
