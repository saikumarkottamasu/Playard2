import React from 'react';
import { StyleSheet, Text,SafeAreaView,TextInput,TouchableOpacity,ScrollView,Dimensions,TouchableHighlight,Image,View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
const {width} = Dimensions.get('window').width;
const {height} = Dimensions.get('window').height;


export default class Venues extends React.Component {
    static navigationOptions = {
       header: null,
    }; 

    constructor() {
    super()
    this.state = {
      entries: [
         { title: 'hello' },
          { title: 'world' },
      ],
    }
  }
    _renderItem ({item, index}) {
        return (
            <View style={styles.slide}>
                  <View style={{flex:4}}>
                      <Image
                                style={styles.venueImg}
                                source={require('.././images/stadium.png')} />
                  </View>
                  <View style={{flex:4}}>
                      <Text style={styles.titleText}>Sri Saibaba Cricket Stadium</Text>
                      <Text style={styles.areaText}>Begumpet</Text>
                      <View style={{flexDirection:"row",marginTop:10}}>
                              <Image
                                  style={styles.starImg}
                                  source={require('.././images/rating-star-active.png')} />
                            <Image
                                  style={styles.starImg}
                                  source={require('.././images/rating-star-active.png')} /> 
                            <Image
                                  style={styles.starImg}
                                  source={require('.././images/rating-star-active.png')} />
                            <Image
                                  style={styles.starImg}
                                  source={require('.././images/rating-star-active.png')} /> 
                            <Image
                                  style={styles.starImg}
                                  source={require('.././images/half_rating.png')} />
                             <Text style={styles.ratingText}>300 Rating</Text>    
                      </View>
                       <View style={styles.incomingChat}>
                          <Image
                                  style={styles.profileImg}
                                  source={require('.././images/timer-icon-blue.png')} />
                                <View style={{flexDirection:"column"}}>
                              <Text style={styles.operationalText}>Operational Time</Text>
                                <Text style={styles.incomingTimeText}>6AM to 12 AM</Text>
                          </View>
                      </View>

                      
                      <Text style={styles.title}>{ item.title }</Text>
                      <Text style={styles.title}>Happy</Text>

                  </View>

            </View>
        );
    }
    
 render() 
 {
   return(
    <SafeAreaView style={{flex:1}}>
             	<View style={styles.cartHeader}>
                      <TouchableOpacity onPress={() =>this.props.navigation.navigate('Profile')}>
                           <Image
                          style={styles.searchImg}
                          source={require('.././images/back-arrow-white.png')} />
                      </TouchableOpacity>
                      <Text style={styles.profileText}>Venues</Text>
                      <View style={{marginLeft:'auto'}}>
                          <TouchableOpacity onPress={() => this.props.navigation.navigate('search_Venue')}>                  
                              <Image
                                  style={styles.searchImg}
                                  source={require('.././images/search-icon-white.png')} />
                          </TouchableOpacity>
                      </View>   
              	</View>
            <ScrollView>
              	<View style={styles.contentBody}>
              			<Carousel
                      ref={(c) => { this._carousel = c; }}
                      data={this.state.entries}
                      renderItem={this._renderItem}
                      sliderWidth={350}
                      sliderHeight={400}
                      itemWidth={250}

                    />
              	</View>
            </ScrollView>
                  
                
    </SafeAreaView>
     
   );
 }
}
const styles = StyleSheet.create({
  cartHeader:
  {
    flexDirection:"row",
    backgroundColor:"#33cbf6",
    padding:15,
  },
  profileText:
  {
    fontSize:20,
    fontFamily:"TwCenMTStd",
    color:"white",
    marginLeft:20,
    textAlignVertical:"center",
  },
 contentBody:
  {
    padding:10,
    // backgroundColor:"red"
  },
 searchImg:
  {
    width:20,
    height:20,
  },
tagVenueBtn:
  {   
    backgroundColor:"#3DBEF5",
    borderRadius:5,
    marginBottom:20,
    marginLeft:30,
    marginRight:30,
  },
 tagVenueBtnText:
  {
    fontSize:20 ,
    color:'#fff',
    textAlign:"center",
    padding:10,
    fontFamily:"TwCenMTStd"
  },
  slide:
  {
    height:300,
    width:400,
    backgroundColor:"pink",
    flex:1
  },
  venueImg:
  {
    width:"100%",
    height:150
  },
  titleText:
  {
    color:"#363f4d",
    fontSize:20,
    fontFamily:"TwCenMTStd",
    marginTop:10
  },
  starImg:
  {
    width:15,
    height:15,
  },
  areaText:
  {
    color:"#7f7f7f",
    fontFamily:"TwCenMTStd",
    fontSize:16,
    marginTop:10
  },
  ratingText:
  {
    color:"#7f7f7f",
    fontFamily:"TwCenMTStd",
    fontSize:16,
    marginLeft:30
  },
incomingChat:
  {
  flexDirection:"row",
  marginTop:20,
  marginBottom:10,
  paddingBottom:20,
    borderBottomWidth:1,
    borderColor:"#dadada",
  },
  profileImg:
  {
    width:18,
    height:18,
    marginRight:10
  },
  incomingTimeText:
  {
    color:"#A9A9A9",
    fontSize:15,
    fontFamily:"TwCenMTStd",
    marginTop:5
  },
  operationalText:
  {
    color:"#33cbf6",
    fontSize:18,
    fontFamily:"TwCenMTStd",
  },
});


