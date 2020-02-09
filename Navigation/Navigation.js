import {createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import {createAppContainer } from 'react-navigation'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'

const SearchStackNavigator = createStackNavigator({
    Search:{
        screen: Search,
        navigationOptions:{
            title:"Rechercher"        
        }
    },
    FilmDetail:{
        screen: FilmDetail,
        navigationOptions:{
            title:"Detail du film"        
        }
    }
})

const MoviesTabNavigator= createBottomTabNavigator(
    {
        Search:{
            screen: SearchStackNavigator
        }
    }
)
export default createAppContainer(MoviesTabNavigator)