'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    ActivityIndicator,
    Image,
} from 'react-native';


export default class SearchPage extends Component<{}>{

    constructor(props) {
        super(props);
        this.state = {
            searchString: 'london'
        }
    }

    _onSearchTextChanged = (event) => {
        console.log('_onSearchTextChanged');
        this.setState({ searchString: event.nativeEvent.text });
        console.log('Current: ' + this.state.searchString + ', Next: ' + event.nativeEvent.text);
    }

    render() {
        console.log('SearchPage.render')
        return (
            <View style={styles.container}>
                <Text style={styles.description}>
                    Search for houses to buy!
                </Text>
                <Text style={styles.description}>
                    Search by place-name or postcode.
                </Text>

                <View style={styles.flowRight}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder='Search via name or postcode'
                        value={this.state.searchString}
                        onChange={this._onSearchTextChanged}
                    />
                    <Button
                        onPress={() => { }}
                        color='#48BBEC'
                        title='Go'
                    />
                </View>

                <Image
                    source={require('./Resources/house.png')}
                    style={styles.image} />
            </View>
        )
    };
}

const styles = StyleSheet.create({
    description: {
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 18,
        color: '#656565'
    },
    container: {
        padding: 30,
        marginTop: 65,
        alignItems: 'center'
    },
    flowRight: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch'
    },
    searchInput: {
        height: 36,
        padding: 4,
        marginRight: 5,
        flexGrow: 1,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 8,
        color: '#48BBEC',
    },
    image: {
        width: 217,
        height: 138
    }
});