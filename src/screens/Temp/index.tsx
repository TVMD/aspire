import * as React from 'react'
import { Text, View } from 'react-native'
import { generalTextStyle } from '../../theme'

const Temp = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={generalTextStyle({ fontWeight: 'bold', fontSize: 25, })}>Comming soon !</Text>
    </View>

  )
}

export default Temp
