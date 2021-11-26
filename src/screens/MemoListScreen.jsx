/* eslint-disable */
import React from "react";
import { View, StyleSheet } from "react-native";

import MemoList from "../src/components/MemoList";
import CircleButton from "../src/components/CircleButton";

export default function MemoListScreen(props) {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <MemoList />
      <CircleButton
      name="plus"
      onPress={() => {navigation.navigate('MemoCreate');}}
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
  },
});
