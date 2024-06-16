import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';

import { useDispatch } from 'react-redux';
// import { deleteContact } from '../../redux/contacts/operations';
import { openModal } from '../../redux/modal/slice';

import css from './Contact.module.css';

export default function Contact({ contact }) {
  const dispatch = useDispatch(contact.id);

  const handleOpenModal = () => dispatch(openModal(contact.id));

  return (
    <div className={css.container}>
      <div className={css.info_container}>
        <span className={css.contact_line}>
          <FaUser />
          <p>{contact.name}</p>
        </span>
        <span className={css.contact_line}>
          <FaPhoneAlt />
          <p>{contact.number}</p>
        </span>
      </div>
      <div className={css.button_container}>
        <button
          className={css.deleteCntBtn}
          type="button"
          onClick={handleOpenModal}
        >
          <RiDeleteBinLine size={18} />
        </button>
        {/* <button className={css.editButton} type="button" onClick={handleDelete}>
          <RiEdit2Line size={18} />
        </button> */}
      </div>
    </div>
  );
}
