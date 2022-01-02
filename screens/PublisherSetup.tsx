import React, {useState, useCallback} from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback, Platform, Dimensions, TouchableOpacity, TextInput, ScrollView} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';

import { LinearGradient } from 'expo-linear-gradient';
import ModalDropdown from 'react-native-modal-dropdown';

import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from "date-fns";




const PublishingMain = ({navigation} : any) => {

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    const [Gender, setGender] = useState(['Male', 'Female']);

    const [data, setData] = useState({
        username: '',
        name: '',
        check_textInputChange: false,
    });

    const textInputChange = (val : any) => {
        if( val.length !== 0 ) {
            setData({
                ... data,
                username: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ... data,
                name: val,
                check_textInputChange: false
            });
        }
    }

    return(
        <View>
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
                            Publisher Setup
                        </Text>
                    </View>
                </View>  
            </View>

            <ScrollView>

                <View style={{marginTop: 40}}>
                    <Text style={styles.inputheader}>
                        Pseudonym
                    </Text>
                    <View style={styles.inputfield}>
                        <TextInput 
                            placeholder='....'
                            placeholderTextColor='#ffffffa5'
                            style={styles.textInputTitle}
                            maxLength={30}
                            onChangeText={(val) => textInputChange(val)}
                            autoCapitalize='none'
                        />
                    </View>
                </View>

                <View style={{marginTop: 40}}>
                    <Text style={styles.inputheader}>
                        Birth Date
                    </Text>
                    <TouchableWithoutFeedback onPress={showDatepicker}>
                        <View style={styles.inputfield}>
                            <Text style={styles.textInputTitle}>
                                {format(date, "MMMM do, yyyy")}
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode='date'
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                        />
                    )}
                </View>

                <View style={{marginTop: 40}}>
                    <Text style={styles.inputheader}>
                        Birth Date
                    </Text>
                    
                </View>
                
            </ScrollView>

        </View>
    
    )
};

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
        marginLeft: 20
    },
    inputheader: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20,
        marginBottom: 10
    },
    textInputTitle: {
        color: '#fff',
        fontWeight: 'normal',
    },
    inputfield: {
        width: '90%',
        height: 40,
        backgroundColor: '#363636',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
});

export default PublishingMain;