const openai = require("../config/openaiConfig");

const generateMeta = async (req, res) => {
  const { title } = req.body;

  const openAiResponse = await openai.chat.completions.create({
    model: "gpt-4-turbo",
    temperature: 0.7,
    messages: [
      {
        role: "user",
        content: `Come up with a description for a YouTube video called ${title}`,
      },
    ],
  });

  console.log(openAiResponse.choices[0].message.content);

  res.status(200).json({
    resp: openAiResponse.choices[0].message.content,
  });
};

module.exports = { generateMeta };
