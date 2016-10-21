# Documentation for NPM package utilitytoolwash v1.0.2

<br>
# install
Write the below code in the terminal for your application.
```
npm i -s utilitytoolwash
```

### How to Use the Package

### Debuging
first the environmental variable 
#### Example
```javascript
// Call The Module into a script
const dataLog = require('utilitytoolwash').debug;

// (msg, obj, error, stat)
// Use the utilitytoolwash
// Debug=true node src/server.js
// parameters are
  dataLog(null, 'Our Server is Running', port);
```
<br>

Make sure to follow these steps when using the data to log into your log directory.

If you want to be able to catch an error pass in the error as the first parameter
```javascript
// Call The Module into a script
const dataLog = require('utilitytoolwash').debug;

//Used: date, message and object in it.
dataLog(err, 'Our Server is Running', port);
```
</br>

If you want an `err` is not defined in the same scope as `dataLog` then pass in `null` as the first argument.


Make sure when adding your **dataLog();** first comes the **error**, then the **text message** which explain the function or process that you wanna **console.log** out to the **.log directory** and finally the **object** you are using.

### Version Bumper
This package has a version bumper feature. You can require it to be used to bump the current version stated in the package.json file.

Ther first parameter should be the version you want bumped up. The intent for this version bupmer is for the version of the `package.json` file. You can single out the `version` in the package.json using `require()`. For example:
```javascript

const version = require('./package.json');

```
</br>

This function bumps up the version based semantic versioning: **MAJOR.MINOR.PATCH** </br>
This function takes 1 of 3 values as the second argument:
`major`: bumps current version up 1 **major** version
`minor`: bumps current version up 1 **minor** version
`patch`: bumps current version up 1 **patch** version

Examples:
```javascript
// create an instance of the version bumper
const versionBumper = require('utilitytoolwash').versionBump;
const version = require('path/to/package.json');

// package.json current version is 1.0.0

// bump up 1 major version
versionBumper(version, 'major'); // returns 2.0.0

// bump up 1 major version
versionBumper(version, 'minor'); // returns 1.1.0

// bump up 1 major version
versionBumper(version, 'patch'); // returns 1.0.1

```
