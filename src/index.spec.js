const execAsync = require('.');

describe('execAsync', () => {
  it('Should execute a command asynchronously', async () => {
    await execAsync('node -e "console.log(\'Hello, world!\')"');
  });
});
