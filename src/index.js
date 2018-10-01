// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => propertyName;
const createProtoMagicObject = () => {
    const o = new Function();
    o.prototype = o.__proto__;

    return o;
};
const createNotEnumerableProperty = (propertyName) => {
    Object.defineProperty(Object.prototype, propertyName, {
        enumerable: false,
        value: 'value'
      });

      return propertyName;
};
let count = 0;
const incrementor = () => {
  count++;
  incrementor.valueOf = () => count;
  return incrementor;
};

let sum = 0;
const asyncIncrementor = () => {
  return new Promise((resolve, reject) => {
    sum++;
    return resolve(sum);
  })
};

const createIncrementer = function* () {
    let index = 1;
    while(true)
        yield index++;
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (result) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(result), 1000);
    });
};

const getDeepPropertiesCount = (obj) => {
    let arr = Object.getOwnPropertyNames(obj).length;

    Object.getOwnPropertyNames(obj).forEach(function(val, idx, array) {
        if (Object.getOwnPropertyNames(obj[val]).length > 0) {
            arr += getDeepPropertiesCount(obj[val]);
        }
    });

    return arr;
};
const createSerializedObject = () => null;
const toBuffer = () => {};
const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;