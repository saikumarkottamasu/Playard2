import React from 'react';
import { StyleSheet, Text,TextInput,TouchableOpacity,SafeAreaView ,ScrollView,TouchableHighlight,Image,View } from 'react-native';


export default class activity_view extends React.Component {
static navigationOptions = {
       header: null,
    };     
 render() 
 {
   return(
    <SafeAreaView style={{flex:1}}>
       
              <View style={styles.cartHeader}>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>                  
                          <Image
                              style={styles.searchImg}
                              source={require('.././images/back-arrow-white.png')} />
                      </TouchableOpacity>
                      <Text style={styles.profileText}>Cricket</Text>
                      <View style={{marginLeft:'auto'}}>
                          <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>                  
                              <Image
                                  style={styles.searchImg}
                                  source={require('.././images/share-white-icon.png')} />
                          </TouchableOpacity>
                      </View>                                     
              </View>
           <ScrollView>  
              <View style={styles.contentBody}>
                    <View style={{flexDirection:"row"}}>
                        <View style={{flexDirection:"row"}}>
                                <Image
                                    style={styles.smallLocationImg}
                                    source={require('.././images/date-icon-gray.png')} />
                                    <Text style={styles.areaText}>19 Apr,Friday</Text>
                        </View>
                         <View style={{flexDirection:"row",marginLeft:30}}>
                                <Image
                                    style={styles.smallLocationImg}
                                    source={require('.././images/timer-icon.png')} />
                                    <Text style={styles.areaText}>8.00am</Text>
                        </View>
                    </View>
                    <View style={styles.locationWrapper}>
                                <Image
                                    style={styles.smallLocationImg}
                                    source={require('.././images/location-small.png')} />
                                <Text style={styles.areaText}>Gamepoint Hyderabad,Siddi Vinayaka Nagar,Begumpet</Text>
                    </View>
                    <Text style={styles.upcomingText}>Activity Instructions</Text>
                    <View style={styles.clockWrapper}>                         
                         <View style={styles.clockContent}> 
                                <Text style={styles.startText}>1 -  2</Text>
                                <Text style={styles.clockTimeText}>Beginner - Amateur</Text>
                          </View>
                         <View style={styles.clockContent2}>
                               <Text style={styles.startText}>4</Text>
                               <Text style={styles.clockTimeText}>Required Players</Text>
                        </View>
                    </View>
                    <View style={styles.queryWrapper}>
                        <Text style={styles.upcomingText}>Additional Instructions</Text>                       
                            <View style={styles.signInBtn}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('send_query')}>  
                                              <Text style={styles.signInBtnText}>Send your query</Text>
                                    </TouchableOpacity>
                            </View>                        
                    </View>
                    <Text style={styles.additionalText}>dummy text of printing and typesetting industry.Lorem 
                        has been the indutry's standard dummy text dummy text of printing and typesetting industry.Lorem 
                        has been the indutry's standard dummy text</Text>
                    <Text style={styles.upcomingText}>Players(6)</Text> 
                    <View style={styles.playerWrapper}>                         
                         <View style={styles.playerContent}> 
                                <Image
                                    style={styles.profileImg}
                                    source={require('.././images/3.jpg')} />
                                <View style={{flexDirection:"column",marginLeft:5}}> 
                                      <Text style={styles.typeText}>Neeraja</Text>
                                      <Text style={styles.nameText}>Intermediate</Text>
                                      <Text style={styles.hostText}>Host</Text>
                                </View>
                          </View>
                         <View style={styles.playerContent}> 
                                <Image
                                    style={styles.profileImg}
                                    source={require('.././images/3.jpg')} />
                                <View style={{flexDirection:"column",marginLeft:5}}> 
                                      <Text style={styles.typeText}>Parvathi</Text>
                                      <Text style={styles.nameText}>Intermediate</Text>
                                      <Text style={styles.hostText}>Co-Host</Text>
                                </View>
                          </View>
                    </View>
                     <View style={styles.playerWrapper}>                         
                         <View style={styles.playerContent}> 
                                <Image
                                    style={styles.profileImg}
                                    source={require('.././images/3.jpg')} />
                                <View style={{flexDirection:"column",marginLeft:5}}> 
                                      <Text style={styles.typeText}>Neeraja</Text>
                                      <Text style={styles.nameText}>Intermediate</Text>
                                      <Text style={styles.hostText}>Host</Text>
                                </View>
                          </View>
                         <View style={styles.playerContent}> 
                                <Image
                                    style={styles.profileImg}
                                    source={require('.././images/3.jpg')} />
                                <View style={{flexDirection:"column",marginLeft:5}}> 
                                      <Text style={styles.typeText}>Parvathi</Text>
                                      <Text style={styles.nameText}>Intermediate</Text>
                                      <Text style={styles.hostText}>Host</Text>
                                </View>
                          </View>
                    </View>
                    <View style={styles.playerWrapper}>                         
                         <View style={styles.playerContent}> 
                                <Image
                                    style={styles.profileImg}
                                    source={require('.././images/3.jpg')} />
                                <View style={{flexDirection:"column",marginLeft:5}}> 
                                      <Text style={styles.typeText}>Neeraja</Text>
                                      <Text style={styles.nameText}>Intermediate</Text>
                                      <Text style={styles.hostText}>Host</Text>
                                </View>
                          </View>
                         <View style={styles.playerContent}> 
                                <Image
                                    style={styles.profileImg}
                                    source={require('.././images/3.jpg')} />
                                <View style={{flexDirection:"column",marginLeft:5}}> 
                                      <Text style={styles.typeText}>Parvathi</Text>
                                      <Text style={styles.nameText}>Intermediate</Text>
                                      <Text style={styles.hostText}>Co-Host</Text>
                                </View>
                          </View>
                    </View>
                    <View style={styles.joinActivityBtn}>
                          <TouchableOpacity onPress={() => this.props.navigation.navigate('join_activity')}>
                                <Text style={styles.joinActivityBtnText}>Join Activity</Text>
                          </TouchableOpacity>
                    </View>

              </View>
        </ScrollView>      
    </SafeAreaView >
     
   );
 }
}
const styles = StyleSheet.create({
 cartHeader:
 {
    flexDirection:"row",
    backgroundColor:"#33cbf6",
    padding:15
  },
  profileText:
  {
    fontSize:20,
    fontFamily:"TwCenMTStd",
    color:"white",
    marginLeft:10,
    textAlignVertical:"center",
  },
  searchImg:
  {
    width:20,
    height:20,
    marginRight:10
  },
  smallLocationImg:
  {
    width:12,
    height:12,
    marginTop:2
  },
  areaText:
  {
    color:"#7f7f7f",
    fontFamily:"TwCenMTStd",
    fontSize:14,
    marginLeft:5
  },
  contentBody:
  {
    padding:15
  },
  locationWrapper:
  {
    flexDirection:"row",
    marginTop:10,
    paddingBottom:20,
    borderColor:"#dadada",
    borderBottomWidth:0.65
  },
  upcomingText:
  {
    color:"#363f4d",
    fontSize:16,
    fontFamily:"TwCenMTStd",
    marginTop:10
  },
  clockWrapper:
  {
    flexDirection:"row",
    justifyContent:"center",
    marginTop:10,
    paddingBottom:10,
    borderColor:"#dadada",
    borderBottomWidth:0.65,
  },
  clockContent:
  {
    paddingTop:10,
    paddingBottom:10,
    width:"45%",
  },
  clockContent2:
  {
    alignItems:"center",
     paddingTop:10,
    paddingBottom:10,
    width:"55%",
  },
  clockTimeText:
  {
    fontSize:16,
    color:"#7f7f7f",
    fontFamily:"TwCenMTStd",
    marginTop:5
  },
  startText:
  {
    fontSize:14,
    color:"#33cbf6",
    fontFamily:"TwCenMTStd",
    textAlign:"center",  
  },
  queryWrapper:
  {
    flexDirection:"row"
  },
  signInBtn:
  {   
    borderRadius:5,
    borderColor:"#33cbf6",
    borderWidth:1,
    marginLeft:'auto',
    marginTop:10
  },
  signInBtnText:
  {
    fontSize:14 ,
    color:'#33cbf6',
    padding:5,
    textAlign:"center",
    textAlignVertical:"center",
    fontFamily:"TwCenMTStd"
  },
  additionalText:
  {
    color:"#7f7f7f",
    fontFamily:"TwCenMTStd",
    fontSize:14,
    marginTop:10,
    marginBottom:20
  },
  playerWrapper:
  {
    flexDirection:"row",
    justifyContent:"center",
    marginTop:10,
  },
  playerContent:
  {
    paddingTop:10,
    width:"50%",
    flexDirection:"row",
    alignItems: 'center' ,
  },
  nameText:
  {
    fontSize:14,
    color:"#33cbf6",
    borderBottomWidth: 1,
    borderColor: '#7f7f7f',
    fontFamily:"TwCenMTStd",
  },
  typeText:
  {
    fontSize:16,
    color:"#363f4d",
    fontFamily:"TwCenMTStd",
  },
  hostText:
  {
    color:"#7f7f7f",
    fontFamily:"TwCenMTStd",
    fontSize:14,
  },
  profileImg:
  {
    width:50,
    height:50,
    borderRadius:50
  },
  joinActivityBtn:
  {   
    backgroundColor:"#3DBEF5",
    borderRadius:5,
    marginTop:40,
    marginLeft:80,
    marginRight:80
  },
  joinActivityBtnText:
  {
    fontSize:20 ,
    color:'#fff',
    textAlign:"center",
    padding:10,
    fontFamily:"TwCenMTStd"
  },
});


