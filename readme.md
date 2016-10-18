# Documentation for NPM package utilitytoolwash v1.0.2

<br>
# install
Write the below code in the terminal for your application.
```bash
npm i -s utilitytoolwash
```

### Environment variables
to see logs to the console you have to set the environmental variable to true before the call to run your app.
```bash
DEGUB=true node app.js
```

### How to Use the Package

#### Example
```javascript
// Call The Module into a script
const dataLog = require('utilitytoolwash');

// parameters:
// 1. msg : [string] the title of the log
// 2. obj : [object] to be passed to log
// 3. err : [error obj] pass in any potential errors. By default is set to null
// 4. status : [string] accepts ['log', 'warn', 'error']. By default is set to 'log'
dataLog('Our Server is Running', port);

// log an error
dataLog('Hit an error', null, err);

// give a warning log
dataLog('If this is hit give a warning', warnObj, err, 'warn');
```
<br>
**Note:**
Only the first 2 parameters are required: `msg`, `obj`
</br>
