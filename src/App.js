import "./App.css";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import { APP_ROUTES } from "./App.routing";

export default function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            {Object.keys(APP_ROUTES).map((path) => (
              <li key={path + "-link"}>
                <Link to={path}>{APP_ROUTES[path].title}</Link>
              </li>
            ))}
          </ul>
        </nav> */}
        <Routes>
          {Object.keys(APP_ROUTES).map((path) => {
            const Component = APP_ROUTES[path].component;
            return <Route key={path} path={path} element={<Component />} />;
          })}
        </Routes>
      </div>
    </Router>
  );
}
