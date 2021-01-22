
let data = {};
data.name = prompt('Имя короля?');
data.ourLost = +prompt('Потери короля?');
data.ourArmy = +prompt('сколько было воинов в армии короля?');
data.enemiesArmy = +prompt('Сколько было врагов?');
data.enemiesLost = +prompt('Сколько враги потеряли войнов?');

console.log(`Король ${data.name}, мы победили вражескую армию в ${data.enemiesArmy}! Враг бежит, оставив на поле боя ${data.enemiesLost} павших воинов от всей его армии. Наши потери король ${data.name} составили ${data.ourLost} героически павших воинов от всей нашей армии в ${data.ourArmy} солдат! Мы победили, сохранив ${data.ourArmy - data.ourLost} воинов и можем продолжить преследовать остатки вражеской армии в ${data.enemiesArmy - data.enemiesLost} солдат. С победой король ${data.name}!!`)


