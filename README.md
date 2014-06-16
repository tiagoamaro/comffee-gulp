# Comffee-gulp : Gulp, Compass, CoffeScript and SASS united

- [CoffeScript](https://github.com/jashkenas/coffee-script)
- [Compass](https://github.com/chriseppstein/compass)
- [GulpJS](http://gulpjs.com/)
- [NodeJS](http://nodejs.org/)
- [UglifyJS](https://github.com/mishoo/UglifyJS)

## Getting Started

This project requires `GulpJS` and `Compass`

If you haven't used [GulpJS](http://gulpjs.com/) before, be sure to check out the [Getting Started](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md#getting-started) guide.

## Description

This is a sample GulpJS project that unites Compass, CoffeScript and SASS using GulpJS plugins.

## Usage

1. First things first: You will need [npm package manager](https://npmjs.org/) to install all dependencies. npm comes within NodeJS [since version 0.6.3](http://blog.nodejs.org/2011/11/25/node-v0-6-3/).

1. To use Compass and SASS, you will need to install [Ruby](http://www.ruby-lang.org/) and the gems declared in the `Gemfile`. There are many [ways to install Ruby](http://www.ruby-lang.org/en/downloads/), just choose one and be happy.

1. To install all Ruby-Comffee dependencies, install Ruby and them run `bundle install`, using the [bundler gem](http://gembundler.com/) or run `gem install compass` and `gem install bootstrap-sass`.

1. To install all NodeJS-Comffee dependencies, install NodeJS and then run `npm install`. This command will install all node_modules that are necessary to run this application.

1. With all dependencies installed, run the `gulp` command and have fun :)

1. If you want to run the `default` task every time a JS or CSS file change, run the `gulp watch` command

## Project Structure

```js
- fonts   // Put your font files here
- images  // Put your image files here, like the glyphicons from bootstrap
- src
  - css // Put your CSS, SASS or SCSS files here
  - js  // Put your Coffee or JS files here
```

If you want to get rid of your compiled files, run the command `gulp clean`.

-------------------------------------

It is important to note that this project has [bootstrap-sass](https://github.com/thomas-mcdonald/bootstrap-sass) included.

To import bootstrap-sass in your CSS just import it.

```css
@import "bootstrap";
```
