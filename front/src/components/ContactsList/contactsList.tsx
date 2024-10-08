import { Div } from "./styles";
import ContactsCard from "./ContactsCard/contactsCard";
import { IContact } from "../../types/types";
import { useContactContext } from "../../hooks/useContactContext";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const ContactsList = () => {
  const { contactsResult, inputSearch, pagination, page, setPage } = useContactContext();

  return (
    <Div>
      {inputSearch ? <p>Resultado de busca para: {inputSearch}</p> : null}
      {contactsResult.length > 0 ? (
        <ul>
          {contactsResult.map((contact: IContact) => (
            <ContactsCard key={contact.id} contact={contact} />
          ))}
        </ul>
      ) : (
        <p>"Nenhum contato cadastrado"</p>
      )}
      <div>
        {pagination.prevPage != null ? <button
          onClick={() => setPage((pageNumber) => pageNumber - 1)} // desse jeito não precisa pegar o próprio estado "page", assim poderia colocar qualquer nome            
          title="Página anterior"
          aria-label="previous page"
        > 
          <MdKeyboardArrowLeft size={30} />
          <p className="anotherPageNumber">{page > 1 ? page - 1 : null}</p>
        </button> : <MdKeyboardArrowLeft color="grey" size={30} /> 
        }
        
        {pagination.nextPage != null ? <button 
          onClick={() => setPage((pageNumber) => pageNumber + 1)}              
          title="Página posterior"
          aria-label="next page"
        >
          <p className="anotherPageNumber">{page + 1}</p>
          <MdKeyboardArrowRight size={30} />
        </button> : <MdKeyboardArrowRight color="grey" size={30} /> 
        }
      </div>
    </Div>
  );
};

export default ContactsList;
