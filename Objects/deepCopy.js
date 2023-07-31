function cloneObj(obj, hash = new WeakMap()) {
  if (obj instanceof Function || Object(obj) !== obj) {
    return obj;  
  }
  if (hash.has(obj)) return hash.get(obj) 
  try {
    var result = new obj.constructor();
  } catch (e) {
    result = Object.create(Object.getPrototypeOf(obj));
  }

  return Object.assign(
    result,
    ...Object.keys(obj).map((k) => ({ [k]: cloneObj(obj[k], hash) }))
  );
}
