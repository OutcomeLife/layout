
# Generic Layout made with react, react-bootstrap and Keycloak authentication 
This is a generic layout which has a standard navbar at the top. It has sideabr on the left which has show/hide feature and content at the right. It has a static footer at the bottom.
This project is also integrated with keycloak integration.

## Getting Started
It is really easy to get started. Here are some instructions to quickely get you started.

### Prerequisites
    You need to have following to use this package
    - react
    - react-bootstrap

### Installing

Go to project folder and run 
``` npm install $path_to_lcoal_package ```
#### Avaiable Components

 ``` 
 <div class="theme_class">
        <Header logo{some logo} user{user object}>
            throw some header cotent
        </Header>

        <Body>
            <Sidebar>
                some sidebar content
            </Sidebar>
            <Content >
                content
            </Content>

            <Footer>
                footer content
            </Footer>
        </Body>
        </div>
```
``` 
user = {
    id: 'someid'
    name: "username"
    image:"some_image"
} 
```
### Built With
* [Create React App](https://github.com/facebookincubator/create-react-app) - Widely used react starter kit
* [react-bootstrap](https://react-bootstrap.github.io/) - Widely used css framework for react app
* [Keycloak](http://www.keycloak.org/) - Most used open source Identity and Access Management

### Authors
* Prakash Kandel
* Nischal Gautam

### License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details