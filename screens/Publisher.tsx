import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { LinearGradient } from 'expo-linear-gradient';

import { useRoute } from '@react-navigation/native';

const Publisher = ({navigation} : any) => {

    const [user, setUser] = useState({})

    const route = useRoute();
    const {User} = route.params

    const [update, didUpdate] = useState(false);

    useEffect(() => {
        setUser(User);
    }, [])

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['black', '#363636a5', 'black']}
                style={{height: Dimensions.get('window').height}}
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
                                onPress={() => navigation.navigate('ProfileScreen')}
                            />
                            <Text style={styles.header}>
                                Publisher Home
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

                    

                    
                </View>

            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignContent: 'center',
        width: Dimensions.get('window').width,
        //height: Dimensions.get('window').height,
    },
    header: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 20,
    },
});

export default Publisher;