import React from 'react';
import { StyleSheet,Picker, Text,TextInput,Switch,TouchableOpacity,TouchableHighlight,ScrollView,SafeAreaView,Image,View } from 'react-native';
import Icon from 'react-native-ionicons';
import {Item,Input} from 'native-base';


export default class activity_edit extends React.Component {
static navigationOptions = {
       header: null,
    };
  

   

 render() 
 {
   return(
    < SafeAreaView style={{flex:1}}>
                  <View style={styles.cartHeader}>  
                    <View style={styles.profileView}>
                        <View style={styles.cartHeader}>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('edit')}>                  
                          <Image
                              style={styles.searchImg}
                              source={require('.././images/back-arrow-white.png')} />
                      </TouchableOpacity>
                      <Text style={styles.profileText}>Cricket</Text>                                     
              </View>
                                
                    </View>
                    
                    <View style={{marginLeft:'auto',flexDirection:"row",alignItems :'center'}}>
                        <View>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Cricket')}>
                               <Image
                                style={styles.searchImg}
                                source={require('.././images/delete-activity.png')} />
                           </TouchableOpacity>
                        </View>
                    </View>
                  </View>

          
                  <View style={styles.contentBody}>


                      <View style={styles.itemView}>
                             <Text style={{color :'#33cbf6',fontFamily:"TwCenMTStd",fontSize :20}}>Basic Details</Text>
                             <Text style={{color :'#999999',fontFamily:"TwCenMTStd",fontSize :20,marginLeft :30}}>Activity Instructions</Text>
                           
                      </View>

                      
                      <View style={styles.itemWrapper}>
                             <Text style={styles.selectSport}>Area/ Location</Text>
                            <View style={styles.textWrapper}>
                                <Text style={styles.accHeaderText}>Rasoolpura</Text>
                                <View style={{marginLeft:"auto"}}>
                                      <TouchableHighlight onPress={() => this.props.navigation.navigate('')}>                                                         
                                             <Image
                                            style={styles.rightImg}
                                            source={require('.././images/black-rightarrow.png')} />                                                                                                               
                                     </TouchableHighlight>  
                                </View>
                            </View>
                      </View>


                      <View style={styles.itemWrapper}>
                             <Text style={styles.selectSport}>Date</Text>
                            <View style={styles.textWrapper}>
                                <Text style={styles.accHeaderText}>27th APR 19</Text>
                                <View style={{marginLeft:"auto"}}>
                                      <TouchableHighlight onPress={() => this.props.navigation.navigate('')}>                                                         
                                             <Image
                                            style={styles.rightImg}
                                            source={require('.././images/black-rightarrow.png')} />                                                                                                               
                                     </TouchableHighlight>  
                                </View>
                            </View>
                      </View>
                      <View style={styles.itemWrapper}>
                             <Text style={styles.selectSport}>Time</Text>
                            <View style={styles.textWrapper}>
                                <Text style={styles.accHeaderText}>Evening(4PM-9PM)</Text>
                                <View style={{marginLeft:"auto"}}>
                                      <TouchableHighlight onPress={() => this.props.navigation.navigate('')}>
                                            <View style={{}}>
                                             <Image
                                            style={styles.rightImg}
                                            source={require('.././images/black-rightarrow.png')} />
                                            </View>                                                                                                               
                                     </TouchableHighlight>  
                                </View>
                            </View>
                      </View>
                     <View style={styles.itemWrapper}>
                             <Text style={styles.selectSport}>Activity Type</Text>
                            <View style={styles.textWrapper}>
                                <Text style={styles.accHeaderText}>Public</Text>
                                <View style={{marginLeft:"auto"}}>
                                      <TouchableHighlight onPress={() => this.props.navigation.navigate('')}>
                                            <View style={{}}>
                                             <Image
                                            style={styles.rightImg}
                                            source={require('.././images/black-downarrow.png')} />
                                            </View>                                                                                                               
                                     </TouchableHighlight>  
                                </View>
                            </View>
                      </View>
                      <View style={styles.joinActivityBtn}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                                <Text style={styles.joinActivityBtnText}>Update Activity</Text>
                            </TouchableOpacity>
                    </View>  
                       

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
  searchImg:
  {
    width:20,
    height:20,
  },
  trashImg:
  {
    width:20,
    height:20,
    marginLeft:'auto'
      },
  rightImg:
  {
    width:15,
    height:15,
    // padding:10,
    
    // backgroundColor:"pink"
  },
  joinActivityBtn:
  {   
    backgroundColor:"#3DBEF5",
    borderRadius:5,
    marginBottom:40,

    marginTop:120,
    height:40,
    
    width :'100%',

  },
 joinActivityBtnText:
  {
    fontSize:20 ,
    color:'#fff',
    textAlign:"center",
    padding:5,
    fontFamily:"TwCenMTStd"
  },

  profileText:
  {
    fontSize:20,
    fontFamily:"TwCenMTStd",
    color:"white",
    marginLeft:20,
    textAlignVertical:"center",
  },
  iconContainer:
  {
    justifyContent: 'center',
    alignItems: 'center',
    margin:15
  },
  accHeaderText:
  {
    fontFamily:"TwCenMTStd",
    fontSize:17,
    color:"#363f4d",
  },
  rightIconContainer:
  {
    marginLeft:'auto'
  },
  textWrapper:
  {
    flexDirection:"row",
    borderBottomWidth:1,
    borderColor:"#dadada",
    paddingBottom:5,
    
  },
  selectSport:
  {
    fontSize:16,
    fontFamily:"TwCenMTStd",
    marginBottom:5,
    color:"#7f7f7f"
  },
  contentBody:
  {
    padding:20
  },
  itemWrapper:
  {
    marginBottom:25
  },
  itemView:
  {
    marginBottom:25,
    flexDirection :'row',
  },
  mobileText1:
  {
    borderColor: '#ddd',
    borderBottomWidth: 1,
    marginBottom:30,
    fontFamily:"TwCenMTStd",
  },
  signInBtn:
  {   
    backgroundColor:"#3DBEF5",
    borderRadius:5,
    marginTop:40,
    marginLeft:20,
    marginRight:20
  },
  signInBtnText:
  {
    fontSize:20 ,
    color:'#fff',
    textAlign:"center",
    padding:10,
    fontFamily:"TwCenMTStd"
  },

});


