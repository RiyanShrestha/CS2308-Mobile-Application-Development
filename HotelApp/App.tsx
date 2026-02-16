import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* ===== HEADER ===== */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Payment</Text>
          <Text style={styles.timerText}>Complete payment in 01:00:00</Text>
        </View>

        {/* ===== PAYMENT CARD ===== */}
        <View style={styles.card}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1605902711622-cfb43c44367f",
            }}
            style={styles.bannerImage}
          />

          {/* FIRST SECTION (no extra margin) */}
          <Text style={[styles.sectionTitle, { marginTop: 0 }]}>
            Bank Transfer
          </Text>
          {BANKS.map((item, index) => (
            <OptionRow key={index} title={item} />
          ))}

          <Text style={styles.sectionTitle}>Virtual Account</Text>
          {VIRTUAL_ACCOUNTS.map((item, index) => (
            <OptionRow key={index} title={item} />
          ))}

          <Text style={styles.sectionTitle}>
            Installment (No Credit Card)
          </Text>
          <OptionRow title="Kredivo" />
          <OptionRow title="Below 17 years (Terms Apply)" />
        </View>

        {/* ===== HOTEL LIST ===== */}
        <View style={styles.hotelCard}>
          <Text style={[styles.sectionTitle, { marginTop: 0 }]}>
            Hotel Selection
          </Text>

          {HOTELS.map((hotel, index) => (
            <View key={index} style={styles.hotelRow}>
              <Image source={{ uri: hotel.image }} style={styles.hotelImage} />

              <View style={styles.hotelInfo}>
                <Text style={styles.hotelName}>{hotel.name}</Text>
                <Text style={styles.hotelLocation}>Indonesia</Text>
                <Text style={styles.stars}>★★★★☆</Text>
              </View>

              <Text style={styles.price}>$1000</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

/* ===== REUSABLE ROW ===== */
const OptionRow = ({ title }: { title: string }) => (
  <TouchableOpacity style={styles.optionRow} activeOpacity={0.7}>
    <Text style={styles.optionText}>{title}</Text>
    <Text style={styles.arrow}>{">"}</Text>
  </TouchableOpacity>
);

/* ===== DATA ===== */
const BANKS = ["Bank Mandiri", "Bank BCA", "Bank BNI", "Bank Mega"];

const VIRTUAL_ACCOUNTS = [
  "Mandiri Virtual Account",
  "BCA Virtual Account",
  "BNI Virtual Account",
  "Mega Virtual Account",
];

const HOTELS = [
  {
    name: "Hotel One",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  },
  {
    name: "Hotel Two",
    image: "https://images.unsplash.com/photo-1652199420751-bcc0f1e6876a?q=80&w=763&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Hotel Three",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
  },
  {
    name: "Hotel Four",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
  },
];

/* ===== STYLES ===== */
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#6a1b9a",
    paddingTop: StatusBar.currentHeight,
  },

  container: {
    backgroundColor: "#f5f5f5",
  },

  header: {
    backgroundColor: "#6a1b9a",
    padding: 16,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },

  timerText: {
    color: "#ffd54f",
    marginTop: 4,
  },

  card: {
    backgroundColor: "#fff",
    margin: 12,
    padding: 14,
    borderRadius: 18,
    elevation: 2,
  },

  bannerImage: {
    width: "100%",
    height: 10,
    borderRadius: 14,
    marginBottom: 6,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 8,
  },

  optionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderColor: "#eee",
  },

  optionText: {
    fontSize: 15,
    color: "#111",
  },

  arrow: {
    fontSize: 20,
    color: "#6a1b9a",
  },

  hotelCard: {
    backgroundColor: "#fff",
    marginHorizontal: 12,
    padding: 14,
    borderRadius: 18,
    elevation: 2,
  },

  hotelRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },

  hotelImage: {
    width: width * 0.22,
    height: width * 0.22,
    borderRadius: 12,
    marginRight: 12,
  },

  hotelInfo: {
    flex: 1,
  },

  hotelName: {
    fontSize: 15,
    fontWeight: "bold",
  },

  hotelLocation: {
    fontSize: 12,
    color: "#777",
  },

  stars: {
    color: "#fbc02d",
    fontSize: 12,
  },

  price: {
    color: "#6a1b9a",
    fontWeight: "bold",
    fontSize: 15,
  },
});
