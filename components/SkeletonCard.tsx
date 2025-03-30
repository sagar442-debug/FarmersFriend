import { View } from "react-native";
import React from "react";
import Animated, {
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
  useSharedValue,
  withDelay,
} from "react-native-reanimated";

const SkeletonCard = () => {
  const opacity = useSharedValue(0.3);

  React.useEffect(() => {
    opacity.value = withRepeat(
      withSequence(
        withDelay(Math.random() * 500, withTiming(0.7, { duration: 500 })),
        withTiming(0.3, { duration: 1000 })
      ),
      -1,
      true
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <View
      className="bg-white rounded-lg flex-row items-center p-2 mr-6 h-28"
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 3,
      }}
    >
      <View className="flex-row gap-2 items-center">
        {/* Circle for image */}
        <Animated.View
          className="w-12 h-12 rounded-full bg-gray-200"
          style={animatedStyle}
        />

        <View className="max-w-52">
          {/* Title skeleton */}
          <Animated.View
            className="h-4 w-32 bg-gray-200 rounded-full mb-2"
            style={animatedStyle}
          />

          {/* Scientific name skeleton */}
          <Animated.View
            className="h-3 w-40 bg-gray-200 rounded-full mb-2"
            style={animatedStyle}
          />

          {/* Description skeleton */}
          <View className="flex gap-1">
            <Animated.View
              className="h-2 w-48 bg-gray-200 rounded-full"
              style={animatedStyle}
            />
            <Animated.View
              className="h-2 w-40 bg-gray-200 rounded-full"
              style={animatedStyle}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SkeletonCard;
