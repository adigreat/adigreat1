import React,{Component} from 'react';
import { StyleSheet, Text, View,TouchableOpacity,FlatList } from 'react-native';
import {ListItem} from 'react-native-elements'
import firebase from 'firebase'
import db from '../config'
import MyHeader from '../components/MyHeader'
import Myheader from '../components/MyHeader';
export default class allDonateScreen extends Component{
constructor (){
    super();
    this.state={allRequests=[]}
    this.requestRef=null
    
}
getAllRequests=()=>{
    this.requestRef=db.collection ("bookRequests").onSnapshot((snapshot)=>{
        var allRequests =snapshot.docs.map(document=>document.data())
        this.setState({
            allRequests:allRequests
            
        });
    })
}
componentDidMount(){
    this.getAllRequests()
}
componentWillUnmount(){
    this.requestRef();
}
keyExtractor=(item,index)=> index.toString()

renderItem=({item,i})=>{
    console.log(item.bookName);
    return(
        <ListItem
        key={i}
        tittle={item.bookName}
        subtittle={item.description}
         titleStyle={{color:'black', fontWieght:'bold'}}
         rightElement={
         <TouchableOpacity style={styles.button}>
<Text style={{color:'#ffff'}}>
    Donate
</Text>
         </TouchableOpacity>} 
bottomDivider
        />
    )
}
render(){
    return(
<View style={{flex:1}}>
    <Myheader title="donate Book"/>
<View style={{flex:1}}>
    {
        this.state.allRequests.length===0
        ?(
            <View style={style.subContainer}>
                <Text style={{fontSize:20}}>
                    list of all book Requests
                </Text>
            </View>
        )
        :(
    <FlatList
    keyExtractor={this.keyExtractor}
    data={this.state.allRequests}
    renderItem={this.renderItem}
    
    />

    
        )
    }
</View>
</View>
    )
}
}
const styles=StyleSheet.create({
subContainer:{
    flex:1,
    fontSize:20,
    justifyContent:'center',
    alignItems:'center',
},
button:{
    width:100,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#ff5722",
shadowColor:'#000',
shadowOffset:{
    width:0,
    height:8,
    
}

}
})