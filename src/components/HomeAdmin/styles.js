import { StyleSheet, Dimensions } from 'react-native';
const { width }  = Dimensions.get('window');
import general from '../../styles/general';

const styles = StyleSheet.create({
  ...general,
  camera: {
    width: (width - 20),
    height: (width - 20)
  }
})

export default styles
