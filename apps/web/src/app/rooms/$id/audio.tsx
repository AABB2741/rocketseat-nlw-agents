import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/rooms/$id/audio")({
	component: RouteComponent,
});

const isRecordingSupported =
	!!navigator.mediaDevices &&
	typeof navigator.mediaDevices.getUserMedia === "function" &&
	typeof window.MediaRecorder === "function";

function RouteComponent() {
	const params = Route.useParams();

	const [isRecording, setIsRecording] = useState(false);
	const recorderRef = useRef<MediaRecorder | null>(null);

	function stopRecording() {
		setIsRecording(false);

		if (recorderRef.current && recorderRef.current.state !== "inactive") {
			recorderRef.current?.stop();
		}
	}

	async function uploadAudio(blob: Blob) {
		const formData = new FormData();

		formData.append("audio", blob, `audio.webm`);

		const response = await fetch(
			`http://localhost:3333/rooms/${params.id}/audio`,
			{
				method: "POST",
				body: formData,
			},
		);

		const result = await response.json();

		console.log({ result });
	}

	async function startRecording() {
		if (!isRecordingSupported) {
			alert("Gravação de áudio não é suportada neste navegador.");
			return;
		}

		setIsRecording(true);

		const audio = await navigator.mediaDevices.getUserMedia({
			audio: {
				echoCancellation: true,
				noiseSuppression: true,
				sampleRate: 44_100,
			},
		});

		recorderRef.current = new MediaRecorder(audio, {
			mimeType: "audio/webm",
			audioBitsPerSecond: 64_000,
		});

		recorderRef.current.ondataavailable = (event) => {
			if (event.data.size > 0) {
				uploadAudio(event.data);
			}
		};

		recorderRef.current.onstart = () => {
			console.log("Gravação iniciada");
		};

		recorderRef.current.onstop = () => {
			console.log("Gravação parada");
		};

		recorderRef.current.start();
	}

	return (
		<div className="flex h-screen flex-col items-center justify-center gap-3">
			{isRecording ? (
				<Button onClick={stopRecording}>Pausar gravação</Button>
			) : (
				<Button onClick={startRecording}>Gravar áudio</Button>
			)}
			{isRecording ? <p>Gravando...</p> : <p>Pausado</p>}
		</div>
	);
}
