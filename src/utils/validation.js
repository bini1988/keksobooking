
/**
 * Возвращает функцию проверки имеет ли переданное значени указанный тип
 * @param  {String}   type  проверяемый тип
 * @return {Function}       функция принимающая проверяемое значение
 */
function hasType(type) {
  return (type === `array`)
    ? (value) => Array.isArray(value)
    : (value) => (typeof value === type);
}

/**
 * Возвращает функцию проверки имеет ли переданная строка заданную длину
 * @param  {Number}  min минимальная длина строки
 * @param  {Number}  max максимальная длина строки
 * @return {Function}    функция принимающая проверяемое значение
 */
function hasLength(min = 0, max = min) {
  return (value) => {
    return (typeof value === `string`) &&
      (value.length >= min) &&
      (value.length <= max);
  };
}

/**
 * Возвращает функцию проверки максимальной длины переданной строки
 * @param  {Number}  max максимальная длина строки
 * @return {Function}    функция принимающая проверяемое значение
 */
function hasMaxLength(max = 0) {
  return (value) => {
    return (typeof value === `string`) &&
      (value.length <= max);
  };
}

/**
 * Возвращает функцию проверки принадлежит ли переданное значение данному множеству
 * @param  {Array} arr  массив элементов множества допустимых значений
 * @return {Function}   функция принимающая проверяемое значение
 */
function oneOf(arr) {
  const values = new Set(arr);
  return (value) => values.has(value);
}

/**
 * Возвращает функцию проверки попадает ли переданное числовое значение в заданный диапазон
 * @param  {Number} min минимальное значение
 * @param  {Number} max максимальное значение
 * @return {Function}   функция принимающая проверяемое значение
 */
function inRange(min = 0, max = min) {
  return (value) => {
    return (typeof value === `number`) &&
      (value >= min) &&
      (value <= max);
  };
}

/**
 * Возвращает функцию проверки преставляет ли переданное строковое значение время заданного формата
 * @param  {RegExp}  regexp используемое для проверки герулярное выражение
 * @return {Function}       функция принимающая проверяемое значение
 */
function hasTimeFormat(regexp = /^(([0-1]\d)|([2][0-3])):[0-5]\d$/i) {
  return (value) => {
    return (typeof value === `string`) &&
      regexp.test(value);
  };
}

/**
 * Является ли переданный массив множеством
 * @param  {Array}  arr массив элементов множества
 * @return {Boolean}    результат проверки
 */
function isSet(arr) {
  return Array.isArray(arr) &&
    ((new Set(arr)).size === arr.length);
}

/**
 * Является ли переданный массив подмножеством заданного множества
 * @param  {Array} arr массив элементов множества
 * @return {Function}  функция принимающая проверяемое значение
 */
function subsetOf(arr) {
  const arrSet = new Set(arr);
  return (value) => {
    return Array.isArray(value) && value.every((item) => arrSet.has(item));
  };
}

/**
 * Имеет ли переданный объект поле mimetype с одним из указанных значений
 * @param  {Array} arr массив элементов множества
 * @return {Function}  функция принимающая проверяемое значение
 */
function hasMimeType(arr) {
  const arrSet = new Set(arr);
  return (value) => {
    return (typeof value === `object`) && arrSet.has(value.mimetype);
  };
}

module.exports = {
  hasType,
  hasLength,
  hasMaxLength,
  oneOf,
  inRange,
  hasTimeFormat,
  isSet,
  subsetOf,
  hasMimeType
};