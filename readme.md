# Documentation for NPM package utilitytoolwash v1.0.2

<br>
# install
Write the below code in the terminal for your application.
```
npm i -s utilitytoolwash
```

### How to Use the Package

#### Example
```
// Call The Module into a script
const dataLog = require('utilitytoolwash');

// Use the utilitytoolwash
// Debug = ON Console.logging Data into log file
  dataLog(null, 'Our Server is Running', port);
```
<br>

Make sure to follow these steps when using the data to log into your log directory.

If you want to be able to catch an error pass in the error as the first parameter
```
//Used: date, message and object in it.
dataLog(err, 'Our Server is Running', port);
```
</br>

If you want an `err` is not defined in the same scope as `dataLog` then pass in `null` as the first argument.


Make sure when adding your **dataLog();** first comes the **error**, then the **text message** which explain the function or process that you wanna **console.log** out to the **.log directory** and finally the **object** you are using.

### Extra: version bumper
This package has a version bumper feature. In `src/versionBumper/versionBump.js` you can require it to be used to bump the current version stated in the package.json file.

This function bumps up the version based semantic versioning: **MAJOR.MINOR.PATCH** </br>
This function takes 1 of 3 values:
`major`: bumps current version up 1 **major** version
`minor`: bumps current version up 1 **minor** version
`patch`: bumps current version up 1 **patch** version

Examples:
```javascript
// create an instance of the version bumper
const versionBumper = require('path/to/versionBumper');

// package.json current version is 1.0.0

// bump up 1 major version
versionBumper('major'); // returns 2.0.0

// bump up 1 major version
versionBumper('minor'); // returns 1.1.0

// bump up 1 major version
versionBumper('patch'); // returns 1.0.1

```

**Note:**
The version bumper is a local module, so the path will change from file to file.
