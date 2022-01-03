import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions, TouchableWithoutFeedback, FlatList, RefreshControl} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { LinearGradient } from 'expo-linear-gradient';

import { useRoute } from '@react-navigation/native';

import { API, graphqlOperation, Auth } from "aws-amplify";
import { getUser } from '../src/graphql/queries';

const Publisher = ({navigation} : any) => {

    const [user, setUser] = useState({})

    const route = useRoute();
    const {User} = route.params

    const [update, didUpdate] = useState(false);

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

      const [Storys, setStorys] = useState([
          {
            id: 1,
            title: 'Track 1',
            time: '32:45',
            created: 'Oct 13, 2021'
          },
          {
            id: 2,
            title: 'Track 1',
            time: '32:45',
            created: 'Oct 13, 2021'
        },
        {
            id: 3,
            title: 'Track 1',
            time: '32:45',
            created: 'Oct 13, 2021'
        },
        {
            id: 4,
            title: 'Track 1',
            time: '32:45',
            created: 'Oct 13, 2021'
        },
        {
            id: 5,
            title: 'Track 1',
            time: '32:45',
            created: 'Oct 13, 2021'
        },
        {
            id: 6,
            title: 'Track 1',
            time: '32:45',
            created: 'Oct 13, 2021'
        },
      ]);

      const Item = ({title, time, created, id} : any) => {

        return(
            <View style={{marginBottom: 20, padding: 10, width: '90%', backgroundColor: '#363636', alignSelf: 'center', borderRadius: 10}}>
                    <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                        <TouchableWithoutFeedback>
                            <View>
                                <Text style={{color: '#fff', fontWeight: 'bold', marginBottom: 6}}>
                                    {title}
                                </Text>
                                <Text style={{color: '#fff', marginBottom: 6}}>
                                    {created}
                                </Text>
                                <Text style={{color: '#fff'}}>
                                    {time}
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>    
                        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                            <FontAwesome5 name='trash-alt' color='#fff' size={18} style={{marginRight: 30}}/>
                            <FontAwesome5 name='play' color='#fff' size={18} style={{marginRight: 10}}/>                           
                        </View>
                    </View>
            </View>
        );
      }

      const renderItem = ({ item } : any) => (

        <Item 
          title={item.title}
          time={item.time}
          id={item.id}
          created={item.created}
        />
      );

      const [isFetching, setIsFetching] = useState(false);

        const onRefresh = () => {
            setIsFetching(true);
            //fetchStorys();
            setTimeout(() => {
            setIsFetching(false);
            }, 2000);
        }

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
                                    onPress={() => navigation.goBack()}
                                />
                                <Text style={styles.header}>
                                    My Recordings
                                </Text>
                            </View>
                        </View>  
                    </View>
                    
                <ScrollView style={styles.container}>
                    
                    <FontAwesome5 
                        name='book-reader'
                        color='#fff'
                        size={30}
                        style={{alignSelf: 'center', margin: 40}}
                    />

                   <TouchableWithoutFeedback onPress={() => {navigation.navigate('RecordAudio')}}>
                        <View style={[styles.button, {backgroundColor: '#f05161'}]}>
                            <Text style={styles.buttontext}>
                                Record an Audio Track
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <View style={{marginVertical: 20, alignSelf: 'center', width: '80%', height: 1, borderColor: '#fff', borderWidth: 0.5}}>
                    </View>

                    <FlatList 
                        data={Storys}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        extraData={true}
                        scrollEnabled={false}
                        refreshControl={
                            <RefreshControl
                            refreshing={isFetching}
                            onRefresh={onRefresh}
                            />
                        }
                        showsVerticalScrollIndicator={false}    
                        ListFooterComponent={ () => {
                            return (
                            <View style={{ marginBottom: 40, height:  120, alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{ color: 'white'}}>
                                    Load more
                                </Text>
                            </View>
                        );

                        }

                        }
                    />

  
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
        marginLeft: 20,
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