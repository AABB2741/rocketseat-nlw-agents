import { useQuery } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

type GetRoomsApiResponse = {
	id: string;
	name: string;
}[];

function RouteComponent() {
	const { data, isLoading } = useQuery({
		queryKey: ["rooms"],
		queryFn: async () => {
			const response = await fetch("http://localhost:3333/rooms");

			const result: GetRoomsApiResponse = await response.json();
			return result;
		},
	});

	return (
		<div>
			<div>Create room</div>
			{isLoading && <p>Carregando...</p>}
			<div className="flex flex-col gap-1">
				{data?.map((room) => (
					<Link key={room.id} to="/room/$id" params={{ id: room.id }}>
						{room.name}
					</Link>
				))}
			</div>
		</div>
	);
}
