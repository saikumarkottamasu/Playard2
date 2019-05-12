import React, {Component} from 'react';
import {Platform, StyleSheet,TouchableOpacity,TouchableHighlight, Text, View,Button,Image,ScrollView} from 'react-native';
import Icon from 'react-native-ionicons';


export default class Profile extends Component {
    static navigationOptions = {
       header: null,
    };
  render() {
    return (
      <View style={styles.container}>
              <View style={styles.cartHeader}>

                    <View style={styles.profileView}>
                          <Text style={styles.profileText}>Rasoolpura</Text>
                          <View style={[styles.iconContainer,{marginLeft:5}]}>
                              <Image
                                style={styles.locationImg}
                                source={require('.././images/location-checked.png')} />
                          </View>
                    </View>

                    <View style={{marginLeft:'auto',flexDirection:"row",marginRight:15}}>
                        <View style={styles.iconContainer}>
                              <TouchableOpacity onPress={() =>{GLOBAL.sport= ''; this.props.navigation.navigate('create_Activity')}}>                  
                                   <Image
                                  style={styles.locationImg}
                                  source={require('.././images/create-activity.png')} />
                              </TouchableOpacity>
                        </View>
                        <View style={styles.iconContainer}>
                              <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                                   <Image
                                  style={styles.locationImg}
                                  source={require('.././images/chat-icon.png')} />
                              </TouchableOpacity>
                        </View>
                        <View style={styles.iconContainer}>
                              <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                                   <Image
                                  style={styles.locationImg}
                                  source={require('.././images/notification-icon.png')} />
                              </TouchableOpacity>
                        </View>
                    </View>
              </View>
              <View style={{flexDirection:"row",backgroundColor:"#6ad5f3"}}>
                    <View style={styles.headerWrapper}>
                        <Text style={styles.headerText}>My Activities</Text>

                    </View>
                    <View style={[styles.headerWrapper,{ borderBottomWidth: 0}]}>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('')}>
                            <View style={{flexDirection:"row"}}>
                              <Text style={[styles.headerText,{ color:"#daf3fb"}]}>My Sports</Text>

                           </View>
                        </TouchableHighlight>
                    </View>
                    <View style={[styles.headerWrapper,{ borderBottomWidth: 0}]}>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('')}>
                            <View style={{flexDirection:"row"}}>
                              <Text style={[styles.headerText,{ color:"#daf3fb"}]}>Other Sports</Text>

                           </View>
                        </TouchableHighlight>
                    </View>
              </View>
              <View style={styles.upcomingWrapper}>
                  <Text style={styles.upcomingText}>Upcoming Activities</Text>
                  <View style={styles.signInBtn}>
                            <TouchableOpacity>
                                  <Text style={styles.signInBtnText}>See all</Text>
                            </TouchableOpacity>
                  </View>
              </View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('activity_view')}>

              <View style={styles.listBody}>
                    <View style={{flexDirection:"row",marginBottom:10}}>
                        <View style={styles.dateContent}>
                              <Text style={styles.dateText}>19 Apr</Text>
                              <Text style={styles.monthText}>Fri,2019</Text>
                        </View>
                        <View style={styles.typeContent}>
                              <Text style={styles.dateText}>Cricket</Text>
                              <View style={{flexDirection:"row",marginTop:5}}>
                                    <Image
                                    style={styles.smallLocationImg}
                                    source={require('.././images/timer-icon.png')} />
                                    <Text style={styles.areaText}>Morning</Text>
                              </View>
                        </View>
                        <View style={styles.areaContent}>
                              <Text style={styles.dateText}> </Text>
                              <View style={{flexDirection:"row",marginTop:5}}>
                                    <Image
                                    style={styles.smallLocationImg}
                                    source={require('.././images/location-small.png')} />
                                    <Text style={styles.areaText}>Rasoolpura</Text>
                              </View>
                        </View>
                    </View>
                    <View style={styles.profileContent}>
                              <Image
                                      style={styles.profileImg}
                                      source={require('.././images/user-icon.png')}
                              />
                              <View style={styles.titleContent}>
                                    <Text style={styles.titleText}>Neeraja</Text>
                                    <Text style={styles.underlineText}>Intermediate</Text>

                              </View>
                              <View style={styles.goingContent}>
                                  <View style={{marginLeft:'auto'}}>
                                             <Image
                                            style={styles.goingImg}
                                            source={require('.././images/going-icon.png')} />
                                  </View>
                                  <Text style={styles.goingText}>20 going</Text>

                              </View>
                    </View>
            </View>
            </TouchableOpacity>
              <View style={styles.listBody}>
                    <View style={{flexDirection:"row",marginBottom:10}}>
                        <View style={styles.dateContent}>
                              <Text style={styles.dateText}>20 Apr</Text>
                              <Text style={styles.monthText}>Sat,2019</Text>
                        </View>
                        <View style={styles.typeContent}>
                              <Text style={styles.dateText}>Tennis</Text>
                              <View style={{flexDirection:"row",marginTop:5}}>
                                    <Image
                                    style={styles.smallLocationImg}
                                    source={require('.././images/timer-icon.png')} />
                                    <Text style={styles.areaText}>Evening</Text>
                              </View>
                        </View>
                        <View style={styles.areaContent}>
                              <Text style={styles.dateText}> </Text>
                              <View style={{flexDirection:"row",marginTop:5}}>
                                    <Image
                                    style={styles.smallLocationImg}
                                    source={require('.././images/location-small.png')} />
                                    <Text style={styles.areaText}>Rasoolpura</Text>
                              </View>
                        </View>
                    </View>
                     <View style={styles.profileContent}>
                              <Image
                                      style={styles.profileImg}
                                      source={require('.././images/user-icon.png')}
                              />
                              <View style={styles.titleContent}>
                                    <Text style={styles.titleText}>Parvathi</Text>
                                    <Text style={styles.underlineText}>Beginner</Text>
                              </View>
                              <View style={styles.goingContent}>
                                  <View style={{marginLeft:'auto',marginTop:10}}>
                                             <Image
                                            style={styles.goingImg}
                                            source={require('.././images/lock-icon.png')} />
                                  </View>

                              </View>
                    </View>
            </View>
              <View style={styles.listBody}>
                    <View style={{flexDirection:"row",marginBottom:10}}>
                        <View style={styles.dateContent}>
                              <Text style={styles.dateText}>21 Apr</Text>
                              <Text style={styles.monthText}>Sun,2019</Text>
                        </View>
                        <View style={styles.typeContent}>
                              <Text style={styles.dateText}>Cricket</Text>
                              <View style={{flexDirection:"row",marginTop:5}}>
                                    <Image
                                    style={styles.smallLocationImg}
                                    source={require('.././images/timer-icon.png')} />
                                    <Text style={styles.areaText}>Morning</Text>
                              </View>
                        </View>
                        <View style={styles.areaContent}>
                              <Text style={styles.dateText}> </Text>
                              <View style={{flexDirection:"row",marginTop:5}}>
                                    <Image
                                    style={styles.smallLocationImg}
                                    source={require('.././images/location-small.png')} />
                                    <Text style={styles.areaText}>Rasoolpura</Text>
                              </View>
                        </View>
                    </View>
                    <View style={styles.profileContent}>
                              <Image
                                      style={styles.profileImg}
                                      source={require('.././images/user-icon.png')}
                              />
                              <View style={styles.titleContent}>
                                    <Text style={styles.titleText}>Neeraja</Text>
                                    <Text style={styles.underlineText}>Intermediate</Text>

                              </View>
                              <View style={styles.goingContent}>
                                  <View style={{marginLeft:'auto'}}>
                                  <TouchableHighlight onPress={() => this.props.navigation.navigate('select_Sports')}>
                                             <Image
                                            style={styles.goingImg}
                                            source={require('.././images/going-icon.png')} />
                                     </TouchableHighlight>
                                  </View>

                                  <Text style={styles.goingText}>20 going</Text>
                              </View>
                    </View>
            </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
