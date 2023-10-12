import { StyleSheet, Dimensions } from 'react-native';
const { width }  = Dimensions.get('window');
import general from '../../styles/general'

const styles = StyleSheet.create({
  ...general,
  logo: {
    width: width,
    height: width * (500 / 1000)
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
  },
  textLogo: {
    color: '#fff',
    textAlign: 'right',
    padding: 30,
    fontSize: 25
  },
  buttonLogin: {
    marginLeft: '15%',
    marginRight: '15%'
  }
});

export default styles;
