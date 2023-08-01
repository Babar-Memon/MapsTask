import React, { useState, createRef, useEffect } from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";

import { VenueDetails, CustomMarker } from "../../components";
import styles from "./styles";

import { useGetVenuesQuery } from "../../services/venuesService";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setAllVenues, setVenue } from "../../store/slices/venueSlice";

const Map = () => {
  const { data, error, isLoading } = useGetVenuesQuery(null);
  const dispatch = useAppDispatch();
  const { venue } = useAppSelector((state) => state.venue);

  const [venues, setVenues] = useState([]);

  const mapRef = createRef<MapView>();

  useEffect(() => {
    if (!error && !isLoading && data) {
      setVenues(data.results);
      dispatch(setAllVenues(data.results));

      const currentVenue = data.results[0];
      const { lat, lon } = currentVenue;
      setInitialRegion(lat, lon);
      dispatch(setVenue(currentVenue));
    }
  }, [data, error, isLoading]);

  const setInitialRegion = (lat: number, lng: number) => {
    mapRef.current?.animateToRegion({
      latitude: lat,
      longitude: lng,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };

  const onMarkerPress = (v: any) => {
    dispatch(setVenue(v));

    const { lat, lon } = v;
    mapRef.current?.animateToRegion({
      latitude: lat,
      longitude: lon,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };

  const handleVenueSwipe = (v: any) => {
    const { lat, lon } = v;
    mapRef.current?.animateToRegion({
      latitude: lat,
      longitude: lon,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };

  return (
    <View style={styles.root}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: 25.168282,
          longitude: 55.250286,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {venues.map((v: any) => (
          <Marker
            key={v?.id}
            coordinate={{
              latitude: v?.lat,
              longitude: v?.lon,
            }}
            onPress={() => onMarkerPress(v)}
          >
            <CustomMarker title={v?.name} />
          </Marker>
        ))}
      </MapView>
      {venue && <VenueDetails onSwipeVenue={handleVenueSwipe} />}
    </View>
  );
};

export default Map;
