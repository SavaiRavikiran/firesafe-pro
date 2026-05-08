import { ScrollView, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#0F1117" }} contentContainerStyle={{ padding: 16, gap: 12 }}>
      <Text style={{ color: "#F8FAFC", fontSize: 28, fontWeight: "700" }}>FireSafe Pro</Text>
      <View style={{ backgroundColor: "#1A1D27", borderRadius: 12, padding: 16 }}>
        <Text style={{ color: "#F8FAFC", fontSize: 18 }}>Safety Score</Text>
        <Text style={{ color: "#22C55E", marginTop: 8, fontSize: 32, fontWeight: "700" }}>78%</Text>
      </View>
    </ScrollView>
  );
}
