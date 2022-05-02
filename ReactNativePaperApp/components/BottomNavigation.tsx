import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const MyComponent = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'music', title: 'Today', icon: 'home', color: '#3F51B5' },
        { key: 'albums', title: 'Calendar', icon: 'calendar', color: '#009688' },
        { key: 'recents', title: 'Messages', icon: 'format-list-bulleted', color: '#795548' },
        { key: 'purchased', title: 'Settings', icon: 'account-cog', color: '#607D8B' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        music: MusicRoute,
        albums: AlbumsRoute,
        recents: RecentsRoute,
        purchased: () => <Text>Purchased</Text>,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    );
};

export default MyComponent;