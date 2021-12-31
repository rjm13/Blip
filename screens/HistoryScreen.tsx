import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { LinearGradient } from 'expo-linear-gradient';

import AudioStoryFlatList from '../components/AudioStoryFlatList';

const Narrations = ({navigation} : any) => {


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
                    <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
                        <FontAwesome5 
                            name='chevron-left'
                            color="#fff"
                            size={20}
                            style={{alignSelf: 'center'}}
                            onPress={() => navigation.goBack()}
                        />
                        <Text style={styles.header}>
                            History
                        </Text>
                    </View>
                    
                    <FontAwesome5 
                        name='search'
                        color="#fff"
                        size={20}
                    />

                </View>
                
                
            </View>
            <View style={{ height: '82%'}}>
                <AudioStoryFlatList />
            </View>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
   
    },
    header: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 20,
    },
});

export default Narrations;