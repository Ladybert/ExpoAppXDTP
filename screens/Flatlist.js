import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";

const FlatlistComponent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())                  
      .then((data) => setProducts(data));
  }, []);

  console.log(products.products)

  return (
    <View className="flex items-center justify-center bg-gray-900">
      <FlatList
        data={products.products}
        renderItem={({ item }) => (
          <View className="m-4">
            <Image className="h-[300px] w-[300px]" source={{ uri: item.thumbnail }}/>
            <Text className="text-center font-bold text-slate-100 mt-2 text-xl">{item.title}</Text>
          </View>
        )}
        keyExtractor={products.id}
      />
    </View>
  );
};

export default FlatlistComponent;