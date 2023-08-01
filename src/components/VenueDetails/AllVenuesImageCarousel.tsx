import React, { memo } from "react";
import Carousel from "pinar";
import { Image } from "expo-image";

import styles from "./styles";

import { useAppSelector } from "../../hooks";

type AllVenuesImageCarouselProps = {
  handleIndexChange: (index: number) => void;
};

const AllVenuesImageCarousel = ({
  handleIndexChange,
}: AllVenuesImageCarouselProps) => {
  const { allVenues, venue } = useAppSelector((state) => state.venue);

  return (
    <Carousel
      showsControls={false}
      showsDots={false}
      horizontal
      style={{ height: 200 }}
      onMomentumScrollEnd={(event) => {
        const index = Math.round(event.nativeEvent.contentOffset.x / 300);
        handleIndexChange(index);
      }}
      index={allVenues.indexOf(venue)}
    >
      {allVenues.map((v) => {
        return (
          <Image
            key={v?.id}
            source={{ uri: v?.featured_image }}
            style={styles.mainImage}
          />
        );
      })}
    </Carousel>
  );
};

export default memo(AllVenuesImageCarousel);
