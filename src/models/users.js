class User {
    constructor(id, email, user_type){
        this.id = id
        this.email = email
        this.user_type = user_type
    }

    
}

class Responsible extends User {
    constructor(responsible_id, kinship, contact_one, contact_two){
        super(id, email, user_type)
        this.responsible_id = responsible_id
        this.kinship = kinship
        this.contact_one = contact_one
        this.contact_two = contact_two
    }
}