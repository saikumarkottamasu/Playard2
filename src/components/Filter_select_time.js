import React from 'react';
import { StyleSheet, Text,TextInput,TimePickerAndroid,SafeAreaView ,TouchableOpacity,ScrollView,TouchableHighlight,Image,View } from 'react-native';
import Icon from 'react-native-ionicons';


export default class select_Time extends React.Component {
static navigationOptions = {
       header: null,
    }; 

async timePicker(){
        const TimePickerModule = require('NativeModules').TimePickerAndroid;
        try {
            const {action, hour, minute} = await TimePickerAndroid.open({
                hour: 12,
                minute: 0,
                is24Hour: false, // Will display '2 PM'
            });
            if (action !== TimePickerAndroid.dismissedAction) {
                // Selected hour (0-23), minute (0-59)
                //Applying extra 0 before the hour/minute for better visibility
                // 9 minutes => 09 minutes
                var m=(minute<10)?"0"+minute:minute;
                var h=(hour<10)?"0"+hour:hour;
                this.setState({ time:h+":"+m})
            }
        } catch ({code, message}) {}
    }

 render() 
 {
   return(
    <SafeAreaView >
            <View style={styles.cartHeader}>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('filterIcon')}>                  
                          <Image
                              style={styles.searchImg}
                              source={require('.././images/back-arrow-white.png')} />
                      </TouchableOpacity>
                      <Text style={styles.profileText}>Select Time Slot</Text>                                     
              </View>
              <ScrollView>
              <View style={styles.contentBody}>
                    <Text style={styles.addressText}>Select a suitable time</Text>
                    <View style={styles.sessionWrapper}>
                            <Image
                                  style={styles.sessionIcon}
                                  source={require('.././images/morning-icon.png')} />
                           <Text style={styles.sessionText}>Morning (12am to 9am)</Text>
                    </View>
                    <View style={styles.sessionWrapper}>
                            <Image
                                  style={styles.sessionIcon}
                                  source={require('.././images/day.png')} />
                           <Text style={styles.sessionText}>Day ( 9am to 4pm)</Text>
                    </View>
                    <View style={styles.sessionWrapper}>
                            <Image
                                  style={styles.sessionIcon}
                                  source={require('.././images/evening.png')} />
                           <Text style={styles.sessionText}>Evening ( 4pm to 9pm)</Text>
                    </View>
                    <View style={styles.sessionWrapper}>
                            <Image
                                  style={styles.sessionIcon}
                                  source={require('.././images/night-icon.png')} />
                           <Text style={styles.sessionText}>Night ( 9pm to 12am )</Text>
                    </View>

                  </View> 
                  </ScrollView>  
                    <View style ={{flexDirection :'row',padding :20,marginTop:90}}>
                            <View style={styles.signInBtn1}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                              <Text style={styles.signInBtnText1}>Clear</Text>
                            </TouchableOpacity>
                            </View>
                            <View style={styles.signInBtn2}>
                              <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                              <Text style={styles.signInBtnText}>Done</Text>
                              </TouchableOpacity>
                           </View>
                      </View>
                  
    </SafeAreaView >
     
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
  signInBtn1:
  {   
    
    borderRadius:5,
    marginTop:40,
    borderWidth:1.5,
    borderColor :"#3DBEF5",
    width:'41%',
    alignItems :'center',

  },
  signInBtn2:
  {   
    backgroundColor:"#3DBEF5",
    borderRadius:5,
    marginTop:40,
    marginLeft:'auto',
   
    alignItems :'center',
    
    
    width:'41%'
    

  },
  signInBtnText:
  {
    fontSize:20 ,
    color:'#fff',

    justifyContent: 'center',
    padding:10,
    fontFamily:"TwCenMTStd"
  },
  signInBtnText1:
  {
    fontSize:20 ,
    color :"#3DBEF5",

    justifyContent: 'center',
    padding:10,
    fontFamily:"TwCenMTStd"
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
    margin:15
  },
  contentBody:
  {
    padding:20
  },
  addressText:
  {
    fontSize:15,
    color:"#999999",
    fontFamily:"TwCenMTStd",
    // marginTop:10,
    marginBottom:10
  },
  sessionText:
  {
    fontSize:15,
    color:"#363f4d",
    fontFamily:"TwCenMTStd",
    marginLeft:10,
    textAlignVertical:"center"
  },
  sessionIcon:
  {
    width:20,
    height:20
  },
  sessionWrapper:
  {
    flexDirection:"row",
    borderColor:"#dadada",
    borderWidth:0.65,
    elevation:1,
    padding:10,
    borderRadius:5,
    marginTop:10,
    marginBottom:10
  },
  clockWrapper:
  {
    flexDirection:"row",
    justifyContent:"center",
    marginTop:10,
    marginBottom:10,
    // backgroundColor:"pink",
    width:"100%"
  },
  clockContent:
  {
    borderColor:"#dadada",
    borderWidth:0.65,
    elevation:1,
    alignItems:"center",
    padding:10,
    width:"47%",
    borderRadius:5,
   
    
  },
  clockTimeText:
  {
    fontSize:15,
    color:"#999999",
    fontFamily:"TwCenMTStd",
    marginTop:5,
  },
  startText:
  {
    fontSize:15,
    color:"#363f4d",
    fontFamily:"TwCenMTStd",
    
  },
  searchImg:
  {
    width:20,
    height:20,
    marginRight:10
  }

});


