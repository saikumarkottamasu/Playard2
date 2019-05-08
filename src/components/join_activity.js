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
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('activity_view')}>                  
                          <Image
                              style={styles.searchImg}
                              source={require('.././images/back-arrow-white.png')} />
                      </TouchableOpacity>
                      <Text style={styles.profileText}>Join Activity</Text>                                     
              </View>
              <ScrollView>
                    <View style={styles.contentBody}>
                        <Text style={styles.additionalText}>User has been putting effortsto organize this activity.</Text>
                        <Text style={styles.additionalText}>Please see the request if you are quite sure to attend.</Text>
                          <Textarea rowSpan={10}  placeholder="Send a message to the host along with your request"  style={[styles.textArea,{ marginLeft:1}]}/>

                    </View>
                    <View style={styles.joinActivityBtn}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                                <Text style={styles.joinActivityBtnText}>Send Request</Text>
                            </TouchableOpacity>
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
    marginLeft:10,
    textAlignVertical:"center",
  },
  searchImg:
  {
    width:20,
    height:20,
    marginRight:10
  },
    contentBody:
  {
    padding:15
  },
  additionalText:
  {
    color:"#7f7f7f",
    fontFamily:"TwCenMTStd",
    fontSize:16,
    marginBottom:10
  },
  joinActivityBtn:
  {   
    backgroundColor:"#3DBEF5",
    borderRadius:5,
    marginBottom:40,
    marginLeft:100,
    marginRight:100,
  },
 joinActivityBtnText:
  {
    fontSize:20 ,
    color:'#fff',
    textAlign:"center",
    padding:5,
    fontFamily:"TwCenMTStd"
  },
  textArea:
  {
    borderColor: '#dadada',
    fontSize:16,
    borderWidth: 1,
    fontFamily:"TwCenMTStd",
    marginBottom:40,
    paddingLeft:10,
    color:"#7f7f7f",
  },

});


