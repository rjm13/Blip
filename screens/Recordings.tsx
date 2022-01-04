import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions, TouchableWithoutFeedback, FlatList, RefreshControl} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Modal, Portal, Provider } from 'react-native-paper';

import { format, parseISO } from "date-fns";

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

      const [SavedAudio, setSavedAudio] = useState([''])

      const [isSaved, setIsSaved] = useState(false);

      const [removedItem, setRemovedItem] = useState('');

      const [playItem, setPlayItem] = useState();

      useEffect(() => {
        const LoadKeys = async () => {
            let saved = await AsyncStorage.getAllKeys();
    
            if (saved != null) {
                let result = saved.filter((item) => item.includes("recording"));
                setSavedAudio(result);
            } 
        }
        LoadKeys();
    
    }, [isSaved])

//set the player modal state
        const [visiblePlayModal, setVisiblePlayModal] = useState(false);
  
        const showPlayModal = () => setVisiblePlayModal(true);
    
        const hidePlayModal = () => setVisiblePlayModal(false);
    
        const playModalContainerStyle = {backgroundColor: 'transparent', padding: 20};

//remove an item from asyncstorage function
    //set the modal state
    const [visibleRemoveModal, setVisibleRemoveModal] = useState(false);
  
    const showRemoveModal = () => setVisibleRemoveModal(true);

    const hideRemoveModal = () => setVisibleRemoveModal(false);

    const removeModalContainerStyle = {backgroundColor: 'transparent', padding: 20}; 

    //remove the item
    const RemoveAudio = async () => {
        try {
          await AsyncStorage.removeItem(removedItem);
        } catch(e) {
          // remove error
        }
        try {
            let object = await AsyncStorage.getItem(removedItem);
            let objs = object ? JSON.parse(object) : null
            await AsyncStorage.removeItem(objs.id);
        }
        catch(e) {
            // read error
        }
        setIsSaved(!isSaved);
        hideRemoveModal();
    }


      const Item = ({item} : any) => {

        let [itemtitle, setitemtitle] = useState('');
        let [itemtime, setitemtime] = useState('');
        let [itemcreated, setitemcreated] = useState(new Date());
        let [itemid, setitemid] = useState('');

        useEffect(() => {
            let componentMounted = true;
            const fetchData = async () => {
                try {
                    let object = await AsyncStorage.getItem(item);
                    let objs = object ? JSON.parse(object) : null
                    if(componentMounted) {
                    setitemtitle(objs.title);
                    setitemtime(objs.time);
                    setitemcreated(parseISO(objs.created));
                    setitemid(objs.id);
                }
                } catch(e) {
                    // read error
                }
                
            };
            fetchData();
            return () => {
            componentMounted = false;
            }
        }, []);

        return(
            <View style={{marginBottom: 20, padding: 10, width: '90%', backgroundColor: '#363636', alignSelf: 'center', borderRadius: 10}}>
                    <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                        <TouchableWithoutFeedback>
                            <View>
                                <Text style={{color: '#fff', fontWeight: 'bold', marginBottom: 6}}>
                                    {itemtitle}
                                </Text>
                                <Text style={{color: '#fff', marginBottom: 6, fontSize: 12}}>
                                    {format(itemcreated, "MMM do yyyy")}
                                </Text>
                                <Text style={{color: '#fff', fontSize: 12}}>
                                    {itemtime}
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>    
                        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                            <FontAwesome5 
                                name='trash-alt' 
                                color='#fff' size={18} 
                                style={{marginRight: 30}} 
                                onPress={() => {showRemoveModal(); setRemovedItem(item);}}
                            />
                            <FontAwesome5 
                                name='play' 
                                color='#fff' 
                                size={18} 
                                style={{marginRight: 10}}
                                onPress={() => {showPlayModal(); setPlayItem(item);}}
                            />                           
                        </View>
                    </View>
            </View>
        );
      }

      const renderItem = ({ item } : any) => (

        <Item 
          item={item}
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
        <Provider>
            <Portal>
{/* Confirm Delete Modal */}
                <Modal visible={visibleRemoveModal} onDismiss={hideRemoveModal} contentContainerStyle={removeModalContainerStyle}>
                    <View style={{ padding: 20, backgroundColor: '#363636', borderRadius: 15,}}>
                        <View style={{ alignItems: 'center', marginVertical: 40}}>
                            <Text style={{fontSize: 16, textAlign: 'center', color: '#fff'}}>
                                Are you sure you want to delete this track?
                            </Text>
                        </View>
                        <View style={{ alignItems: 'center'}}>
                            <TouchableWithoutFeedback onPress={RemoveAudio}>
                                <View style={{ width: 120, height: 40, borderRadius: 25, backgroundColor: 'cyan', alignItems: 'center', justifyContent: 'center'}}>
                                    <Text style={{color: '#000', fontSize: 16, textAlign: 'center', fontWeight: 'bold'}}>
                                        Delete
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </Modal>
{/* audio player modal */}
                <Modal visible={visiblePlayModal} onDismiss={hidePlayModal} contentContainerStyle={playModalContainerStyle}>
                    <View style={{ padding: 20, backgroundColor: '#363636', borderRadius: 15,}}>
                        <View style={{ alignItems: 'center', marginVertical: 40}}>
                            <Text style={{fontSize: 16, textAlign: 'center', color: '#fff'}}>
                                {playItem}
                            </Text>
                        </View>
                        <View style={{ alignItems: 'center'}}>
                            
                        </View>
                    </View>
                </Modal>
            </Portal>
        
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
                        data={SavedAudio}
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
        </Provider>
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