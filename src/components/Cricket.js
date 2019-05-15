import React, {Component} from 'react';
import {Platform, StyleSheet,TouchableOpacity,TouchableHighlight, Text, View,Button,Image,ScrollView} from 'react-native';
import Icon from 'react-native-ionicons';



export default class Cricket extends Component {
    static navigationOptions = {
       header: null,
    };
   render() {
    return (

    	<View>
    		<View style={styles.cartHeader}>
                    
                    <View style={styles.profileView}>
                    	  <TouchableOpacity onPress={() => this.props.navigation.navigate('Mysports')}>                  
                          <Image
                              style={styles.searchImg}
                              source={require('.././images/back-arrow-white.png')} />
                      </TouchableOpacity>
                          <Text style={styles.profileText}>Cricket</Text>
                          
                    </View>
                    
                    <View style={{marginLeft:'auto',flexDirection:"row"}}>
                    	<View style={styles.iconContainer}>
                              <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>                  
                          <Image
                              style={styles.shareImg}
                              source={require('.././images/share-white-icon.png')} />
                      </TouchableOpacity>
                        </View>
                        <View style={styles.iconContainer}>
                              <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>                  
                          <Image
                              style={styles.shareImg}
                              source={require('.././images/calender-white-icon.png')} />
                      </TouchableOpacity>
                        </View>
                        <View style={styles.iconContainer}>
                              <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>                  
                          <Image
                              style={styles.shareImg}
                              source={require('.././images/chat-icon.png')} />
                      </TouchableOpacity>
                        </View>
                        <View style={styles.iconContainer}>
                    		<TouchableOpacity>
                              <TouchableOpacity onPress={() => this.props.navigation.navigate('edit')}>                  
                          <Image
                              style={styles.shareImg}
                              source={require('.././images/user-nav-icon.png')} />
                      </TouchableOpacity>
                            </TouchableOpacity>
                        </View>
                    </View>                       
            </View>
            <ScrollView>
            <View style={styles.cartHeader1}>
                    
                    <View style={styles.profileView}>
                    	  <View style={[styles.iconContainer,{marginLeft:2}]}>
                              <Image
                              style={styles.timerImg}
                              source={require('.././images/date-icon-gray.png')} />
                          </View>
                          <Text style={styles.profileText1}>19 Apr, Friday</Text>
                          
                    </View>
                    <View style={styles.profileView}>
                    	  <View style={[styles.iconContainer,{marginLeft :30}]}>
                              <Image
                              style={styles.timerImg}
                              source={require('.././images/timer-icon.png')} />
                          </View>
                          <Text style={styles.profileText3}>Morning</Text>
                          
                    </View>
                    
                    <View style={{flexDirection:"row",marginLeft:-19}}>
                    	   <View style={[styles.iconContainer,{marginLeft :40}]}>
                              <Image
                              style={styles.timerImg}
                              source={require('.././images/location-small.png')} />
                          </View>
                          <Text style={styles.profileText1}>Rasoolpura</Text>
                        
                    </View>                       
            </View>

            <View style ={styles.boxshadow}>
            	<View style ={{flexDirection :'row'}} >
                  <Text style={styles.upcomingText}>Venues</Text>

                  <View style={styles.signInBtn}>
                           <TouchableOpacity onPress={() => this.props.navigation.navigate('Venues')}> 
                                  <Text style={styles.signInBtnText}>See all</Text>
                            </TouchableOpacity>
                  </View>
                </View>
                <Text style ={{marginLeft :12,marginTop:10,color :'#999999',fontFamily:"TwCenMTStd",}}>Near by Venues by this activity</Text>

                <View style ={{flexDirection :'row',marginTop :13,marginLeft:10}}>
              
                  <View style = {styles.redbox }>
                    
                        <Text style = {{fontSize :13,color :'#363f4d',fontFamily:"TwCenMTStd",marginTop:6}}>Sri sai baba cricket stadium </Text>
                        <Text style = {{fontSize :13,color :'#777777',fontFamily:"TwCenMTStd",marginTop:5}}>Begumpet </Text>

                        
                        <View style ={{flexDirection :'row'}}>
                        		<Image style={styles.goingImg} source={require('.././images/rating-star-active.png')} />                                                                                                               
                          
                              
                                 <Image style={styles.goingImg} source={require('.././images/rating-star-active.png')} />                                                                                                               
                              
                              
                                 <Image style={styles.goingImg} source={require('.././images/rating-star-active.png')} />                                                                                                               
                              
                              
                                 <Image style={styles.goingImg} source={require('.././images/rating-star-active.png')} />                                                                                                               
                             
                              
                                 <Image style={styles.goingImg} source={require('.././images/rating-star-active.png')} />                                                                                                               
                 
                        	<Text style = {{fontSize :12 ,marginTop:13,marginLeft:'auto',fontFamily:"TwCenMTStd",}}>300 Rating </Text>
                        </View>

                        
                    
                </View>
                  <View style = {styles.bluebox }>
                     
                        <Text style = {{fontSize :13,color :'#363f4d',fontFamily:"TwCenMTStd",marginTop:6}}>Sri sai baba cricket </Text>
                        <Text style = {{fontSize :13,fontFamily:"TwCenMTStd",marginTop:5}}>Begumpet </Text>
                        <View style ={{flexDirection :'row'}}>
                        	 
                                 <Image style={styles.goingImg} source={require('.././images/rating-star-active.png')} />                                                                                                               
                          
                              
                                 <Image style={styles.goingImg} source={require('.././images/rating-star-active.png')} />                                                                                                               
                              
                              
                                 <Image style={styles.goingImg} source={require('.././images/rating-star-active.png')} />                                                                                                               
                              
                              
                                 <Image style={styles.goingImg} source={require('.././images/rating-star-active.png')} />                                                                                                               
                             
                              
                                 <Image style={styles.goingImg} source={require('.././images/rating-star-active.png')} />                                                                                                               
                             
                        	<Text style = {{fontSize :12 ,marginTop:13,marginLeft:12,fontFamily:"TwCenMTStd",}}>300 Rating </Text>
                        </View>
                       
                    
                  </View>
           
            </View>

            </View>
            <View style ={{flexDirection :'row'}}>
                  <Text style={{marginLeft:15,color :'#363f4d',fontSize:20,fontFamily:"TwCenMTStd"}}>Players</Text>
                  <View style={styles.manageBtn}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('managePlayers')}>
                                  <Text style={styles.manageBtnText}>Manage(3)</Text>
                            </TouchableOpacity>
                  </View>
            </View>

            <View style={{flexDirection:"row",marginTop:5,padding :16}}>
                              <Image
                                      style={styles.profileImg}
                                      source={require('.././images/user-icon.png')}
                              /> 
                              <View style={styles.titleContent}>
                                    <Text style={styles.titleText}>Parvathi</Text>
                                    <Text style={styles.underlineText}>Intermediate</Text>
                                    <Text style ={{color :'#999999',fontFamily:"TwCenMTStd"}}>Host</Text>
                              </View>

                              <Image
                                      style={styles.profileImg2}
                                      source={require('.././images/user-icon.png')}

                              /> 

                              <View style={styles.seeallBtn}>
                           			 <TouchableOpacity>
                                  		<Text style={styles.manageBtnText}>See all</Text>
                           			 </TouchableOpacity>
                  </View>

                                                                                                                                                   
                    </View>


                    

                <View style={styles.clockWrapper}>                         
                         <View style ={{flexDirection :'row'}}>
                             <Image style={styles.addIcon} source={require('.././images/add-co-star-icon.png')}/>
                             <Text style={{marginLeft :-1,padding :15,marginTop:4,fontSize :18,fontFamily:"TwCenMTStd",color:"#777777"}}>Add Co-Host</Text>
                            </View>
                         <View style={styles.clockContent}>
                         	<View style ={{flexDirection :'row'}}>
                             <Image style={styles.addIcon2} source={require('.././images/add-co-star-icon.png')}/>
                             <Text style={{padding:14,fontFamily:"TwCenMTStd",color:"#777777",fontSize :18,marginTop:-6}}>Invite players</Text>
                            </View>     
                        </View>
                </View>

                <View style ={{flexDirection :'row'}}>
                  <Text style={{marginLeft:15,color :'#363f4d',fontSize:18,marginTop:10,fontFamily:"TwCenMTStd",}}>Activity Instructions</Text>
                  <View style={styles.manageBtn}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('modify_Activity')}>
                                  <Text style={styles.manageBtnText}>Modify</Text>
                            </TouchableOpacity>
                  </View>
            	</View>
                    <View style={styles.clockWrapper}>                         
                         <View style={styles.clockContent}> 
                                <Text style={styles.startText}>1 - 2</Text>
                                <Text style={styles.clockTimeText}>Beginner - Amateur</Text>
                          </View>
                         <View style={styles.clockContent}>
                               <Text style={styles.startText}>4</Text>
                               <Text style={styles.clockTimeText}>Required Players</Text>
                        </View>
                    </View>
                <View style ={{flexDirection :'row'}}>
                    <Text style={{marginLeft:18,color :'#363f4d',fontSize:18,marginTop:10,fontFamily:"TwCenMTStd",}}>Additional Instructions</Text>
                      <View style={styles.manageBtn}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Seequeries')}> 
                                  <Text style={styles.manageBtnText}>See queries</Text>
                            </TouchableOpacity>
                      </View>
            	</View>
            	<View style ={{marginLeft :18,paddingBottom:100,marginTop:11}}>
                    <Text style ={{fontFamily:"TwCenMTStd",color :'#999999'}}>Dummy text of printing and typesetting industry.
                   Loremhas been the indutry standard dummy text dummy text of printing
                   and typesetting industry.Lorem been the indutry standard dummy text.</Text>

