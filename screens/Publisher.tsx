import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions, TouchableWithoutFeedback} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useRoute } from '@react-navigation/native';

import { API, graphqlOperation, Auth } from "aws-amplify";
import { getUser } from '../src/graphql/queries';

const Publisher = ({navigation} : any) => {

    const [user, setUser] = useState({})

    const route = useRoute();
    const {User} = route.params

    const [update, didUpdate] = useState(false);

    const [SavedAudio, setSavedAudio] = useState([''])

    useEffect(() => {
        const LoadKeys = async () => {
            let saved = await AsyncStorage.getAllKeys();
    
            if (saved != null) {
                let result = saved.filter((item) => item.includes("recording"));
                setSavedAudio(result);
            } 
        }
        LoadKeys();
    
    }, [])

    // useEffect(() => {
    //     setUser(User);
    // }, [])

    useEffect(() => {
        const fetchUser = async () => {
          const userInfo = await Auth.currentAuthenticatedUser();
            if (!userInfo) {
              return;
            }
          try {
            const userData = await API.graphql(graphqlOperation(
              getUser, {id: userInfo.attributes.sub}))
              if (userData) {
                setUser(userData.data.getUser);
              }
              console.log(userData.data.getUser);
          } catch (e) {
            console.log(e);
          }
        }
        fetchUser();
      }, [])

    return (
        <View style={styles.container}>
            
            <LinearGradient
                colors={['black', '#363636a5', 'black']}
                style={{
                    height: Dimensions.get('window').height,
                    justifyContent: 'space-between'
                }}
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

                <ScrollView>
                    
                <View style={styles.container}>
                    
                    <FontAwesome5 
                        name='book-reader'
                        color='#fff'
                        size={30}
                        style={{alignSelf: 'center', margin: 40}}
                    />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 40, marginVertical: 20}}>
                        <Text style={{ color: '#fff', fontSize: 16}}>
                            Pseudonym
                        </Text>
                        <Text style={styles.textcounter}>
                            {user?.pseudonym}
                        </Text>
                    </View>

                    <TouchableWithoutFeedback onPress={ () => navigation.navigate('Following')}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 40, marginVertical: 20}}>
                            <Text style={{ color: '#fff', fontSize: 16}}>
                                Followers
                            </Text>
                            <Text style={styles.textcounter}>
                                {user?.following ? user?.following?.items.length : '0'}
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={ () => navigation.navigate('MyStories')}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 40, marginVertical: 20}}>
                            <Text style={{ color: '#fff', fontSize: 16}}>
                                My Stories
                            </Text>
                            <Text style={styles.textcounter}>
                                {user?.authored?.items.length}
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={ () => navigation.navigate('Recordings', {user: user})}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 40, marginVertical: 20}}>
                            <Text style={{ color: '#fff', fontSize: 16}}>
                                My Recordings
                            </Text>
                            <Text style={styles.textcounter}>
                                {SavedAudio.length}
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={ () => navigation.navigate('PlanScreen')}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 40, marginVertical: 20}}>
                            <Text style={{ color: '#fff', fontSize: 16}}>
                                My Artwork
                            </Text>
                            <Text style={styles.textcounter}>
                                
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <View style={{marginVertical: 20, alignSelf: 'center', width: '80%', height: 1, borderColor: '#fff', borderWidth: 0.5}}>
                    </View>

                    <TouchableWithoutFeedback onPress={() => {navigation.navigate('UploadAudio')}}>
                        <View style={[styles.button, {backgroundColor: 'cyan'}]}>
                            <Text style={styles.buttontext}>
                                Publish a Story
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback>
                        <View style={[styles.button, {backgroundColor: 'pink'}]}>
                            <Text style={styles.buttontext}>
                                Find a Narrator
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback>
                        <View style={[styles.button, {backgroundColor: '#27d995'}]}>
                            <Text style={styles.buttontext}>
                                Find a Cover Artist
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
  
                </View>

                <View style={{marginVertical: 40}}>
                    <TouchableWithoutFeedback onPress={ () => navigation.navigate('Terms')}>
                        <View style={{ justifyContent: 'center', marginHorizontal: 40, marginVertical: 20}}>
                            <Text style={{ textAlign: 'center', color: '#fff', fontSize: 14}}>
                                Terms and Conditions
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </ScrollView>
            </LinearGradient>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        //justifyContent: 'center',
        alignContent: 'center',
        width: Dimensions.get('window').width,
        //height: Dimensions.get('window').height,
    },
    header: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 40,
    },
    textcounter: {
        color: '#fff', 
        fontSize: 16, 
        fontWeight: 'bold'
    }, button: {
        marginVertical: 10, 
        alignSelf: 'center', 
        width: '80%', 
        height: 60, 
        borderRadius: 10,
        justifyContent: 'center',
    },
    buttontext: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
    }
});

export default Publisher;