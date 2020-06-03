import React from 'react';
import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonTitle, IonContent,
  IonInput, IonItem, IonLabel, IonButton,
} from '@ionic/react';

const AddNewId: React.FC = () => {
  const submitNewIdentity = () => {

  };
  
  
  return (


    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/idview" />
          </IonButtons>
          <IonTitle>Create A New Identity</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>
          This will be used by Signal to conduct transactions, transfers and exchange documents through the elastOS p2p carrier network.
        </p>
        <div className="inputBrk">
        <IonItem>
          <span>@</span>
          <IonInput placeholder="Enter your alias here."/>
        </IonItem>
        </div>

        <div className="inputBrk">
        <IonItem> 
          <IonInput placeholder="Enter your reason for creating this identity here."/>
        </IonItem>
        </div>

        <IonButton>
          Add your identity to the vault.
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default AddNewId;
