import {
    featureImage1,
    featureImage2,
    featureImage3,
    featureImage5,
} from "@/assets/images";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
    FlatList,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const cartItems = [
  {
    id: "1",
    name: "Fresh Broccoli",
    price: "$2.22 x 4",
    unit: "1.50 lbs",
    qty: 5,
    img: featureImage1,
  },
  {
    id: "2",
    name: "Black Grapes",
    price: "$2.22 x 4",
    unit: "5.0 lbs",
    qty: 5,
    img: featureImage2,
    deleteVisible: true,
  },
  {
    id: "3",
    name: "Avocada",
    price: "$2.22 x 4",
    unit: "1.50 lbs",
    qty: 5,
    img: featureImage3,
  },
  {
    id: "4",
    name: "Pineapple",
    price: "$2.22 x 4",
    unit: "dozen",
    qty: 5,
    img: featureImage5,
  },
];

export default function Carrt() {
  const { back } = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => back()}>
          <Ionicons name="arrow-back" size={28} color="#111" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Shopping Cart</Text>

        <View style={{ width: 28 }} />
      </View>

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => <CartItem item={item} />}
      />

      <View style={styles.bottomBox}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Subtotal</Text>
          <Text style={styles.summaryText}>$56.7</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Shipping charges</Text>
          <Text style={styles.summaryText}>$1.6</Text>
        </View>

        <View style={styles.line} />

        <View style={styles.totalRow}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalText}>$58.2</Text>
        </View>

        <TouchableOpacity activeOpacity={0.8} style={styles.checkoutBtn}>
          <Text style={styles.checkoutText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function CartItem({ item }) {
  if (item.deleteVisible) {
    return (
      <View style={styles.swipeRow}>
        <View style={[styles.cartCard, styles.swipeCard]}>
          <Image source={item.img} style={styles.productImg} />

          <View style={styles.productInfo}>
            <Text style={styles.price}>{item.price}</Text>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.unit}>{item.unit}</Text>
          </View>

          <View style={styles.qtyBox}>
            <Text style={styles.qtyBtn}>＋</Text>
            <Text style={styles.qtyText}>{item.qty}</Text>
            <Text style={styles.qtyBtn}>－</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.deleteBox}>
          <Feather name="trash-2" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.cartCard}>
      <Image source={item.img} style={styles.productImg} />

      <View style={styles.productInfo}>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.unit}>{item.unit}</Text>
      </View>

      <View style={styles.qtyBox}>
        <Text style={styles.qtyBtn}>＋</Text>
        <Text style={styles.qtyText}>{item.qty}</Text>
        <Text style={styles.qtyBtn}>－</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F6FA",
  },

  header: {
    height: 70,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
  },

  listContent: {
    paddingTop: 26,
    paddingHorizontal: 17,
    paddingBottom: 25,
  },

  cartCard: {
    height: 100,
    backgroundColor: "#fff",
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },

  swipeRow: {
    height: 100,
    marginBottom: 12,
    flexDirection: "row",
  },

  swipeCard: {
    flex: 1,
    marginBottom: 0,
  },

  deleteBox: {
    width: 74,
    height: 100,
    backgroundColor: "#F5534F",
    justifyContent: "center",
    alignItems: "center",
  },

  productImg: {
    width: 76,
    height: 76,
    resizeMode: "contain",
    marginRight: 18,
  },

  productInfo: {
    flex: 1,
  },

  price: {
    fontSize: 13,
    fontWeight: "700",
    color: "#58C80F",
    marginBottom: 3,
  },

  productName: {
    fontSize: 16,
    fontWeight: "800",
    color: "#111",
    marginBottom: 3,
  },

  unit: {
    fontSize: 13,
    color: "#8B8B8B",
  },

  qtyBox: {
    height: 80,
    width: 28,
    alignItems: "center",
    justifyContent: "space-between",
  },

  qtyBtn: {
    fontSize: 22,
    color: "#59C90F",
    fontWeight: "400",
  },

  qtyText: {
    fontSize: 16,
    color: "#777",
  },

  bottomBox: {
    backgroundColor: "#fff",
    paddingHorizontal: 17,
    paddingTop: 22,
    paddingBottom: 28,
  },

  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  summaryText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#8A8A8A",
  },

  line: {
    height: 1,
    backgroundColor: "#E6E6E6",
    marginBottom: 14,
  },

  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 18,
  },

  totalText: {
    fontSize: 20,
    fontWeight: "900",
    color: "#000",
  },

  checkoutBtn: {
    height: 59,
    borderRadius: 4,
    backgroundColor: "#67D112",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#67D112",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 8,
  },

  checkoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
  },
});
