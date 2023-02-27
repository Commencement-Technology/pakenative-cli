import { GluegunToolbox, filesystem } from 'gluegun';
import { toSecond } from '../tools';

module.exports = {
  name: 'new',
  alias: ['n'],
  description: 'Bootstrap a new react native app with Pakenfit style',
  run: async (toolbox: GluegunToolbox) => {
    const {
      parameters,
      system,
      prompt,
      meta,
      filesystem: { path },
      strings: { camelCase },
      print: {
        info,
        error,
        spin,
        success,
        divider,
        muted,
        colors: { bold },
      },
    } = toolbox;
    const timer = toolbox.system.startTimer();
    info(`--------------🔥 ${bold('Welcome to pakenative CLI')} 🔥---------------`);
    let name: string = camelCase(parameters.first);

    if (!name) {
      const result = await prompt.ask({
        type: 'input',
        name: 'name',
        message: "What's the name of your sweet app ?",
      });
      if (result?.name) {
        name = camelCase(result.name);
      }
    }

    if (!name) {
      error('No app name specified!');
      return;
    }
    const spinner = spin(bold(`Creating the project with pakenfit styles🔥...`));
    spinner.start();

    const pakenativePath = path(`${meta.src}`, '..');
    const boilerplatePath = path(pakenativePath, 'boilerplate');
    filesystem.copy(path(boilerplatePath), `${name}`, { overwrite: true });

    spinner.succeed();
    divider();

    spinner.start(bold('Installing dependencies 🔥...'));
    await system.run(`cd ${name} && yarn install`, { trim: true });
    spinner.succeed();
    divider();

    spinner.start(bold('Initializing git 🔥...'));
    await system.run(`cd ${name} && git init`);
    spinner.succeed();

    spinner.start(bold('Reanming the app 🔥...'));
    await system.run(`cd ${name} && npx react-native-rename ${name} --skipGitStatusCheck`);
    spinner.succeed();

    success(bold('Your new app has been successfully created 🎉'));
    info(`That just took ${toSecond(timer())} s.`);
    divider();

    muted('Now get started 🔥');

    info(bold('For Android :'));
    muted('Make sure to have Android studio installed');
    muted(`cd ${name}`);
    muted(`yarn start`);
    muted(`yarn android`);

    divider();

    info(bold('For iOS :'));
    muted('Make sure to have Xcode and ruby version in the _ruby-version file installed');
    muted(`cd ${name}`);
    muted('bundle install');
    muted('cd ios && npx pod-install');
    muted(`yarn start`);
    muted('yarn ios');
  },
};
