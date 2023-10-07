import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native';
import styles from './styles';
import axios from 'axios';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [document, setDocument] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  function request() {
    setLoading(true)
    axios.post('https://eopdahzuiwn9xbu.m.pipedream.net/', {
      name, email, document, password
    })
    .then((response) => {
      console.log('Passou em sucesso')
    })
    .catch((error) => {
      console.log('Passou em erro')
    })
    .then(() => {
      setLoading(false)
      console.log('Finalizou independente de sucesso ou erro')
    })
  }

  return(
    <SafeAreaView style={ styles.container }>
      <ScrollView>
        <ActivityIndicator animating={loading} size="large" />
        <Text style={styles.textBody}>
            Email: { email }
        </Text>

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
        <TouchableOpacity style={styles.buttomDefault} onPress={ () => alert("OK")}>
          <Text style={styles.buttomText}>Registrar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}
