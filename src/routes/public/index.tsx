import { lazy } from "react";

import { PublicLayout } from "~/components/layout/PublicLayout";

const AboutPage = lazy(() => import("~/components/page/public/About"));

export const publicRoutes = [
	{
		path: "",
		element: <PublicLayout />,
		children: [
			{
				path: "/",
				element: <AboutPage />,
			},
			{
				path: "/sign-up",
				element: <AboutPage />,
			},
		],
	},
];
