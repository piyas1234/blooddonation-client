import AsyncStorage from '@react-native-async-storage/async-storage';

// get items
// get items
// get items

export const getMyStringValue = async key => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    console.log(e);
  }
};

export const getMyObject = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
};

// set items
// set items
// set items

export const setStringValue = async (key,value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
};

export const setObjectValue = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('key', jsonValue);
  } catch (e) {
    console.log(e);
  }
};

// remove items
// remove items
// remove items

export const removeValue = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log(e);
  }
};

export const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.log(e);
  }
};
