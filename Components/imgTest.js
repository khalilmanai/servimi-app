import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fetchImage } from '../api/axios'
import { useEffect } from 'react'
import { useState } from 'react'

const ImgTest = (props) => {
const [image , setImage] = useState()
    useEffect(()=>{
        fetchImage(props.id).then((data)=>{
        setImage(data)
        }).catch((err)=> console.log(err , 'request failed '))
    });
     const base64Image = `data:image/png;base64,${image}`;
  return (
    <View>
     <Image source={{uri : base64Image}} style={{height:100, width:100}} />
    </View>
  )
}

export default ImgTest

const styles = StyleSheet.create({})