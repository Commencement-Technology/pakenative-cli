import { GluegunToolbox } from 'gluegun';

module.exports = {
  name: 'help',
  alias: ['h'],
  description: 'Displays pakenative CLI help',
  run: async (toolbox: GluegunToolbox) => {
    const {
      parameters,
      meta,
      print: { info },
    } = toolbox;

    info(parameters);

    info(`Version ${meta.version()}`);
  },
};
