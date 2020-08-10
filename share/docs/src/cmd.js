const { append, remove } = require('./readmes.js');

console.log('createing README.md');

const fileOut = '../../../README.md';
const filesIn = [
  { path: '../../../DO.md', mark: '\n' },
  { path: '../../../Makefile', mark: '\n```\n' },
  { path: '../../../docker-compose.dev.yml', mark: '\n```\n' },
  { path: '../../../frontend/Dockerfile.dev', mark: '\n```\n' },
  { path: '../../../api/Dockerfile.dev', mark: '\n```\n' },
  {
    path: '../../../frontend/package.json',
    mark: '\n```\n',
  },
  {
    path: '../../../api/package.json',
    mark: '\n```\n',
  },
  {
    path: '../../../frontend/src/app/app.module.ts',
    mark: '\n```\n',
  },
  {
    path: '../../../frontend/src/app/app-routing.module.ts',
    mark: '\n```\n',
  },
  {
    path: '../../../frontend/src/app/app.component.ts',
    mark: '\n```\n',
  },
  {
    path: '../../../frontend/src/app/app.component.html',
    mark: '\n```\n',
  },
  {
    path: '../../../api/server.js',
    mark: '\n```\n',
  },
  {
    path: '../../../api/config/environment.js',
    mark: '\n```\n',
  },
  {
    path: '../../../api/controllers/UserController.js',
    mark: '\n```\n',
  },
  {
    path: '../../../api/models/User.js',
    mark: '\n```\n',
  },
  {
    path: '../../../api/routes/UserRoute.js',
    mark: '\n```\n',
  },
  {
    path: '../../../frontend/src/app/home/home.component.ts',
    mark: '\n```\n',
  },
  {
    path: '../../../frontend/src/app/home/home.component.html',
    mark: '\n```\n',
  },
  {
    path: '../../../frontend/src/app/home/home.component.css',
    mark: '\n```\n',
  },
  {
    path: '../../../frontend/src/app/header/header.component.ts',
    mark: '\n```\n',
  },
  {
    path: '../../../frontend/src/app/header/header.component.html',
    mark: '\n```\n',
  },
  {
    path: '../../../frontend/src/app/profile/profile.component.ts',
    mark: '\n```\n',
  },
  {
    path: '../../../frontend/src/app/auth/auth.component.ts',
    mark: '\n```\n',
  },
  {
    path: '../../../frontend/src/app/auth/auth.module.ts',
    mark: '\n```\n',
  },
  {
    path: '../../../frontend/src/app/auth/auth.service.ts',
    mark: '\n```\n',
  },
  {
    path: '../../../frontend/src/app/auth/auth.guard.ts',
    mark: '\n```\n',
  },
  {
    path:
      '../../../frontend/src/app/auth/register/register.component.ts',
    mark: '\n```\n',
  },
  {
    path:
      '../../../frontend/src/app/auth/register/register.component.html',
    mark: '\n```\n',
  },
  {
    path: '../../../frontend/src/app/auth/login/login.component.ts',
    mark: '\n```\n',
  },
  {
    path: '../../../frontend/src/app/auth/login/login.component.html',
    mark: '\n```\n',
  },
];
const publish = (cmd) => {
  remove({ fileOut: cmd.fileOut });
  console.log('removed.');
  cmd.filesIn.forEach((file) => {
    console.log('each file.');
    append({ fileIn: file.path, fileOut, mark: file.mark });
  });
};

publish({ fileOut, filesIn });

console.log('created README.md');
