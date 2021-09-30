import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Square from './Square';
import { useState } from 'react';
import { connect } from 'react-redux';

const GameBoard = (props) => {
    const [timeLeft, setTimeLeft] = useState(60)

    useEffect(() => {
        if (!timeLeft) return
        const timerId = setInterval(() => {
            //happens every 1000ms
            setTimeLeft(timeLeft - 1)
        }, 1000)
        return () => clearInterval(timerId)
    }, [timeLeft])

    return (
        <View style={styles.container}>
            <Text>Tanya's First Mobile App</Text>
            <Text>{timeLeft}</Text>
            <Text>{props.score}</Text>
            <View style={styles.game}>
                <Square></Square>
                <Square></Square>
                <Square></Square>
                <Square></Square>
                <Square></Square>
                <Square></Square>
                <Square></Square>
                <Square></Square>
                <Square></Square>
                <Square></Square>
                <Square></Square>
                <Square></Square>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    game: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 300,
        paddingTop: 20,
    }
});

const mapStateToProps = state => {
    return {
        score: state.score
    }
}

export default connect(mapStateToProps)(GameBoard);