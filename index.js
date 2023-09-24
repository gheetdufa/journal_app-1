import { Configuration, OpenAiApi} from "openai";

const configuration = new Configuration({
  orginization:"org-gHosFOSEoulNGVnUoxGYkOEJ",
  apikey: "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",
})

const openai = new OpenAiApi(configuration);

const completion = await openai.createChatCompletion({
  mdoel: "gpt-3.5-turbo",
  messages: [
    {role: "therapist", content: "Hey! I need help!"}
  ]
})

console.log(completion.data.choices[0].message)