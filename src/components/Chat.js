import React from 'react';
import { StyleSheet, Text,SafeAreaView,TextInput,TouchableOpacity,ScrollView,TouchableHighlight,Image,View } from 'react-native';


export default class Chat extends React.Component {
static navigationOptions = {
       header: null,
    };     
 render() 
 {
   return(
    <SafeAreaView style={{flex:1}}>
            	<View style={styles.cartHeader}>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('Conversations')}>                  
                          <Image
                              style={styles.searchImg}
                              source={require('.././images/back-arrow-white.png')} />
                      </TouchableOpacity>
                      <Text style={styles.profileText}>Cricket</Text>
                      <View style={{marginLeft:'auto',flexDirection:"row"}}>
                        <View style={[styles.iconContainer,{marginRight:15}]}>
                              <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                                   <Image
                                  style={styles.searchImg}
                                  source={require('.././images/reload.png')} />
                              </TouchableOpacity>
                        </View>
                        <View style={styles.iconContainer}>
                              <TouchableOpacity onPress={() => this.props.navigation.navigate('Members')}>
                                   <Image
                                  style={styles.searchImg}
                                  source={require('.././images/members_icon.png')} />
                              </TouchableOpacity>
                        </View>
                        
                    </View>                               
              	</View>
             <ScrollView>
   	            <View style={styles.contentBody}>
		                <Text style={styles.titleText}>Playard created group Cricket</Text>
		                    <View style={styles.joinActivityBtn}>
                                    <Text style={styles.joinActivityBtnText}>Hi</Text>
                      	</View>
                      	<Text style={styles.timeText}>9.50A.M</Text>
                    	<Text style={styles.titleText}>Playard added samatha reddy</Text>
                    	<View style={styles.incomingChat}>
                    			<Image
                                  style={styles.profileImg}
                                  source={require('.././images/user-icon.png')} />
                                <View style={{flexDirection:"column"}}>
			                    		<View style={styles.incomingBtn}>
			                                    <Text style={styles.incomingBtnText}>Samatha Reddy</Text>
			                                    <Text style={styles.profileMessage}>Hello</Text>
			                      		</View>
			                      		<Text style={styles.incomingTimeText}>9.50A.M</Text>
			                    </View>
                    	</View>
                    	<Text style={styles.titleText}>Playard added Abinesh patel</Text>
                    	<View style={styles.incomingChat}>
                    			     <Image
                                  style={styles.profileImg}
                                  source={require('.././images/user-icon.png')} />
                                <View style={{flexDirection:"column"}}>
			                    		<View style={styles.incomingBtn}>
			                                    <Text style={styles.incomingBtnText}>Abinesh Patel</Text>
			                                    <Text style={styles.profileMessage}>Hello Guys</Text>
			                      		</View>
			                      		<Text style={styles.incomingTimeText}>9.50A.M</Text>
			                    </View>
                    	</View>
                    	<View style={styles.joinActivityBtn}>
                                    <Text style={styles.joinActivityBtnText}>How r u?</Text>
                      	</View>
                      	<Text style={styles.timeText}>9.50A.M</Text>
                    	<View style={styles.incomingChat}>
                    			<Image
                                  style={styles.profileImg}
                                  source={require('.././images/user-icon.png')} />
                                <View style={{flexDirection:"column"}}>
			                    		<View style={styles.incomingBtn}>
			                                    <Text style={styles.incomingBtnText}>Samatha Reddy</Text>
			                                    <Text style={styles.profileMessage}>I am good. What about u?</Text>
			                      		</View>
			                      		<Text style={styles.incomingTimeText}>9.50A.M</Text>
			                    </View>
                    	</View>
                    	<View style={styles.joinActivityBtn}>
                                    <Text style={styles.joinActivityBtnText}>How r u?</Text>
                      	</View>
                      	<Text style={styles.timeText}>9.50A.M</Text>

   	            </View>
   	                    <View style={{backgroundColor:"#f1f1f1",flexDirection:"row",width:"100%",alignItems:"center"}}>
                      			<TextInput
                                placeholder="Type your message here"
                                style={styles.inputField}

                              />
                              <View style={{marginLeft:'auto',}}>
                              <Image
                                  style={styles.sendImg}
                                  source={require('.././images/send.png')} />
                               </View>
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
    backgroundColor:"#1fb0d9",
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
  searchImg:
  {
    width:20,
    height:20,
  },
  iconContainer:
  {
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentBody:
  {
  	padding:10
  },
   titleText:
  {
    color:"#1fb0d9",
    fontSize:18,
    fontFamily:"TwCenMTStd",
    textAlign:"center",
    marginTop:20
  },
  joinActivityBtn:
  {   
    backgroundColor:"#929292",
    borderTopLeftRadius:20,
    borderBottomLeftRadius:20,
    borderTopRightRadius:15,
    marginLeft:'auto',
    
  },
 joinActivityBtnText:
  {
    fontSize:16,
    color:'#fff',
    textAlign:"center",
    paddingLeft:10,
    paddingTop:5,
    paddingBottom:5,
    paddingRight:10,
    fontFamily:"TwCenMTStd"
  },
  timeText:
  {
    color:"#cccccc",
    fontSize:12,
    fontFamily:"TwCenMTStd",
    marginLeft:'auto',
    marginTop:5
  },
  incomingBtn:
  {   
    // backgroundColor:"#696969",
    borderTopLeftRadius:15,
    borderBottomRightRadius:20,
    borderTopRightRadius:20,
    marginRight:'auto' ,
    borderColor:"#dadada",
    borderWidth:0.65,
    elevation:1
  },
  incomingBtnText:
  {
    fontSize:16,
    color:'#696969',
    paddingLeft:10,
    paddingTop:5,
    paddingBottom:5,
    paddingRight:10,
    fontFamily:"TwCenMTStd"
  },
  incomingChat:
  {
	flexDirection:"row",
	marginTop:10
  },
  profileImg:
  {
    width:30,
    height:30,
    marginRight:10
  },
   profileMessage:
  {
    color:"#A9A9A9",
    fontSize:12,
    fontFamily:"TwCenMTStd",
    paddingLeft:10,
    paddingRight:5,
    paddingBottom:5,  
  },
  incomingTimeText:
  {
    color:"#A9A9A9",
    fontSize:12,
    fontFamily:"TwCenMTStd",
    marginTop:5
  },
  inputField:
  {
    fontSize:18,
    fontFamily:"TwCenMTStd",
    margin:10,
    height:45,
    width:"80%",
    color:"#999999",
    paddingLeft:10,
    backgroundColor:'white'
  },
  sendImg:
  {
    width:45,
    height:45,
    margin:5,
    borderRadius:50
  },


});


