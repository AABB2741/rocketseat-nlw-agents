import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/room/")({
	component: RouteComponent,
	beforeLoad: () => {
		throw redirect({
			to: "/",
			replace: true,
		});
	},
});

function RouteComponent() {
	return <div>Hello "/room"!</div>;
}
