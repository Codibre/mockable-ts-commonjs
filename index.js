const defineProperty = Object.defineProperty.bind(Object);

Object.defineProperty = function(o, p, attributes) {
  if (attributes.enumerable && attributes.get && !attributes.set && attributes.get.toString() === 'function() { return m[k]; }') {
    attributes.writable = true;
    attributes.value = attributes.get();
    delete attributes.get;
  }
  return defineProperty(o, p, attributes);
}
