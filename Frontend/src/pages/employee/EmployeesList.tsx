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
import Employee from "./Employee";
import { removeEmployee, searchEmployees } from "./EmployeesApi";

const EmployeeList: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [employees, setEmployees] = useState<Employee[]>([]);
  const history = useHistory();

  useEffect(() => {
    {
      /*useEffect se ejecuta cuando se carga por primera vez, entre corchetes van los componentes que cuando reciben cambios se ejecuta ese useEffect, si no ponemos nada se ejecuta solo una vez*/
    }
    search();
  }, [history.location.pathname]);

  const search = async () => {
    let result = await searchEmployees();
    setEmployees(result);
  };

  const remove = async (id: string) => {
    await removeEmployee(id);
    search();
  }

  const addEmployee = () => {
    history.push('/page/employee/new');
  }

  const editEmployee = (id: string) => {
    history.push('/page/employee/'+ id);
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
          <IonTitle>Gestión de empleados</IonTitle>
          <IonItem>
            <IonButton onClick={addEmployee} color="primary" fill="solid" slot="end" size="default">
              <IonIcon icon={add} />
              Agregar Empleado
            </IonButton>
          </IonItem>
          <IonGrid className="table">
            <IonRow>
              <IonCol>Nombre</IonCol>
              <IonCol>Mail</IonCol>
              <IonCol>Teléfono</IonCol>
              <IonCol>Dirección</IonCol>
              <IonCol>Salario</IonCol>
              <IonCol>Acciones</IonCol>
            </IonRow>

            {employees.map((employee: Employee) => (
              <IonRow>
                <IonCol>{employee.firstname} {employee.lastname}</IonCol>
                <IonCol>{employee.email}</IonCol>
                <IonCol>{employee.phone}</IonCol>
                <IonCol>{employee.address}</IonCol>
                <IonCol>{employee.salary}</IonCol>
                <IonCol>
                  <IonButton color="primary" fill="clear" onClick={()=> editEmployee(String(employee.id))}>
                    <IonIcon icon={pencil} slot="icon-only" />
                  </IonButton>
                  <IonButton color="danger" fill="clear" onClick={()=> remove(String(employee.id))}>
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

export default EmployeeList;
