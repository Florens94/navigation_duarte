import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

const Products = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text> Producto </Text>
            <Button title='Ver el detalle del producto' onPress={() => navigation.navigate('ProductDetail')}
            color='#000'/>
        </View>
    );
};

export default Products;