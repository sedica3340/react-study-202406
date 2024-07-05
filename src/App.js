import React from "react";
import Home from "./components/RouteExample/pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RouteExample/layout/RootLayout";
import ErrorPage from "./components/RouteExample/pages/ErrorPage";
import Events, {
    loader as eventListLoader,
} from "./components/RouteExample/pages/Events";
import EventDetail, {
    loader as eventDetailLoader,
    action as deleteAction,
} from "./components/RouteExample/pages/EventDetail";
import EventLayout from "./components/RouteExample/layout/EventLayout";
import NewEvent from "./components/RouteExample/pages/NewEvent";
import EditPage from "./components/RouteExample/pages/EditPage";
import { action as manipulateAction } from "./components/RouteExample/components/EventForm";

// 라우터 설정
const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            {
                path: "events",
                element: <EventLayout />,
                children: [
                    {
                        index: true,
                        element: <Events />,
                        // loader: eventListLoader,
                    },
                    {
                        path: ":eventId",
                        loader: eventDetailLoader,
                        id: "event-detail",
                        children: [
                            {
                                index: true,
                                element: <EventDetail />,
                                action: deleteAction,
                            },

                            {
                                path: "edit",
                                element: <EditPage />,
                                action: manipulateAction,
                            },
                        ],
                    },
                    {
                        path: "new",
                        element: <NewEvent />,
                        action: manipulateAction,
                    },
                ],
            },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
