export class App {
  configureRouter(config, router) {
    config.title = 'My-Awesome-Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' },
      { route: 'chat',          name: 'chat',         moduleId: 'chat',         nav: true, title: 'Chat' },
      { route: 'chat2',          name: 'chat2',         moduleId: 'chat2',         nav: true, title: 'Chat2' },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }
    ]);

    this.router = router;
  }
}
