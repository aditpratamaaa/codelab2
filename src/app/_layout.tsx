import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Page Explorer",
        }}
      />
      <Stack.Screen
        name="docs/index"
        options={{
          title: "Documentation",
        }}
      />
      <Stack.Screen
        name="docs/[...slug]"
        options={{
          title: "Documentation",
        }}
      />
    </Stack>
  );
}
