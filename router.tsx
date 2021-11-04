import { Suspense, Fragment, lazy } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import AccentHeaderLayout from "src/layouts/AccentHeaderLayout";
import BaseLayout from "src/layouts/BaseLayout";
import Overview from "src/content/landing";
import SuspenseLoader from "src/components/SuspenseLoader";
import Authenticated from "src/components/Authenticated";

type Routes = {
  exact?: boolean;
  path?: string | string[];
  guard?: any;
  layout?: any;
  component?: any;
  routes?: Routes;
}[];

export const renderRoutes = (routes: Routes = []): JSX.Element => (
  <Suspense fallback={<SuspenseLoader />}>
    <Switch>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <Guard>
                <Layout>
                  {route.routes ? (
                    renderRoutes(route.routes)
                  ) : (
                    <Component {...props} />
                  )}
                </Layout>
              </Guard>
            )}
          />
        );
      })}
    </Switch>
  </Suspense>
);

const routes: Routes = [
  {
    path: "/dashboard",
    guard: Authenticated,
    layout: AccentHeaderLayout,
    routes: [
      {
        exact: true,
        path: "/dashboard",
        component: lazy(() => import("src/content/dashboard")),
      },
      {
        component: () => <Redirect to="/status/404" />,
      },
    ],
  },
  {
    path: "/events",
    guard: Authenticated,
    layout: AccentHeaderLayout,
    routes: [
      {
        exact: true,
        path: "/events",
        component: lazy(() => import("src/content/events")),
      },
      {
        component: () => <Redirect to="/status/404" />,
      },
    ],
  },
  {
    path: "/dailogs",
    guard: Authenticated,
    layout: AccentHeaderLayout,
    routes: [
      {
        exact: true,
        path: "/dailogs",
        component: lazy(() => import("src/content/Dialogs")),
      },
      {
        component: () => <Redirect to="/status/404" />,
      },
    ],
  },

  {
    path: "/projects",
    guard: Authenticated,
    layout: AccentHeaderLayout,
    routes: [
      {
        exact: true,
        path: "/projects",
        component: lazy(() => import("src/content/projects")),
      },
      {
        component: () => <Redirect to="/status/404" />,
      },
    ],
  },
  {
    path: "/messaging",
    guard: Authenticated,
    layout: AccentHeaderLayout,
    routes: [
      {
        exact: true,
        path: "/messaging",
        component: lazy(() => import("src/content/messaging")),
      },
      {
        component: () => <Redirect to="/status/404" />,
      },
    ],
  },
  {
    exact: true,
    path: "/status/404",
    component: lazy(() => import("src/content/pages/Status/Status404")),
  },
  {
    exact: true,
    path: "/status/500",
    component: lazy(() => import("src/content/pages/Status/Status500")),
  },
  {
    exact: true,
    path: "/status/coming-soon",
    component: lazy(() => import("src/content/pages/Status/ComingSoon")),
  },
  {
    exact: true,
    path: "/status/maintenance",
    component: lazy(() => import("src/content/pages/Status/Maintenance")),
  },
  {
    path: "*",
    layout: BaseLayout,
    routes: [
      {
        exact: true,
        path: "/",
        component: Overview,
      },
      {
        exact: true,
        path: "/course/:id",
        component: lazy(() => import("src/container/course")),
      },
      {
        exact: true,
        guard: Authenticated,
        path: "/event/:id",
        component: lazy(() => import("src/container/avconference")),
      },
      {
        component: () => <Redirect to="/" />,
      },
    ],
  },
];

export default routes;
