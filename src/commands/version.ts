import { GluegunToolbox } from 'gluegun';

module.exports = {
  name: 'version',
  alias: ['v'],
  description: 'Displays pakenative CLI version',
  run: async (toolbox: GluegunToolbox) => {
    const {
      meta,
      print: { info },
    } = toolbox;

    info(`Welcome to pakenative CLI version ${meta.version()}`);
  },
};
