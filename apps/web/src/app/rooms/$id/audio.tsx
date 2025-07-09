import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/rooms/$id/audio')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/rooms/audio"!</div>
}
