import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
// import Modal from 'react-native-modal';
// import CountUp from 'react-countup';
import Navbar from '../components/Navbar'; // Assuming you have a Navbar component
import Footer from '../components/Footer'; // Assuming you have a Footer component
import About from '../components/About'; // Assuming you have an About component
import Broker from '../components/Broker'; // Assuming you have a Broker component
import Blog from '../components/Blog'; // Assuming you have a Blog component
import GetInTouch from '../components/GetInTouch'; // Assuming you have a GetInTouch component

export default function AboutUs() {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Navbar />

      {/* Hero Section */}
      <View style={[styles.section, styles.heroSection]}>
        <Image source={require('../assets/images/hero.jpg')} style={styles.heroImage} />
        <View style={styles.overlay} />
        <Text style={styles.heroText}>Our story: Pro-2</Text>
        <Text style={styles.heroTitle}>About Us</Text>
      </View>

      {/* About Content Section */}
      <View style={styles.section}>
        <View style={styles.row}>
          <Image source={require('../assets/images/hero.jpg')} style={styles.aboutImage} />
          <TouchableOpacity style={styles.playButton} onPress={() => setModalVisible(true)}>
            <Text style={styles.playIcon}>▶</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.subHeading}>Our story: Pro-2</Text>
          <Text style={styles.heading}>Efficiency. Transparency. Control.</Text>
          <Text style={styles.paragraph}>
            Pro-2 developed a platform for the Real Estate marketplace that allows buyers and
            sellers to easily execute a transaction on their own. The platform drives efficiency,
            cost transparency, and control into the hands of the consumers. Pro-2 is Real Estate
            Redefined.
          </Text>
        </View>
      </View>


      {/* Statistics Section */}
      <View style={styles.statsSection}>
        <Text style={styles.statsTitle}>Trusted by more than 10K users</Text>
        <Text style={styles.statsParagraph}>
          A great platform to buy, sell, and rent your properties without any agent or commissions.
        </Text>

        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Investment</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Awards</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Profitability</Text>
          </View>
        </View>
      </View>

      {/* Components */}
      <About />
      <Broker />
      <Blog />
      <GetInTouch />

      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  section: { margin: 20 },
  heroSection: { alignItems: 'center', position: 'relative' },
  heroImage: { width: '100%', height: 200, resizeMode: 'cover' },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.5)' },
  heroText: { color: '#fff', fontSize: 16, marginTop: 50 },
  heroTitle: { color: '#fff', fontSize: 28, fontWeight: 'bold', marginTop: 10 },
  aboutImage: { width: '100%', height: 200, borderRadius: 10 },
  playButton: { position: 'absolute', top: '40%', left: '45%' },
  playIcon: { fontSize: 24, color: '#fff' },
  textContainer: { marginVertical: 20 },
  subHeading: { fontSize: 14, color: '#007bff', fontWeight: 'bold' },
  heading: { fontSize: 22, fontWeight: 'bold', marginVertical: 10 },
  paragraph: { fontSize: 14, color: '#555' },
  statsSection: { padding: 20, backgroundColor: '#f8f9fa', alignItems: 'center' },
  statsTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  statsParagraph: { fontSize: 14, color: '#555', marginBottom: 20 },
  statsRow: { flexDirection: 'row', justifyContent: 'space-around' },
  statBox: { alignItems: 'center' },
  statNumber: { fontSize: 28, fontWeight: 'bold', color: '#007bff' },
  statLabel: { fontSize: 14, color: '#555' },
  modalContent: { backgroundColor: '#fff', padding: 20, borderRadius: 10, alignItems: 'center' },
  modalText: { fontSize: 16, fontWeight: 'bold' },
});
