import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image, TextInput, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
// import { FiSearch, FiUser } from "../assets/icons/vander"; // Replace with appropriate icons or libraries

export default function Navbar({ navClass, logolight, menuClass }) {
  const [scroll, setScroll] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [modal, setModal] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      // Adjust based on your ScrollView's scroll offset
      setScroll(true); // Simplified for demonstration
    };
    // Add scroll listener if needed

    return () => {
      // Clean up listeners if added
    };
  }, [route]);

  const toggleMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <View style={[styles.header, scroll ? styles.navSticky : null]}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image
            source={logolight ? require("../assets/images/logo-light.png") : require("../assets/images/logo-dark.png")}
            style={styles.logo}
          />
        </TouchableOpacity>

        <View style={styles.menuExtras}>
          <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
            <View style={styles.menuLines}></View>
            <View style={styles.menuLines}></View>
            <View style={styles.menuLines}></View>
          </TouchableOpacity>
        </View>

        <View style={styles.buyButton}>

          {modal && (
            <View style={styles.searchDropdown}>
              <TextInput
                style={styles.searchInput}
                placeholder="Search..."
                onSubmitEditing={(event) => {
                  const query = event.nativeEvent.text;
                  // Handle search action
                  console.log(query);
                }}
              />
            </View>
          )}

        </View>
      </View>

      {isMenu && (
        <ScrollView style={styles.menu}>
          <TouchableOpacity onPress={() => navigation.navigate("AboutUs")}>
            <Text style={styles.menuItem}>About Us</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Features")}>
            <Text style={styles.menuItem}>Features</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Pricing")}>
            <Text style={styles.menuItem}>Pricing</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("ContactUs")}>
            <Text style={styles.menuItem}>Contact Us</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 4,
  },
  navSticky: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 30,
    resizeMode: "contain",
  },
  menuExtras: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuButton: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: 20,
  },
  menuLines: {
    width: 25,
    height: 3,
    backgroundColor: "#333",
    marginVertical: 2,
  },
  buyButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    padding: 8,
    marginHorizontal: 5,
  },
  searchDropdown: {
    position: "absolute",
    top: 50,
    right: 10,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    elevation: 2,
  },
  searchInput: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: 5,
  },
  menu: {
    backgroundColor: "#f9f9f9",
    paddingVertical: 10,
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#333",
  },
});
