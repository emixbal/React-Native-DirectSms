import React, { Component } from 'react';
import { View, Text, TouchableOpacity, PermissionsAndroid } from 'react-native';

import { NativeModules } from 'react-native';
var DirectSms = NativeModules.DirectSms;

class FormSMS extends Component {
    // sendDirectSms() {
    //     DirectSms.sendDirectSms('081231760922', 'This is a direct message');
    // }

    async sendDirectSms() {
        try {
            const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.SEND_SMS,
                {
                    title: 'YourProject App Sms Permission',
                    message:
                    'YourProject App needs access to your inbox ' +
                    'so you can send messages in background.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                DirectSms.sendDirectSms('081231760922', 'This is a direct message');
            } else {
                console.log('SMS permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.sendDirectSms()}>
                    <Text>send SMS</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default FormSMS;