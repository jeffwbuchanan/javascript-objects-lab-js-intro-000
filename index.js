var recipes = {
  breakfast: "eggs",
  lunch: "sandwich",
  dinner: "soup"
};

function updateObjectWithKeyAndValue (obj, key, value){
  return Object.assign({}, obj, { [key]: value })
};


function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  obj[key] = value
  return obj;
};

destructivelyUpdateObjectWithKeyAndValue(recipes, "snack", "cheese")
