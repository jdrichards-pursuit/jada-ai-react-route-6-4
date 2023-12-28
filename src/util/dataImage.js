async function generateCardText(description) {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Generate name and description in separate object keys.Limit one name and one description. Limit description to 15 words. ${description}`
        }
      ],
      max_tokens: 150,
      temperature: 0.7 // more deterministic info
    })
  };

  const res = await fetch(
    "https://api.openai.com/v1/chat/completions",
    options
  );
  const data = await res.json();
  const description = await JSON.parse(data.choices[0].message.content);
  let image = await generateCardImage(description);
  return { description, image };
}

async function generateCardImage(textDescription) {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      prompt: textDescription.description,
      n: 1,
      size: "512x512"
    })
  };

  const res = await fetch(
    "https://api.openai.com/v1/images/generations",
    options
  );
  const json = await res.json();
  const choice = json.data[0].url;
  return choice;
}
