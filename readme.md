# Documentation for NPM package utilitytoolwash v1.0.2

<br>
# install
Write the below code in the terminal for your application.
```
npm i -s utilitytoolwash
```



### How to Use the Package

Add a directory and log file **log/debugs.log** into your root to grab all the log queries from **utilitytoolwash**

```
// Add log directory and debugs.log files to root of your application
mkdir log
cd log
touch debugs.log
```

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
