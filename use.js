const path = require('node:path');
const { loadData } = require('./modules/loadData');
const { sortStringsIgnoringSpaces } = require('./modules/sortStrings');
const fsMod = require('./modules/fileSystem');

(async () => {
  const { data: users, isLoading, error } = await loadData('https://jsonplaceholder.typicode.com/users');

  if (isLoading) console.log('Loading...');
  if (error) {
    console.error('Load error:', error.message);
    process.exit(1);
  }

  const names = users.map(u => u.name);
  const emails = users.map(u => u.email);

  const sortedNames = sortStringsIgnoringSpaces(names);

  const usersDir = path.join('users');
  await fsMod.createDirAsync(usersDir);

  await fsMod.writeFileAsync(path.join(usersDir, 'names.txt'), sortedNames.join('\n'));
  await fsMod.writeFileAsync(path.join(usersDir, 'emails.txt'), emails.join('\n'));

  console.log('Done: users/names.txt and users/emails.txt created.');
})();
