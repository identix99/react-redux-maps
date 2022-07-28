import { AddContacts , EditContacts , UpdateContacts , DeleteContacts , SelectAllContacts , ClearAllContacts ,  UNSELECTALLAllContacts   } from "../Constant";
 


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

//delet particul tab item 
  export const   DeletcontactsAction = (DeletDataId) => ({
    type: DeleteContacts,
    payload :  DeletDataId,
  })
  //selct all contacts
  export const   SelectAllContactsAction  = (SelectallId) => ({
    type: SelectAllContacts,
    payload :  SelectallId,
  })

 // clear selected contact orr unselect
 export const   UNSELECTALLAllContactsAction  = () => ({
  type:  UNSELECTALLAllContacts ,
})

 // delet all selected contact  
 export const   ClearAllContactsAction  = () => ({
  type:  ClearAllContacts ,
})