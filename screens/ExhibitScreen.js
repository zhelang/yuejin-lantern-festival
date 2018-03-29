import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View, SafeAreaView } from 'react-native';

import resolveAssetSource from 'resolveAssetSource';

import Layout from '../constants/Layout';

export default class ExhibitScreen extends React.Component {
  state = { id, title, engTitle, school, engSchool, instructor, engInstructor, artist, engArtist, description, engDescription, image } = this.props.navigation.state.params;
 
  componentWillMount() {
    let source = resolveAssetSource(this.state.image);
    this.setState({
      imageHeight: source.height,
      imageWidth: source.width,
      imageRatio: Layout.window.width / source.width,
    });
  }

  render() {
    const isSchool = this.state.school ? true : false;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <ScrollView>
            <Text style={styles.title}>{this.state.id} | {this.state.title} {this.state.engTitle}</Text>
            <Image source={this.state.image} style={[styles.image, {width: Layout.window.width, height: this.state.imageHeight * this.state.imageRatio}]} resizeMode='contain' />
            { isSchool && <Text style={styles.heading}>學校名稱：</Text> }
            { isSchool && <Text style={styles.article}>{school}</Text> }
            { isSchool && <Text style={styles.article}>{engSchool}</Text> }
            { isSchool && <Text style={styles.heading}>指導老師：</Text> }
            { isSchool && <Text style={styles.article}>{instructor}</Text> }
            { isSchool && <Text style={styles.article}>{engInstructor}</Text> }
            <Text style={styles.heading}>藝術家/創作團隊：</Text>
            <Text style={styles.article}>{this.state.artist}</Text>
            <Text style={styles.article}>{this.state.engArtist}</Text>
            <Text style={styles.heading}>作品介紹：</Text>
            <Text style={styles.article}>{this.state.description}</Text>
            <Text style={styles.article}>{this.state.engDescription}</Text>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    padding: 15,
    backgroundColor: '#000',
  },
  image: {
    flex: 1,
    //alignSelf: 'center',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4ac4e2',
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    color: '#4ac4e2',
    marginTop: 15,
    marginBottom: 15,
  },
  article: {
    fontSize: 15,
    color: '#fff',
    fontWeight: '300',
    lineHeight: 24,
  },
});