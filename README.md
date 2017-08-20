# Jenkins Alexa Skill

For public Jenkins instances, can check job status.

## Building and Deploying

For the `src/` you must run an `npm install` and compress the entire folder.

```bash
cd src/
npm install
zip ../src.zip -r *
```

The zip is uploaded to lambda and should contain the following:

```
Achive.zip/
    index.js
    jenkinsRESTHandler.js
    node_modules/
        ...
    package.json
```
