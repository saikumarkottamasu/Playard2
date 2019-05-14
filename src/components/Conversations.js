import React from 'react';
import { StyleSheet,Text,SafeAreaView,TextInput,FlatList,TouchableOpacity,ScrollView,TouchableHighlight,Image,View } from 'react-native';


export default class Conversations extends React.Component {
static navigationOptions = {
       header: null,
    };     
 render() 
 {
   return(
    <SafeAreaView>
            <View style={styles.cartHeader}>
                      <TouchableOpacity onPress={() =>this.props.navigation.navigate('Profile')}>
                           <Image
                          style={styles.searchImg}
                          source={require('.././images/back-arrow-white.png')} />
                      </TouchableOpacity>
                      <Text style={styles.profileText}>Conversations</Text>
            </View>
        <FlatList
          data={dataDump}
          showsVerticalScrollIndicator={false}
          renderItem={({item,index}) => 

                  <View style={styles.contentBody}>
                      <TouchableOpacity onPress={() =>this.props.navigation.navigate('Chat')}>
                  		    <View style={styles.contentView}>
      		              		<View style={styles.profileContent}>
      		                              <Image
      		                                      style={styles.profileImg}
      		                                      source={require('.././images/user-icon.png')}
      		                              />
      		                              <View style={styles.titleContent}>
      		                                    <Text style={styles.titleText}>{item.conversations.activityName}</Text>

      		                              </View>
      		                              <View style={styles.goingContent}>                                 
      		                                  <Image
      		                                      style={styles.rightImg}
      		                                      source={require('.././images/black-rightarrow.png')}
      		                              		/>

      		                              </View>
      		                    </View>                              
                                  <Text style={styles.areaText}>{item.conversations.activityAddress}</Text>
                          </View>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() =>this.props.navigation.navigate('')}>
                  		    <View style={styles.contentView}>
      		              		<View style={styles.profileContent}>
      		                              <Image
      		                                      style={styles.profileImg}
      		                                      source={require('.././images/user-icon.png')}
      		                              />
      		                              <View style={styles.titleContent}>
      		                                    <Text style={styles.titleText}>{item.conversations.activityName}</Text>
      		                              </View>
      		                              <View style={styles.goingContent}>                                 
      		                                  <Image
      		                                      style={styles.rightImg}
      		                                      source={require('.././images/black-rightarrow.png')}
      		                              		/>
      		                              </View>
      		                    </View>                              
                                  <Text style={styles.areaText}>{item.conversations.activityAddress}</Text>
                          </View>
                      </TouchableOpacity>                            
                  </View> 
            }
          keyExtractor={item => item.conversations}
          />
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
 searchImg:
  {
    width:20,
    height:20,
  },
  profileContent:
  {
    flexDirection:"row",
    marginTop:10,
    alignItems: 'center', 
   
  },
  contentView:
  {
  	 borderWidth:0.65,
    borderColor:"#dadada",  
    padding:10,
    elevation:1,
    marginBottom:10
  },
  contentBody:
  {
  	padding:10
  },
  profileImg:{
    width:35,
    height:35,
    borderRadius:50
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
  goingText:
  {
    color:"#7f7f7f",
    fontFamily:"TwCenMTStd",
    fontSize:14,
  },
  goingContent:
  {
    marginLeft:'auto',
  },
  rightImg:
  {
  	width:18,
  	height:18
  },
  areaText:
  {
    color:"#999999",
    fontFamily:"TwCenMTStd",
    fontSize:13,
    marginLeft:40
    
  },

});


var dataDump =[
  {
    "conversations": 
    {
      "activityName":"Your activity",
      "activityAddress":"16 APR Fri 2019,Morning, Cricket @ Rasoolpura",
      
    },
  }

]