container:{

},
locationImg:
{
  width:20,
  height:20
},
smallLocationImg:
{
  width:12,
  height:12,
  marginTop:2
},
goingImg:
{
  width:15,
  height:15,
},
profileImg:{
    width:45,
    height:45,
    borderRadius:50
  },
  cartHeader:
  {
    flexDirection:"row",
    padding:5,
    backgroundColor:"#6ad5f3"
  },
  backImgView:
  {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
    marginLeft:10
  },
  iconImg:
  {
    width:60,
    height:60,
    borderRadius:50,
  },
 profileView:
  {
    flexDirection:"row",
  },
  profileText:
  {
    fontSize:20,
    fontFamily:"TwCenMTStd",
    color:"white",
    marginLeft:10,
    textAlignVertical:"center",
  },
  iconContainer:
  {
    justifyContent: 'center',
    alignItems: 'center',
    margin:10
  },
  headerWrapper:
  {
    flexDirection:"row",
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
    borderColor: '#b9edfc',
    borderBottomWidth: 3,
    paddingBottom:3
  },
  profileContent:
  {
    flexDirection:"row",
    marginTop:10,
    alignItems: 'center'
  },
headerText:
  {
    fontSize: 16,
    marginLeft:5,
    fontFamily:"TwCenMTStd",
    color:"white",
  },
  upcomingWrapper:
  {
    flexDirection:"row",
    marginTop:10
  },
  upcomingText:
  {
    color:"#363f4d",
    fontSize:16,
    fontFamily:"TwCenMTStd",
    marginLeft:10
  },
  signInBtn:
  {
    backgroundColor:"#5c9ef1",
    borderRadius:10,
    width:65,
    marginLeft:'auto',
    marginRight:10
  },
  signInBtnText:
  {
    fontSize:14 ,
    color:'#fff',
    textAlign:"center",
    textAlignVertical:"center",
    fontFamily:"TwCenMTStd"
  },
  listBody:
  {
    borderColor:"#C0C0C0",
    elevation:1,
    margin:10,
    padding:10
  },
  dateText:
  {
    color:"#363f4d",
    fontFamily:"TwCenMTStd",
    fontSize:18,
  },
  monthText:
  {
    color:"#7f7f7f",
    fontFamily:"TwCenMTStd",
    fontSize:15,
    marginTop:5
    // marginLeft:5
  },
  areaText:
  {
    color:"#7f7f7f",
    fontFamily:"TwCenMTStd",
    fontSize:14,
    marginLeft:5
  },
  goingText:
  {
    color:"#7f7f7f",
    fontFamily:"TwCenMTStd",
    fontSize:14,
  },
  goingContent:
  {
    flexDirection:"column",
    marginLeft:'auto',
    // alignItems:"center"
  },
  dateContent:
  {
    flexDirection:"column",
  },
  typeContent:
  {
    flexDirection:"column",
    marginLeft:20
  },
  areaContent:
  {
    flexDirection:"column",
    marginLeft:20
  },
  titleText:
  {
    color:"#363f4d",
    fontSize:18,
    fontFamily:"TwCenMTStd",
  },
  titleContent:
  {
    flexDirection:"column",
    marginLeft:10
  },
  underlineText:
  {
    color:"#33cbf6",
    fontFamily:"TwCenMTStd",
    fontSize:13,
    borderBottomWidth:0.65,
    borderColor:"#7f7f7f"
  },

});
