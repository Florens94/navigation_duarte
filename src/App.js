import { Text, View, ActivityIndicator } from 'react-native';
import styles from './styles';
import { useFonts } from 'expo-font';
import AppNavigator from './navigation';

const App = () => {
  const [loaded] =useFonts({
    'EncondeSans-Medium': require('../assets/fonts/EncodeSans-Medium.ttf'),
    'EncodeSans-SemiBold': require('../assets/fonts/EcondeSans-SemiBold.ttf'),
    'EncondeSans-Regular': require('../assets/fonts/EncondeSans-Regular.ttf'),

  });

  if(!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size='large' color='#0000ff'/>
      </View>
    );
  }
  return <AppNavigator/>
}

export default App;
