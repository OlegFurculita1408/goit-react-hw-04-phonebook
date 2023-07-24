import { useState } from "react";
import PropTypes from "prop-types";
import css from './Form.module.css';
import { nanoid } from "nanoid";


const ContactForm = ({addContact}) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    // const [id, setId] = useState('');

const handlerChenge = (e) => {
    const {name, value} = e.target;

    switch (name) {
        case 'name':
            setName(value)
            break;
        case 'number':
            setNumber(value)
            break;

        default:
            return;
    }
}

const handlerSubmit = (e) => {
        e.preventDefault()
        const newContact = {
            id:nanoid(),
            name,
            number,
        };
        addContact(newContact);
            reset();
        };
        
        const reset = () => {
            setName('')
            setNumber('')
        }

        return (
            <form className={css.container} onSubmit={handlerSubmit}>
                <label htmlFor={nanoid()}>Name</label>
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={handlerChenge}
                        value={name}
                    />
                    <label htmlFor={nanoid()}>Number</label>
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={handlerChenge}
                        value={number}
                    />
                <button className={css.formBtn}>Add contact</button>
            </form>
        )   
}
ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
export default ContactForm