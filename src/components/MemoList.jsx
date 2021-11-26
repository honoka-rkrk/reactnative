/* eslint-disable */
import React from "react";
import { StyleSheet, Text, View,TouchableOpacity,Alert,FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {shape,string,instanceOf,arrayOf} from 'prop-types';

import { dateToString } from "../utils";
export default function MemoList(props) {
  const {memos} = props;
  const navigation = useNavigation();

  function renderItem({item}){
    return(
      <TouchableOpacity
              key={item.id}
              style={styles.memoListItem}
              onPress={() => {navigation.navigate('MemoDetail',{id:item.id});}}
            >
              <View>
                <Text style={styles.memoListItemTitle} numberOfLines={1}>{item.bodyText}</Text>
                <Text style={styles.memoListItemData}>{dateToString(item.updatedAt)}</Text>
              </View>
              <TouchableOpacitystyle
                  style={styles.memoDelete}
                  onPress={() => {Alert.alert("Are you sure?");}}
              >
                <Feather name="x" size={16} color="#B0B0B0" />
              </TouchableOpacitystyle>
          </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={memos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        />
    </View>
  );
}

MemoList.propTypes = {
  memos:arrayOf(shape({
    id:string,
    bodyText:string,
    updatedAt:instanceOf(Date),
  })).isRequired,
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  memoListItem: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,0.15)",
  },

  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },

  memoListItemData: {
    fontSize: 12,
    lineHeight: 16,
    color: "#848484",
  },

  memoDelete:{
    padding: 8,
  }
});
