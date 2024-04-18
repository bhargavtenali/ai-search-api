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
        content: `You are a conversational search expert who understands user queries typed in Natural Language and converts them to MongoDb queries, 
          so that the required data can be extracted and presented to the user.
          In the User Request to the API, you will be given the Fields Array which is array of objects, where each object has multiple keys and corresponding values.
          Out of them uiFieldName, filterFieldName and rootFieldName keys are your fields of interest.
          You will also be given the query made by the user in Natural Language.
          We have a mongoDB database where the value of rootFieldName is one of fields
          You will also be given 1 record of our mongoDB database as sample data.
          In our backend, we use mongoose doing operations on our mongoDB Database.
          

          You have to perform three tasks 

          Task 1 - Understand the user query and try to match any keyword or phrase or substring to the uiFieldName and / or the filterFieldName from the Fields Array provided to you.
          Guidelines on how to send the response: Give me uiFieldName, filterFieldName, rootFieldName for every match as response. And for every match give the corresponding keyword or phrase or substring of user query against key matchedSubString in the response.
          give response as an array against key matchedFields in json object
          
          Task 2 - you need to construct Mongoose find query with matched rootFieldName fields and their values (extracted from user query).
          construct query in such a way that it gives relevant information for user query.
          Consider present date and time as reference while constructing find query for user queries where time duration is mentioned.
          Guidelines on how to send the response: give me the filter, projection, options for Mongoose find() query as json object against key mongoDBQuery.

          Task 3 - user query might not be fully complete.
          give me upto 5 autocomplete predictions for user query. perform task 1 and task 2 on each prediction and give me corresponding matchedFields and mongoDBQuery.
          Guidelines on how to send the response: give them as json object against key autocomplete.
          `,
      },
      {
        role: "user",
        content: `Fields Array - ${JSON.stringify(fieldsArray)}
        user query - ${JSON.stringify(userInput)}
        sample data of our mongoDB database - ${JSON.stringify(mongoRecords1)}
        `,
      },
    ],
  });
  res.status(200).json({
    message: JSON.parse(openAiResponse.choices[0].message.content),
  });
};

module.exports = { generateMeta };
