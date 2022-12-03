import { system, filesystem } from 'gluegun';

const src = filesystem.path(__dirname, '..');
const version = '1.0.4';

const cli = async cmd =>
  system.run('node ' + filesystem.path(src, 'bin', 'pakenative-cli') + ` ${cmd}`);

test('outputs version', async () => {
  const output = await cli('--version');
  expect(output).toContain(`Welcome to pakenative CLI version ${version}`);
});

test('outputs help', async () => {
  const output = await cli('--help');
  expect(output).toContain(version);
});

test('generates file', async () => {
  const output = await cli('generate foo');

  expect(output).toContain('Generated file at models/foo-model.ts');
  const foomodel = filesystem.read('models/foo-model.ts');

  expect(foomodel).toContain(`module.exports = {`);
  expect(foomodel).toContain(`name: 'foo'`);

  // cleanup artifact
  filesystem.remove('models');
});
