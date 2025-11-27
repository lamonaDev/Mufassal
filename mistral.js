"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
import { Mistral } from "@mistralai/mistralai";
var apiKey = process.env.MISTRAL_API_KEY;
var client = new Mistral({ apiKey: apiKey });
var chatResponse = await client.chat.complete({
    model: 'mistral-medium-latest',
    messages: [{ role: 'user', content: 'What is the best French cheese?' }],
});
console.log(chatResponse);
