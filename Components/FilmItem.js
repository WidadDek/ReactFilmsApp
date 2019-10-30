import React from 'react'
import {StyleSheet, View,Image, Text} from 'react-native'

class FilmItem extends React.Component{
  render(){
    const item = this.props.film
    return(
      <View style={styles.main_container}>
          <Image style={styles.img}
         //source={require('../react.png')}
          />
        <View style={styles.text_view}>
            <View style={styles.header_view}>
              <Text style={styles.titre_text}>{item.title}</Text>
              <Text style={styles.vote_text}>{item.vote_average}</Text>
            </View>
            <View style={styles.description_text}>
              <Text numberOfLines={5}>{item.overview}</Text>
            </View>
            <View style={styles.date_text}>
              <Text>{item.release_date}</Text>
            </View>
        </View>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  main_container:{
    height:190,
    flexDirection:'row',
    marginBottom:10
  },
  img:{
    backgroundColor: 'powderblue',
    width:120,
    height:190
    },
  text_view:{
    flex:1,
  },
  header_view:{
    flex:3,
    flexWrap:'wrap',
    flexDirection:'row',
    backgroundColor: 'skyblue'
  },
  titre_text:{
    flex:3,
    justifyContent:'center',
    backgroundColor: 'orange'

  },
  vote_text:{
    flex:1,
    justifyContent:'center',
    backgroundColor: 'green',
    alignItems:'center'
  },
  description_text:{
    flex:7,
    backgroundColor: 'steelblue',
    justifyContent:'center'
  },
  date_text:{
    flex:1,
    backgroundColor: 'red',
    alignItems:'flex-end'
  }
})
export default FilmItem
