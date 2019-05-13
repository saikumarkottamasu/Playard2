import React from 'react';
import { StyleSheet, Text,SafeAreaView,TextInput,TouchableOpacity,ScrollView,TouchableHighlight,Image,View } from 'react-native';


export default class venue_Details extends React.Component {
static navigationOptions = {
       header: null,
    };     
 render() 
 {
   return(
    <SafeAreaView style={{flex:1}}>
             	<View style={styles.cartHeader}>
                      <TouchableOpacity onPress={() =>this.props.navigation.navigate('Venues')}>
                           <Image
                          style={styles.searchImg}
                          source={require('.././images/back-arrow-white.png')} />
                      </TouchableOpacity>
                      <Text style={styles.profileText}>Venue Details</Text>
              	</View>
             <ScrollView>
              	<View style={styles.contentBody}>
              			<View style={styles.addressWrapper}>
	                        <Text style={styles.titleText}>Sri Saibaba Cricket Stadium</Text>
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
				                     <Text style={styles.areaText}>300 Rating</Text>		
	                        </View>
	                    </View>
	                    <View style={styles.locationWrapper}>
	                        		<Image
				                          style={styles.starImg}
				                          source={require('.././images/location-small.png')} />				                   
				                    <Text style={styles.addText}>Plot No-103,Phase 11,Begumpet</Text>
				                    <View style={styles.signInBtn}>
		                                  <TouchableOpacity onPress={() => this.props.navigation.navigate('see_Map')}>  
		                                        <Text style={styles.signInBtnText}>See Map</Text>
		                                   </TouchableOpacity>
		                            </View>   		
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
                    	<Text style={styles.operationalText}>About Venue</Text>
                    	<Text style={styles.incomingTimeText}>Lorem Ipsum is 
	                    	simply dummy text of the printing and typesetting industry. 
	                    	Lorem Ipsum has been the industry's standard dummy 
	                    	text ever since the 1500s, </Text>
	                    <View style={styles.btnWrapper}>
		                    <View style={{flexDirection:"row"}}>
			                   	<View style={styles.joinActivityBtn}>
		                                    <Text style={styles.joinActivityBtnText}>Shoes on Rent</Text>
		                      	</View>
		                      	<View style={styles.joinActivityBtn}>
		                                    <Text style={styles.joinActivityBtnText}>Washroom</Text>
		                      	</View>
		                      	<View style={styles.joinActivityBtn}>
		                                    <Text style={styles.joinActivityBtnText}>Changing Room</Text>
		                      	</View>
		                    </View>
		                    <View style={{flexDirection:"row"}}>
			                   	<View style={styles.joinActivityBtn}>
		                                    <Text style={styles.joinActivityBtnText}>Parking</Text>
		                      	</View>
		                      	<View style={styles.joinActivityBtn}>
		                                    <Text style={styles.joinActivityBtnText}>Drinking Water</Text>
		                      	</View>
		                      	<View style={styles.joinActivityBtn}>
		                                    <Text style={styles.joinActivityBtnText}>Bakery</Text>
		                      	</View>
		                    </View>
		                </View>

              	</View> 
              </ScrollView>    
                		<View style={styles.tagVenueBtn}>
                              <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                                    <Text style={styles.tagVenueBtnText}>Tag Venue</Text>
                              </TouchableOpacity>
                      	</View>
    </SafeAreaView>
     
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
    marginLeft:20,
    textAlignVertical:"center",
  },
 contentBody:
  {
    padding:10
  },
 searchImg:
  {
    width:20,
    height:20,
  },
  titleText:
  {
    color:"#363f4d",
    fontSize:20,
    fontFamily:"TwCenMTStd",
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
  	marginLeft:50
  },
  addressWrapper:
  {
  	marginTop:10,
  	paddingBottom:20,
  	borderBottomWidth:1,
    borderColor:"#dadada",
  },
  locationWrapper:
  {
  	flexDirection:"row",
  	marginTop:30,
  },
  addText:
  {
    color:"#7f7f7f",
    fontFamily:"TwCenMTStd",
    fontSize:16,
  	marginLeft:10
  },
signInBtn:
  {   
    borderRadius:5,
    borderColor:"#33cbf6",
    borderWidth:1,
    marginLeft:'auto',
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
    fontSize:20,
    fontFamily:"TwCenMTStd",
  },
  joinActivityBtn:
  {   
    backgroundColor:"#929292",
    borderRadius:5,
    margin:5
  },
 joinActivityBtnText:
  {
    fontSize:16,
    color:'#fff',
    textAlign:"center",
    padding:5,
    fontFamily:"TwCenMTStd"
  },
  btnWrapper:
  {
  	flexDirection:"column",
  	justifyContent:"center",
  	alignItems:"center",
  	borderWidth:1,
  	borderColor:"#A9A9A9",
  	borderRadius:5,
  	padding:10,
  	paddingBottom:30,
  	marginTop:20
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

});


