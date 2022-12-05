import { Link, Outlet } from '@remix-run/react';
import { CheckOutline, Home } from '~/icons';
import moduleStyles from '~/styles/routes/modules.css';
import contentStyles from '~/styles/routes/module-content.css';

export function links() {
  return [
    { rel: 'stylesheet', href: moduleStyles },
    { rel: 'stylesheet', href: contentStyles }
  ];
}

export default function Modules() {
  return (
    <div className="layout">
      <div className="menu">
        <Link className="menu-link" to="/" prefetch="intent">
          <span className="menu-icon">
            <Home />
          </span>

          <p className="menu-title">Building with Remix and Iot-App-Kit</p>
        </Link>
      </div>

      <div className="sidebar">
        <h3>Introduction</h3>

        <hr />

        <ul className="sidebar-list">
          <li>
            <Link
              className="sidebar-link"
              to="/modules/introduction/scenario"
              prefetch="intent"
            >
              <CheckOutline />
              Prerequisites
            </Link>
          </li>

          <li>
            <Link
              className="sidebar-link"
              to="/modules/introduction/scenario"
              prefetch="intent"
            >
              <CheckOutline />
              Scenario
            </Link>
          </li>

          <li>
            <Link
              className="sidebar-link"
              to="/modules/introduction/scenario"
              prefetch="intent"
            >
              <CheckOutline />
              Defining a Tech Stack
            </Link>
          </li>
        </ul>

        <h3>Remix Basics</h3>

        <hr />

        <ul className="sidebar-list">
          <li>
            <Link
              className="sidebar-link"
              to="/modules/introduction/scenario"
              prefetch="intent"
            >
              <CheckOutline />
              What is a PEPSA?
            </Link>
          </li>

          <li>
            <Link
              className="sidebar-link"
              to="/modules/introduction/scenario"
              prefetch="intent"
            >
              <CheckOutline />
              Why Remix?
            </Link>
          </li>

          <li>
            <Link
              className="sidebar-link"
              to="/modules/introduction/scenario"
              prefetch="intent"
            >
              <CheckOutline />
              Routing
            </Link>
          </li>

          <li>
            <Link
              className="sidebar-link"
              to="/modules/introduction/scenario"
              prefetch="intent"
            >
              <CheckOutline />
              Data Fetching
            </Link>
          </li>
          <li>
            <Link
              className="sidebar-link"
              to="/modules/introduction/scenario"
              prefetch="intent"
            >
              <CheckOutline />
              Data Mutation
            </Link>
          </li>
        </ul>
      </div>

      <div className="content">
        <div className="padding">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
