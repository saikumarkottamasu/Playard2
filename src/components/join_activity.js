import React from 'react';
import { StyleSheet, Text,TextInput,TouchableOpacity,SafeAreaView,ScrollView,TouchableHighlight,Image,View } from 'react-native';

export default class join_activity extends React.Component {
static navigationOptions = {
       header: null,
    }; 
 constructor(props) {
   super(props);
   this.state = {
    value:''
    };
  }       
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
                        <Text style={styles.additionalText}>User has been putting efforts to organize this activity.</Text>
                        <Text style={styles.additionalText}>Please see the request if you are quite sure to attend.</Text>
                        <TextInput
                                style={styles.textArea}
                                underlineColorAndroid="transparent"
                                placeholder="Send a message to the host along with your request"
                                placeholderTextColor="#7f7f7f"
                                numberOfLines={8}
                                multiline={true}
                                maxLength = {1024}
                                value={this.state.value}
                                onChangeText={(value) => this.setState({value})}
                              />
                          <Text style={styles.additionalText}>
                            {this.state.value.length} of 1024 Characters
                         </Text>
                    </View>
              </ScrollView>
                    <View style={styles.joinActivityBtn}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                                <Text style={styles.joinActivityBtnText}>Send Request</Text>
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
    
    fontSize:16,
    color:"#7f7f7f",
    textAlignVertical: 'top',
    fontFamily:"TwCenMTStd",
    marginBottom:5,
    paddingLeft:20,
    paddingTop:20,
    elevation:1,
    borderColor:"#dadada",
    borderWidth:0.65,
     borderRadius:5

  },

});


