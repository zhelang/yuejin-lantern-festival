import React from 'react';
import { View, ScrollView, Image, StyleSheet } from 'react-native';

import Layout from '../constants/Layout';

export class Carousel extends React.Component {
  render() {
    const { images } = this.props;
    
    if (images && images.length) {
      return (
        <View 
          style={styles.container}
        >
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          >
            {images.map(image => {
              <Image style={styles.image} source={image.source} />
            })}
          </ScrollView>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: window.width * 0.5,
  },
  image: {
    width: window.width,
    height: window.height,
  }
});