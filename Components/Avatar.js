
import React from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import ImagePicker from 'react-native-image-picker'
class Avatar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      avatar: require('../Images/ic_tag_faces.png') //avatar par defaut
    }
  }

  _avatarClicked() {
    
  }

  render() {
    return(
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={this._avatarClicked}>
          <Image style={styles.avatar} source={this.state.avatar} />
          <Text>Bla bla bla bla bla hdfsdfdsqfqd</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  touchableOpacity: {
    margin: 5,
    width: 100, 
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#9B9B9B',
    borderWidth: 2
  }
})

export default Avatar