const animals = [
    {
        animal: 'lion',
        name: "simba",
        weight: 125,
        isHealthy: true,
        isAche: false,
        warden: {
            name: "Sam",
            age: 72
        }
    },
    {
        animal: 'warthog',
        name: "pumba",
        weight: 60,
        isHealthy: true,
        isAche: false,
        warden: {
            name: "Sam",
            age: 72
        }
    },
    {
        animal: 'gopher',
        name: "timon",
        weight: 10,
        isHealthy: true,
        isAche: false,
        warden: {
            name: "Mike",
            age: 42
        }
    },
    {
        animal: 'elephant',
        name: "paku",
        weight: 450,
        isHealthy: true,
        isAche: false,
        warden: {
            name: "Greg",
            age: 23
        }
    },
    {
        animal: 'tiger',
        name: "sherhan",
        weight: 145,
        isHealthy: true,
        isAche: false,
        warden: {
            name: "Tom",
            age: 33
        }
    }

];
function zoo() {
    return {
        findAnimal: (arr, animalName) => {
            let isFinded = false;

            for (let key of arr) {
                for (let j in key) {

                    if (key[j] == animalName.toLowerCase()) {
                        isFinded = true;
                        return key;
                    }
                }
            }
            isFinded ? true : alert(`Такого животного нет`);
        },


        findAnimalInfo: (arr, animalName) => {
            const searchResult = zoo().findAnimal(arr, animalName);
            const {animal, name, weight, isHealthy, warden} = zoo().findAnimal(arr, animalName);
            alert(`Информация о найденном животном: 
                Животное: ${animal}
                Имя: ${name}
                Вес: ${weight}
                Состояние здоровья: ${isHealthy ? 'Здоров' : 'Болен'}
                Смотритель: ${warden.name}`);
            return searchResult;
        },

        deleteAnimal: (arr, animalName) => {
            let searchResult = zoo().findAnimal(arr, animalName);
            const {animal, name, weight, isHealthy, warden} = zoo().findAnimal(arr, animalName);
            let deletedAnimal = arr.splice(arr.indexOf(searchResult), 1);
            alert(`Информация о удаленном животном: 
                Животное: ${animal}
                Имя: ${name}
                Вес: ${weight}
                Состояние здоровья: ${isHealthy ? 'Здоров' : 'Болен'}
                Смотритель: ${warden.name}`);
            return deletedAnimal;

        },
        renameAnimal: (arr, animalName, newName) => {
            const {name} = zoo().findAnimal(arr, animalName);
            name = newName;
            return arr;
        },
        changeHealthStatus: (arr, animalName) => {
            const {isHealthy, isAche} = zoo().findAnimal(arr, animalName);
            isHealthy = !isHealthy;
            isAche = !isAche;
            return arr;
        },
        addAnimal: (arr, newAnimalObj) => {
            arr.push(newAnimalObj);
            const {animal, name, weight, isHealthy, warden} = newAnimalObj;
            alert(`Информация о добавленном животном: 
                Животное: ${animal}
                Имя: ${name}
                Вес: ${weight}
                Состояние здоровья: ${isHealthy ? 'Здоров' : 'Болен'}
                Смотритель: ${warden.name}`);
            return arr;

        },
        deleteProperty: (arr, animalName, property) => {
            const searchResult = zoo().findAnimal(arr, animalName);

            if (searchResult.hasOwnProperty(property)) delete searchResult[`${property}`]
            else alert(`Такого значения нет`);
            return arr;
        },
        addProperty: (arr, animalName, property, value) => {
            const searchResult = zoo().findAnimal(arr, animalName);
            searchResult[`${property}`] = value;
            return arr;
        },
        changeWarden: (arr, animalName, newWardenName, newWardenAge) => {
            const {warden} = zoo().findAnimal(arr, animalName);
            warden.name = newWardenName;
            warden.age = newWardenAge;
            return arr;
        },
        deleteWarden: (arr, animalName) => {
            const searchResult = zoo().findAnimal(arr, animalName);
            delete searchResult[`warden`];
            return arr;
        },
        addWarden: (arr, animalName) => {
            const searchResult = zoo().findAnimal(arr, animalName);
            searchResult.warden = {
                name: `${newWardenName}`,
                age: `${newWardenAge}`
            };

            return arr;
        }
    }
}





let zooManager = zoo();
zooManager.findAnimalInfo(animals, 'timon');

zooManager.deleteAnimal(animals, 'timon');


