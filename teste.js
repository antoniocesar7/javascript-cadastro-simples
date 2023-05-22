// const array = [10, 20, 30, 40, 50];
// const item = 30;

// const index = array.indexOf(item);
// if (index !== -1) {
//   console.log("Item encontrado no índice:", index);
// } else {
//   console.log("Item não encontrado no array.");
// }

const array = [10, 20, 30, 40, 50];
const item = 30;

const foundItem = array.find(element => element === item);
if (foundItem) {
  console.log("Item encontrado:", foundItem);
} else {
  console.log("Item não encontrado no array.");
}
