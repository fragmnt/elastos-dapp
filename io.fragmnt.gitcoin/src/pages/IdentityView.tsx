import React from 'react';
import { IonContent, 
  IonHeader, IonPage, 
  IonTitle, 
  IonToolbar,
  IonButton
} from '@ionic/react';

const IdentityView: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About AppName</IonTitle>
          
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>AppName is a innovative concept for elastOS.</p>
        <IonButton routerLink="/idview/details">Read more details</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default IdentityView;