                </View>
            </ScrollView>
    	</View>
      
    );
  }
}

const styles = StyleSheet.create({
container:{

},
 startText:
  {
    fontSize:14,
    color:"#33cbf6",
    fontFamily:"TwCenMTStd",
    textAlign:"center",
    marginLeft:-20,  
  },
  queryWrapper:
  {
    flexDirection:"row"
  },
  goingImg:
{
  width:15,
  height:15,
  marginTop:10,
},
profileImg:{
    width:45,
    height:45,
    borderRadius:50
  },
  profileImg2:{
    width:45,
    height:45,
    borderRadius:50,
    marginLeft:65,
    

  },
   activityText:
  {
    color:"#363f4d",
    fontSize:16,
    fontFamily:"TwCenMTStd",
    
    padding:10,
    marginLeft:10,
  },
   addIcon:{
   width:40,
    height:40,
    marginTop:10,
    marginLeft :14,
    

  },
  searchImg:
  {
    width:20,
    height:20,
    marginTop :12,
  },
  shareImg:
  {
    width:20,
    height:20,
    
  },
  timerImg:
  {
    width:12,
    height:12,
    
  },

  addIcon2:{
    width:40,
    height:40,
    marginTop:1,
    
  
  },
   additionalText:
  {
    color:"#7f7f7f",
    fontFamily:"TwCenMTStd",
    fontSize:14,
    marginTop:10,
    marginBottom:20
  },
  redbox: {
      
       padding:5,   
      borderWidth: 1,
       borderRadius: 3 ,
        borderColor :'#dadada',
        backgroundColor :'#d3e5fb',
        flexDirection :'column',
      
   },
   boxshadow:{
   	flexDirection :'column',
   	borderColor :'#dadada',
   	borderWidth:1,
   	margin:15,
   	marginTop:1,
   	bottom :0,
   	paddingBottom:20,
   	padding:4,

   	


   },
   bluebox: {
      
      padding:5,       
      borderWidth: 1,
       borderRadius: 3 ,
        borderColor :'#dadada',
        backgroundColor :'#d3e5fb',
        marginLeft :10,
      flexDirection :'column',
      paddingBottom:8,
      width :'47%',

      
   },
  cartHeader:
  {
    flexDirection:"row",
    padding:10,
    height:63,
    backgroundColor:"#33cbf6"
  },
  cartHeader1:
  {
    flexDirection:"row",
    padding:10,
    height:63,
   
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
    fontSize:25,
    fontFamily:"TwCenMTStd",
    color:"white",
    marginLeft:10,
    textAlignVertical:"center",
  },
  profileText1:
  {
    fontSize:15,
    fontFamily:"TwCenMTStd",
   	color :'#999999',
    marginLeft:-5,
    marginRight:-8,
    textAlignVertical:"center",
  },
  profileText3:
  {
    fontSize:15,
    fontFamily:"TwCenMTStd",
    color :'#999999',
    marginLeft:-2,
    marginRight:-8,
    textAlignVertical:"center",
  },
  iconContainer:
  {
    justifyContent: 'center',
    alignItems: 'center',
    margin:8	
  },
  headerWrapper:
  {
    flexDirection:"row",
    justifyContent: 'center',
    alignItems: 'center',
    flex:1, 
    borderColor: '#dddd',
    borderBottomWidth: 3,
    paddingBottom:3
  },
headerText:
  {
    fontSize: 14,
    marginLeft:5,
    fontFamily:"Lato-Medium",
    color:"white",    
  },
  
  signInBtn:
  {   
    backgroundColor:"#1C90DE",
    borderRadius:15,
    marginLeft:'auto',
    marginRight:10,
    marginTop:7
  },
  manageBtn:
  {   
    borderColor:"#33cbf6",
    borderRadius:5,
    marginLeft:'auto',
    marginRight:18,
    marginTop:7,
    borderWidth:2.5,
    padding :2,
  },
  modifyBtn:
  {   
    borderColor:"#33cbf6",
    borderRadius:5,
    marginLeft:'auto',
    marginRight:10,
    marginTop:10,
    bottom :9,
    borderWidth:2.5,
  },
  seeallBtn:
  {   
   
    borderRadius:5,
    marginLeft:'auto',
    marginRight:32,
    marginTop:7,
    padding:5,
    
  },
  signInBtnText:
  {
    fontSize:13 ,
    color:'#fff',
    textAlign:"center",
    paddingLeft:10,
    paddingRight:10,
    fontFamily:"TwCenMTStd",

  },
   manageBtnText:
  {
    fontSize:15 ,
    color:"#33cbf6",
    textAlign:"center",
    paddingLeft:10,
    paddingRight:10,
    fontFamily:"TwCenMTStd",
  },
  listBody:
  {
    borderColor:"#C0C0C0",
    elevation:1,
    margin:10,
    padding:5
  },
  dateText:
  {
    color:"black",
    fontFamily:"Lato-Medium",
    fontSize:16
  },
  monthText:
  {
    color:"#808080",
    fontFamily:"Lato-Medium",
    fontSize:14
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
  titleText:
  {
    
    color:"#363f4d",
    fontSize:18,
    fontFamily:"TwCenMTStd",
    marginTop:4	
  },
 upcomingText:
  {
    color:"#363f4d",
    fontSize:20,
    fontFamily:"TwCenMTStd",
    marginLeft :10,
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
    fontSize:12,
    textDecorationLine :'underline',
    
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
    alignItems:"center",
    padding:10,
    width:"50%",
    borderRadius:5,   
  },
  clockTimeText:
  {
    fontSize:16,
    color:"#999999",
    fontFamily:"TwCenMTStd",
    textAlign:"center",
    marginTop:5,
    marginLeft:-20,
  },
});


