(() => {

    type Gender = 'M'|'F';

    class Person {
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
            ) {}

    }


    const newPerson = new Person('Andemar', 'M', new Date('1996, 12, 16'));
    console.log(newPerson);

})();