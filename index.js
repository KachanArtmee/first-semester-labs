const bcrypt = require('bcryptjs');

function printEnvInfo() {
  const { FIRST_NAME, LAST_NAME, GROUP, LIST_NUMBER, MODE } = process.env;

  console.log('MODE:', MODE);
  console.log('FIRST_NAME:', FIRST_NAME);
  console.log('LAST_NAME:', LAST_NAME);
  console.log('GROUP:', GROUP);
  console.log('LIST_NUMBER:', LIST_NUMBER);
}

async function hash13Passwords() {
  const passwords = Array.from({ length: 13 }, (_, i) => `pass_${i + 1}_${Date.now()}`);

  const tasks = passwords.map(async (pwd, idx) => {
    const start = process.hrtime.bigint();
    const hash = await bcrypt.hash(pwd, 10);
    const end = process.hrtime.bigint();
    const ms = Number(end - start) / 1e6;

    return { idx: idx + 1, ms: ms.toFixed(2), hashPreview: hash.slice(0, 20) + '...' };
  });

  const results = await Promise.all(tasks);

  results.forEach(r => {
    console.log(`Password #${r.idx}: ${r.ms} ms, hash: ${r.hashPreview}`);
  });

  console.log(
    '\nLOG: Время отличается из-за нагрузки CPU, конкуренции задач, планировщика ОС и стоимости "salt rounds" у bcrypt.'
  );
}

(async () => {
  printEnvInfo();
  await hash13Passwords();
})();
