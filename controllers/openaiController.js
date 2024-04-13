const openai = require("../config/openaiConfig");
const fieldsArray = require("../Fields.json");
const mongoRecords1 = require("../mongoRecords1.json");

const generateMeta = async (req, res) => {
  const { userInput } = req.body;
  const openAiResponse = await openai.chat.completions.create({
    model: "gpt-4-turbo",
    temperature: 0.7,
    max_tokens: 4095,
    response_format: { type: "json_object" },
    messages: [
      {
        role: "system",
        content: "You are a popular search engine and mongoDB expert.",
      },
      {
        role: "user",
        content: `You are given array of objects (fieldsArray) - ${JSON.stringify(
          fieldsArray
        )}
        Each object has multiple keys and corresponding values. Out of them uiFieldName, filterFieldName and rootFieldName keys are my fields of interest.
        You are also given user entered search text (userInput) - ${userInput}
        give me the objects in fieldsArray whose uiFieldName or filterFieldName field values are present in userInput or best matching with any words of userInput. 
        give uiFieldName, filterFieldName, rootFieldName of matched objects as response. give response as json object with key matchedFields
        
        We have a mongoDB database where rootFieldName is actual db field for the corresponding object.
        This is sample data of our mongoDB database - ${JSON.stringify(
          mongoRecords1
        )}
        I want to construct a chart for the userInput search text. But I need to query required data from our mongoDB database
        you need to construct mongoDB query with matched rootFieldName fields and their values (extracted from userInput).
        construct query in such a way that it gives relevant information for constructing a chart based on userInput search text.
        give me the db query along with above response as json object with key mongoDBQuery.
        
        userInput might not be fully complete.
        give me upto 2 autocomplete predictions for userInput and corresponding matchedFields and corresponding mongoDBQuery.
        give them along with above response as json object with key autocomplete.
        `,
      },
    ],
  });
  res.status(200).json({
    message: JSON.parse(openAiResponse.choices[0].message.content),
  });
};

module.exports = { generateMeta };
