import { GluegunToolbox } from 'gluegun';

module.exports = {
  name: 'help',
  alias: ['h'],
  description: 'Displays pakenative CLI version',
  run: async (toolbox: GluegunToolbox) => {
    const {
      parameters,
      meta,
      print: { info },
    } = toolbox;

    info(parameters);

    info(`Welcome to pakenative CLI version ${meta.version()}`);
  },
};
