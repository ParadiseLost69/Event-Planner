"use client";

export default async function Page(props) {
  const { id } = props.params;
  const { event } = await getEvent(id);
  console.log(event);
  //   const event = await getEvent(params.id);

  return (
    <div>
      <h1>{event.title}</h1>
      <p>{event.description}</p>
    </div>
  );
}

async function getEvent(id) {
  const data = await fetch(`http://localhost:3000/api/event/${id}`, {
    cache: "no-store",
  });

  return data.json();
}
