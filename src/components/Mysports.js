import React, {Component} from 'react';
import {Platform, StyleSheet,TouchableOpacity,TouchableHighlight,FlatList, Text, View,Button,Image,ScrollView} from 'react-native';
import Icon from 'react-native-ionicons';


export default class Mysports extends Component {
    static navigationOptions = {
       header: null,
    };

    _renderMySportList()
    {

      <View style={styles.listBody}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Cricket')}>
                    <View style={{flexDirection:"row",marginTop:-1}}>
                              <Image
                                      style={styles.profileImg}
                                      source={require('.././images/user-icon.png')}
                              /> 
                              <View style={styles.titleContent}>
                                    <Text style={styles.titleText}>Neeraja</Text>
                                    <Text style={styles.underlineText}>Intermediate</Text>
                                    <View style ={{flexDirection :'row',marginTop:10}}>
                                      <Image style={{padding:0,height :11,width:11,marginTop:4}} source={require('.././images/timer-icon.png')}/>
                                      <Text style={{marginLeft :5,color :'#777777',fontFamily:"TwCenMTStd"}}>11 Apr, Morning</Text>
                                    </View>
                                    <View style ={{flexDirection :'row',marginTop:10}}>
                                      <Image style={{padding :3,height :15,width:15}} source={require('.././images/location-small.png')}/>
                                      <Text style={{marginLeft :5,color :'#777777',fontFamily:"TwCenMTStd",}}>Rasoolpura, MGB Badminton club(3km)</Text>
                                    </View>
                                    <View style ={{flexDirection :'row',marginTop:10}}>
                                      <Image style={{padding :3,height :15,width:15}} source={require('.././images/badminton.png')}/>
                                      <Text style={{marginLeft :5,color :'#777777',fontFamily:"TwCenMTStd",}}>Beginners</Text>
                                      <View style={{marginLeft:'auto',marginRight:-40}}>
                                             <Image
                                            style={styles.goingImg}
                                            source={require('.././images/fav-inactive-144.png')} />                                                                                                               
                                      </View>
                                      
                                    </View>
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
                    </TouchableOpacity>
            </View>
    }
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
                              <TouchableOpacity onPress={() => this.props.navigation.navigate('create_Activity')}>                  
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
              <View style={{flexDirection:"row",backgroundColor:"#6ad5f3",borderBottomWidth: 0}}>
              <TouchableHighlight onPress={() => this.props.navigation.navigate('Profile')}>                    
                    <View style={styles.headerWrapper}>  
                        <Text style={styles.headerText}>My Activities</Text>

                        
                    </View>
                    </TouchableHighlight>
                    <View style={[styles.headerWrapper,{ borderBottomWidth: 3}]}>
                        
                            <View style={{flexDirection:"row"}}>
                              <Text style={[styles.headerText,{ color:"#daf3fb"}]}>My Sports</Text>
                              
                           </View>
                        
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
                  <Text style={styles.textview1}>Badminton</Text>
                  <Text style={styles.textview}>Cricket</Text>
                  <Text style={styles.textview}>Tennis</Text>
                  <Text style={styles.textview}>Boxing</Text>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>                  
                              <Image
                              style={styles.sortImg}
                              source={require('.././images/sort-icon.png')} />
                    </TouchableOpacity>
                  
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('filterIcon')}>                  
                              <Image
                              style={styles.filterImg}
                              source={require('.././images/filter-icon.png')} />
                    </TouchableOpacity>
                  


              </View>

              <View style={{height:450}}>
                   <FlatList
                        data={this.state}
                         renderItem={({ item }) => this._renderMySportList(item)}                    
                  keyExtractor={item => item.username}
                />
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
sortImg:
{
  
  width:26,
  height:26,
  marginLeft :26,

},
filterImg:
{
  
  width:26,
  height:26,
  marginLeft :11,

},

goingImg:
{
  width:15,
  height:15,
  marginTop:4
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
    
    paddingBottom:3
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
  textview:
  {
    color:"#999999",
    fontSize:15,
    fontFamily:"TwCenMTStd",
    marginLeft:25
  },
   textview1:
  {
    color:"#33cbf6",
    fontSize:15,
    fontFamily:"TwCenMTStd",
    marginLeft:10
  },
  
  listBody:
  {
    borderColor:"#C0C0C0",
    elevation:1,
    margin:3,
    padding:10,
    paddingBottom:6 ,
    marginBottom:10
  },
  
  goingText:
  {
    color:"#999999",
    fontFamily:"TwCenMTStd",
    fontSize:15,
  },
  goingContent:
  {
    flexDirection:"column",
    marginLeft:'auto',

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
    color :'skyblue',
    textDecorationLine: 'underline',
    borderColor:"#33cbf6"
  },

});
