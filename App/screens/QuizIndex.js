import React from 'react';
import { View, Button, StatusBar } from 'react-native';

import nepaliFootball from '../data/nepaliFootball';
import nepaliCricket from '../data/nepaliCricket';

import { RowItem } from '../components/RowItem';
import { ScrollView } from 'react-native-gesture-handler';

export default ({ navigation }) => (
    <ScrollView>
        <View>
            <StatusBar barStyle='dark-content' />
            <RowItem
                color="#36baf0"
                name="Nepali Football"
                onPress={() => navigation.navigate('Quiz', {
                    title: 'Nepali Football',
                    questions: nepaliFootball,
                    color: '#36baf0'
                })}
            />
            <RowItem
                color="#990000"
                name="Nepali Cricket"
                onPress={() => navigation.navigate('Quiz', {
                    title: 'Nepali Cricket',
                    questions: nepaliCricket,
                    color: '#990000'
                })}
            />
        </View>
    </ScrollView>
);