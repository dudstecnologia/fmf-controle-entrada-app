import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Text } from "@react-native-material/core";
import { Button } from "@react-native-material/core";
import styles from './styles'

export default function Register() {
    return(
        <SafeAreaView style={ styles.container }>
            <ScrollView>
                <Text variant="body1">
                    Register Screen
                </Text>

                <Button title="Click Me" onPress={() => alert("Hello")}/>
            </ScrollView>
        </SafeAreaView>
    )
}
