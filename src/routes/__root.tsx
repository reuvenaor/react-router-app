import {
	HeadContent,
	Outlet,
	Scripts,
	createRootRouteWithContext,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import Header from "../components/Header";

import ClerkProvider from "../integrations/clerk/provider";

import TanstackQueryLayout from "../integrations/tanstack-query/layout";

import appCss from "../styles.css?url";

import type { QueryClient } from "@tanstack/react-query";
interface MyRouterContext {
	queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "TanStack Start Starter",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),

	component: () => (
		<RootDocument>
			<ClerkProvider>
				<Header />

				<Outlet />
				<TanStackRouterDevtools />

				<TanstackQueryLayout />
			</ClerkProvider>
		</RootDocument>
	),
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body>
				{children}
				<Scripts />
			</body>
		</html>
	);
}
