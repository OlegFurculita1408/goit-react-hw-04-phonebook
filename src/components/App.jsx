// import { Component } from "react";
import ContactForm from "./Form/ContactForm";
import Filter from "./Filters/Filter";
import ContactList from './ContactList/ContactList';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [contacts, setContacts] = useState(() =>
    JSON.parse(localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');

  
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])
    
  const createUser = (contact) => {
    const exist = contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
      );
      if (exist) {
        toast.warning(`${contact.name} is in contacts.`, {position: toast.POSITION.TOP_LEFT});
        return;
      }
      setContacts(prevContacts => [contact, ...prevContacts]);
    };

  const handlerDelete = (id) => {
    toast.warning(`Delete user!`, {position: toast.POSITION.TOP_LEFT});
    setContacts(pr => pr.filter(contact => contact.id !== id));
  };

  const handleFilterChange = (e) => {
    setFilter({ filter: e.target.value });
  };

  const getFilter = () => {
    const optionFiltere = filter.toLowerCase();

    return contacts.filter(contact =>
       contact.name.toLowerCase().includes(optionFiltere));
  };


  return (
          <div className="container"
            style={{
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 30,
              color: '#010101'
            }}
          > <h1>Phonebook</h1>
            <ContactForm 
              addContact ={createUser}
              contacts={contacts}
              />
              <ToastContainer />
              <h2>Contacts</h2>
            <Filter 
              filterValue={filter}
              handleFilterChange={handleFilterChange}
              // contacts={contacts}
              />
            <ContactList
              contacts={getFilter()}
              handlerDelete={handlerDelete}
            />
          </div>
        );
}
export default App
// class App extends Component {
//   state = {
//     contacts: [],
//     filter: "",
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);
//       if (parsedContacts) {
//         this.setState({ contacts: parsedContacts });
//       }
//   }

//   componentDidUpdate(prevState) {
//     const { contacts } = this.state;
//       if (contacts !== prevState.contacts) {
//         localStorage.setItem('contacts', JSON.stringify(contacts));
//       }
//   }

//   createUser = (contact) => {
//     this.setState(prevState => {
//       const exist = prevState.contacts.find(
//         ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
//       );
//         if (exist) {
//           toast.warning(`${contact.name} is in contacts.`, {position: toast.POSITION.TOP_LEFT});
//           return;
//         }
//           else {toast.success('Create User', {position: toast.POSITION.TOP_LEFT})}
//           return { contacts: [...prevState.contacts, contact] };
//     });
//   };

//   handleFilterChange = (e) => {
//     this.setState({ filter: e.target.value });
//   };

//   handlerDelete = (id) => {
//     const { contacts } = this.state;
//     const updatedContacts = contacts.filter((contact) => contact.id !== id);
//       this.setState({
//         contacts: updatedContacts,
//     });
//   };

//   render() {
//     const { contacts, filter } = this.state;
//     const filtere = contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//     return (
//       <div className="container"
//         style={{
//           height: '100vh',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           fontSize: 30,
//           color: '#010101'
//         }}
//       > <h1>Phonebook</h1>
//         <ContactForm 
//           addContact ={this.createUser}
//           contacts={contacts}
//           />
//           <ToastContainer />
//           <h2>Contacts</h2>
//         <Filter filter={filter}
//           handleFilterChange={this.handleFilterChange}
//           contacts={contacts}
//           />
//         <ContactList
//           contacts={filtere}
//           handlerDelete={this.handlerDelete}
//         />
//       </div>
//     );
//   }
  
// };
// export default App
