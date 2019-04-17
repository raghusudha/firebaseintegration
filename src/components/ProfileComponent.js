import React, { Component } from 'react';
import { TextInput, Button, View, StyleSheet, Text, TouchableHighlight, ToastAndroid } from 'react-native';
import Camera from 'react-native-camera';



export default class ProfileComponent extends Component {
    constructor(props) {
        super(props);
    }

    takePicture() {
        this.camera
            .capture()
            .then((data) => console.log(data))
            .catch(err => console.error(err));
    }

    render() {
        return (
            // <View style={styles.container}>
            //     <Camera
            //         ref={cam => { this.camera = cam }}
            //         style={styles.preview}
            //         aspect={Camera.constants.Aspect.fill}
            //     >
            //         <Text style={styles.capture} onPress={this.takePicture.bind(this)}>
            //             [CAPTURE]
            //         </Text>
            //     </Camera>
            // </View>
            <View>Welcome</View>
        );
    }
}