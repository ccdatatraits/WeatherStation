### WeatherStation Status(Jenkins to work in the future...)
[![Build Status](https://jenkins.mediamath.com/buildStatus/icon?job=WeatherStation)](https://jenkins.mediamath.com/job/WeatherStation)


# WeatherStation

a [Sails](http://sailsjs.org) IoT Weather Station application

## Introduction
Weather Station for different locations. Will allow information from IoT devices in the future...


## Getting started
- Git clone this repository and `$ cd` to repository directory
- Install all node modules to node_modules directory from package.json `$ npm install`
- Run `sails lift` & `tsc -w` in different shell tabs

## Tips
#### If you run the app locally, please follow the below steps.
- To make 'chrome web security' off browser, please use Script Editor.app then put below script:

```
do shell script "/Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome --args --disable-web-security --user-data-dir=/Users/$USER/Library/Application\\ Support/Google/dev > /dev/null 2>&1 &"
```

- Add below hosts into your /etc/hosts

```
127.0.0.1       local.mediamath.com
```
