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

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  return(
    <SafeAreaView>
      <ScrollView>
        <ImageBackground source={ require('../../assets/img/logologin.png') } resizeMode="cover" style={styles.logo}>
          <Text style={styles.textLogo}>Auto Security</Text>
        </ImageBackground>

        <ActivityIndicator animating={loading} size="large" />

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

          <TouchableOpacity style={[styles.buttomDefault, styles.buttonLogin]} onPress={ () => alert("OK")}>
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
