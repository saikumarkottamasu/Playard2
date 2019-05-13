import React from 'react';
import { StyleSheet, Text,SafeAreaView,TextInput,TouchableOpacity,ScrollView,TouchableHighlight,Image,View } from 'react-native';


export default class Members extends React.Component {
static navigationOptions = {
       header: null,
    };     
 render() 
 {
   return(
    <SafeAreaView style={{flex:1}}>
                <View style={styles.cartHeader}>
                      <TouchableOpacity onPress={() =>this.props.navigation.navigate('Chat')}>
                           <Image
                          style={styles.searchImg}
                          source={require('.././images/back-arrow-white.png')} />
                      </TouchableOpacity>
                      <Text style={styles.profileText}>Members</Text>
              	</View>
              	<View style={styles.contentBody}>
			              	<View style={styles.profileContent}>
			                            <Image
			                                style={styles.profileImg}
			                                source={require('.././images/user-icon.png')}
			                              />
			                            <Text style={styles.titleText}>Playard Admin</Text>              
			                </View>
			                <View style={styles.profileContent}>
			                            <Image
			                                style={styles.profileImg}
			                                source={require('.././images/user-icon.png')}
			                              />
			                            <Text style={styles.titleText}>Krishna Kola</Text>              
			                </View> 
			                <View style={styles.profileContent}>
			                            <Image
			                                style={styles.profileImg}
			                                source={require('.././images/user-icon.png')}
			                              />
			                            <Text style={styles.titleText}>Samatha Reddy</Text>              
			                </View>   
			                <View style={styles.profileContent}>
			                            <Image
			                                style={styles.profileImg}
			                                source={require('.././images/user-icon.png')}
			                              />
			                            <Text style={styles.titleText}>Abinesh Patel</Text>              
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
  profileText:
  {
    fontSize:20,
    fontFamily:"TwCenMTStd",
    color:"white",
    marginLeft:10,
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
  profileContent:
  {
    flexDirection:"row",
    alignItems: 'center', 
    borderWidth:1,
    borderColor:"#dadada",  
    elevation:0.65,  
    padding:5,
    marginBottom:10
  },
  profileImg:
  {
    width:35,
    height:35,
    borderRadius:50
  },
   titleText:
  {
    color:"#363f4d",
    fontSize:18,
    fontFamily:"TwCenMTStd",
    marginLeft:5
  },
});


