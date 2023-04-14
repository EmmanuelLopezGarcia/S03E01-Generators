const superHeroTeams = [
  {
    name: 'Dream Team',
    heroes: [
      {
        id: '1',
        name: 'Superman',
        superPowers: ['speed', 'x-ray vision', 'flying'],
      },
      {
        id: '2',
        name: 'Spieder-Man',
        superPowers: ['spieder sense'],
      },
      {
        id: '3',
        name: 'Batman',
        superPowers: ['money', 'immortality'],
      },
      {
        id: '4',
        name: 'Ivan',
        superPowers: ['Javascript'],
      },
    ],
  },
  {
    name: 'Dream Agent Team',
    heroes: [
      {
        id: '1',
        name: 'James Bond',
        superPowers: ['sexy', 'xharming', 'agility'],
      },
      {
        id: '2',
        name: 'Json Bourne',
        superPowers: ['losing memory'],
      },
      {
        id: '3',
        name: 'Jack Bauer',
        superPowers: ['punctuality'],
      },
    ],
  },
];

// variable que guardara el nombre del super heroe
let super_hero_wanted;

// Función que itera sobre los poderes ya no recibe los superpoderes sino todo el conjunto de super heroes
// que despues se itera segun sean los super poderes o los nombres de los superheroes, esto debido a que 
// ahora se ingresa a los objetos con la nomenclatura de punto
function* iteratePowers(superHeore) { 
  for (let i = 0; i < superHeore.superPowers.length; i++) {
    // El accede primero al nombre del superheroe y despues se almacena en la variable
    // para ser generado junto con el superpoder asignado en cada generacion
    super_hero_wanted = superHeore.name 
    const superPower = superHeore.superPowers[i]; 
    yield superPower, super_hero_wanted; 
  }
}

// Función que itera sobre heroes
function* iterateSuperHeores(superHeores) {
  for (let i = 0; i < superHeores.length; i++) {
    const superHeore = superHeores[i];
    // Ya no se delega la lista de superpoderes sino toda la lista de superheroes
    yield* iteratePowers(superHeore);
  }
}

// Función que itera sobre los Equipos
function* iterateTeams(superHeoresTeams) {
  for (let i = 0; i < superHeoresTeams.length; i++) {
    const superHeoresTeam = superHeoresTeams[i];
    yield* iterateSuperHeores(superHeoresTeam.heroes);
  }
}

const generatorObject = iterateTeams(superHeroTeams);

// Obteniendo el primer resultado
let result = generatorObject.next();

// Datos de busqueda
const superPowerWanted = "Javascript"
let counter = 0;

while (!result.done) {
  const superPower = result.value;
  counter++;
  if (superPower === superPowerWanted) {
    // Solo se imprime que el super poder ha sido encontrado
    // pero no a que héroe pertenece
    // deberia imprimir algo asi
    // > El super poder de immortality le pertenece a Batman

    // EL RESULTADO FINAL ES UNA CADENA INTERPOLADA CON EL SUPERPODER ENCONTRADO Y EL SUPERHEROE ALMACENADO EN LA VARIABLE
    console.log(`The super power is ${superPower} and it belongs to ${super_hero_wanted}`);
    break;
  } else {
    result = generatorObject.next();
  }
}
//console.log(`El sistema realizo ${counter} comparaciones en el conjunto de datos`);
