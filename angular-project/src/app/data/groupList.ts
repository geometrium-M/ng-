import { IGroup } from "../components/model/group";

export const groupList: IGroup[] = [
  { 
  
  functions: [ 
    { 
    title: "MAV", 
    functionCode: "MAV-SLIP", 
    minValue: "1", 
    maxValue: "500" 
    }, 
    
    { 
    
    title: "RAV", 
    functionCode: "RAV-SLIP", 
    minValue: "1", 
    maxValue: "500" 
    } 
  ], 
  
  groupName: "Group 1", 
  id: 22, 
  minValue: "1", 
  maxValue: "500", 

  users: [ 
    { 
    userId: "09452W4295001", 
    userInitials: "EB", 
    fullName: "Elisa Blu" 
    } 
  
  ], 
  warning: "In atessa che il gruppo di firma venga approvato dai master" 
  }, 

  { 
  functions: [ 
  
    { 
    title: "F24 Accountant", 
    functionCode: "CBI-F24-ACCOUNTANT-PAYMENT", 
    minValue: "2", 
    maxValue: "150" 
    }, 
    
    { 
    title: "F24", 
    functionCode: "CBI-F24-PAYMENT", 
    minValue: "2", 
    maxValue: "150" 
    }, 
    
    { 
    title: "Bonifico Italia", 
    functionCode: "CBI-ITALY-TRANSFER", 
    minValue: "2", 
    maxValue: "150" 
    }, 
    
    { 
    title: "MAV", 
    functionCode: "MAV-SLIP", 
    minValue: "2", 
    maxValue: "150" 
    }, 
    
    { 
    title: "RAV", 
    functionCode: "RAV-SLIP", 
    minValue: "2", 
    maxValue: "150" 
    }, 
    
    { 
    title: "Bonifico SEPA", 
    functionCode: "SEPA-TRANSFER", 
    minValue: "2", 
    maxValue: "150" 
    } 
  
  ], 
  
  groupName: "My group", 
  id: 123, 
  minValue: "1", 
  maxValue: "50", 
  users: [ 
    { 
    userId: "09452W4295001", 
    userInitials: "EB", 
    fullName: "Elisa Blu" 
    }, 
    { 
    userId: "09452W4295002", 
    userInitials: "SN", 
    fullName: "Sara Neri" 
    }, 
    { 
    userId: "09452W4295003", 
    userInitials: "CD", 
    fullName: "Clone Dispo" 
    }, 
  
  ], 
  warning: "In atessa che il gruppo di firma venga approvato dai master" 
  }, 
  
  { 
  
  functions: [ 
  
    { 
    title: "MAV", 
    functionCode: "MAV-SLIP", 
    minValue: "1", 
    maxValue: "10" 
    }, 
    
    { 
    title: "RAV", 
    functionCode: "RAV-SLIP", 
    minValue: "1", 
    maxValue: "10" 
    } 
  
  ], 
  
  groupName: "Group Name", 
  id: 16, 
  minValue: "1", 
  maxValue: "10", 
  users: [ 
    { 
    userId: "09452W4295002", 
    userInitials: "SN", 
    fullName: "Sara Neri" 
    } 
  ] 
  }, 
  
  { 
  functions: [ 
    { 
    title: "Bonifico SEPA", 
    functionCode: "SEPA-TRANSFER", 
    minValue: "null", 
    maxValue: "null" 
    } 
  ], 
  
  groupName: "Gruppo firma Sepa Transfer", 
  id: 71, 
  minValue: "50000", 
  maxValue: "100000", 
  users: [ 
    { 
    userId: "09452W4295001", 
    userInitials: "EB", 
    fullName: "Elisa Blu" 
    }, 
    { 
    userId: "09452W4295002", 
    userInitials: "SN", 
    fullName: "Sara Neri" 
    } 
  ] 
  } 
  
  ] 
  
   
   
  

   
   
  
