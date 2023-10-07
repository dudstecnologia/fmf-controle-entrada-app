import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import styles from './styles';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  return(
    <SafeAreaView style={ styles.container }>
      <ScrollView>
        {/* <ImageBackground source={ require('../../assets/img/logologin.png') } resizeMode="contain" style={styles.logo}>
          <Text>Auto Security</Text>
        </ImageBackground> */}

        <ActivityIndicator animating={loading} size="large" />

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

        <TouchableOpacity style={styles.buttomDefault} onPress={ () => alert("OK")}>
          <Text style={styles.buttomText}>Entrar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
