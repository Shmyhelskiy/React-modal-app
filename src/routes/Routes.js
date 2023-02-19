import React from "react";
import Nav from "../components/Navigation/Nav";
import { Route, Routes as ReactRouterRoutes } from "react-router-dom";
import HomePage from "../components/Pages/Home/Home.page";
import PublicationsPage from "../components/Pages/Publications/Publications.page";
import PhotoPage from "../components/Pages/Photo/Photo.page";
import ContactsPage from "../components/Pages/Contacts/Contacts.page";
import Notfound from "../components/Pages/Notfound/Notfound";
import SingleContact from "../components/Pages/Contacts/SingleContact/SingleContact";
import { contacts } from "../components/Pages/Contacts/Contacts.page";

contacts.forEach((item, index) => (item.id = index));

export const appRoutes = {
  home: {
    id: 1,
    path: "/",
    element: <HomePage />,
  },
  publications: {
    id: 2,
    path: "/publications",
    element: <PublicationsPage />,
  },
  photo: {
    id: 3,
    path: "/photo",
    element: <PhotoPage />,
  },
  contacts: {
    id: 4,
    path: "/contacts",
    element: <ContactsPage />,
  },
};

const Routes = () => {
  return (
    <div>
      <Nav />
      <ReactRouterRoutes>
        {Object.values(appRoutes).map(({ id, path, element }) => (
          <Route key={id} path={path} element={element} />
        ))}
        <Route path="*" element={<Notfound />} />
        <Route
          path="/contacts/:userId"
          element={<SingleContact cardData={contacts} />}
        />
      </ReactRouterRoutes>
    </div>
  );
};

export default Routes;
