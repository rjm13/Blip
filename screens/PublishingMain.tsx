import React from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { LinearGradient } from 'expo-linear-gradient';

const PublishingMain = ({navigation} : any) => {


    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['black', '#363636a5', 'black']}
                //style={styles.container}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >

                <View style={{marginHorizontal: 20, marginTop: 50}}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row'}}>
                            <FontAwesome5 
                                name='chevron-left'
                                color="#fff"
                                size={20}
                                style={{alignSelf: 'center'}}
                                onPress={() => navigation.goBack()}
                            />
                            <Text style={styles.header}>
                                Publishing
                            </Text>
                        </View>
                    </View>  
                </View>

                <View style={styles.container}>

                    <FontAwesome5 
                        name='book-reader'
                        color='#fff'
                        size={30}
                        style={{alignSelf: 'center', marginTop: 40}}
                    />

                    <View style={{alignSelf: 'center', justifyContent: 'center', alignContent: 'center', marginHorizontal: 20, marginVertical: 40}}>
                        <Text style={{ textAlign: 'center', color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
                            Publish your audio shorts on Blip!
                        </Text>
                    </View>

                    <View style={{alignSelf: 'center', justifyContent: 'center', alignContent: 'center', marginHorizontal: 30, marginBottom: 40}}>
                        <View style={{flexDirection: 'row', marginBottom: 20}}>
                            <FontAwesome5 
                                name='check-circle'
                                size={18}
                                color='#fff'
                                style={{marginRight: 20, alignSelf: 'center'}}
                            />
                            <Text style={{ textAlign: 'center', color: '#fff', fontSize: 14}}>
                                Earn money for your stories
                            </Text>
                        </View>

                        <View style={{flexDirection: 'row', marginBottom: 20}}>
                            <FontAwesome5 
                                name='check-circle'
                                size={18}
                                color='#fff'
                                style={{marginRight: 20, alignSelf: 'center'}}
                            />
                            <Text style={{ textAlign: 'center', color: '#fff', fontSize: 14}}>
                                Hire a credited narrator and cover artist
                            </Text>
                        </View>

                        <View style={{flexDirection: 'row', marginBottom: 20}}>
                            <FontAwesome5 
                                name='check-circle'
                                size={18}
                                color='#fff'
                                style={{marginRight: 20, alignSelf: 'center'}}
                            />
                            <Text style={{ textAlign: 'center', color: '#fff', fontSize: 14}}>
                                Share your short stories around the world!
                            </Text>
                        </View>
                        
                    </View>

                    <TouchableOpacity 
                        style={{alignContent: 'center', justifyContent: 'center', marginTop: 80, marginHorizontal: 20, backgroundColor: 'cyan', height: 100, borderRadius: 10}}
                        onPress={() => {navigation.navigate('PublisherSetup')}}
                    >
                        <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
                            Create a Publisher Profile
                        </Text>
                    </TouchableOpacity>
                </View>

            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignContent: 'center',
        width: Dimensions.get('window').width
    },
    header: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 20,
    },
});

export default PublishingMain;