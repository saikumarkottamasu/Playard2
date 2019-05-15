import React from 'react';
import { StyleSheet, Text,TextInput,TouchableOpacity,SafeAreaView,ScrollView,TouchableHighlight,Image,View } from 'react-native';
import { Textarea } from 'native-base';


export default class join_activity extends React.Component {
static navigationOptions = {
       header: null,
    };     
 render() 
 {
   return(
    <SafeAreaView style={{flex:1}}>
              <View style={styles.cartHeader}>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('Cricket')}>                  
                          <Image
                              style={styles.searchImg}
                              source={require('.././images/back-arrow-white.png')} />
                      </TouchableOpacity>
                      <Text style={styles.profileText}>User Queries</Text>                                     
              </View>
          
                    <View style={styles.contentBody}>
                        <Text style={styles.additionalText}>Answer the queries by editing your Activity Instructions</Text>
                  
                    </View>
              <View style={{flexDirection:"row",marginTop:0,padding :18}}>
                              <Image
                                      style={styles.profileImg}
                                      source={require('.././images/user-icon.png')}
                              /> 
                              <View style={styles.titleContent}>
                                    <Text style={styles.titleText}>Siva Parvathi</Text>
                                    <Text style={styles.underlineText}>Hello good morning              </Text>
                                    <Text style={styles.underText}>1 hour ago, 10:12</Text>
                              </View>
                              
                    </View>
                
                <View style={{flexDirection:"row",marginTop:-17,padding :18}}>
                              <Image
                                      style={styles.profileImg}
                                      source={require('.././images/user-icon.png')}
                              /> 
                              <View style={styles.titleContent}>
                                    <Text style={styles.titleText}>Neeraja</Text>
                                    <Text style={styles.underlineText}>Hello good morning              </Text>
                                    <Text style={styles.underText}>2 hours ago, 10:05</Text>
                              </View>
                              
                    </View>
              
                <View style={{flexDirection:"row",marginTop:-17,padding :18}}>
                              <Image
                                      style={styles.profileImg}
                                      source={require('.././images/user-icon.png')}
                              /> 
                              <View style={styles.titleContent}>
                                    <Text style={styles.titleText}>Krishna Kola</Text>
                                    <Text style={styles.underlineText}>Hello good morning              </Text>
                                    <Text style={styles.underText}>3 hours ago, 9:45</Text>
                              </View>
                              
                    </View>
              
              <View style={{flexDirection:"row",marginTop:-17,padding :18}}>
                              <Image
                                      style={styles.profileImg}
                                      source={require('.././images/user-icon.png')}
                              /> 
                              <View style={styles.titleContent}>
                                    <Text style={styles.titleText}>Siva Parvathi</Text>
                                    <Text style={styles.underlineText}>Hello good morning              </Text>
                                    <Text style={styles.underText}>5 hours ago, 7:12</Text>
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
    padding:15,
  },
  profileText:
  {
    fontSize:20,
    fontFamily:"TwCenMTStd",
    color:"white",
    marginLeft:10,
    textAlignVertical:"center",
  },
  titleContent:
  {
    flexDirection:"column",
    marginLeft:15,
    borderBottomWidth :1,
    paddingBottom :10,
    borderColor :"#dadada"
  },
  titleText:
  {
    color:"#363f4d",
    fontSize:18,
    fontFamily:"TwCenMTStd",
  },
  underlineText:
  {
    color:"#999999",
    fontSize:18,
    fontFamily:"TwCenMTStd",
  },
  underText:
  {
    color:"#7f7f7f",
    fontSize:12,
    fontFamily:"TwCenMTStd",
  },
  profileImg:{
    width:45,
    height:45,
    borderRadius:50
  },
  searchImg:
  {
    width:20,
    height:20,
    marginRight:10
  },
    contentBody:
  {

    padding:15,
    flexDirection:'row'
  },
  additionalText:
  {
    color:"#363f4d",
    fontFamily:"TwCenMTStd",
    fontSize:15,
    
  },
 
 
  

});


