import React from 'react';
import { StyleSheet, Text,TextInput,TouchableOpacity,SafeAreaView
,ScrollView,TouchableHighlight,Image,View, ActivityIndicator, Alert, FlatList }
from 'react-native';
import Icon from 'react-native-ionicons';
import { Separator } from 'native-base';
import GridLayout from 'react-native-layout-grid';
var GLOBAL = require('.././config/global.js');




export default class select_Sports extends React.Component {
  constructor(props) {
  super(props);

  this.state={
    dummy:false,
    spinnerVisibility: false,
    loadingMessage: '',
    sportsList: [],
    list:[
     {
       title: '1',
       body: '1body'
     },
     {
       title: '2',
       body: '2 body'
     }
   ],
   selectedSportId: ''
  }
}
static navigationOptions = {
       header: null
    };

    renderGridItem(this2,item){
   if(item){
     return (
                             <TouchableOpacity
                             onPress={() =>this2.markSelectedSport(item)} style={styles.accBody}>
                                   <View style={styles.inlineWrapper}>

                                         <View style={styles.itemWrapper}>
                                             <Image
                                               style={styles.sportIconImg}
                                               source={require('.././images/cricket.png')} />
                                               <Text style={styles.bodyText}>{item.sportName}</Text>
                                               {item.isSelected?
                                               <View style={styles.blueIcon}>
                                               </View>
                                               :
                                               null
                                             }
                                         </View>


                                   </View>

                             </TouchableOpacity>



     );
   }
   }

makeIsViewedTrue(item){
    let dataClone = this.state.sportsList
  for ( sports of dataClone){
    if(sports['categoryId'] == item['categoryId']){
      sports['isListViewed'] = !sports['isListViewed']
    }
    else{
      sports['isListViewed'] = false
    }
  }
  this.setState({sportsList:dataClone})
}

markSelectedSport(item){

  temp = this.state.sportsList

 for(sports of temp){
   let anySPortSelected = false
   for(sport of sports['sports']){
     let is_found = false
     if(sport.sportName == item.sportName){
       sport.isSelected=true
       is_found =true
       sports['isAnySportSelected']= true
       anySPortSelected = true
     }
     else {
       if(!anySPortSelected){
       sports['isAnySportSelected']= false
     }
       sport.isSelected=false
     }
   }
 }
 this.setState({statesportsList: temp,selectedSportId: item.sportId})
  GLOBAL.sports_list = temp
  // Alert.alert(
  //   'Confirmation',
  //   'Are you sure wants to select the game?',
  //   [
  //     {text: 'Yes', onPress: () =>  {GLOBAL.sport=item.sportId}},
  //     {text: 'No'}
  //   ],
  //   { cancelable: true }
  // )
}
    renderRow(item){
      return(
          <View style={{flex: 1, borderWidth: 1, marginTop: 20, borderColor: '#d7d7d7', borderRadius:5}}>
        <TouchableOpacity onPress={() =>this.makeIsViewedTrue(item)} style={styles.accHeader}>
            <View style={{flexDirection:"row",alignItems:"center"}}>
              <Text style={styles.accHeaderText}>{item.categoryName}</Text>
              {item.isListViewed || item.isAnySportSelected?
              <Image
                  style={styles.checkedGreenImg}
                  source={require('.././images/checked-icon.png')} />
                  :
                  null
                }
            </View>
            <View style={styles.iconContainer}>
            {
              item.isListViewed?
              <Image
                  style={styles.dropdownImg}
                  source={require('.././images/black-uparrow.png')} />
                  :
              <Image
                  style={styles.dropdownImg}
                  source={require('.././images/black-downarrow.png')} />
                }

            </View>
          </TouchableOpacity>
          <View style={{flex: 1}}>
          {item.isListViewed?
          <GridLayout
          items= {item['sports']}
          itemsPerRow={2}

          renderItem={(item)=>this.renderGridItem(this,item)}
          />
          :
          null
        }
          </View>
          </View>
      )
    }

componentWillMount(){
  this.setState({spinnerVisibility: true, loadingMessage: 'Getting sports list, Please wait...'})
  let data = {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          "Content-Type": "multipart/form-data",
      }
  }
  fetch("http://testingmadesimple.org/playard/api/service/sports", data)
  .then(response => response.json())
  .then(responseJson =>
   {

        if(responseJson['status']== 1){
          for( sports of responseJson['sports']){
            sports['isListViewed']=false
            sports['isAnySportSelected']=false
            for (individualSport of sports['sports']){
              individualSport['isSelected'] = false
            }
          }
            this.setState({sportsList:responseJson['sports'], spinnerVisibility: false})
            GLOBAL.sports_list=responseJson['sports']
        }
        else{
          this.setState({spinnerVisibility: false})
          this.displayError()
        }
    }

  )
}

displayError() {
  this.setState({ spinnerVisibility: false });
  Alert.alert(
    'Error',
    'Sorry, something went wrong: Please try again later...',
    [
      { text: 'OK' },
    ],
    { cancelable: false }
  )
}

