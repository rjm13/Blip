import React, {useState, useEffect} from 'react';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback, FlatList } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Searchbar } from 'react-native-paper';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {LinearGradient} from 'expo-linear-gradient';

import AudioStoryFlatList from '../components/AudioStoryFlatList';
import FollowingList from '../components/FollowingList';
//import FollowersList from '../components/FollowingList';

import { API, graphqlOperation, Auth } from "aws-amplify";
import { getUser } from '../src/graphql/queries';
import { listUsers } from '../src/graphql/queries';

import {useNavigation, useRoute} from '@react-navigation/native';


const FollowingScreen = ({navigation} : any) => {

    const [ users, setUsers ] = useState([]);

    useEffect( () => {
        const fetchUsers = async () => {

            const userInfo = await Auth.currentAuthenticatedUser();


            try {
                const usersData = await API.graphql(
                    graphqlOperation(
                        listUsers
                    )
                )
                setUsers(usersData.data.listUsers.items);
            } catch (e) {
                console.log(e);
            }
        }
        fetchUsers();
    },[])

    const [user, setUser] = useState({})

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

    const [SelectedId, setSelectedId] = useState(1);

    const Item = ({ pseudonym, imageUri, id, bio, following, authored, isPublisher } : any) => {

        //const navigation = useNavigation();
    
        const [ShowModalThing, setShowModalThing] = useState(false);
    
        return (
            <View style={styles.tile}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('UserScreen', {userID: id})}>
                        <View style={{ flexDirection: 'row'}}>
                            <Image 
                                source={{ uri: imageUri}}
                                style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: 25,
                                    backgroundColor: 'cyan'
                                }}
                            />
                        
                            <View style={{ marginHorizontal: 10}}>
                                <Text style={styles.name}>
                                    {pseudonym}
                                </Text> 
                                
                                
                                <View style={{ flexDirection: 'row', marginTop: 4, alignItems: 'center'}}>
                                    {/* <FontAwesome5 
                                        name='book-open'
                                        size={12}
                                        color='#ffffffa5'
                                        style={{ marginRight: 5}}
                                    />
                                    <Text style={styles.userId}>
                                        0
                                    </Text>   */}
                                    <FontAwesome5 
                                        name='book-reader'
                                        size={12}
                                        color='#ffffffa5'
                                        style={{ marginRight: 5}}
                                    />
                                    <Text style={styles.userId}>
                                        {authored.length ? authored.length : 0}
                                    </Text> 
                                </View> 
                            </View>
                        </View>
                    </TouchableWithoutFeedback>    
    
                    <TouchableWithoutFeedback onPress={() => {setShowModalThing(!ShowModalThing)}}>
                        <View style={{ backgroundColor: 'transparent', width: 40, alignItems: 'flex-end' }}>
                            <AntDesign
                                name={'ellipsis1'}
                                size={20}
                                color='white'
                            />
                        </View>
                    </TouchableWithoutFeedback>
                </View>    
    
                    
    
                <View style={{marginTop: 10, marginHorizontal: 5}}>
                    <Text style={{color: "#fff", fontSize: 12, }}>
                        {bio}
                    </Text>
                </View>
    
                {ShowModalThing === true ? (
                        
                        <View style={{ backgroundColor: '#484848', borderColor: 'black', borderRadius: 5, borderWidth: 0, position: 'absolute', right: 40, top: 30, alignSelf: 'flex-end'}}>
                            <TouchableWithoutFeedback onPress={() => {}} >
                                <Text style={{color: '#fff', padding: 10}}>
                                    Unfollow
                                </Text>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() => {}} >
                                <Text style={{color: '#fff', padding: 10}}>
                                    View Profile
                                </Text>
                            </TouchableWithoutFeedback>
                        </View>
                    
                ) : null}
               
            </View>
        );
    }
    
    const renderItem = ({ item }) => (
    
        <Item 
            //user={item}
            name={item.name}
            id={item.id}
            pseudonym={item.pseudonym}
            imageUri={item.imageUri}
            //narrations={item.narrations.length}
            authored={item.authored}
            bio={item.bio}
            following={item.following}
            isPublisher={item.isPublisher}
        />
      );

    return (
        <View >
        <LinearGradient
        colors={['#363636', 'black', 'black']}
        //style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
          
          <View>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 60, marginHorizontal: 20}}>
                  <FontAwesome5 
                    name='chevron-left'
                    color='#fff'
                    size={20}
                    onPress={ () => navigation.goBack()}
                  />

              
            <View style={{ 
                flexDirection: 'row', 
                justifyContent: 'flex-start', 
                width: '100%', 
                alignItems: 'flex-end',
                marginHorizontal: 20,
                //height: 50,
                }}>
        
                <TouchableWithoutFeedback onPress={() => setSelectedId(1)}>
                    <Text style={{ 
                        color: SelectedId ===  1 ? '#fff' : '#ffffffa5',
                        marginHorizontal: 15, 
                        fontSize: SelectedId ===  1 ? 22 : 17,
                        fontWeight: SelectedId === 1 ? 'bold' : 'normal',
                        borderBottomColor: '#fff',
                        //borderBottomWidth: SelectedId ===  1 ? 1 : 0,
                    }}>
                        Following
                    </Text>
                </TouchableWithoutFeedback>

                {user?.isPublisher === true ? (
                    <TouchableWithoutFeedback onPress={() => setSelectedId(2)}>
                        <Text style={{ 
                            color: SelectedId ===  2 ? '#fff' : '#ffffffa5',
                            marginHorizontal: 15, 
                            fontSize: SelectedId ===  2 ? 22 : 17,
                            fontWeight: SelectedId === 2 ? 'bold' : 'normal'
                        }}>
                            Followers
                        </Text>
                    </TouchableWithoutFeedback>
                ) : null}
                

                {/* <TouchableWithoutFeedback onPress={() => setSelectedId(3)}>
                    <Text style={{ 
                        color: SelectedId ===  3 ? '#fff' : '#ffffffa5',
                        marginHorizontal: 15, 
                        fontSize: SelectedId ===  3 ? 22 : 17,
                        fontWeight: SelectedId === 3 ? 'bold' : 'normal'
                    }}>
                        
                    </Text>
                </TouchableWithoutFeedback> */}

                {/* <TouchableWithoutFeedback onPress={() => setSelectedId(4)}>
                    <Text style={{ 
                        color: SelectedId ===  4 ? '#fff' : '#ffffffa5',
                        marginHorizontal: 15, 
                        fontSize: SelectedId ===  4 ? 22 : 17,
                        fontWeight: SelectedId === 4 ? 'bold' : 'normal'
                    }}>                        
                        
                    </Text>
                </TouchableWithoutFeedback> */}
            </View>
            </View>
            
          </View>
        
            {/* <View>
                {renderElement()}
            </View> */}
            {SelectedId === 1 ? (
                <View style={{ alignItems: 'center', marginTop: 20, height: '86%'}}>
                    <FlatList
                        style={{ width: '100%' }}
                        data={users}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        //extraData={true}
                    />
                </View>
            ) : SelectedId === 2 && user?.isPublisher === true ? (
                <View style={{ alignItems: 'center', marginTop: 20, height: '86%'}}>
                    {/* <FollowersList /> */}
                </View>
            ) : null}
            
           
            
        
        </LinearGradient>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width, 
     },
     tile: {
         backgroundColor: '#383838a5',
         marginHorizontal: 20,
         marginVertical: 10,
         padding: 20,
         borderRadius: 15,
     },
     name: {
         fontSize: 16,
         fontWeight: 'bold',
         color: '#fff',
     },
     userId: {
         fontSize: 12,
         color: '#ffffffa5',
         marginRight: 15,
         marginLeft: 5,
     },
     popupblock: {
         marginTop: 10,
     },
     paragraph: {
         color: '#ffffffa5'
     },
     playbutton: {
         borderWidth: 0.3,
         paddingHorizontal: 15,
         paddingVertical: 3,
         borderRadius: 15,
         borderColor: '#fff',
         color: '#fff',
     },
     time: {
         fontSize: 16,
         fontWeight: 'normal',
         color: '#ffffffa5',
     },
     category: {
         fontSize: 12,
         color: 'cyan',
         fontStyle: 'italic',
         marginVertical: 3,
 
     },
});

export default FollowingScreen;
