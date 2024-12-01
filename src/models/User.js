import { Location } from '@/models/Location';

export class User {
    constructor(
        firstName = '',
        lastName = '',
        title = '',
        gender = '',
        email = '',
        dateOfBirth = '',
        phone = '',
        picture = '',
        location = new Location()
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.title = title;
        this.gender = gender;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
        this.phone = phone;
        this.picture = picture;
        this.location = location;
    }
}
  