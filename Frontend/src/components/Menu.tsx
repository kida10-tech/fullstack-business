import {
  IonContent,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { people, peopleOutline } from 'ionicons/icons';
import './Menu.css';
import LogoImg from '../images/logo2.png'

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Clientes',
    url: '/page/customers',
    iosIcon: peopleOutline,
    mdIcon: people
  },
  {
    title: 'Empleados',
    url: '/page/employees',
    iosIcon: peopleOutline,
    mdIcon: people
  },
  {
    title: 'Proveedores',
    url: '/page/suppliers',
    iosIcon: peopleOutline,
    mdIcon: people
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader><IonImg src={LogoImg}></IonImg></IonListHeader>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
