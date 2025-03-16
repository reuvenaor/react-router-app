import { Link } from "@tanstack/react-router";

import ClerkHeader from "../integrations/clerk/header-user";

import TanchatHeader from "../integrations/tanchat/header-user";

export default function Header() {
	return (
		<header className="p-2 flex gap-2 bg-white text-black justify-between">
			<nav className="flex flex-row">
				<div className="px-2 font-bold">
					<Link to="/">Home</Link>
				</div>

				<div className="px-2 font-bold">
					<Link to="/demo/clerk">Clerk</Link>
				</div>

				<div className="px-2 font-bold">
					<Link to="/demo/sentry/testing">Sentry</Link>
				</div>

				<div className="px-2 font-bold">
					<Link to="/demo/start/server-funcs">Start - Server Functions</Link>
				</div>

				<div className="px-2 font-bold">
					<Link to="/demo/start/api-request">Start - API Request</Link>
				</div>

				<div className="px-2 font-bold">
					<Link to="/demo/store">Store</Link>
				</div>

				<div className="px-2 font-bold">
					<Link to="/demo/tanstack-query">TanStack Query</Link>
				</div>

				<div className="px-2 font-bold">
					<Link to="/example/chat">Chat</Link>
				</div>

				<div className="px-2 font-bold">
					<Link to="/example/guitars">Guitar Demo</Link>
				</div>
			</nav>

			<div>
				<ClerkHeader />

				<TanchatHeader />
			</div>
		</header>
	);
}
