import { StyleSheet, Dimensions } from 'react-native';
const { width }  = Dimensions.get('window');
import general from '../../styles/general';

const styles = StyleSheet.create({
  ...general,
  camera: {
    width: (width - 20),
    height: (width - 20),
    marginTop: 10
  }
})

export default styles
