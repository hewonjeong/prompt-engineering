import { getCompletion } from './ai.js'

const text = `In a charming village, siblings Jack and Jill set out on a quest to fetch water from a hilltop well. As they climbed, singing joyfully, misfortune struck—Jack tripped on a stone and tumbled down the hill, with Jill following suit. Though slightly battered, the pair returned home to comforting embraces. Despite the mishap, their adventurous spirits remained undimmed, and they continued exploring with delight.`

const prompt = `
Your task is to perform the following actions:
1 - Summarize the following text delimited by triple quotes with 1 sentence.
2 - Translate the summary into Korean.
3 - List each name in the Korean summary.
4 - Output a json object that contains the following keys: koreanSummary, names.

Respond in JSON format.
"""${text}"""
`

const response = await getCompletion(prompt)
console.log(response)
