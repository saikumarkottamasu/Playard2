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
            console.log("##@@@action",action);
            console.log("@!!!",TimePickerAndroid.dismissedAction);
            if (action !== TimePickerAndroid.dismissedAction) {
                // Selected hour (0-23), minute (0-59)
                //Applying extra 0 before the hour/minute for better visibility
                // 9 minutes => 09 minutes
                var m=(minute<10)?"0"+minute:minute;
                var h=(hour<10)?"0"+hour:hour;
                this.setState({ time:h+":"+m})
                console.log("###",this.state.time);
            }
        } catch ({code, message}) {}
    }

setTimeSlot(seleted_time_slot, start_time, end_time){
 this.props.navigation.state.params.createActivity.setState({timeslot:seleted_time_slot, startTime: start_time, endTime: end_time},()=>{this.props.navigation.navigate('create_Activity')})
}
 render()
 {
   console.log("@@@@",this.props.navigation.state.params.createActivity.state);
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
                    <TouchableOpacity onPress={this.setTimeSlot.bind(this,'Morning','12am', '9am')}style={styles.sessionWrapper}>
                            <Image
                                  style={styles.sessionIcon}
                                  source={require('.././images/morning-icon.png')} />
                           <Text style={styles.sessionText}>Morning(12am to 9am)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.setTimeSlot.bind(this,'Day','9am', '4pm')}style={styles.sessionWrapper}>
                            <Image
                                  style={styles.sessionIcon}
                                  source={require('.././images/day.png')} />
                           <Text style={styles.sessionText}>Day(9am to 4pm)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.setTimeSlot.bind(this,'Evening', '4pm', '9pm')} style={styles.sessionWrapper}>
                            <Image
                                  style={styles.sessionIcon}
                                  source={require('.././images/evening.png')} />
                           <Text style={styles.sessionText}>Evening(4pm to 9pm)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.setTimeSlot.bind(this,'Night', '9pm', '12am')} style={styles.sessionWrapper}>
                            <Image
                                  style={styles.sessionIcon}
                                  source={require('.././images/night-icon.png')} />
                           <Text style={styles.sessionText}>Night(9pm to 12am)</Text>
                    </TouchableOpacity>
                    <Text style={[styles.addressText,{ marginTop:20}]}>Or, you can also select a specific time</Text>
                    <View style={styles.clockWrapper}>
                         <View style={styles.clockContent}>
                                <View  onPress={this.timePicker} >
                                     <Text style={styles.startText}>Start Time</Text>
                                     <Text style={styles.clockTimeText}>12.00PM</Text>
                                </View>
                          </View>
                          <View style={{width:"5%"}}>
                          </View>
                         <View style={styles.clockContent}>
                              <View  onPress={this.timePicker} >
                               <Text style={styles.startText}>End Time</Text>
                               <Text style={styles.clockTimeText}>03.00PM</Text>
                               </View>
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
