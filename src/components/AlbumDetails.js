import React from 'react';
import { Text, View, Image, Linking } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetails = ({ album }) => {
  const {
    title,
    artist,
    thumbnail_image,
    image,
    url
  } = album;

  const {
    thumbnailStyle,
    thumbnailConatinerStyle,
    headerContentStyle,
    headerTextStyle,
    imageStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailConatinerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={imageStyle} source={{ uri: image }} />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },

  headerTextStyle: {
    fontSize: 18,
    fontWeight: '500',
  },

  thumbnailStyle: {
    width: 50,
    height: 50,
  },

  thumbnailConatinerStyle: {
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
};

export default AlbumDetails;
