import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native';
import styles from './styles';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeBasic({ navigation }) {
  return (
    <Text style={styles.textBody}>Home Basic</Text>
  )
}
