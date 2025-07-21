import React from 'react';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonAvatar,
    IonItem,
    IonLabel,
    IonIcon,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton
} from '@ionic/react';
import {
    personCircleOutline,
    mailOutline,
    callOutline,
    settingsOutline,
    logOutOutline
} from 'ionicons/icons';

const Profile: React.FC = () => {
    // Dummy user data
    const user = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+1 (123) 456-7890',
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Profile</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                {/* User Avatar and Name */}
                <IonItem lines="none" className="ion-text-center" style={{ flexDirection: 'column' }}>
                    <IonAvatar style={{ width: '100px', height: '100px', marginBottom: '10px' }}>
                        <img src="https://i.pravatar.cc/150?u=user" alt="User Avatar" />
                    </IonAvatar>
                    <IonLabel>
                        <h2>{user.name}</h2>
                    </IonLabel>
                </IonItem>

                {/* Contact Info */}
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Contact Info</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <p>
                            <IonIcon icon={mailOutline} style={{ marginRight: '6px' }} />
                            {user.email}
                        </p>
                        <p>
                            <IonIcon icon={callOutline} style={{ marginRight: '6px' }} />
                            {user.phone}
                        </p>
                    </IonCardContent>
                </IonCard>

                {/* Profile Actions */}
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Settings</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonButton expand="block" color="medium">
                            <IonIcon icon={settingsOutline} slot="start" />
                            Edit Profile
                        </IonButton>
                        <IonButton expand="block" color="danger">
                            <IonIcon icon={logOutOutline} slot="start" />
                            Logout
                        </IonButton>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Profile;