import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../../router';
import { authCheckSelector, authLoadingSelector } from '../../store/Auth/selectors';
import { useActions } from '../../hooks/useActions';
import { PrivateRoutes, PublicRoutes } from '../../constants/routeNames';

const Router: React.FC = () => {
  const { checkAuth } = useActions();
  const isAuth = useSelector(authCheckSelector);
  const isLoading = useSelector(authLoadingSelector);

  useEffect(() => {
      checkAuth();
  }, []);

  // if (isLoading) {
  //   return <div>Загрузка...</div>
  // }

  return(
    <BrowserRouter>
      <Switch>
        {
          isAuth
          ? privateRoutes.map((route, index) => <Route key={index} {...route}/>)
          : publicRoutes.map((route, index) => <Route key={index} {...route}/>)
        }
        <Route path="/">
          {
            isAuth
            ? <Redirect to={PrivateRoutes.PROFILE}/>
            : <Redirect to={PublicRoutes.LOGIN}/>
          }
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;