import React, { memo } from "react";
import { Text } from "react-native";
import { Image } from "expo-image";

import Flex from "../shared/Flex";
import styles from "./styles";

import { useAppSelector } from "../../hooks";

const VenueFacilities = () => {
  const { venue } = useAppSelector((state) => state.venue);

  return (
    <Flex paddingY={12} gap={8}>
      <Text style={styles.subheader}>Facilites</Text>
      <Flex gap={0}>
        {venue?.facilities?.map(
          (facility: { name: string; icon: string }, idx: number) => (
            <Flex
              key={idx}
              direction="row"
              align="center"
              gap={12}
              paddingY={6}
              flex={1}
            >
              <Image
                source={{ uri: facility.icon }}
                style={styles.facilitiesIcon}
              />
              <Text style={styles.detailPoint}>{facility.name}</Text>
            </Flex>
          )
        )}
      </Flex>
    </Flex>
  );
};

export default memo(VenueFacilities);
