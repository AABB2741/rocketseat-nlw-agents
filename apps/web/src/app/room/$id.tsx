import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/room/$id")({
	component: RouteComponent,
});

function RouteComponent() {
	const params = Route.useParams();

	return <div>Room details {JSON.stringify(params)}</div>;
}
