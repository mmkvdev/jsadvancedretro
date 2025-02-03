const squashObject = (obj, prefix = "", result = {}) => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = prefix ? `${prefix}_${key}` : key;
      if (Array.isArray(obj[key])) {
        // Handle arrays first, flatten each element with index
        obj[key].forEach((item, index) => {
          squashObject(item, `${newKey}_${index}`, result);
        });
      } else if (typeof obj[key] === "object" && obj[key] !== null) {
        // Recursively flatten nested objects
        squashObject(obj[key], newKey, result);
      } else {
        // Assign primitive values or `null` directly to the result
        result[newKey] = obj[key];
      }
    }
  }
  return result;
};

const user = {
  name: "Vishal",
  age: null,
  address: {
    primary: {
      house: "109",
      street: {
        main: "21",
        cross: null,
      },
    },
    secondary: null,
  },
  phones: [
    { type: "home", number: "1234567890" },
    { type: "work", number: null },
  ],
  preferences: null,
};

console.log(squashObject(user));
