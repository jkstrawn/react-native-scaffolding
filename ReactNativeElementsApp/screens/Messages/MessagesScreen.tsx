import React from 'react';
import { Tab, Text, TabView } from '@rneui/themed';
import ShiftOffersScreen from './ShiftOffersScreen';
import NotificationsScreen from './NotificationsScreen';
import ShiftAlertsScreen from './ShiftAlertsScreen';

export default () => {
  const [index, setIndex] = React.useState(0);

  return (
    <>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: 'white',
          height: 3,
        }}
        variant="primary"
      >
        <Tab.Item
          title="Offers"
          titleStyle={{ fontSize: 13 }}
          buttonStyle={(active) => ({
            paddingLeft: 0, paddingRight: 0, backgroundColor: active ? '#373737' : '#272727',
          })}
        // buttonStyle={({active}) => { paddingLeft: 0, paddingRight: 0 }}
        />
        <Tab.Item
          title="Announcements"
          titleStyle={{ fontSize: 13 }}
          buttonStyle={(active) => ({
            paddingLeft: 0, paddingRight: 0, backgroundColor: active ? '#373737' : '#272727',
          })}
        />
        <Tab.Item
          title="Alerts"
          titleStyle={{ fontSize: 13 }}
          buttonStyle={(active) => ({
            paddingLeft: 0, paddingRight: 0, backgroundColor: active ? '#373737' : '#272727',
          })}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ width: '100%' }}>
          <ShiftOffersScreen />
        </TabView.Item>
        <TabView.Item style={{ width: '100%' }}>
          <NotificationsScreen />
        </TabView.Item>
        <TabView.Item style={{ width: '100%' }}>
          <ShiftAlertsScreen />
        </TabView.Item>
      </TabView>
    </>
  );
};