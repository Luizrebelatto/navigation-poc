import { RouteProp, useRoute } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { DrawerParamList } from "@/navigation";

type DetailRouteProp = RouteProp<DrawerParamList, "Detail">;

export default function DetailScreen() {
  const route = useRoute<DetailRouteProp>();
  const message = route.params?.message ?? "Detail";

  return (
    <View style={styles.container}>
      <ThemedText style={styles.message}>{message}</ThemedText>
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
