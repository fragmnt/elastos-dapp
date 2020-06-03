import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { apps, home, keypad, gitMerge } from 'ionicons/icons';

// Views

import HomeView from './pages/HomeView';
import IdentityView from './pages/IdentityView';
import ConnView from './pages/ConnView';
import SettingsView from './pages/SettingsView';

// View Components
import Details from './pages/Details';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>

        <IonRouterOutlet>
          <Route path="/homeview" component={HomeView} exact={true} />
          <Route path="/idview" component={IdentityView} exact={true} />
          <Route path="/idview/details" component={Details} />
          <Route path="/connview" component={ConnView} />
          <Route path='/settingsview' component={SettingsView} />
          <Route exact path="/" render={() => <Redirect to="/homeview" />} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="homeview" href="/homeview">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="idview" href="/idview">
            <IonIcon icon={apps} />
            <IonLabel>Your Identities</IonLabel>
          </IonTabButton>
          <IonTabButton tab="connview" href="/connview">
            <IonIcon icon={gitMerge} />
            <IonLabel>Connections</IonLabel>
          </IonTabButton>
          <IonTabButton tab="settingsview" href="/settingsview">
            <IonIcon icon={keypad} />
            <IonLabel>Settings</IonLabel>
          </IonTabButton>
        </IonTabBar>

      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
