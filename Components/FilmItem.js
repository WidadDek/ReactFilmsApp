import React from 'react'
import {StyleSheet, View,Image, Text} from 'react-native'
class FilmItem extends React.Component{
  render(){
    return(
      <View style={styles.main_container}>
        <Image style={styles.img} source={require('../react.png')} />
        <View style={styles.view2}/>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  main_container:{
    height:190,
    flex:1,
    flexDirection:'row'
  },
  img:{
    flex:1,
    width:'100%',
    height:'100%'
  },
  view2:{
    flex:2,
    flexDirection:'column',
  }
})
export default FilmItem
