class Hero {
    constructor({ name, power, id }) {
        this.name = name;
        this.power = power;
        this.id = Number.parseInt(id);
    }
}

export default Hero;