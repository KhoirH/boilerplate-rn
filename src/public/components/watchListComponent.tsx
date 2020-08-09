import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import {GetValueOfArrayGendre} from '../utils/arrayUtils';

interface ListGendre {
  id: number;
  name: string;
}
interface Props {
  name: string;
  gendre: number[];
  rating: number;
  avatar: string;
  listGendre: ListGendre[];
}
const WatchList: React.FC<Props> = ({
  name,
  gendre,
  rating,
  avatar,
  listGendre,
}) => {
  const genderString = GetValueOfArrayGendre(listGendre, gendre);
  return (
    <TouchableWithoutFeedback>
      <View style={styles.wrapperItem}>
        <View style={styles.wrapperRow}>
          <View style={styles.imageAvatar}>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${avatar}`,
              }}
              style={styles.coverImage}
            />
          </View>
          <View style={styles.wrapperDetail}>
            <Text style={styles.titleText} numberOfLines={1}>
              {name}
            </Text>
            <View style={styles.wrapperInterest}>
              <Text style={styles.smallText}>Rate: {rating}</Text>
              <Text style={styles.smallText}> Gendre: {genderString}</Text>
            </View>
          </View>
        </View>
        {/* <TouchableOpacity>
          <View style={styles.wrapperStar}>
            <Icon name="star" size={25} />
          </View>
        </TouchableOpacity> */}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  wrapperRow: {
    flexDirection: 'row',
  },
  // wrapperContent: {
  // },
  wrapperItem: {
    padding: 10,
    flexDirection: 'row',
    elevation: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapperDetail: {
    marginLeft: 20,
  },
  wrapperInterest: {
    flexDirection: 'row',
  },
  wrapperStar: {
    paddingHorizontal: 20,
  },
  imageAvatar: {
    width: 50,
    height: 50,
  },
  coverImage: {
    flex: 1,
  },
  titleText: {
    fontSize: 16,
  },
  smallText: {
    fontSize: 14,
  },
});

export default React.memo(WatchList);
