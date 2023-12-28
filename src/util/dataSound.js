export async function fetchData(input) {
  const resp = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: `Reply with no more than two sentences. The question is: ${input.toLowerCase()}`,
      max_tokens: 150
    })
  });

  if (!resp.ok) {
    throw new Error({ message: "Unable to Fetch Data", status: 422 });
  }

  const data = await resp.json();

  let reply = data.choices[0].text;
  reply = reply.replace(/^[^a-zA-Z]+/, "");
  reply = `${reply[0].toUpperCase()}${reply.slice(1).toLowerCase()}`;

  let sound = await fetchSound(reply);
  return { input, reply, sound };
}

export async function fetchSound(input) {
  const sound = await fetch(`https://api.openai.com/v1/audio/speech`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "tts-1",
      input: input,
      voice: "alloy"
    })
  });
  if (!sound.ok) {
    throw new Error({ message: "Unable to get sound", status: 422 });
  }

  const soundData = await sound.blob();

  return URL.createObjectURL(soundData);
}
