import React, {useState} from 'react';
import {StatusBar, Button, SectionList, StyleSheet, Text, TouchableOpacity, View, TextInput} from 'react-native';
import { datasource } from './Data.js';
import { Picker } from '@react-native-picker/picker';

const Add = () => {
    let letter = '';
    return(
        <View>
            <Text>Letter:</Text>
            <TextInput
                style
            />
            <Picker onValueChange={(value) => console.log(value)}>
                <Picker.Item label='Vowels' value='Vowels'/>
                <Picker.Item label='Consonants' value='Consonants'/>
                <Button
                    onPress={() => {

                    }}
                    title='Submit'
                />
            </Picker>
        </View>
    );
};