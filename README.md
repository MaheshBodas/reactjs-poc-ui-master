# ReactJS PoC
ReactJS PoC is Front end application which consume DJango Rest API server. Its sends appropriate GET request to retrive data and uses POST request to create objects on server side.

 Here is brief introduction to functionality it offers.

1. Allow user to Create RiskTypes which is defining new Entity in system and attributes associated with that Entity. 
2. Frontend use POST request to specified endpoint to create new RiskType (Entity on server).
3. Allow user to Create Risk Instances based on RiskType which is like creating and saving objects of chosen type.
4. User can browse RiskTypes and Risk. 
5. View Single Risk screen let user to select Risk name from dropdown box. Upon selection application fetches details of single  Risk Instance.
6. View All Risk screen lets user to navigate through list of Risk instances of chosen type 

### For details of User and Architecture guide refer following links
- [User Guide](https://github.com/MaheshBodas/chinook-poc-ui-master/tree/master/blob/ReactJSPoCUIPresentation.pdf)
- [Architecture Guide](https://github.com/MaheshBodas/chinook-poc-ui-master/tree/master/blob/ArchitectureReactJSPoC.pdf)

### It makes use of following technology.
- ReactJS, Element React component library, Redmond theme from jQuery UI, FontAwesome, TypeScript, lint.
- Redux for global state store, Redux-thunk middleware.
- Axios library to communicate with server, uses token authentication. 
## Demo
![demo](https://github.com/MaheshBodas/chinook-poc-ui-master/blob/master/blob/Dashboard.png)

## Build Setup

``` bash

# Clone project
git clone https://github.com/MaheshBodas/chinook-poc-ui-master.git

# Install dependencies
npm install

# serve with hot reload at localhost:9528
serve -s build

# build for production with minification
react-scripts build

# Running unit test cases
npm run test

```


## License
[MIT](https://github.com/coreui/coreui-free-react-admin-template/blob/master/LICENSE) license.
[MIT](https://github.com/MaheshBodas/chinook-poc-ui-master/LICENSE) license.

Copyright (c) 2018 creativeLabs Łukasz Holeczek.
Copyright ReactJS PoC (c) 2018-present Mahesh Bodas
