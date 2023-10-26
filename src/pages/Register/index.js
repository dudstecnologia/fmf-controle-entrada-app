import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native';
import styles from './styles';
import api from '../../services/api';

export default function Register({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [document, setDocument] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  function request() {
    setLoading(true)
    api.post('/users/register', {
      nome: name,
      email: email,
      senha: password,
      tipo: 0,
      adicional1: "",
      adicional2: "",
      adicional3: "",
      adicional4: "",
      adicional5: "",
      biometria: 0
    })
    .then((response) => {
      alert('Registrado com sucesso')
      navigation.goBack()
    })
    .catch((error) => {
      alert('Ocorreu um erro ao registrar')
      console.log(error.response)
    })
    .then(() => {
      setLoading(false)
      console.log('Finalizou independente de sucesso ou erro')
    })
  }

  return(
    <SafeAreaView style={ styles.container }>
      <ScrollView>
        <TextInput
            style={styles.input}
            onChangeText={setName}
            value={name}
            placeholder='Nome'
            placeholderTextColor="#BDBDBD" 
        />

        <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder='Email'
            placeholderTextColor="#BDBDBD" 
        />

        <TextInput
            style={styles.input}
            onChangeText={setDocument}
            value={document}
            placeholder='Documento'
            placeholderTextColor="#BDBDBD" 
        />

        <TextInput
            style={styles.input}
            secureTextEntry={true}
            onChangeText={setPassword}
            value={password}
            placeholder='Senha'
            placeholderTextColor="#BDBDBD" 
        />
        <TouchableOpacity style={styles.buttomDefault} onPress={ () => request()}>
          <Text style={styles.buttomText}>Registrar</Text>
        </TouchableOpacity>

        <ActivityIndicator animating={loading} size="large" />
      </ScrollView>
    </SafeAreaView>
  )
}
