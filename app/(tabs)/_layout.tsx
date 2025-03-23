import { Image, Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import PlantIcon from "../../assets/icons/plantIcon.svg";
import HeartIcon from "../../assets/icons/heart.svg";
import ProfileIcon from "../../assets/icons/profile.svg";
import SettingsIcon from "../../assets/icons/settings.svg";
import ScanIcon from "../../assets/icons/camera.svg";
import ScanIconFocused from "../../assets/icons/whiteCamera.svg";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          marginTop: Platform.OS === "ios" ? 17 : 0,
        },
        tabBarStyle: {
          backgroundColor: "#F37D2D",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 30,
          height: 70,
          position: "absolute",
          overflow: "visible",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.2,
          shadowRadius: 5,
          elevation: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              className={`h-[70px] w-[70px] flex-col items-center justify-center rounded-full ${
                focused ? "bg-[#AE8A71]" : ""
              }`}
            >
              <TabIcon title="Home" />
              <Text className="text-white text-xs font-poppins">Home</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          title: "Favorite",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              className={`h-[70px] w-[70px] flex-col items-center justify-center rounded-full ${
                focused ? "bg-[#AE8A71]" : ""
              }`}
            >
              <TabIcon title="Favorite" />
              <Text className="text-white text-xs font-poppins">Favorite</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          headerShown: false,
          title: "Scan",
          tabBarIcon: ({ focused }) => (
            <View
              className={`size-24 flex-col z-10  items-center justify-center rounded-full ${
                focused ? "bg-[#AE8A71]" : "bg-white"
              }`}
              style={{
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.3,
                shadowRadius: 2,
                elevation: 2,
              }}
            >
              {focused ? (
                <ScanIconFocused width={30} height={30} />
              ) : (
                <ScanIcon width={40} height={40} />
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              className={`h-[70px] w-[70px] flex-col items-center justify-center rounded-full ${
                focused ? "bg-[#AE8A71]" : ""
              }`}
            >
              <TabIcon title="Profile" />
              <Text className="text-white text-xs font-poppins">Profile</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              className={`h-[70px] w-[70px] flex-col items-center justify-center rounded-full ${
                focused ? "bg-[#AE8A71]" : ""
              }`}
            >
              <TabIcon title="Settings" />
              <Text className="text-white text-xs font-poppins">Settings</Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});

export const TabIcon = ({ title }: { title: string }) => {
  if (title === "Home") {
    return <PlantIcon width={24} height={24} />;
  }
  if (title === "Favorite") {
    return <HeartIcon width={24} height={24} />;
  }
  if (title === "Profile") {
    return <ProfileIcon width={24} height={24} />;
  }
  if (title === "Settings") {
    return <SettingsIcon width={24} height={24} />;
  }
};
