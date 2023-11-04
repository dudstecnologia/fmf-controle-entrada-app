import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  ImageBackground,
  View
} from 'react-native';
import styles from './styles';
import api from '../../services/api';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  function login() {
    setLoading(true)
    api.post('/login', { email: email, senha: password })
    .then((response) => {
      alert('Logado com sucesso')
      console.log(response.data)
    })
    .catch((error) => {
      alert('Ocorreu um erro ao logar')
      console.log(error.response)
    })
    .then(() => {
      setLoading(false)
    })
  }

  return(
    <SafeAreaView>
      <ScrollView>
        <ImageBackground source={ require('../../assets/img/logologin.png') } resizeMode="cover" style={styles.logo}>
          <Text style={styles.textLogo}>Auto Security</Text>
        </ImageBackground>

        <View style={styles.container}>
          <TextInput
            style={styles.inputDefault}
            onChangeText={setEmail}
            value={email}
            placeholder='Email'
            placeholderTextColor="#BDBDBD" 
          />

          <TextInput
            style={styles.inputDefault}
            secureTextEntry={true}
            onChangeText={setPassword}
            value={password}
            placeholder='Senha'
            placeholderTextColor="#BDBDBD" 
          />

          <ActivityIndicator animating={loading} size="large" />

          <TouchableOpacity style={[styles.buttomDefault, styles.buttonLogin]} onPress={ login }>
            <Text style={styles.buttomText}>Entrar</Text>
          </TouchableOpacity>

          <Text style={styles.textOr}>ou</Text>

          <Text style={styles.textCreateRegister} onPress={()=> navigation.navigate('register')}>
              Faça seu registro
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
