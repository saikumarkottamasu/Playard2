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
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('create_Activity')}>                  
                          <Image
                              style={styles.searchImg}
                              source={require('.././images/back-arrow-white.png')} />
                      </TouchableOpacity>
                      <Text style={styles.profileText}>Select Time Slot</Text>                                     
              </View>
              <View style={styles.contentBody}>
                    <Text style={styles.addressText}>Select a suitable time</Text>
                    <View style={styles.sessionWrapper}>
                            <Image
                                  style={styles.sessionIcon}
                                  source={require('.././images/profile-normal.png')} />
                           <Text style={styles.sessionText}>Morning(12am to 9am)</Text>
                    </View>
                    <View style={styles.sessionWrapper}>
                            <Image
                                  style={styles.sessionIcon}
                                  source={require('.././images/profile-normal.png')} />
                           <Text style={styles.sessionText}>Day(9am to 4pm)</Text>
                    </View>
                    <View style={styles.sessionWrapper}>
                            <Image
                                  style={styles.sessionIcon}
                                  source={require('.././images/profile-normal.png')} />
                           <Text style={styles.sessionText}>Evening(4pm to 9pm)</Text>
                    </View>
                    <View style={styles.sessionWrapper}>
                            <Image
                                  style={styles.sessionIcon}
                                  source={require('.././images/profile-normal.png')} />
                           <Text style={styles.sessionText}>Night(9pm to 12am)</Text>
                    </View>
                    <Text style={styles.addressText}>Or, you can also select a specific time</Text>
                    <View style={styles.clockWrapper}>                         
                         <View style={styles.clockContent}> 
                                <TouchableOpacity  onPress={this.timePicker} >                   
                                     <Text style={styles.startText}>Start Time</Text>
                                     <Text style={styles.clockTimeText}>12.00PM</Text>
                                </TouchableOpacity>
                          </View>
                         <View style={styles.clockContent}>
                              <TouchableOpacity  onPress={this.timePicker} >                      
                               <Text style={styles.startText}>End Time</Text>
                               <Text style={styles.clockTimeText}>03.00PM</Text>
                               </TouchableOpacity>
                        </View>
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
    marginTop:10,
    marginBottom:10
  },
  sessionText:
  {
    fontSize:15,
    color:"#363f4d",
    fontFamily:"TwCenMTStd",
    marginLeft:10
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
    marginBottom:10
  },
  clockContent:
  {
    borderColor:"#dadada",
    borderWidth:0.65,
    elevation:1,
    alignItems:"center",
    padding:10,
    width:"40%",
    borderRadius:5,
    marginLeft:10,
    marginRight:10
    // backgroundColor:"pink"
    
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


