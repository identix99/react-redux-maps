import { AddContacts , EditContacts , UpdateContacts , DeleteContacts  } from "../Constant";
 


//actions
export const AddContact = (actionpara) => {
    return {
      type: AddContacts,
      payload: actionpara,
    };
  };

  //put and get edit contact Details
  export const  Fillcontacts = (id) => ({
    type: EditContacts,
    payload :  id ,
  })
  

  //update data by edit page
  export const  Updatecontacts = (contactupdated) => ({
    type: UpdateContacts,
    payload :  contactupdated,
  })


  export const   DeletcontactsAction = (DeletDataId) => ({
    type: DeleteContacts,
    payload :  DeletDataId,
  })