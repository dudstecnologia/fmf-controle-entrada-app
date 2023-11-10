import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import api from '../../services/api';
import { Camera, useCameraDevice, NoCameraDeviceError, useCodeScanner } from 'react-native-vision-camera';

export default function HomeAdmin({ navigation }) {
  const device = useCameraDevice('back');

  const [showCamera, setShowCamera] = useState(false);

  useEffect(() => {
    async function getPermission() {
      const newCameraPermission = await Camera.requestCameraPermission();

      if (newCameraPermission == 'granted') {
        // setShowCamera(true)
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
        console.log('UUID Válido: ' + codes[0].value)
      } else {
        console.log('UUID Inválido')
      }
    }
  })

  if (device == null) {
    return <NoCameraDeviceError />
  }

  return (
    <SafeAreaView style={ styles.container }>
      <TouchableOpacity style={[styles.buttomDefault, styles.buttonLogin]} onPress={ () => setShowCamera(true) }>
        <Text style={styles.buttomText}>Capturar QR Code</Text>
      </TouchableOpacity>
      <Camera
        device={device}
        isActive={showCamera}
        style={styles.camera}
        codeScanner={codeScanner}
      />
    </SafeAreaView>
  )
}
