import React, { memo } from "react";
import { Text } from "react-native";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { Image } from "expo-image";

import styles from "./styles";

import Flex from "../shared/Flex";
import { useAppSelector } from "../../hooks";

const VenueMediaCarousel = () => {
  const { venue } = useAppSelector((state) => state.venue);

  return (
    <>
      <Flex paddingB={12}>
        <Text style={styles.subheader}>Photos</Text>
      </Flex>
      <BottomSheetFlatList
        data={venue?.media}
        keyExtractor={(item: any) => item?.id}
        renderItem={({ item }: any) => {
          if (item?.media_type?.toLowerCase() === "image") {
            return (
              <Image
                source={{ uri: item?.media_url }}
                style={styles.mediaImage}
                contentFit="cover"
              />
            );
          } else {
            return null;
          }
        }}
        horizontal
      />
    </>
  );
};

export default memo(VenueMediaCarousel);
