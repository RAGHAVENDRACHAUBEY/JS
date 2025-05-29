// So for v22.16.0:
// 22 = Major version

// Introduces potentially breaking changes or big new features.

// In this case, Node.js 22 is part of the latest major versions, released in 2024.

// 16 = Minor version

// Adds backward-compatible functionality or improvements.

// 0 = Patch version

// Bug fixes or small backward-compatible changes.

// import React from 'react';
// import { FlatList, Text, View } from 'react-native';

// const App = () => {
//   const users = [
//     { id: '1', name: 'Raghav' },
//     { id: '2', name: 'Amit' },
//     { id: '3', name: 'Priya' },
//   ];

//   return (
//     <View>
//       <FlatList
//         data={users} // array of users
//         renderItem={({ item }) => <Text>{item.name}</Text>} // how to show each item
//         keyExtractor={item => item.id} // unique key for each item
//       />
//     </View>
//   );
// };



// export default App;

// data={users} tells FlatList:

// "This is the array you need to loop through and display."

// item is just a name we use for each element in an array while looping.


// 🧠 Why not use .map() directly?
// You can use .map() with ScrollView, but:

// .map() with ScrollView	                               FlatList
// Renders all items at once (slow for large data)	        Renders only visible items, loads others as needed
// Not memory efficient	                                     Very memory-efficient
// No built-in features	                                     Built-in features: lazy loading, pull-to-refresh, scroll performance


