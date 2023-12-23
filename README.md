# code reproduction

Issue:

to reproduce the issue:
1. add mobiscroll to yarnrc
```
<!-- nodeLinker: node-modules -->
<!-- yarnPath: .yarn/releases/yarn-3.6.0.cjs -->
npmScopes:
  mobiscroll:
    npmAlwaysAuth: true
    npmAuthToken: {TOKEN}
    npmRegistryServer: https://npm.mobiscroll.com
```
2. install deps: `yarn`
2. run:
```
npx ng serve app --port 4200 --host localhost       
```
3. navigate to http://localhost:4200
4. click the 'Page Link' text