spinnerComponent() {
      if(this.state.spinnerVisibility){
      return (
        <View style={{ flex: 1, position: 'absolute', top: 0, left: 0,right: 0, bottom: 0, alignItems: "center", justifyContent: "center"}}>
            <View style={{ flexDirection: 'row', overflow: 'hidden',borderRadius: 16, backgroundColor: "grey" }}>
                <ActivityIndicator color='#ffffff' style={{ padding: 4}} visibility={true} animating={this.state.spinnerVisibility} />
                {
                    this.state.loadingMessage != '' ?
                        <Text style={{ fontSize: 16, color: '#FFFFFF',padding: 4, marginRight: 4 }}>{this.state.loadingMessage}</Text> :
                        null
                }
            </View>
        </View>
      );
    }
    }

confirmation(){
  if(this.state.selectedSportId != ''){
  Alert.alert(
    'Confirmation',
    'Are you sure wants to select the game?',
    [
      {text: 'Yes', onPress: () =>  {  this.props.navigation.state.params.createActivity.setState({sportId:this.state.selectedSportId},()=>{this.props.navigation.navigate('create_Activity')})}},
      {text: 'No'}
    ],
    { cancelable: true }
  )
}
else{
  this.props.navigation.navigate('create_Activity')
}
}
 render()
 {
   if(!this.state.spinnerVisibility)
   {
   return(
    <SafeAreaView style={{flex:1}}>
              <View style={styles.cartHeader}>
                      <TouchableOpacity onPress={() =>this.confirmation()}>
                           <Image
                          style={styles.searchImg}
                          source={require('.././images/back-arrow-white.png')} />
                      </TouchableOpacity>
                      <Text style={styles.profileText}>Select Sports</Text>
              </View>
        <ScrollView>
        {this.spinnerComponent()}
              <View style={styles.contentBody}>

                  <View style={{flexDirection:"row",marginBottom:10}}>
                          <TextInput
                                placeholder="Search by Sports"
                                style={styles.inputField}

                              />
                          <View style={styles.eyeView}>
                              <TouchableOpacity onPress={() =>this.props.navigation.navigate('')}>
                                  <Image
                                  style={styles.searchImg}
                                  source={require('.././images/search-icon.png')} />
                            </TouchableOpacity >
                          </View>
                  </View>
                           <FlatList
                           data={this.state.sportsList}
                           renderItem={({item}) => this.renderRow(item)}
                           extraData={this.state}
                         />

              </View>
            </ScrollView>
    </SafeAreaView>

   );
 }
 else{
  return(
<SafeAreaView style={{flex: 1}}>
    <ScrollView>
    <View style={styles.cartHeader}>
      {this.spinnerComponent()}
    </View>
    </ScrollView>
</SafeAreaView>

  )
}
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
    padding:10
  },
 searchImg:
  {
    width:20,
    height:20,
  },
  inputField:
  {
    borderColor: '#dadada',
    fontSize:18,
    borderWidth: 1,
    borderRadius:5,
    fontFamily:"TwCenMTStd",
    marginTop:10,
    width:"100%",
    color:"#999999",
    paddingLeft:10,
    height:45
  },
  eyeView:
  {
    marginLeft:'auto',
    marginTop:22,
    marginRight:20
  },
accordionContainer:
  {
    marginTop:20,
    padding:10,
    borderColor:'#d7d7d7',
    borderWidth: 0,
    borderRadius:5
  },
accHeader:
  {
    flexDirection:"row",
    marginTop:10,
   marginBottom:10,
    paddingTop:5,
    paddingBottom:5,

  },
accBody:
  {
    flexDirection:"row",

    // backgroundColor:"pink"
  },

iconContainer:
  {
    marginLeft:'auto',
  },
accHeaderText:
  {
    fontFamily:"TwCenMTStd",
    fontSize:16,
    color:"#363f4d",
    marginLeft:5
  },
itemWrapper:
  {
    flexDirection:"row",
    marginTop:10,
    marginLeft:10,
    marginBottom:5,
    alignItems:"center"
  },
itemWrapper2:
  {
    flexDirection:"row",
    marginTop:10,
    marginBottom:5,
    alignItems:"center"
  },
dropdownImg:
  {
    width:15,
    height:15,
    marginRight:5
  },
inlineWrapper:
  {
    flexDirection:"column",
    width:"50%"
  },
sportIconImg:
  {
    width:15,
    height:15,
  },
bodyText:
  {
    fontSize:14,
    fontFamily:"TwCenMTStd",
    marginLeft:5,
    textAlign:"center",
    color:"#999999"
  },
blueIcon:
{
  height:8,
  width:8,
  backgroundColor:"#33cbf6",
  borderRadius:50,
  marginLeft:5,

},
checkedGreenImg:
  {
    width:12,
    height:12,
    marginLeft:20
  },
  blueIcon:
{
  height:8,
  width:8,
  backgroundColor:"#33cbf6",
  borderRadius:50,
  marginLeft:5,

},

});
