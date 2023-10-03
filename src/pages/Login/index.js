import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Login({ navigation }) {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: 100 }}>
            <Text>Login Screen</Text>
            <Button
                title="Ir Para Registro"
                onPress={() => navigation.navigate('register')}
            />
        </View>
    );
}
