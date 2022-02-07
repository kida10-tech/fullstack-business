import {
  IonButton,
  IonButtons,
  IonCard,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { checkmark } from "ionicons/icons";
import { useEffect, useState } from "react";
import { useHistory, useParams, useRouteMatch } from "react-router";
import Supplier from "./Supplier";
import { saveSupplier, searchSupplierById } from "./SupplierApi";

const SupplierEdit: React.FC = () => {
  const { name } = useParams<{ name: string; }>();

  const [supplier, setSupplier] = useState<Supplier>({});
  const history = useHistory();

  const routeMatch: any = useRouteMatch("/page/supplier/:id");
  const id = routeMatch?.params?.id;

  useEffect(() => {
    
    /*useEffect se ejecuta cuando se carga por primera vez, entre corchetes van los componentes que cuando reciben cambios se ejecuta ese useEffect, si no ponemos nada se ejecuta solo una vez*/
    
    search();
  }, [history.location.pathname]);

  const search = async () => {
    if(id === 'new'){
        setSupplier({});
    } else {
      let result = await searchSupplierById(id);
      setSupplier(result);
    }
  }

  const save = () => {
    saveSupplier(supplier);
    history.push('/page/suppliers');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonTitle>{id === 'new' ? 'Add Supplier' : 'Edit Supplier'}</IonTitle>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Name</IonLabel>
                <IonInput onIonChange={e => supplier.name = String(e.detail.value)} /*con esto obtengo lo que escribió la persona en el input */ 
                value={supplier.name}></IonInput>
              </IonItem>
            </IonCol>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Email</IonLabel>
                <IonInput onIonChange={e => supplier.email = String(e.detail.value)} /*con esto obtengo lo que escribió la persona en el input */ 
                value={supplier.email}></IonInput>
              </IonItem>
            </IonCol>
            </IonRow>
            <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Phone</IonLabel>
                <IonInput onIonChange={e => supplier.phone = String(e.detail.value)} /*con esto obtengo lo que escribió la persona en el input */ 
                value={supplier.phone}></IonInput>
              </IonItem>
            </IonCol>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Address</IonLabel>
                <IonInput onIonChange={e => supplier.address = String(e.detail.value)} /*con esto obtengo lo que escribió la persona en el input */ 
                value={supplier.address}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Web</IonLabel>
                <IonInput onIonChange={e => supplier.web = String(e.detail.value)} /*con esto obtengo lo que escribió la persona en el input */ 
                value={supplier.web}></IonInput>
              </IonItem>
            </IonCol>
            <IonCol>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Contact</IonLabel>
                <IonInput onIonChange={e => supplier.contact = String(e.detail.value)} /*con esto obtengo lo que escribió la persona en el input */ 
                value={supplier.contact}></IonInput>
              </IonItem>
            </IonCol>
            <IonCol>
            </IonCol>
          </IonRow>

          <IonItem>
            <IonButton onClick={save} color="success" fill="solid" slot="end" size="default">
              <IonIcon icon={checkmark} />
              Save
            </IonButton>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default SupplierEdit;
