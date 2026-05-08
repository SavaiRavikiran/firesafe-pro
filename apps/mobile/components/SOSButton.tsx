import { Pressable, Text } from "react-native";

type Props = { onPress: () => void };

export function SOSButton({ onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        position: "absolute",
        right: 20,
        bottom: 24,
        width: 68,
        height: 68,
        borderRadius: 34,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#DC2626"
      }}
    >
      <Text style={{ color: "#fff", fontWeight: "700" }}>SOS</Text>
    </Pressable>
  );
}
