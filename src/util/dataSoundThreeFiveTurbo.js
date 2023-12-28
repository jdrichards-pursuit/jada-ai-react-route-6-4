import { fetchSound } from "./dataSound";

export async function fetchData(input) {
  console.log("I hit the new function", input);
  const systemMessage = {
    role: "system",
    content: "Reply with no more than two sentences."
  };

  const resp = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        systemMessage,
        { role: "user", content: `The question is: ${input.toLowerCase()}` }
      ]
    })
  });

  if (!resp.ok) {
    throw new Error({ message: "Unable to Fetch Data", status: 422 });
  }

  const data = await resp.json();
  console.log("data", data.choices[0].message.content);

  let reply = data.choices[0].message.content;
  reply = reply.replace(/^[^a-zA-Z]+/, "");
  reply = `${reply[0].toUpperCase()}${reply.slice(1).toLowerCase()}`;

  let sound = await fetchSound(reply);
  return { input, reply, sound };
}
