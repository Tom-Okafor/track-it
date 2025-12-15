import { Dimensions, PixelRatio } from "react-native";

export function scaleFontSize(size: number): number {
  const { width } = Dimensions.get("window");
  const baseWidth = 430;
  const scale = width / baseWidth;
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

export function scaleVerticalSpacing(size: number): number {
  const { height } = Dimensions.get("window");
  const baseHeight = 932;
  const scale = height / baseHeight;
  const newHeight = scale * size;
  return Math.round(PixelRatio.roundToNearestPixel(newHeight));
}
