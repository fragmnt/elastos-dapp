import React from 'react';
import { IonContent, 
  IonHeader, IonPage, 
  IonTitle, 
  IonToolbar,
  IonButton
} from '@ionic/react';

declare let appManager: AppManagerPlugin.AppManager;

const SettingsView: React.FC = (props) => {
  
  const closeApp = () => {
    console.log("dApp is closing!")
    appManager.close();
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Signal App Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>Configure your Signal settings here</p>
        <IonButton routerLink="/homeview">Reload the application</IonButton>
        <p>Finish with the application.</p>
        <IonButton onClick={closeApp}>Close the app</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default SettingsView;