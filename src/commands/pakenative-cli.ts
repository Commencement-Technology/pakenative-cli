import { GluegunCommand } from 'gluegun';

const command: GluegunCommand = {
  name: 'pakenative-cli',
  run: async toolbox => {
    const { print, meta } = toolbox;

    print.info(`Welcome to pakenative CLI version ${meta.version()}`);
  },
};

module.exports = command;
