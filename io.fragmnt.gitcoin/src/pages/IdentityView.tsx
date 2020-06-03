import React from 'react';
import { IonContent, 
  IonHeader, IonPage, 
  IonTitle, 
  IonToolbar,
  IonButton
} from '@ionic/react';

const IdentityView: React.FC = (props) => {
  const hasIdentities = false;
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Identity Management</IonTitle>
          
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {hasIdentities ? <p>ok</p> : 
        <>
          <img src=""/>
          <h2>No identities found</h2>
          <p>You have no personas yet. Create one and it will show up here.</p> 
        </>
        }
        <IonButton routerLink="/idview/create">Add a new identity</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default IdentityView;