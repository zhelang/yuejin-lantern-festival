import React from 'react';
import {
  Button,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView
} from 'react-native';
import resolveAssetSource from 'resolveAssetSource';

import Layout from '../constants/Layout';

var headerImage = resolveAssetSource(require('../assets/images/header.png'));
var footerImage = resolveAssetSource(require('../assets/images/footer.png'));
var headerRatio = Layout.window.width / headerImage.width;

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <Image style={styles.headerContainer} source={require('../assets/images/header.png')} resizeMode='contain' />
            <Text style={styles.heading}>一期一會  相約鹽水</Text>
            <Text style={styles.paragraph}>由臺南市政府主辦、臺南市政府文化局承辦、都市藝術工作室策劃執行的「2018月津港燈節」以燈光之美介入在地風景，向來是月津港燈節的主要特色,這次的月津港燈節以「相約」為主題，邀請國內外科技與新媒體藝術的當代藝術家參展，以燈光裝置的作品形式，結合台南鹽水本地的人文與風景，用藝術與觀眾浪漫相約。</Text>
            <Text style={styles.paragraph}>本屆的月津港燈節，首次與每年春季於日本京都舉辦之「東山燈節」合作交流：京都造型藝術大學的師生將為在月津港燈節中量身製作包括〈候鳥-文化橋樑〉、〈枯山水〉和〈文化之塔-八〉三件充滿日本傳統意象的裝置作品，而臺南藝術大學的創作團隊也將在三月參展京都的東山燈節。</Text>
            <Text style={styles.heading}>相約鹽水-與月津的約定</Text>
            <Text style={styles.paragraph}>「月津港燈節」自民國99年起至今，一直是南臺灣新年最美麗的水岸藝術饗宴。燈節展覽主要結合當地鹽水人文特色，以月津港親水公園週邊為藝術花燈的主要設置地點，結合橋南老街聚落景觀、永成戲院戶外廣場與王爺巷，進行燈光環境的佈置。</Text>
            <Text style={styles.paragraph}>本次參展的藝術作品皆為藝術家現地製作的裝置作品，將在白天與黑夜分別呈現出豐富燦爛的精彩面貌，探討自然、歷史、文明、人際與時空等的多元交會，讓美麗的不期而遇成為情深意重的長久約定，藉由光的浪漫，喚起人對於約定的執著。</Text>
            <Text style={styles.heading}>Once a year, let's meet in Yanshui.</Text>
            <Text style={styles.paragraph}>Hosted by the Cultural Bureau of Tainan City Government and curated and executed by Urban Art Studio, the Yuejin Lantern Festival 2018 featured the beauty of light integrated with the local scenery. With the theme of " Rendezvous ", the Lantern Festival 2018 will invite contemporary artists to participate in the exhibition, new technology and new media professionals from home and abroad included. The Festival 2018 combines local culture with scenery of Yanshuei by the form of installation artworks of light and makes an appointment with citizens by art in a romantic way.</Text>
            <Text style={styles.heading}>To Meet in Yanshuei-a date with Yuejin</Text>
            <Text style={styles.paragraph}>The "Yuejin Lantern Festival" has been the most beautiful waterfront art feast in southern Taiwan for the New Year since its establishment in 2010. This Lantern Festival features being integrated with the local culture of Yanshuei and the art lanterns installed around the Yuejin Riverside Park. The whole area nearby the Yuejin port including the historic settlement cluster at the Qiaonan old street and the plaza in front of the Yongcheng theater and the Duke avenue will be decorated with lights and turn into a harmonious environment. The artworks showcased at this exhibition are customized for this place and they will present different, colorful, and splendid appearances either during day or night and evoke people’s thought about nature, history, civilization, interpersonal relationship and a time-space multiple rendezvous. Let the beautiful encounter become a long-term promise and the romance of light arouses people's constancy of the promise.</Text>
            <Image style={styles.footerContainer} source={require('../assets/images/footer.png')} resizeMode='contain' />
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  contentContainer: {
    paddingHorizontal: 15,
  },
  headerContainer: {
    flex: 1,
    width: Layout.window.width,
    height: headerImage.height * headerRatio,
  },
  footerContainer: {
    flex: 1,
  },
  heading: {
    fontSize: 18,
    color: '#4ac4e2',
    marginTop: 20,
    marginBottom: 10,
  },
  paragraph: {
    fontFamily: Platform.OS === 'android' ? 'sans-serif-light' : undefined,
    fontSize: 15,
    fontWeight: '300',
    lineHeight: 24,
    color: '#fff',
    marginBottom: 10,
  }
});
