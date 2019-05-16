import React from 'react';
import { Text, Dimensions, Image, StyleSheet, View,TouchableOpacity } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';

class SplashScreen extends React.Component {
  render() {
    const viewStyles = [styles.container, { backgroundColor: '#3DBEF5' }];
    const textStyles = {
      color: 'white',
      fontSize: 50,
      fontWeight: 'bold'
    };

    return (
      <View style={viewStyles}>
        <Text style={textStyles}>
          PLAYARD
        </Text>
      </View>
    );
  }
}

export default class App extends React.Component {
  static navigationOptions = {
       header: null,
    };
  constructor(props) {
    super(props);

    this.state = { isLoading: true }
  }

  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        3000
      )
    );
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }

  render() {
    if (this.state.isLoading) {
      return <SplashScreen />;
    }

    return (
    <View>
        <View style={styles.container1}>
          <SwiperFlatList
            autoplay
            autoplayDelay
            autoplayLoop
            index={2}
            showPagination
            paginationActiveColor={"#3DBEF5"}
          >
            <View style={{ backgroundColor: 'white' }}>
              <Image
                style={styles.Img}
                source={require('.././images/play1.png')}
              />
              <Text style={styles.headerText3}>Meet Players</Text>
              <Text style={styles.headerText4}>Don't miss out on a game.Find new Players near you</Text>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Prefferedsports')}>
                <Text style={styles.headerText5}>Skip</Text>
              </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: 'white' }}>
              <Image
                style={styles.Img}
                source={require('.././images/play2.png')}
              />
              <Text style={styles.headerText3}>Engage Your Group</Text>
              <Text style={styles.headerText4}>No more hassles of getting a head count,manage your</Text>
              <Text style={styles.headerText4}>groups hassle free</Text>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
                <Text style={styles.headerText5}>Skip</Text>
              </TouchableOpacity>

            </View>
            <View style={{ backgroundColor: 'white' }}>
              <Image
                style={styles.Img}
                source={require('.././images/sports1.png')}
              />
              <Text style={styles.headerText3}>Discover Something Everyday</Text>
              <Text style={styles.headerText4}>Book Venues,experiences & events,find academics.</Text>
              <Text style={styles.headerText4}>We have your week sorted</Text>

              <View style={{flexDirection:"row"}}>
                  <View style={styles.Btn}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Signin')}>
                      <Text style={styles.headerText1}>SIGN IN</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.Btn}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
                      <Text style={styles.headerText1}>SIGN UP</Text>
                    </TouchableOpacity>
                  </View>

              </View>
            </View>

          </SwiperFlatList>

        </View>

    </View>
    );
  }
}
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:"row",

  },
  container1: {
    backgroundColor: 'white',
    height:600,
    paddingTop:10,
    marginTop:10,
  },

  Btn:
  {
    height:40,
    borderRadius:5,
    marginTop:30,
    backgroundColor:"#3DBEF5",
    width:150,
    marginLeft:20,

  },
  headerText1:
  {
    fontSize:15 ,
    color:'#fff',
    textAlign:"center",
    paddingTop:10,
  },
  headerText3:
  {
    fontSize:19 ,
    color:'#000000',
    textAlign:"center",
    paddingTop:30
  },
  headerText2:
  {
    color:'#109BD7',

  },
  headerText4:
  {
    fontSize:13 ,
    color:'#000000',
    textAlign:"center",
    paddingTop:8
  },
  headerText5:
  {
    fontSize:15 ,
    color:'#000000',
    textAlign:"center",
    paddingTop:60
  },

  Img:
  {
  width: 340,
  height: 320,
  borderRadius:10,
  margin:10,
  borderColor: 'gray',
  borderWidth: 1
  }
});
