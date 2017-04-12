const _userName = "userName";
class Storage{
    constructor(){      
    }   

    currentUser(name){
        if(name){
            localStorage.setItem(_userName, name);
        }
        else{
            return  localStorage.getItem(_userName);
        }      
    }
}

export default new Storage();