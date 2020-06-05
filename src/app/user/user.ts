export class User{
    userId ?: string;
    firstName ?: string;
    lastName ?: string;
    passord ?: string;
    address ?: string;
    emailId ?: string;
    phoneNumber ?: string;

    constructor(userId? : string, firstName? : string, lastName? : string, passord? : string,
        address? : string, emailId ?: string, phoneNumber ?: string){
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.passord = passord;
        this.address = address;
        this.emailId = emailId;
        this.phoneNumber = phoneNumber;
    }
}