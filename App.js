//import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Platform,
  StatusBar,
  FlatList,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Text</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
