import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Moment from 'moment';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {timeNow: this.timeNow()};
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                timeNow: this.timeNow(),
            });
        }, 1000);
    }

    timeNow() {
        return Moment().format('h:mm:s');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.timeNow}>{this.timeNow()}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    timeNow: {
        textShadowColor: '#0AAFE6',
        textShadowOffset: {
            width: 0,
            height: 0
        },
        textShadowRadius: 10,
        fontSize: 70,
        color: '#daf6ff'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
