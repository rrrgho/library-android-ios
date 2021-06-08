import React, { useRef, useEffect, useState } from "react"
import {
  View,
  SafeAreaView,
  Text,
  Image,
  FlatList,
  Dimensions,
  Animated,
  StyleSheet,
} from "react-native"
import axios from 'axios'
import songs from './data'
import { GET } from '../../../config/Axios'
import BASE_URL from '../../../config/BaseUrl'
import { connect } from 'react-redux'
import { SET_BOOK_DATA, SET_REMOVE_BOOK, SET_SEARCH_BOOK } from '../../../config/Redux/action'


const getSlider = async () => {
  await GET('/slide-banner')
  .then((res) =>{
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
}

const setBanner = () =>  async (dispatch) => {
  let request = await axios.get(BASE_URL+'slide-banner')
  let data = request.data.data
  dispatch({type:ActionType.SET_BANNER, value:data})
}


const { width, height } = Dimensions.get("window");

const Slider = (props) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const slider = useRef(null);
  const [songIndex, setSongIndex] = useState(0);

  // for tranlating the album art
  const position = useRef(Animated.divide(scrollX, width)).current;
  useEffect(() => {
    // position.addListener(({ value }) => {
    //   console.log(value);
    // });
    scrollX.addListener(({ value }) => {
      const val = Math.round(value / width);

      setSongIndex(val);

      // little buggy
      //if previous index is not same then only update it
      // if (val !== songIndex) {
      //   setSongIndex(val);
      //   console.log(val);
      // }
    });

    return () => {
      scrollX.removeAllListeners();
    };
  }, []);
  const renderItem = ({ index, item }) => {
    return (
      <Animated.View
      onPress={() => {getSlider()}}
        style={{
          alignItems: "center",
          width: width,
          transform: [
            {
              translateX: Animated.multiply(
                Animated.add(position, -index),
                -100
              ),
            },
          ],
        }}
      >
        <Animated.Image
          source={item.image}
          style={{ width: 300, height: 200, borderRadius: 5 }}
        />
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={{ height: 320 }}>
        <Animated.FlatList
          ref={slider}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          data={songs}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    textAlign: "center",
    textTransform: "capitalize",
  },
  artist: {
    fontSize: 18,
    textAlign: "center",
    textTransform: "capitalize",
  },
  container: {
    height: height,
    maxHeight: 205,
  },
});

export default Slider

//export default connect(mapStateToProps,mapDispatchToProps)(Slider)