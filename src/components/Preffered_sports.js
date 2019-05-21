import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,SafeAreaView,
  Text,FlatList,
  TextInput,CheckBox,ScrollView,
  View,TouchableOpacity,Image,
  AsyncStorage
} from 'react-native';
import {  Item, Input } from 'native-base';
import {Collapse,CollapseHeader,CollapseBody} from 'accordion-collapse-react-native';
import Icon from 'react-native-ionicons';
import GridLayout from 'react-native-layout-grid';

const DomainName = 'http://testingmadesimple.org/playard/uploads/sports/'


export default class Preffered_sports extends React.Component {
static navigationOptions = {
       header: null,
    };
    constructor() 
    {
      super();
        this.state = 
              {
                sports_List: [],

              };
              this.getSportsList = this.getSportsList.bind(this);
    }

   renderGridItem(this2,item){
   if(item){
     return (
                      <TouchableOpacity
                             style={styles.accBody}>
                                   <View style={styles.inlineWrapper}>
                                         <View style={styles.itemWrapper}>
                                             <Image

                                              source = {{ uri: '${item.url}${item.sportIcon}' }}
                                               style={styles.sportIconImg}
                                               />
                                               <Text style={styles.bodyText}>{item.sportId}</Text>
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
    renderRow(item){
      return(
          <View style={{flex: 1, borderWidth: 1, marginTop: 20, borderColor: '#d7d7d7', borderRadius:5}}>
              <TouchableOpacity style={styles.accHeader}>
                  <Text style={styles.accHeaderText}>{item.categoryName}</Text>              
              </TouchableOpacity>
              <View style={{flex: 1}}>
                    <GridLayout
                    items= {item['sports']}
                    itemsPerRow={2}
                    renderItem={(item)=>this.renderGridItem(this,item)}
                    />          
              </View>
          </View>
      )
    
    
    }

getSportsList(){

 
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
        if(responseJson.status == ("1"))
        {

          for( sports of responseJson['sports'])
          {
            sports['isListViewed']=false
            sports['isAnySportSelected']=false
            for (individualSport of sports['sports']){
              individualSport['isSelected'] = false
            }
          }
          this.setState({                       
                          sports_List:responseJson['sports']
                      })
                  
        }
        else{
        
        }
      }
    )
      .catch(error => console.error(error));
      console.log(data)
      console.log("444444",this.state)
}

 render()
 {
   
   return(
           <SafeAreaView style={styles.container}>
            <ScrollView>
                  <Text style={styles.headerText}>Preferred Sports</Text>
                  <Text style={styles.subHeaderText}>dummy text of printing and typesetting industry.Lorem 
                        has been the indutry's standard dummy text</Text>                 
                  <View style={{flexDirection:"row"}}>
                      <TextInput
                            placeholder="Search by Sports"
                            style={styles.inputField}
                            
                          />  
                      <View style={styles.eyeView}>
                          <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                              <Image
                              style={styles.searchImg}
                              source={require('.././images/search-icon.png')} />
                                        
                        </TouchableOpacity > 
                      </View>
                  </View>
                  <View style={{flex: 1}}>
                      <FlatList
                           data={this.state.sports_List}
                           renderItem={({item}) => this.renderRow(item)}
                          keyExtractor={item => item.categoryId}
                      />
                  </View>
                <View style={styles.signInBtn}>
                      <TouchableOpacity onPress={this.getSportsList} >
                            <Text style={styles.signInBtnText}>SAVE</Text>
                      </TouchableOpacity>
                </View>                       
            </ScrollView>
      </SafeAreaView>

   );
 }
}

const styles = StyleSheet.create({
container: {
    padding: 20,
    flex: 1,
    alignItems: 'stretch',
  },
headerText:
  {
    fontFamily:"TwCenMTStd",
    fontSize:24,
    color:"#363f4d"
  },
subHeaderText:
  {
    fontFamily:"TwCenMTStd",
    color:"#999999",
    fontSize:16,
    marginTop:5,
    marginBottom:20
  },
accordionContainer:
  {
    marginTop:20,
    padding:10,
    borderColor:'#d7d7d7',
    borderWidth: 1,
    borderRadius:5
  },
accHeader:
 {
  flexDirection:"row", 
  alignItems:"center" 
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
  accBody:
  {
  flexDirection:"row",
  },
itemWrapper2:
  {
    flexDirection:"row",
    marginTop:10,
    marginBottom:5,
    alignItems:"center"
  },
bodyText:
  {
    fontSize:14,
    fontFamily:"TwCenMTStd",
    marginLeft:5,
    textAlign:"center",
    color:"#999999"
  },
selectText:
  {
    fontSize:14,
    fontFamily:"TwCenMTStd",
    textAlign:"center",
    color:"#999999",
    marginTop:8
  },
inlineWrapper:
  {
    flexDirection:"column",
    width:"50%"
  },
signInBtn:
  {   
    backgroundColor:"#33cbf6",
    borderRadius:5,
    marginTop:20,
    marginBottom:20  
  },
signInBtnText:
  {
    fontSize:20 ,
    color:'#fff',
    textAlign:"center",
    padding:5,
    fontFamily:"TwCenMTStd"
  },
  searchImg:
  {
    width:20,
    height:20,
    marginRight:10
  },
dropdownImg:
{
  width:15,
  height:15,
  marginRight:5
},
sportIconImg:
{
  width:15,
  height:15,
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
