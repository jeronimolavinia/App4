import { Component } from "react";
import MapView from "react-native-maps";
import { View, StyleSheet } from "react-native";

export default class MapPage extends Component {
    render() {
        return (
            <View>
                <MapView style={this.styles.map}/> 
            </View>
            //this.styles.map => private styles: A colocação do "this" aponta diretamente para o conteúdo do "private styles" a qual se refere. 
        );
    }

    private styles = StyleSheet.create({
        map:{
            height:'100%',
            width:'100%',
        },
    });
}

