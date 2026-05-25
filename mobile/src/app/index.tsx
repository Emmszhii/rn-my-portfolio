import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function HomeScreen() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");
  const [error, setError] = useState("");

  function handleGreet() {
    if (name.trim() === "") {
      setError("Please enter your name");
      setGreeting("");
      return;
    }

    setGreeting(`👋 Hello, ${name.trim()}! Welcome back.`);
    setError("");
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      className="flex-1 bg-[#0f172a]"
    >
      <View className="flex-1 items-center justify-center px-6">
        {/* Card */}
        <View className="w-full max-w-md rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-8 shadow-2xl">
          {/* Badge */}
          <View className="self-start px-4 py-1 rounded-full bg-cyan-500/20 mb-5">
            <Text className="text-cyan-300 text-red-600! text-xs font-semibold tracking-wider uppercase">
              Modern Web App
            </Text>
          </View>

          {/* Title */}
          <Text className="text-4xl font-extrabold text-white mb-2">
            Greeting App
          </Text>

          <Text className="text-slate-300 text-base leading-6 mb-8">
            A clean and modern React Native interface with glassmorphism design.
          </Text>

          {/* Input */}
          <View className="mb-4">
            <Text className="text-slate-200 mb-2 font-medium">Your Name</Text>

            <TextInput
              placeholder="Enter your name..."
              placeholderTextColor="#94a3b8"
              value={name}
              onChangeText={(text) => {
                setName(text);
                setError("");
              }}
              className={`bg-slate-900/60 border rounded-2xl px-5 py-4 text-white text-base ${
                error
                  ? "border-red-500"
                  : "border-slate-700 focus:border-cyan-400"
              }`}
            />
          </View>

          {/* Error */}
          {error ? <Text className="text-red-400 mb-4">{error}</Text> : null}

          {/* Button */}
          <Pressable
            onPress={handleGreet}
            className="bg-cyan-500 rounded-2xl py-4 items-center active:opacity-80 shadow-lg shadow-cyan-500/40"
          >
            <Text className="text-slate-950 text-base font-bold">
              Generate Greeting
            </Text>
          </Pressable>

          {/* Greeting */}
          {greeting ? (
            <View className="mt-6 bg-emerald-500/15 border border-emerald-400/20 rounded-2xl p-4">
              <Text className="text-emerald-300 text-lg font-semibold text-center">
                {greeting}
              </Text>
            </View>
          ) : null}
        </View>

        {/* Footer */}
        <Text className="text-slate-500 text-sm mt-8">
          Built with React Native + NativeWind
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}
