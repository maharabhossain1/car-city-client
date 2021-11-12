import React from "react";
import { Nav } from "react-bootstrap";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import DashboardHome from "../DashaboardHome/DashboardHome";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageAllOrder from "../ManageAllOrder/ManageAllOrder";
import MyOrders from "../MyOrders/MyOrders";
import Review from "../Review/Review";

export default function Dashboard() {
  let { path, url } = useRouteMatch();
  const { admin } = useAuth();
  return (
    <div>
      <div>
        <Nav fill variant="tabs" defaultActiveKey={`${url}`}>
          <Nav.Item>
            <Nav.Link className="" as={Link} to={`${url}`}>
              Dashboard
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="" as={Link} to={`${url}/myorders`}>
              My Orders
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="" as={Link} to={`${url}/review`}>
              Reviews
            </Nav.Link>
          </Nav.Item>
          {admin && (
            <>
              <Nav.Item>
                <Nav.Link className="" as={Link} to={`${url}/makeadmin`}>
                  Make Admin
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="" as={Link} to={`${url}/manageorders`}>
                  Manage Orders
                </Nav.Link>
              </Nav.Item>
            </>
          )}
        </Nav>
        <div>
          <Switch>
            <Route exact path={path}>
              <DashboardHome />
            </Route>
            <Route path={`${path}/makeadmin`}>
              <MakeAdmin />
            </Route>
            <Route path={`${path}/myorders`}>
              <MyOrders />
            </Route>
            <Route path={`${path}/manageorders`}>
              <ManageAllOrder />
            </Route>
            <Route path={`${path}/review`}>
              <Review />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}
