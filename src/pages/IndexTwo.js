import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import Navbar from "../components/Navbar"; // Replace with your RN Navbar component
import Footer from "../components/Footer"; // Replace with your RN Footer component
import SearchPan from "../components/SearchPan"; // Replace with your RN SearchPan component


export default function IndexTwo() {
  const navigation = useNavigation();
  const [searchLoading, setSearchLoading] = useState(false);
  const [totalSearched, setTotalSearched] = useState(false);

  const [activeIndex_1, setActiveIndex_1] = useState(0); // 0 for Commercial, 1 for Residential
  const [activeIndex_2, setActiveIndex_2] = useState(0); // 0 for Rent, 1 for Sale
  const [propertyData, setPropertyData] = useState([
    // Mock data for testing
    { id: 1, name: "Property 1", area_size: 1200, price: 250000, images_list: ["", "https://via.placeholder.com/150"] },
    { id: 2, name: "Property 2", area_size: 1500, price: 300000, images_list: ["", "https://via.placeholder.com/150"] },
    // Add more items as needed
  ]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;
  const totalPages = Math.ceil(propertyData.length / itemsPerPage);

  const { db_index } = (() => {
    switch (String(activeIndex_1) + String(activeIndex_2)) {
      case "00": // Commercial + Rent
        return { db_index: 0 };
      case "01": // Commercial + Sale
        return { db_index: 1 };
      case "10": // Residential + Rent
        return { db_index: 2 };
      case "11": // Residential + Sale
        return { db_index: 3 };
    }
  })();

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderProperty = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.images_list[1] }} style={styles.propertyImage} />
      <View style={styles.cardContent}>
        <Text style={styles.propertyName}>{item.name}</Text>
        <Text style={styles.propertyDetails}>
          {item.area_size} sqft • ${item.price}
        </Text>
        <View style={styles.iconRow}>
          <TouchableOpacity>
            <Icon name="home" size={20} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="heart" size={20} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="camera" size={20} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <Navbar />
      <FlatList
        data={propertyData.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        )}
        renderItem={renderProperty}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={
          <ImageBackground
            source={require("../assets/images/bg/01.jpg")}
            style={styles.header}
          >
            <View style={styles.overlay} />
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Easy way to find your dream property</Text>
              <Text style={styles.subtitle}>
                A great platform to buy, sell, and rent your properties without any agent or commissions.
              </Text>
              <View style={styles.buttonGroup}>
                <TouchableOpacity
                  style={[
                    styles.tabButton,
                    activeIndex_1 === 0 && styles.activeTabButton,
                  ]}
                  onPress={() => setActiveIndex_1(0)}
                >
                  <Text style={styles.tabText}>Commercial</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.tabButton,
                    activeIndex_1 === 1 && styles.activeTabButton,
                  ]}
                  onPress={() => setActiveIndex_1(1)}
                >
                  <Text style={styles.tabText}>Residential</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.tabButton,
                    activeIndex_2 === 0 && styles.activeTabButton,
                  ]}
                  onPress={() => setActiveIndex_2(0)}
                >
                  <Text style={styles.tabText}>Rent</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.tabButton,
                    activeIndex_2 === 1 && styles.activeTabButton,
                  ]}
                  onPress={() => setActiveIndex_2(1)}
                >
                  <Text style={styles.tabText}>Sale</Text>
                </TouchableOpacity>
              </View>
            <SearchPan
              setPropertyData={setPropertyData}
              db_index={db_index}
              setSearchLoading={setSearchLoading}
              setTotalSearched={setTotalSearched}
            />              
            </View>
          </ImageBackground>
        }
        ListFooterComponent={<Footer />}
        contentContainerStyle={styles.list}
        nestedScrollEnabled
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  titleContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    marginTop: 10,
    textAlign: "center",
  },
  buttonGroup: {
    flexDirection: "row",
    marginTop: 20,
  },
  tabButton: {
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  activeTabButton: {
    backgroundColor: "#007BFF",
  },
  tabText: {
    color: "#000",
  },
  card: {
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 5,
    overflow: "hidden",
    elevation: 3,
  },
  propertyImage: {
    width: "100%",
    height: 150,
  },
  cardContent: {
    padding: 10,
  },
  propertyName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  propertyDetails: {
    color: "#777",
    marginTop: 5,
  },
  iconRow: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
  },
});
