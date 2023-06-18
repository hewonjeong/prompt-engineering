import { getCompletion } from './ai.js'

const text = `You should express what you want a model to do by \ 
providing instructions that are as clear and \ 
specific as you can possibly make them. \ 
This will guide the model towards the desired output, \ 
and reduce the chances of receiving irrelevant \ 
or incorrect responses. Don't confuse writing a \ 
clear prompt with writing a short prompt. \ 
In many cases, longer prompts provide more clarity \ 
and context for the model, which can lead to \ 
more detailed and relevant outputs.`

const prompt = `Summarize the text delimited by triple quotes \ 
into a single sentence.

"""
${text}
"""
`

const response = await getCompletion(prompt)
console.log(response)
