const findArrayModifications = (originalArray, updateArray) => {
  const newElements = updateArray.filter(
    (element) => !originalArray.includes(element)
  );
  const removedElements = originalArray.filter(
    (element) => !updateArray.includes(element)
  );

  return [newElements, removedElements];
};

const originalArray = [1, 2, 3];
const updatedArray = [2, 3, 4, 5];

const [newElements, removedElements] = findArrayModifications(
  originalArray,
  updatedArray
);

console.log(newElements); // [4, 5]
console.log(removedElements); // [1]
