import { StyleSheet, View } from "react-native";
import { ThemedText } from "@/components/themed-text";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <ThemedText style={styles.message}>Settings</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    color: "#000",
    fontSize: 24,
    fontWeight: "700",
  },
});
