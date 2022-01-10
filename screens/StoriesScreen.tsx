import React, {useState} from 'react';
import { 
  StyleSheet, 
  Dimensions, 
  TouchableWithoutFeedback, 
  View, 
  Text, 
  Image,
  FlatList,
  ScrollView } 
  from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {LinearGradient} from 'expo-linear-gradient';

import genres  from '../data/dummygenre';
import {useNavigation} from '@react-navigation/native';

const AudioStoryHome = ({navigation} : any) => {

  const Item = ({genre, icon, iconcolor, boxcolor, source} : any) => {

    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback onPress = {() => navigation.navigate('GenreHome', {genre: genre})}>
        <View style={[styles.genrebox, {flexDirection: 'row', }]}>
            
            <Image
                source={{ uri: source}}
                style={{
                    width: '40%',
                    height: '100%',
                    borderRadius: 15,
                    position: 'absolute',
                    backgroundColor: 'blue',
                    left: 192
                }}
                //imageStyle={{ borderRadius: 15, resizeMode: 'contain',}}
            />
                <LinearGradient 
                colors={[boxcolor, boxcolor, boxcolor, boxcolor + '99']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={[styles.genrebox]}>
                        {/* <View style={{ 
                            borderBottomLeftRadius: 15, 
                            borderTopLeftRadius: 15,
                            backgroundColor: '#000000a5',
                            padding: 5,
                            height: 60,
                            width: 80,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <FontAwesome5 
                                name={icon}
                                color={iconcolor}
                                size={25}
                            />
                        </View> */}
                
                    <Text style={styles.genre}>
                    {genre}
                    </Text>
                </LinearGradient>
        </View>
        </TouchableWithoutFeedback>
    );
  }
    
  const renderItem = ({ item } : any) => (

    <Item 
        genre={item.genre}
        icon={item.icon}
        iconcolor={item.iconcolor}
        boxcolor={item.boxcolor}
        source={item.source}
    />
  );

    return (
        <View >
          <LinearGradient
            colors={['#363636','#2f217966', '#000']}
            //style={styles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
          <ScrollView>
          <View style={{    flexDirection: 'row', justifyContent: 'space-between', 
                            marginTop: 60, marginBottom: 20, marginHorizontal: 20}}>
            <View style={{ flexDirection: 'row'}}>
        
                <Text style={{ color: 'white', marginHorizontal: 0, fontSize: 22, fontWeight: 'bold'}}>
                    Discover Stories
                </Text>
            </View>
            
          </View>
        
            <View style={{ marginBottom: 20, marginHorizontal: 20, alignItems: 'center'}}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('SearchScreen')}>
                  <View style={{alignItems: 'center', paddingHorizontal: 10, borderRadius: 8, flexDirection: 'row', backgroundColor: '#e0e0e0', height: 35, width: Dimensions.get('window').width - 40}}>
                    <FontAwesome5 
                      name='search'
                      color='#000000a5'
                      size={18}
                    />
                  </View>
                </TouchableWithoutFeedback>
            </View>

            <View style={{ marginHorizontal: 20, height: '100%'}}>
              <View>
                <FlatList 
                    data={genres}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    scrollEnabled={false}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={ () => {

                        return (
                            <View style={{ marginTop: 20}}>
                                <Text style={styles.header}>
                                    Browse
                                </Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20}}>

                                    <TouchableWithoutFeedback onPress={() => navigation.navigate('BrowseAuthor')}>
                                        <View style={[styles.box, { backgroundColor: '#15c7ca'}]}>
                                            <FontAwesome5 
                                            name='book-open'
                                            color='#000000'
                                            size={30}
                                            />
                                            <Text style={styles.title}>
                                                Author
                                            </Text>
                                        </View>
                                    </TouchableWithoutFeedback>

                                    <TouchableWithoutFeedback onPress={() => navigation.navigate('BrowseNarrator')}>
                                        <View style={[styles.box, { backgroundColor: 'pink'}]}>
                                            <FontAwesome5 
                                                name='book-reader'
                                                color='#000000'
                                                size={30}
                                            />
                                            <Text style={styles.title}>
                                            Narrator
                                            </Text>
                                        </View>
                                    </TouchableWithoutFeedback>

                                </View>

                                <Text style={styles.header}>
                                    Genres
                                </Text>
                            </View>                           
                        );
                    }}
                    ListFooterComponent={ () => {
                        return (
                        <View style={{ height:  70, alignItems: 'center'}}>
                            
                        </View>
                        );
                    }}
                />
              </View>
            </View>
            </ScrollView>
        </LinearGradient>
      </View>
    );
}

const styles = StyleSheet.create ({
  title: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    textTransform: 'capitalize'
},
genre: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    paddingHorizontal: 20,
},
  header: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
},
box: {
    height: 100,
    width: 140,
    borderRadius: 15,
    marginVertical: 10,
    padding: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  genrebox: {
    height: 60,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    width: '100%'
  },
});

export default AudioStoryHome;
