// import { Text, View } from "react-native"
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from "./dashboard/Home";
// import Profile from "./dashboard/Profile";
// import Settings from "./dashboard/Settings";
// import Notifications from "./dashboard/Notifications";
// // import Icon from 'react-native-vector-icons/dist/FontAwesome';
// import Ionicons from "react-native-vector-icons/Ionicons";

// const Dashboard = () => {
//     const Tab = createBottomTabNavigator()

//     return (
//         <Tab.Navigator
//             screenOptions={{
//                 tabBarActiveTintColor: "green",
//                 tabBarInactiveTintColor: "grey",
//                 tabBarActiveBackgroundColor: "white",
//                 tabBarInactiveBackgroundColor: "lightgrey",
//             }}>
//           <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="home-outline" size={size} color={color} />
//           ),
//         }}
//       />
//             <Tab.Screen name="Profile" component={Profile} 
//                options={{
//                     tabBarIcon: ({ color, size }) => (
//                         <Ionicons name="person-outline" size={size} color={color} />
//                     )
//                     // tabBarIcon: ({ color, size }) => (
//                     //     <Icon name="home" size={size} color={color} />
//                     // )
//                 }}
//             />
//             <Tab.Screen name="Notifications" component={Notifications} />
//             <Tab.Screen name="Settings" component={Settings} />
//         </Tab.Navigator>
//     )
// }

// export default Dashboard;


import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Home from "./dashboard/Home";
import Profile from "./dashboard/Profile";
import Settings from "./dashboard/Settings";
import Notifications from "./dashboard/Notifications";

const Tab = createBottomTabNavigator();

const Dashboard = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "grey",
        tabBarActiveBackgroundColor: "white",
        tabBarInactiveBackgroundColor: "lightgrey",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Dashboard;
