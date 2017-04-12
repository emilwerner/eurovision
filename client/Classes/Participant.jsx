export default class Participant{
    constructor(guid, name, country, grades){
        this.name = name;
        this.country = country;
        this.grades = grades;
    }
    get name(){
        return this.name;        
    }

    get country(){
        return this.country;        
    }

    get grades(){
        return this.grades;        
    }

}