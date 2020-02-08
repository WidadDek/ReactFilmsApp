import React from 'react'
import {StyleSheet, View,Image, Text, TouchableOpacity} from 'react-native'
import {getImageFromApi} from '../API/TMDBApi'

class FilmItem extends React.Component{
  render(){
    const {film, displayDetailForFilm} = this.props
    return(
      <TouchableOpacity style={styles.main_container} onPress={() => displayDetailForFilm(film.id)}>
          <Image style={styles.img}
          source={{uri:getImageFromApi(film.poster_path)}}
         //source={require('../react.png')}
          />
        <View style={styles.text_view}>
            <View style={styles.header_view}>
              <Text style={styles.titre_text}>{film.title}</Text>
              <Text style={styles.vote_text}>{film.vote_average}</Text>
            </View>
            <View style={styles.description_text}>
              <Text numberOfLines={5}>{film.overview}</Text>
            </View>
            <View style={styles.date_text}>
              <Text>{film.release_date}</Text>
            </View>
        </View>
      </TouchableOpacity>
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
