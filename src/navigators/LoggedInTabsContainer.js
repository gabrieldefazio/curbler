import { TabNavigator } from 'react-navigation';
import ExploreContainer from '../containers/ExploreContainer';
import SavedContainer from '../containers/SavedContainer';
import MapContainer from '../containers/MapContainer';
import InboxContainer from '../containers/InboxContainer';
import ProfileContainer from '../containers/ProfileContainer';
import colors from '../styles/colors';

const LoggedInNavigator = TabNavigator({
  ExploreContainer: { screen: ExploreContainer },
  SavedContainer: { screen: SavedContainer },
  MapContainer: { screen: MapContainer },
  InboxContainer: { screen: InboxContainer },
  ProfileContainer: { screen: ProfileContainer },
}, {
  tabBarOptions: {
    labelStyle: {
      marginBottom: 5,
      fontWeight: '600',
    },
    activeTintColor: colors.pink,
  }
});

export default LoggedInNavigator;