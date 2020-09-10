import * as React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { enableScreens } from 'react-native-screens';

import Store from './Store';
import AppContent from './AppContent';

enableScreens();
const App: React.FunctionComponent = () => (
  <StoreProvider store={Store}>
    <AppContent />
  </StoreProvider>
);

export default App;
