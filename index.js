/**
 * @param {string} bazz
 * @returns {boolean}
 */
function bar(bazz) {
  console.log('eslimt FTW', bazz);
  JSON.stringify(bazz, null, 2);
  return true;
}

bar('ok');
