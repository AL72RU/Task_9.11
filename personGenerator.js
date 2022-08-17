const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Анастасия",
            "id_3": "Дарья",
            "id_4": "Мария",
            "id_5": "Анна",
            "id_6": "Виктория",
            "id_7": "Полина",
            "id_8": "Елизавета",
            "id_9": "Екатерина",
            "id_10": "Ксения"
        }
    }`,
    middleNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александрович",
            "id_2": "Максимович",
            "id_3": "Иванович",
            "id_4": "Артемьевич",
            "id_5": "Анатольевич",
            "id_6": "Никитич",
            "id_7": "Михайлович",
            "id_8": "Даниилович",
            "id_9": "Егорович",
            "id_10": "Андреевич"
        }
    }`,
    middleNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александровна",
            "id_2": "Максимовна",
            "id_3": "Ивановна",
            "id_4": "Артемовна",
            "id_5": "Анатольевна",
            "id_6": "Никитична",
            "id_7": "Михайловна",
            "id_8": "Данииловна",
            "id_9": "Егоровна",
            "id_10": "Андреевна"
        }
    }`,
    genderJson: `{
        "count": 2,
        "list": {     
            "id_1": "Мужчина",
            "id_2": "Женщина"
        }
    }`,
    professionMaleJson: `{
        "count": 8,
        "list": {     
            "id_1": "Каменщик",
            "id_2": "Механик",
            "id_3": "Сварщик",
            "id_4": "Слесарь",
            "id_5": "Тракторист",
            "id_6": "Машинист",
            "id_7": "Полицейский",
            "id_8": "Телохранитель"
        }
    }`,
    professionFemaleJson: `{
        "count": 8,
        "list": {     
            "id_1": "Няня",
            "id_2": "Домохозяйка",
            "id_3": "Кухарка",
            "id_4": "Учительница",
            "id_5": "Швея",
            "id_6": "Стюардесса",
            "id_7": "Горничная",
            "id_8": "Медсестра"
        }
    }`,
    monthsJson: `{
        "count": 12,
        "list": {     
            "id_1": "Февраля",

            "id_2": "Апреля",
            "id_3": "Июня",
            "id_4": "Сентября",
            "id_5": "Ноября",

            "id_6": "Января",
            "id_7": "Марта",
            "id_8": "Мая",
            "id_9": "Июля",
            "id_10": "Августа",
            "id_11": "Октября",
            "id_12": "Декабря"
        }
    }`,

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomGender: function() {
        return this.randomValue(this.genderJson);
    },

    randomFirstName: function() {
        if (this.person.gender == "Мужчина") {
            return this.randomValue(this.firstNameMaleJson);
        }
        else{
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

    randomMiddleName: function() {
        if (this.person.gender == "Мужчина") {
            return this.randomValue(this.middleNameMaleJson);
        }
        else{
            return this.randomValue(this.middleNameFemaleJson);
        }
    },

    randomSurname: function() {
        if (this.person.gender == "Мужчина") {
            return this.randomValue(this.surnameJson);
        }
        else{
            return `${this.randomValue(this.surnameJson)}а`;
        }
    },

    randomProfession: function() {
        if (this.person.gender == "Мужчина") {
            return this.randomValue(this.professionMaleJson);
        }
        else{
            return this.randomValue(this.professionFemaleJson);
        }
    },

    randomBirthYear: function() {
        let YYYY = this.randomIntNumber(2000, 1980);
        const M = this.randomIntNumber(12, 1);
        const obj = JSON.parse(this.monthsJson);
        const MM = obj.list[`id_${M}`];
        let DD = 0;
        if (M == 1) {
            DD = this.randomIntNumber(28, 1);
        }
        else if (M >= 2 && M <= 5) {
            DD = this.randomIntNumber(30, 1);
        }
        else if (M >= 6) {
            DD = this.randomIntNumber(31, 1);
        }
        return `${DD} ${MM} ${YYYY} года рождения`;
    },



    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.surname = this.randomSurname();
        this.person.firstName = this.randomFirstName();
        this.person.middleName = this.randomMiddleName();
        this.person.profession = this.randomProfession();
        this.person.birthYear = this.randomBirthYear();
        return this.person;
    }
};

