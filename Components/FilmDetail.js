import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator,Image } from 'react-native'
import { getFilmDetailFromApi, getImageFromApi } from '../API/TMDBApi'
import { ScrollView } from 'react-native-gesture-handler'
import moment from 'moment';
import numeral from 'numeral';

class FilmDetail extends React.Component {
  constructor(props){
      super(props)
      this.state = {
          film: undefined,
          isLoading: true
      }
  }

  componentDidMount(){
    getFilmDetailFromApi(this.props.navigation.state.params.idFilm).then( data =>  {
        this.setState({
            film: data,
            isLoading: false
        })
    })
  }

  _displayFilm(){
      const film = this.state.film
      if (film !=undefined){
          return(
              <ScrollView style={styles.scrollview_container}>
                <Image style={styles.img}
                    source={{uri:getImageFromApi(film.backdrop_path)}}
                />
                <Text style={styles.film_title}>{film.title}</Text>
                <Text style={styles.film_description}>{film.overview}</Text>
                <Text>Sortie le : {moment(film.release_date).format('DD/MM/YYYY')}</Text>

                <Text>Note : {film.vote_average}/10</Text>
                <Text>Nombre de vote : {film.vote_count}</Text>
                <Text>Budget : {numeral(film.revenue).format('0,0,0')}$</Text>
                <Text>Genre(s): {film.genres.map(function(company){
                    return genre.name;
                    }).join(" / ")}
                </Text>
                <Text>Companie(s) : {film.production_companies.map(function(company){
                    return company.name;
                    }).join(" / ")}
                </Text>
              </ScrollView>
          )
      }
  }

  _displayLoading(){
      if(this.state.isLoading){
          return (
              <View style={styles.loading_container}>
                <ActivityIndicator size='large'/>
              </View>
          )
      }
  }

  render() {
      const idFilm = this.props.navigation.state.params.idFilm
    return (
      <View style={styles.main_container}>
            {this._displayFilm()}
            {this._displayLoading()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollview_container:{

  }
})

export default FilmDetail