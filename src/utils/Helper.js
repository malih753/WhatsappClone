import storage from '@react-native-firebase/storage';
import DeviceInfo from 'react-native-device-info';
export const getImage = async filepath => {
  try {
    const url = await storage().ref(filepath).getDownloadURL();
    return url;
  } catch (error) {
    console.log('Error getting image URL:', error);
    return null;
  }
};

export const getDeviceId = () => {
  try {
    const uniqueId = DeviceInfo.getUniqueId();
    return uniqueId;
  } catch (error) {
    console.log('Erro geeting device', error);
    throw error;
  }
};
