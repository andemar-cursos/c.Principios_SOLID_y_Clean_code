// Si sale error, es por que tanto el archivo a y b estan en el mismo directorio.

interface Bird {
  eat(): void;
}

interface FlyingBird {
  fly(): void;
}

interface RuningBird {
  run(): void;
}

interface SwimmerBird {
  swim(): void;
}

class Tucan implements Bird, FlyingBird {
  public fly(): void {}
  public eat(): void {}
}

class Humminbird implements Bird, FlyingBird {
  public fly(): void {}
  public eat(): void {}
}

class Ostrich implements Bird, RuningBird {
  public eat(): void {}
  public run(): void {}
}

class Penguin implements Bird, SwimmerBird {
  public eat(): void {}
  public swim(): void {}
}
