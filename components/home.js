import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, ImageBackground, SafeAreaView, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
export default class Home extends Component {
    render() {
        return (
            <SafeAreaView>
                
                    <View style={styles.maincontainer}>
                        <ImageBackground source={require('../assets/home.jpg')} style={styles.imagecontainer} />
                        <View style={styles.head}>

                            <Text style={styles.description}>
                                ONROAD
                            </Text>
                            <View style={styles.textin}>
                            <TextInput
                            style={styles.inputbox}
                            placeholder='CITY-NAME'
                            clearTextOnFocus
                            keyboardType='ascii-capable'
                            placeholderTextColor={'black'}
                            />
                            <TouchableOpacity style={styles.button}>
                                
                                <Text style={styles.btntext}>
                                    Search
                                </Text>
                            </TouchableOpacity>
                            </View>
                            
                        </View>

                    </View>

            </SafeAreaView>


        )
    }
}

const styles = StyleSheet.create({
    maincontainer: {
        width: '100%',
        height: '100%',
    },
    imagecontainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
    description: {
        color: "rgb(0,0,0)",
        fontFamily: "Roboto",
        fontSize: 35,
        padding: 5,
        letterSpacing: 8,

    },
    textin:{
        marginTop:'40%',
        alignSelf:'center'
    },
    inputbox:{
        borderWidth:2,
        height:45,
        width:180,
        borderRadius:10
    },
    button:{
        alignSelf:'center',
        margin:20,
        backgroundColor:'rgb(0,0,0)',
        height:33,
        width:110,
        borderRadius:5,
        borderWidth:0.5,
        alignItems:'center',
        justifyContent:'center'

    },
    btntext:{
        textAlignVertical:'center',
        color:'#fff'
        
    }

})
