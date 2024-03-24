import Intro from "./_components/Intro";
import Projects from "./_components/Projects";

export default async function Home() {
	// getData().then((data) => console.log("data", data));
	return (
		<main className="montserrat-regular bg-cover flex min-h-screen flex-col items-center">
			<div className="-z-10 fixed h-screen w-screen flex ">
				<div className="h-screen border-red-600 flex-1"></div>
				<div className="h-screen border-l-2 border-gray-200/60 flex-1 bg-gray-200/75"></div>
				<div className="h-screen border-l-2 border-gray-200/60 flex-1 bg-gray-200/50"></div>
				<div className="h-screen border-l-2 border-gray-200/60 flex-1 bg-gray-200/25"></div>
				<div className="h-screen border-l-2 border-gray-200/60 flex-1"></div>
			</div>
			{/* <main className="bg-my-pattern bg-cover flex min-h-screen flex-col items-center justify-between p-24"> */}
			<Intro />
			<Projects />
		</main>
	);
}
