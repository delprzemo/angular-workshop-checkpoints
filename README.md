# MyDogsTraining

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.1.



# Visual Studio Code debugging

1. Make sure to have version 3.1.4 or greater of the Debugger for Chrome extension installed in VS Code.
2. Go to Debug window (CTRL + SHIFT + D)
3. Choose "Add Configuration" in a top dropdown
4. Choose "Chrome"
5. Replace content of the generated launch.json with the following three configurations:

  ```json
 {
    "version": "0.2.0",
    "configurations": [
      {
        "name": "ng serve",
        "type": "chrome",
        "request": "launch",
        "url": "http://localhost:4200/#",
        "webRoot": "${workspaceFolder}/---->[folder to your project here]<----"
      },
      {
        "type": "chrome",
        "request": "launch",
        "name": "ng test",
        "sourceMaps": true,
        "webRoot": "${workspaceRoot}/---->[folder to your project here]<----",
        "url": "http://localhost:9876/debug.html",
        "pathMapping": {
            "/": "${workspaceRoot}/---->[folder to your project here]<----",
            "/base/": "${workspaceRoot}/---->[folder to your project here]<----"
        },
        "sourceMapPathOverrides": {
            "webpack:///./*": "${webRoot}/*",
            "webpack:///src/*": "${webRoot}/*",
            "webpack:///*": "*",
            "webpack:///./~/*": "${webRoot}/node_modules/*",
            "meteor://💻app/*": "${webRoot}/*"
        }
      },
      {
        "name": "ng e2e",
        "type": "node",
        "request": "launch",
        "program": "${workspaceFolder}/---->[folder to your project here]<----/node_modules/protractor/bin/protractor",
        "protocol": "inspector",
        "args": ["${workspaceFolder}/---->[folder to your project here]<----/e2e/protractor.conf.js"]
      }
    ]
  }
  ```
6. Set proper ${workspaceRoot} to point folder where application is
7. Add 

  ```
   customLaunchers: {
      ChromeDebugging: {
        base: "Chrome",
        flags: [ "--remote-debugging-port=9333" ]
      }
    },
 ```

 into karma.conf.js. And set browsers property to:

  ```
 browsers: ["ChromeDebugging"],
 ```


 8. To debug application run 
 ```ng serve``` 
 in terminal and then start debugging with 'ng serve' configuration'

 9. To debug tests run
 ```ng test```
 in terminal and then start debugging with 'ng test' configuration'

10. To debug e2e tests start debugging with 'ng test' configuration' and then run 
 ```ng e2e```
 in terminal 



 # Dogs json data

This is data used in training:

 ```
    data: [{
      id: 1,
      name: 'York',
      description: 'Yorks are very friendly dogs',
      image: 'https://c8.alamy.com/comp/JWWEFR/york-terrier-taking-a-bath-funny-wet-dog-JWWEFR.jpg'
    },
    {
      id: 2,
      name: 'German Shepard',
      description: 'German Shepard are very unfriendly dogs',
      image: 'https://i.ebayimg.com/images/g/lGYAAMXQNo5Taknl/s-l300.jpg'
    }, 
    {
      id: 3,
      name: 'Bulldog',
      description: 'Bulldog are very lazy dogs',
      image: 'https://i.ytimg.com/vi/ksEliwKxS-Y/hqdefault.jpg'
    },
    {
      id: 4,
      name: 'Lassie',
      description: 'Lessie are very old dogs',
      image: 'https://i.pinimg.com/736x/4d/c2/79/4dc279f7ad7fce4fc9ac65c4ed831bfd.jpg'
    }]
```