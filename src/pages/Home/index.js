import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native';
import styles from './styles';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeAdmin from '../../components/HomeAdmin';
import HomeBasic from '../../components/HomeBasic';

export default function Home({ navigation }) {
  const [type, setType] = useState(null);
  const [token, setToken] = useState(null);

  const getUserData = async () => {
    try {
      const typeUser = await AsyncStorage.getItem('type')
      const tokenUser = await AsyncStorage.getItem('token')

      setType(typeUser)
      setToken(tokenUser)
    } catch (e) {
      console.log('Erro ao ler as preferencias')
      console.log(e)
    }
  }

  useEffect(() => {
    getUserData()
	}, [])

  const validateComponent = () => {
    if (type) {
      if (type == 'Usuário') {
        return <HomeBasic></HomeBasic>
      } else {
        return <HomeAdmin></HomeAdmin>
      }
    } else {
      return <Text style={styles.textBody}>Aguarde...</Text>
    }
  }

  return (
    <SafeAreaView style={ styles.container }>
      <ScrollView>
        { validateComponent() }
      </ScrollView>
    </SafeAreaView>
  )
}
