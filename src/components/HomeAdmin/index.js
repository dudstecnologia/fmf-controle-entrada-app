import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Alert
} from 'react-native';
import styles from './styles';
import api from '../../services/api';
import { Camera, useCameraDevice, NoCameraDeviceError, useCodeScanner } from 'react-native-vision-camera';

export default function HomeAdmin({ navigation }) {
  const device = useCameraDevice('back');

  const [showCamera, setShowCamera] = useState(false);
  const [qr, setQr] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getPermission() {
      const newCameraPermission = await Camera.requestCameraPermission();

      if (newCameraPermission == 'granted') {
        setShowCamera(true)
      }
    }
    getPermission();
  }, []);

  const checkValidUUID = (str) => {
    const regexExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
    return regexExp.test(str);
  }

  const codeScanner = useCodeScanner({
    codeTypes: ['qr'],
    onCodeScanned: (codes) => {
      if (codes && codes[0] && codes[0].value && checkValidUUID(codes[0].value)) {
        // console.log('UUID Válido: ' + codes[0].value)
        if (!qr) {
          setQr(codes[0].value)
          requestApi(codes[0].value)
        }
      } else {
        console.log('UUID Inválido')
      }
    }
  });

  const alertReadQr = (msg) => {
    Alert.alert('Atenção', msg, [
      {
        text: 'Ok',
        onPress: () => {
          setQr(null);
          setLoading(false);
        }
      }
    ]);
  };

  const requestApi = (qrCode) => {
    setLoading(true)

    api.get(`/readerQr/${qrCode}`)
    .then(({ data }) => {
      if (data.valid) {
        alertReadQr('Entrada Liberada')
      } else {
        alertReadQr('Ocorreu um erro')
      }
    })
    .catch((error) => {
      console.log(error.response)
      alertReadQr('Ocorreu um erro')
    });
  };

  if (device == null) {
    return <NoCameraDeviceError />
  }

  return (
    <SafeAreaView style={ styles.container }>
      {/* <TouchableOpacity style={[styles.buttomDefault, styles.buttonLogin]} onPress={ () => setShowCamera(true) }>
        <Text style={styles.buttomText}>Capturar QR Code</Text>
      </TouchableOpacity> */}

      <Camera
        device={device}
        isActive={showCamera}
        style={styles.camera}
        codeScanner={codeScanner}
      />

      <ActivityIndicator animating={loading} size="large" />
    </SafeAreaView>
  )
}
