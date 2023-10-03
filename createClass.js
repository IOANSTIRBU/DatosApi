class Mascota {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

// Método estático para contar elementos con el mismo nombre
Mascota.contarMascotas = function (itemArray, nameToCount) {
  let count = 0;
  for (const item of itemArray) {
    if (item.name === nameToCount) {
      count++;
    }
  }
  return count;
};

// Ejemplo de uso de la clase
const items = [
  new Mascota(1, "William"),
  new Mascota(2, "Floyd"),
  new Mascota(3, "William"),
  new Mascota(4, "Tino"),
];

const nameToCount = "William";
const count = Mascota.contarMascotas(items, nameToCount);

console.log(`Cantidad de mascotas con nombre igual"${nameToCount}": ${count}`);
console.log(`Nombre de la mascota" "${nameToCount}"`);
