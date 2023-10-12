import { StyleSheet } from 'react-native';
import general from '../../styles/general'

const styles = StyleSheet.create({
  ...general,
  logo: {
    width: 100,
  },
  textOr: {
    marginTop: 20,
    color: '#757575',
    fontSize: 15,
    textAlign: 'center'
  },
  textCreateRegister: {
    marginTop: 20,
    color: '#00796B',
    fontSize: 20,
    textAlign: 'center'
  }
});

export default styles;
