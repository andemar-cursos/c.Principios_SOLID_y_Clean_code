
interface Bird {

    fly(): void;
    eat(): void;
    run(): void;
    swim(): void;
}

class Tucan implements Bird {

    public fly(): void {}
    public eat(): void {}
    public run(): void {}
    public swim(): void {}//Nope
}

class Humminbird implements Bird {

    public fly(): void {}
    public eat(): void {}
    public run(): void {}
    public swim(): void {}//Nope

}

class Ostrich implements Bird {

    public fly(): void {} //Nope
    public eat(): void {}
    public run(): void {}
    public swim(): void {}//Nope
}

class pinguin implements Bird {
    
        public fly(): void {}//Nope
        public eat(): void {}
        public run(): void {}
        public swim(): void {}
}