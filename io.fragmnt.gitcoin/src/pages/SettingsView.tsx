import React from 'react';
import { IonContent, 
  IonHeader, IonPage, 
  IonTitle, 
  IonToolbar,
  IonButton
} from '@ionic/react';

const SettingsView: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>AppName Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>Configure your AppName settings here</p>
        <IonButton routerLink="/homeview">Reload the application</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default SettingsView;