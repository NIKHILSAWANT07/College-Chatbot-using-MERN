//import { Notifications } from 'react-push-notification';
import './chat.css';
//import { Notifications } from 'react-push-notification';
//import NotificationComponent from './module/NotificationComponent';
import SimpleForm from './module/form/SimpleForm';
import image from "./img/ColgEntrance.jpeg"; 

const chat = () => {  return (
  <div id="container">
    
    <div  className="App1" style={{ backgroundImage:`url(${image})` }}>
      
      <SimpleForm />
      
    </div>
    </div>
  );
}

export default chat;

