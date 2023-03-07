import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import place from '../utils/Place'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

const DealsCarousel = () => {


const renderItem = ({item})=>{
    return (
        <View style={styles.box}>
            <Image style={styles.img} source={item.img} resizeMode='contain'/>
            <View style={styles.overlay}>
                <View style={{width:150,height:40 , alignItems:'center' }}>
                <Text style={{fontFamily:'Cairo' ,
                textAlign:'center', 
                lineHeight:10,
                marginTop:10,
                fontSize:9, color:'black'}}>{item.description}</Text>
                </View>
                 <TouchableOpacity style={styles.btn}>
                    <Text style={{fontFamily:'Cairo' ,marginRight:-10, color:'white', fontSize:12}}>More   </Text>
                    <Ionicons name={'ios-chevron-forward-outline'} color="white" size={12} /> 
                 </TouchableOpacity>
            </View>
         
        </View>
    )
}


  return (
    <View style={styles.container}>
      



      <FlatList
      horizontal={true}
          data={place}
          
         renderItem={renderItem}
        />

    </View>
  )
}

export default DealsCarousel

const styles = StyleSheet.create({
    container : {
        flex:1,
    },
    img:{
        width:200,
        height:140,
        borderRadius:10,
     

    },
    box:{
        width:200,
        height:140,
        margin:10,
        borderRadius:10,
        backgroundColor:'red',

    },
    overlay:{
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        backgroundColor:'#FFF8F2',
        left: 0,
        bottom: 0,
        width: '100%',
           borderBottomLeftRadius:10,
           borderBottomRightRadius:10,
        height: '50%'
    },
    btn:{
        flexDirection:'row',
        width:50,
        height:24,
        marginTop:-10,
        backgroundColor:'#FB8703',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
     
    }

})