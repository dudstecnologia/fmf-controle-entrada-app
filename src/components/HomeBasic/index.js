import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';
import styles, { logoFmf } from './styles';
import api from '../../services/api';
import Share from 'react-native-share';
import QRCode from 'react-native-qrcode-svg';

export default function HomeBasic({ navigation }) {
  let qrCode = null;
  const [qrApi, setQrApi] = useState(null);

  generateQr = (uniqueAccess) => {
    api.post('/cards/register', { acesso_unico: uniqueAccess })
    .then(({ data }) => {
      console.log(data)
      if (data.qr) {
        setQrApi(data.qr)
      } else {
        alert('Ocorreu um erro ao gerar o Qr Code')
      }
    })
    .catch((error) => {
      alert('Ocorreu um erro ao gerar o Qr Code')
      console.log(error.response)
    })
  };

  alertGenerate = () => {
    qrCode = null
    setQrApi(null)

    Alert.alert('Atenção', 'Qual o tipo de acesso você deseja gerar?', [
      {
        text: 'Cancelar',
        onPress: () => console.log('Nada selecionado')
      },
      {
        text: 'Acesso Único',
        onPress: () => generateQr(1),
      },
      {
        text: 'Acesso Permanente',
        onPress: () => generateQr(0),
        style: 'cancel',
      }
    ]);
  };

  saveQRCode = () => {
    qrCode.toDataURL(this.callback);
  };

  callback = (dataURL) => {
    let shareImageBase64 = {
      title: 'Auto Security',
      url: `data:image/png;base64,${dataURL}`,
      subject: 'Auto Security',
    };

    Share.open(shareImageBase64).catch(error => console.log(error));
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <TouchableOpacity style={styles.buttomDefault} onPress={ alertGenerate }>
          <Text style={styles.buttomText}>Gerar QR Code</Text>
        </TouchableOpacity>

        {
          !qrApi ? <View></View> : <>
              <View style={styles.containerQr}>
                <QRCode
                  value={qrApi}
                  size={300}
                  quietZone={5}
                  logo={{uri: logoFmf}}
                  getRef={(c) => (qrCode = c)}
                />

                <TouchableOpacity style={styles.buttomDefault} onPress={ () => saveQRCode() }>
                  <Text style={styles.buttomText}>Enviar QR Code</Text>
                </TouchableOpacity>
              </View>
            </>
        }
      </ScrollView>
    </SafeAreaView>
  )
}
