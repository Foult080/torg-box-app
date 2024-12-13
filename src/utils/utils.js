/**
 * Метод для парсинга временных зон. На фронте компонент Select принимает массив с другими ключами. Подгоним под нужный формат.
 */
const parseTimeZones = (timeZones) => {
  const result = [];
  timeZones.forEach((item, index) => {
    const { timezone, name } = item;
    result.push({ key: index, value: timezone, text: name });
  });
  return result;
};

module.exports = { parseTimeZones };
