
# UI TESTING SUITE
__Nightwatch.js, Selenium and Zalenium__

This is a repository to include a complete UI Testing Suite in your project. It employs dockerized Selenium Grid (plus Zalenium extension https://github.com/zalando/zalenium). Forked from https://github.com/dwyl/learn-nightwatch (I suggest you to have a look), the package includes npm scripts as wrapper for the docker-compose commands.

## Learn Nightwatch.js 
> Keep calm: it's easy

Clone and read it: https://github.com/dwyl/learn-nightwatch

## Setup
### Where do I add my app?
(from https://github.com/mycargus/nightwatch-docker-grid)

You can add web app docker image to the `docker-compose.yml` file.

If you're using `dinghy` or `dory`, be sure to define the SUT's virtual URL (a default is provided). For example:

```
web:
  image: my-app-under-test:latest
  environment:
    VIRTUAL_HOST: myapp.docker
```

### Zalenium
This is a Selenium Grid extension to scale your local grid dynamically with docker containers. It uses docker-selenium to run your tests in Firefox and Chrome locally, if you need a different browser, your tests can get redirected to a cloud testing provider (Sauce Labs, BrowserStack, TestingBot). Zalenium also works out of the box in Kubernetes.

`localhost:4444`

__Some useful links:__

Zalenium Dashboard: `http://localhost:4444/dashboard/`

Selenium Grid: `http://localhost:4444/grid`

Selenium/Zalenium Grid Console: `http://localhost:4444/grid/console`

### Commands

`nightwatch tests/ -c nightwatch_withgraphic.json`
to execute all tests in the local machine 

`nightwatch tests/amazon.js -c nightwatch_withgraphic.json`
to execute single test in the local machine 

`npm run build` to build docker containers

`npm start` to start docker containers

`npm test` run tests

`npm stop` stop all docker nightwatch/zalenium containers

### A note on dinghy and dory

`dinghy` and `dory` are excellent Docker utilities for MacOSX and Linux, respectively. They simplify your dockerized
development workflow in multiple ways, perhaps the most convenient of which is this: instead of viewing your dockerized 
web app in your browser with `http://$(docker-machine ip):<port>`, you can simply go to `http://myapp.docker`.

_Both `dinghy` and `dory` are optional dependencies, and one may certainly use the bare-bones Docker ecosystem 
(and [docker-grid-nightwatch](https://github.com/mycargus/docker-grid-nightwatch)) without them._

### Ehi, pss. There are gremlins!

UI Testing Suite includes gremlins.js package and a sample of it, to learn how to implement monkey test with nightwatch.js.
Look here: https://github.com/marmelab/gremlins.js/


