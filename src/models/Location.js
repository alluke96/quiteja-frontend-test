export class Location {
    constructor(street = '', city = '', state = '', country = '', timezone = '') {
        this.street = street;
        this.city = city;
        this.state = state;
        this.country = country;
        this.timezone = timezone;
    }
}