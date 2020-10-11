function returnValueObj(prop, obj) {
  if (obj.hasOwnProperty(prop)  ) {
    return undefined;
  } else {
    return obj[prop];
  }
}
module.exports = returnValueObj;
