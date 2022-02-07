import {
  IonButton,
  IonButtons,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonMenuButton,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { add, close, pencil } from "ionicons/icons";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import Supplier from "./Supplier";
import { removeSupplier, searchSuppliers } from "./SupplierApi";

const SupplierList: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const history = useHistory();

  useEffect(() => {
    {
      /*useEffect se ejecuta cuando se carga por primera vez, entre corchetes van los componentes que cuando reciben cambios se ejecuta ese useEffect, si no ponemos nada se ejecuta solo una vez*/
    }
    search();
  }, [history.location.pathname]);

  const search = async () => {
    let result = await searchSuppliers();
    setSuppliers(result);
  };

  const remove = async (id: string) => {
    await removeSupplier(id);
    search();
  }

  const addSupplier = () => {
    history.push('/page/supplier/new');
  }

  const editSupplier = (id: string) => {
    history.push('/page/supplier/'+ id);
  }
  
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
          <IonTitle>Gestión de proveedores</IonTitle>
          <IonItem>
            <IonButton onClick={addSupplier} color="primary" fill="solid" slot="end" size="default">
              <IonIcon icon={add} />
              Agregar Proveedor
            </IonButton>
          </IonItem>
          <IonGrid className="table">
            <IonRow>
              <IonCol>Nombre</IonCol>
              <IonCol>Mail</IonCol>
              <IonCol>Teléfono</IonCol>
              <IonCol>Dirección</IonCol>
              <IonCol>Acciones</IonCol>
            </IonRow>

            {suppliers.map((supplier: Supplier) => (
              <IonRow>
                <IonCol>{supplier.name}</IonCol>
                <IonCol>{supplier.email}</IonCol>
                <IonCol>{supplier.phone}</IonCol>
                <IonCol>{supplier.address}</IonCol>
                <IonCol>{supplier.web}</IonCol>
                <IonCol>{supplier.contact}</IonCol>
                <IonCol>
                  <IonButton color="primary" fill="clear" onClick={()=> editSupplier(String(supplier.id))}>
                    <IonIcon icon={pencil} slot="icon-only" />
                  </IonButton>
                  <IonButton color="danger" fill="clear" onClick={()=> remove(String(supplier.id))}>
                    <IonIcon icon={close} slot="icon-only" />
                  </IonButton>
                </IonCol>
              </IonRow>
            ))}
          </IonGrid>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default SupplierList;
