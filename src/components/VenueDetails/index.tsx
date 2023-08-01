import React, { useRef, useMemo, useState, useCallback } from "react";
import { Text } from "react-native";
import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetFlatList,
} from "@gorhom/bottom-sheet";
import { Image } from "expo-image";
// @ts-ignore
import { Rating } from "react-native-rating-element";
import { FontAwesome5 } from "@expo/vector-icons";

import Flex from "../shared/Flex";
import AllVenuesImageCarousel from "./AllVenuesImageCarousel";
import VenueMediaCarousel from "./VenueMediaCarousel";
import VenueFacilities from "./VenueFacilities";
import styles from "./styles";

import { useAppSelector, useAppDispatch } from "../../hooks";
import { setVenue } from "../../store/slices/venueSlice";

type VenueDetailsProps = {
  onSwipeVenue: (v: any) => void;
};

const VenueDetails = ({ onSwipeVenue }: VenueDetailsProps) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["7.5%", "45%"], []);
  const dispatch = useAppDispatch();
  const { allVenues, venue } = useAppSelector((state) => state.venue);

  const [currentSheetPoint, setCurrentSheetPoint] = useState(0);

  const handleSheetChanges = useCallback((index: number) => {
    setCurrentSheetPoint(index);
  }, []);

  const DetailRow = ({ icon, value }: { icon: string; value: string | any }) =>
    useMemo(() => {
      return (
        <Flex direction="row" align="center" gap={8} paddingY={6} flex={1}>
          <FontAwesome5 name={icon} color="steelblue" size={20} />
          <Text style={styles.detailPoint}>{value}</Text>
        </Flex>
      );
    }, [icon, value]);

  const handleIndexChange = (index: number) => {
    dispatch(setVenue(allVenues[index]));
    onSwipeVenue(allVenues[index]);
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={currentSheetPoint}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
    >
      <BottomSheetScrollView
        style={styles.contentContainer}
        contentContainerStyle={styles.scrollContentContainer}
      >
        {currentSheetPoint === 0 && (
          <Text style={styles.pre}>Pull up to see venue details</Text>
        )}
        <AllVenuesImageCarousel handleIndexChange={handleIndexChange} />
        <Flex padding={16}>
          <Flex direction="row" justify="space-between" align="center">
            <Flex flex={1} direction="column" gap={4}>
              <Text style={styles.title} numberOfLines={3}>
                {venue?.name}
              </Text>
              <Text style={styles.sub} numberOfLines={3}>
                {venue?.speciality}
              </Text>
            </Flex>
            <Flex direction="column" align="center" justify="center" gap={4}>
              <Rating
                rated={venue?.average_rating}
                totalCount={5}
                ratingColor="#f1c644"
                ratingBackgroundColor="#d4d4d4"
                size={20}
                readonly
                icon="ios-star"
                direction="row"
              />
              <Text>
                {venue?.average_rating} ({venue?.review_count})
              </Text>
            </Flex>
          </Flex>
          <Flex paddingY={12}>
            <DetailRow icon="map-marker-alt" value={venue?.address} />
            <DetailRow
              icon="users"
              value={`${venue?.total_capacity} / ${venue?.total_capacity_ar}`}
            />
            <DetailRow icon="clock" value={venue?.is_branch_open} />
            <DetailRow
              icon="coins"
              value={`${venue?.branch_cost} / ${venue?.branch_cost_ar}`}
            />
          </Flex>
          <Flex>
            <VenueMediaCarousel />
            <VenueFacilities />
            {venue?.speciality && (
              <Flex gap={8}>
                <Text style={styles.subheader}>Speciality</Text>
                <Text style={styles.sub}>{venue?.speciality}</Text>
              </Flex>
            )}
            {venue?.food_policy && (
              <Flex gap={8} paddingY={12}>
                <Text style={styles.subheader}>Outside Food Policy</Text>
                <Text style={styles.sub}>{venue?.food_policy}</Text>
              </Flex>
            )}
          </Flex>
        </Flex>
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

export default VenueDetails;
