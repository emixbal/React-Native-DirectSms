import React, { Component } from 'react';
import {View, Text} from 'react-native';

import FormSMS from "./src/screens/FormSMS";


class App extends Component{
    render(){
        return(
            <View>
                <FormSMS />
            </View>
        )
    }
}

export default App;