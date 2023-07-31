function inventory(array) {

    let register = [];

    for (const line of array) {
        let [name, heroLevel, items] = line.split(' / ');

        let currentHero = {
            name,
            level: Number(heroLevel),
            items
        }

        register.push(currentHero);
    }

    register.sort((a, b) => a.level - b.level);

    for (const hero of register) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }

}
inventory([
  'Isacc / 25 / Apple, GravityGun',
  'Derek / 12 / BarrelVest, DestructionSword',
  'Hes / 1 / Desolator, Sentinel, Antara',
]);
