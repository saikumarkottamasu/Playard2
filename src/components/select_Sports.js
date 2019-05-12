import React from 'react';
import { StyleSheet, Text,TextInput,TouchableOpacity,SafeAreaView
,ScrollView,TouchableHighlight,Image,View, ActivityIndicator, Alert, FlatList }
from 'react-native';
import Icon from 'react-native-ionicons';
import { Separator } from 'native-base';
import {Collapse,CollapseHeader,CollapseBody, AccordionList} from
'accordion-collapse-react-native';
import GridLayout from 'react-native-layout-grid';




function renderGridItem(item){
  // console.log("##########@@@!@@DOne",item);
if(item){
  let user = new select_Sports();
// user.markSelectedSport();
  return (
                          <TouchableOpacity onPress={() =>user.markSelectedSport(item)} style={styles.accBody}>
                                <View style={styles.inlineWrapper}>

                                      <View style={styles.itemWrapper}>
                                          <Image
                                            style={styles.sportIconImg}
                                            source={require('.././images/cricket.png')} />
                                            <Text style={styles.bodyText}>{item.sportName}</Text>
                                      </View>


                                </View>

                          </TouchableOpacity>



  );
}
}
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
     ]
  }
}
static navigationOptions = {
       header: null
    };


     markSelectedSport(item){
      // console.log("@@!!!!!!markSelectedSport", this);
      for(sports of this.state.sportsList){
        // console.log("@@@",sports);
      }
    }

    _head(item){
      // console.log("####",item);
      return(
        <View style={styles.accHeader}>
            <View style={{flexDirection:"row",alignItems:"center"}}>
              <Text style={styles.accHeaderText}>{item.categoryName}</Text>
              {item.isListViewed?
              <Image
                  style={styles.checkedGreenImg}
                  source={require('.././images/checked-icon.png')} />
                  :
                  null
                }
            </View>
            <View style={styles.iconContainer}>
              <Image
                  style={styles.dropdownImg}
                  source={require('.././images/black-downarrow.png')} />
            </View>
          </View>
      )

    }

    _body(item){
      // console.log("itemitem%%%",item['sports']);
      // console.log(("&&&&&&",typeof(renderGridItem)));
      console.log("#####body",item);
      return(
        <View style={{flex: 1}}>
          <FlatList
          data={item['sports']}
          renderItem={({item}) => renderGridItem(item)}
          extraData={this.state}
        />
        </View>

      );
      // <GridLayout
      //   items= {item['sports']}
      //   itemsPerRow={2}
      //   renderItem={renderGridItem(item)}
      // />
      // return (
      //
      //                         <View style={styles.accBody}>
      //                               <View style={styles.inlineWrapper}>
      //
      //                                     <View style={styles.itemWrapper}>
      //                                         <Image
      //                                           style={styles.sportIconImg}
      //                                           source={require('.././images/cricket.png')} />
      //                                           <Text style={styles.bodyText}>Cricket</Text>
      //                                     </View>
      //                                     <View style={styles.itemWrapper}>
      //                                         <Image
      //                                           style={styles.sportIconImg}
      //                                           source={require('.././images/table-tennis.png')} />
      //                                         <Text style={styles.bodyText}>Table Tennis</Text>
      //                                         <View style={styles.blueIcon}>
      //                                         </View>
      //                                     </View>
      //
      //                               </View>
      //                               <View style={styles.inlineWrapper}>
      //                                     <View style={styles.itemWrapper2}>
      //                                         <Image
      //                                           style={styles.sportIconImg}
      //                                           source={require('.././images/foot-ball.png')} />
      //                                           <Text style={styles.bodyText}>Football</Text>
      //                                     </View>
      //
      //                                     <View style={styles.itemWrapper2}>
      //                                         <Image
      //                                           style={styles.sportIconImg}
      //                                           source={require('.././images/basket-ball.png')} />
      //                                           <Text style={styles.bodyText}>Basket Ball</Text>
      //                                     </View>
      //
      //
      //                               </View>
      //                         </View>
      //
      //
      //
      // );


    }

onToggle(index){

  if(index!=null){

    let sportsList = this.state.sportsList

    if(!sportsList[index]['isListViewed']){
      for (sports of sportsList){
        sports['isListViewed']= false
      }
    sportsList[index]['isListViewed']=true
    this.setState({sportsList: sportsList})
  }
  }

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

 render()
 {
   if(!this.state.spinnerVisibility)
   {
   return(
    <SafeAreaView style={{flex:1}}>
              <View style={styles.cartHeader}>
                      <TouchableOpacity onPress={() =>this.props.navigation.navigate('create_Activity')}>
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


                  <AccordionList
                             list={this.state.sportsList}
                             header={this._head}
                             body={this._body}
                             // body={(item) => { this._body(item)}}

                               onToggle={(index) => { this.onToggle(index)}}
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
    borderColor:'#d7d7d7',
    borderTopWidth: 1,
    borderRadius:5,

    marginTop:10,
    borderBottomWidth: 1,
   marginBottom:10,
    paddingTop:10,
    paddingBottom:10,
    borderLeftWidth: 1,
    borderRightWidth: 1,

  },
accBody:
  {
    flexDirection:"row",
     borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor:'#d7d7d7',
    borderBottomWidth: 1,
    borderRadius:5,
    paddingTop:15,
    marginBottom:10,
    marginTop:-10,
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
    marginLeft:5
  },

});
