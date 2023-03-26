const config = require('../config')
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: config.openai_token
});
const openai = new OpenAIApi(configuration);
module.exports = {
    ask: async function (prompt) {
        const response = await openai.createCompletion({
            model: "text-davinci-002",
            prompt,
            temperature: 0.7,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });
        const answer = response.data.choices[0].text;
        return answer
    },
    color: async function (prompt) {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt,
            temperature: 0,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            stop: [";"],
        });
        const answer = response.data.choices[0].text;
        return answer
    },
    image: async function (prompt) {
        const response = await openai.createImage({
            prompt,
            n:1,
            size: `1024x1024`,
            response_format: 'url'
        })
        const answer = response.data.data[0].url;
        return answer
    }
}

