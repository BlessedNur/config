import React from "react";

const getData = async (id) => {
  const res = await fetch(
    `https://pixabay.com/api/?key=43226508-324f6e5b3bf72ba17e8f9d97e&id=${id}`
  );
  if (!res.ok) {
    console.log("fetching error");
  } else {
    return res.json();
  }
};

async function Page({ params }) {
  const id = params.id;
  const data = await getData(id)
  const items = data.hits;
  return <div>{id}</div>;
}

export default Page;
