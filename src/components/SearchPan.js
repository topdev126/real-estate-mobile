import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
// import SliderRange from "./sliderComponent"; // Replace with your RN slider component
import { useDispatch } from "react-redux";
// import { getRelatedSearch } from "../redux/search/searchSlice.js";

const SearchPan = ({
  setPropertyData,
  db_index,
  setSearchloading,
  setTotalSearched,
}) => {
  const initAreaMinVal = 0;
  const initAreaMaxVal = 100000;
  const apiUrl = process.env.REACT_APP_SERVER_URL;
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [searchKeywords, setSearchKeywords] = useState("");
  const [selectedPropType, setSelectedPropType] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedBeds, setSelectedBeds] = useState(null);
  const [selectedBaths, setSelectedBaths] = useState(null);
  const [minAreaVal, setMinAreaVal] = useState(initAreaMinVal);
  const [maxAreaVal, setMaxAreaVal] = useState(initAreaMaxVal);
  const [isMoreVisible, setIsMoreVisible] = useState(false);
  const dispatch = useDispatch();

  const BedsNums = ["1", "2", "3", "4+"];
  const BathsNums = ["1", "2", "3", "4+"];
  const Property_types = ["Apartment", "Villa", "Office", "Plot"];
  const Districts = ["District 1", "District 2", "District 3", "District 4"];

  const handleSearch = () => {
    setSearchloading(true);

    const payload = {
      db_index: db_index,
      keywords: searchKeywords,
      category: selectedPropType,
      minPrice: minPrice ? Number(minPrice) : null,
      maxPrice: maxPrice ? Number(maxPrice) : null,
      district: selectedDistrict,
      minAreaVal: minAreaVal,
      maxAreaVal: maxAreaVal,
      BedsNums: selectedBeds,
      BathsNums: selectedBaths,
    };

    fetch(`${apiUrl}/admin/search`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        setPropertyData(data);
        setSearchloading(false);
        setTotalSearched(data.length);
        dispatch(getRelatedSearch(data.slice(0, 5)));
      })
      .catch((error) => {
        console.error("Error fetching properties:", error);
        setSearchloading(false);
      });
  };

  const resetSearchParams = () => {
    setMinPrice("");
    setMaxPrice("");
    setSelectedPropType(null);
    setSelectedDistrict(null);
    setMinAreaVal(initAreaMinVal);
    setMaxAreaVal(initAreaMaxVal);
    setSelectedBaths(null);
    setSelectedBeds(null);
    setSearchKeywords("");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Search:</Text>
        <TextInput
          style={styles.input}
          placeholder="Search your keywords"
          value={searchKeywords}
          onChangeText={setSearchKeywords}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Property Type:</Text>
        <SelectDropdown
          data={Property_types}
          onSelect={(selectedItem) => setSelectedPropType(selectedItem)}
          defaultButtonText="Select Property Type"
          buttonStyle={styles.dropdown}
          buttonTextStyle={styles.dropdownText}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Min Price:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter min price"
          value={minPrice}
          onChangeText={setMinPrice}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Max Price:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter max price"
          value={maxPrice}
          onChangeText={setMaxPrice}
        />
      </View>

      {isMoreVisible && (
        <>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>District:</Text>
            <SelectDropdown
              data={Districts}
              onSelect={(selectedItem) => setSelectedDistrict(selectedItem)}
              defaultButtonText="Select District"
              buttonStyle={styles.dropdown}
              buttonTextStyle={styles.dropdownText}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Area Size (sqft):</Text>
            {/* <SliderRange
              initialMinValue={initAreaMinVal}
              initialMaxValue={initAreaMaxVal}
              minVal={minAreaVal}
              maxVal={maxAreaVal}
              setMinVal={setMinAreaVal}
              setMaxVal={setMaxAreaVal}
            /> */}
          </View>

          {(db_index === 2 || db_index === 3) && (
            <>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Number of Beds:</Text>
                <SelectDropdown
                  data={BedsNums}
                  onSelect={(selectedItem) => setSelectedBeds(selectedItem)}
                  defaultButtonText="Select Beds"
                  buttonStyle={styles.dropdown}
                  buttonTextStyle={styles.dropdownText}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Number of Baths:</Text>
                <SelectDropdown
                  data={BathsNums}
                  onSelect={(selectedItem) => setSelectedBaths(selectedItem)}
                  defaultButtonText="Select Baths"
                  buttonStyle={styles.dropdown}
                  buttonTextStyle={styles.dropdownText}
                />
              </View>
            </>
          )}
        </>
      )}

      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setIsMoreVisible(!isMoreVisible)}
        >
          <Text style={styles.buttonText}>{isMoreVisible ? "Less" : "More"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={resetSearchParams}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    backgroundColor: "#fff",
  },
  dropdown: {
    width: "100%",
    borderRadius: 4,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  dropdownText: {
    textAlign: "left",
    fontSize: 16,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 12,
    borderRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});

export default SearchPan;
