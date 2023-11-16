import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, ActivityIndicator, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import api from '../../services/api';
import Share from 'react-native-share';
import QRCode from 'react-native-qrcode-svg';

export default function HomeBasic({ navigation }) {
  let svg = null

  saveQRCode = () => {
    svg.toDataURL(this.callback);
  };

  callback = (dataURL) => {
    let shareImageBase64 = {
      title: 'Auto Security',
      url: `data:image/png;base64,${dataURL}`,
      subject: 'Auto Security',
    }

    Share.open(shareImageBase64).catch(error => console.log(error));
  }

  return (
    <View>
      <Text style={styles.textBody}>Home Basic</Text>
      <TouchableOpacity style={[styles.buttomDefault, styles.buttonLogin]} onPress={ () => saveQRCode() }>
        <Text style={styles.buttomText}>Enviar QR Code</Text>
      </TouchableOpacity>
      <QRCode
        value="37759871-6e7b-416e-8d6b-72b9c03f5b23"
        quietZone={5}
        getRef={(c) => (svg = c)}
      />
    </View>
  )
}
