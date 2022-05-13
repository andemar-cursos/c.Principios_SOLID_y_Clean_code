(() => {
  // No aplicando el principio de responsabilidad única
  type Gender = 'M' | 'F';

  // Alto Acoplamiento

  class Person {
    constructor(
      public fisrtName: string, //change
      public lastName: string, //change
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

  class User extends Person {
    constructor(
      public email: string,
      public role: string,
      private lastAccess: Date,
      firstName: string, //change
      lastName: string, //change
      gender: Gender,
      birthdate: Date
    ) {
      super(firstName, lastName, gender, birthdate); //change
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastFolderOpen: string,
      email: string,
      role: string,
      firstName: string, //change
      lastName: string, //change
      gender: Gender,
      birthdate: Date
    ) {
      super(
        email,
        role,
        new Date(),
        firstName, //change
        lastName, //change
        gender,
        birthdate
      );
    }
  }

  const userSettings = new UserSettings(
    '/urs/home',
    '/development',
    'fernando@google.com',
    'F',
    'Ande', //change
    'Mar', //change
    'M',
    new Date('1985-10-21')
  );

  console.log({ userSettings, credentials: userSettings.checkCredentials() });
})();
