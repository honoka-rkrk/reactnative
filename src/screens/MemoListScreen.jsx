/* eslint-disable */
import React from "react";
import { View, StyleSheet } from "react-native";

import AppBar from "../src/components/AppBar";
import MemoList from "../src/components/MemoList";
import CircleButton from "../src/components/CircleButton";

export default function MemoListScreen() {
  return (
    <View style={styles.container}>
      <AppBar />

      <MemoList />
      <CircleButton name="plus" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
  },
});
