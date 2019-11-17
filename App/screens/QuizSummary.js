import React from 'react';

import { View, Text, TouchableOpacity, StatusBar, SafeAreaView, StyleSheet } from 'react-native';

import { Button, ButtonContainer } from '../components/Button';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#36B1F0',
        flex: 1,
        paddingHorizontal: 20,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 25,
        textAlign: 'center',
        letterSpacing: -0.02,
        fontWeight: '600',
    },
    otherQuiz: {
        flex: 2,
    }
})
export default class QuizSummary extends React.Component {
    render() {
        const correctCount = this.props.navigation.getParam('correctCount');
        const totalCount = this.props.navigation.getParam('totalCount');
        return (
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <Text style={styles.text}> You answered {correctCount} out of {totalCount} </Text>
                    <ButtonContainer>
                        <Button onPress={() => this.props.navigation.popToTop()} text="Other quizzes?" />
                    </ButtonContainer>
                </SafeAreaView>
            </View >
        )
    }
}