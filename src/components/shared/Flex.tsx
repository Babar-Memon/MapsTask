import React, { PropsWithChildren } from "react";
import { View, ViewStyle } from "react-native";

type FlexProps = PropsWithChildren & {
  direction?: "row" | "column";
  align?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
  justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  gap?: number;
  padding?: number;
  paddingY?: number;
  paddingX?: number;
  paddingT?: number;
  paddingB?: number;
  paddingL?: number;
  paddingR?: number;
  backgroundColor?: string;
  flex?: number;
  style?: ViewStyle;
};

function Flex({
  children,
  direction = "column",
  align,
  justify,
  wrap,
  paddingX,
  paddingY,
  paddingT,
  paddingB,
  paddingL,
  paddingR,
  style,
  ...otherProps
}: FlexProps) {
  const flexStyles: ViewStyle = {
    display: "flex",
    flexDirection: direction,
    alignItems: align,
    justifyContent: justify,
    flexWrap: wrap,
    ...(paddingX && { paddingHorizontal: paddingX }),
    ...(paddingY && { paddingVertical: paddingY }),
    ...(paddingT && { paddingTop: paddingT }),
    ...(paddingB && { paddingBottom: paddingB }),
    ...(paddingL && { paddingLeft: paddingL }),
    ...(paddingR && { paddingRight: paddingR }),
    ...style,
    ...otherProps,
  };

  return <View style={flexStyles}>{children}</View>;
}

export default Flex;
