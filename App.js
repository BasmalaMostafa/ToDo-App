import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ColorBoxes from './Components/Task1/ColorBoxes';
import Contacts from './Components/Task2/Contacts';
import ToDo from './Components/Task3/todo';



export default function App() {
  return (
    <>
      {/* <ColorBoxes></ColorBoxes> */}
      {/* <Contacts></Contacts> */}
      <ToDo></ToDo>
      <StatusBar style="auto" hidden/>
    </>
  );
}
 