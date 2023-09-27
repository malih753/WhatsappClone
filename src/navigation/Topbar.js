import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Community from '../screen/Community';
import VectorIcon from '../utils/VectorIcon';
import {TabBar} from 'react-native-tab-view';
import {TabBarData} from '../data/TabBarData';

const Tab = createMaterialTopTabNavigator();

const Topbar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Chats"
      screenOptions={() => ({
        tabBarActiveTintColor: '#4c8768',
        tabBarInactiveTintColor: 'grey',
        tabBarIndicatorStyle: {
          backgroundColor: '#4c8768',
        },
        tabBarStyle: {
          backgroundColor: '#3b3d3c',
        },
      })}>
      <Tab.Screen
        name="Community"
        component={Community}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <VectorIcon
              type="FontAwesome"
              name="users"
              color={color}
              size={20}
            />
          ),
        }}
      />
      {TabBarData.map(tab => {
        return (
          <Tab.Screen key={tab.id} name={tab.name} component={tab.route} />
        );
      })}
    </Tab.Navigator>
  );
};

export default Topbar;
