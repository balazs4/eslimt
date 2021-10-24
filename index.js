const foo = 'bar';

function bar(bazz) {
  console.log('eslimt FTW', bazz);
  JSON.stringify(bazz, null, 2);
}

bar('bazz');
