# Installation

To use teemsly authorization you can install by `npm` or `yarn`
Intallation using `npm`

```
npm i teemsly-auth
```

Intallation using `yarn`

```
yarn add teemsly-auth
```

# Teemsly Authorization and Protected Router

Authorization to protect component or element base on permission or role,and protected router base on authorities.

## Authorization

There two arguments to use this function, first is `authorities` and the second one is `hasAnyAuthotities`. The first agrument is define from the user role or permission, and second argument define for the permission that allowed.

```
import hasAnyAuthority from "teemsly-auth"

const isAuthorization = hasAnyAuthority(["ADMIN"], ["ADMIN", "USER"]);

console.log(isAuthorization) // return to true
```

> In the code above will return true, because the user has authorization as `ADMIN` and on the second argument has defined `ADMIN` as the default authorization.

## Protected Router Using React Router

In this protected router use `react-router-dom` as router. for example let's see the example below.

```
import { PrivateRouteReact, PrivateRouteReactContext } from "teemsly-auth"

const Home = () => {
  return (
    <div>
      Home Page
    </div>
  );
};

const Admin = () => {
  return (
    <div>
      Admin Page
    </div>)
};

<PrivateRouteReactContext.Provider value={{
        authorities: ["ADMIN"],
        unAuthorizedUrl: "/403",
        loginUrl: "/login-2",
        isAuthenticated: false,
      }}>

  <BrowserRouter>
    <Switch>
      <PrivateRouteReact path="/home" component={Home} hasAuthorities={["USER", "ADMIN"]} />
      <PrivateRouteReact path="/admin" component={Admin} hasAuthorities={["ADMIN"]}/>
      <Route path="/login" component={Login} />
    </Switch>
  </BrowserRouter>

</PrivateRouteReactContext.Provider>
```
