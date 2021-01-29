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

            alert(`Информация о найденном животном: 
                Животное: ${searchResult.animal}
                Имя: ${searchResult.name}
                Вес: ${searchResult.weight}
                Состояние здоровья: ${searchResult.isHealthy ? 'Здоров' : 'Болен'}
                Смотритель: ${searchResult.warden.name}`);
            return searchResult;
        },

        deleteAnimal: (arr, animalName) => {
            const searchResult = zoo().findAnimal(arr, animalName);
            let deletedAnimal = arr.splice(arr.indexOf(searchResult), 1);
            alert(`Информация о удаленном животном: 
                Животное: ${searchResult.animal}
                Имя: ${searchResult.name}
                Вес: ${searchResult.weight}
                Состояние здоровья: ${searchResult.isHealthy ? 'Здоров' : 'Болен'}
                Смотритель: ${searchResult.warden.name}`);
            return deletedAnimal;

        },
        renameAnimal: (arr, animalName, newName) => {
            const searchResult = zoo().findAnimal(arr, animalName);
            searchResult.name = newName;
            return arr;
        },
        changeHealthStatus: (arr, animalName) => {
            const searchResult = zoo().findAnimal(arr, animalName);
            searchResult.isHealthy = !searchResult.isHealthy;
            searchResult.isAche = !searchResult.isAche;
            return arr;
        },
        addAnimal: (arr, newAnimalObj) => {
            arr.push(newAnimalObj);
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
            const searchResult = zoo().findAnimal(arr, animalName);
            searchResult.warden.name = newWardenName;
            searchResult.warden.age = newWardenAge;
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
zooManager.addProperty(animals, 'timon', 'isAngry', true);