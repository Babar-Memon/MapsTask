import React, { memo } from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const CustomMarker = ({ title }: { title: string }) => {
  return (
    <View style={styles.container}>
      <View style={styles.bubble}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.arrowBorder} />
      <View style={styles.arrow} />
    </View>
  );
};

export default memo(CustomMarker);
