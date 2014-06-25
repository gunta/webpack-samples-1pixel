# webpack example for development/production

## Build and run

``` sh
# First install dependencies
$ npm install

# And install CLI
$ npm install webpack webpack-dev-server grunt-cli
```

### Native

``` sh
# Build with production config
$ webpack -p --colors

# Build with development config
$ webpack -d --colors

# Just open
$ open index.html
```

``` sh
# Build and watch with development server
$ webpack-dev-server -d --colors

# Just open
$ open http://localhost:8080/

# With auto-reloading
$ open http://localhost:8080/webpack-dev-server/index.html
```

### With grunt

``` sh
# Development server (will open and auto-reload)
$ grunt
```

``` sh
# Production build
$ grunt build

$ open index.html
```

### With gulp

``` sh
# Development server (will open and auto-reload)
$ gulp
```

``` sh
# Production build
$ gulp build

$ open index.html
```

