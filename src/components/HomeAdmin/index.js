import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import api from '../../services/api';
import { Camera, useCameraDevice, NoCameraDeviceError } from 'react-native-vision-camera';

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
      />
    </SafeAreaView>
  )
}
