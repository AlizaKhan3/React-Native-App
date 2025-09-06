// import { NewAppScreen } from '@react-native/new-app-screen';
import { View, Text } from 'react-native';
import AppNavigation from "./AppNavigation"
import Toast from 'react-native-toast-message';

function App() {
  return (
    //  <View>
    //   {/* <Text style={{paddingHorizontal: 9, paddingVertical: 30}}>ALIZA KHAN</Text> */}
    //  </View>
    <>
      <AppNavigation />
      <Toast />
    </>
  );
}
export default App;