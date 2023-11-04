import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native';
import styles from './styles';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({ navigation }) {

  const getUserData = async () => {
    try {
      const typeUser = await AsyncStorage.getItem('type')
      const tokenUser = await AsyncStorage.getItem('token')

      console.log('type', typeUser)
      console.log('token', tokenUser)

    } catch (e) {
      console.log('Erro ao ler as preferencias')
      console.log(e)
    }
  }

  return (
    <SafeAreaView style={ styles.container }>
      <ScrollView>
        <Text>Teste Home</Text>
        <TouchableOpacity style={[styles.buttomDefault, styles.buttonLogin]} onPress={ getUserData }>
          <Text style={styles.buttomText}>Teste</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}