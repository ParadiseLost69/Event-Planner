import { error } from "console";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const { events } = await getEvents();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>events</h1>
        <div className=" m-6 p-4 text-white">
          {events.map((event) => {
            return (
              <div key={event._id}>
                <h2>{event.title}</h2>
                <p>{event.description}</p>
                <Link href={`/event/${String(event._id)}`}>See more</Link>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

const getEvents = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/events", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch Events");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};
