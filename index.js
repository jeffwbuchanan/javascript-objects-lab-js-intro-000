var recipes = {
  breakfast: "eggs",
  lunch: "sandwich",
  dinner: "soup"
};

function updateObjectWithKeyAndValue (obj, key, value){
  return Object.assign({}, obj, { [key]: value })
};

updateObjectWithKeyAndValue(recipes, "snack", "cheese")
