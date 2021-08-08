import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function ({ item, pressHandler }) {
  return ( <TouchableOpacity onPress={()=> pressHandler(item.key)}>
      <Text style={styles.item}>{item.text}
      </Text>
    </TouchableOpacity>
  )
    
};

const styles = StyleSheet.create({
    item: {
        padding: 12,
        marginTop: 12,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    }
})
