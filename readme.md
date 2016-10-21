# Documentation for NPM package utilitytoolwash v1.0.2

<br>
# install
Write the below code in the terminal for your application.
```
npm i -s utilitytoolwash
```

### How to Use the Package

### Debuging
First,  the environmental variable `DEBUG` needs to be set to `true` for logs to print out to the console. like so...
```bach

DEBUG=true node src/server.js

```
</br>
The parameters for the debug tool are:
`(msg, obj, error, stat)`
1. `msg` [string]: This should be the message you want to put for the purpose of the log.
2. `obj` [object]: This is the variable object to be displayed to the console.
3. `error` [error object]: This sends the error message to console.
4. `stat` [string]: This should match a string from these options:
  - `log`: success log
  - `warning`: warning log
  - `error`: error log
</br>

#### Example
```javascript
// Call The Module into a script
const dataLog = require('utilitytoolwash').debug;

// if stat is not defined then 'log' will be the default
// if no error is passed in a default message of 'no errors' will display in it's place
dataLog('Our Server is Running', port);

// set a log to catch a warning
dataLog('Log a warning', port, null, 'warning');

// for logs that might catch an error
const err = new Error();
dataLog('To catch an error', port, err, 'error');
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
