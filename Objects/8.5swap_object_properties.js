function swapPropertiesAndValues(inputObject) {
    const swappedObject = {};
  
    for (const key in inputObject) {
      if (inputObject.hasOwnProperty(key)) {
        swappedObject[inputObject[key]] = key;
      }
    }
  
    return swappedObject;
  }
  
  const originalObject = {
    name: "John",
    age: 30,
    city: "New York",
  };
  
  const swappedObject = swapPropertiesAndValues(originalObject);
  
  console.log("Original Object:", originalObject);
  console.log("Swapped Object:", swappedObject);
  