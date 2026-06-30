import { useState } from "react";

const App = () => {

  const [responses, setResponses] = useState([]);
  const [personality, setPersonality] = useState("Neutral");
  const [completion, setCompletion] = useState("");
  const [tone, setTone] = useState("Neutral");
  const API_KEY = import.meta.env.VITE_API_KEY;

  const detectTone = (text) => {
    const t = text.toLowerCase();

    if (/(fail|failed|sad|down|depressed|cry|loss|losing|lost|crying|upset|hurt)/.test(t)) return 'Sad'
    if (/(happy|excited|great|awesome|won|success|yay|love|amazing|fantastic|thrilled)/.test(t)) return 'Happy'
    if (/(tired|stress|stressed|burnout|anxious|overwhelmed|exhausted|drained|worried)/.test(t)) return 'Low'
    if (/(angry|frustrated|fed up|annoyed|mad|furious)/.test(t)) return 'Angry'
    return 'Neutral'
  }

  const PERSONALITY_PROMPTS = {
    therapist: `You are a calm, empathetic therapist-style assistant.
    Use gentle, validating language. Ask one supportive follow-up question.
    Avoid emojis unless the user uses them first.
    Speak slowly and thoughtfully. Keep replies under 60 words.`,

    coach: `You are a high-energy, direct performance coach.
    Be motivating and action-oriented. Cut straight to the point.
    Use 1 emoji max. Short punchy sentences. Keep replies under 50 words.`,

    buddy: `You are a warm, casual close friend.
    Be natural, funny, and supportive. Light humor is encouraged.
    Use 1–2 emojis. Avoid formal language. Keep replies under 50 words.`,
  }

  const MOOD_CONTEXT = {
    sad: 'The user seems sad or disappointed. Be extra gentle and validating.',
    happy: 'The user is excited or happy. Match their energy without overdoing it.',
    low: 'The user is tired or stressed. Be calm, reduce pressure, suggest a small next step.',
    angry: 'The user seems frustrated or angry. Acknowledge first, avoid being dismissive.',
    neutral: 'The user is in a neutral state. Be clear, helpful, and warm.',
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let params = {
      "model": "openai/gpt-oss-20b",
      "messages": [
        {
          "role": "system",
          "content": PERSONALITY_PROMPTS[personality.toLowerCase()] + MOOD_CONTEXT[tone.toLowerCase()]
        },
        {
          "role": "user",
          "content": completion
        }
      ]
    }

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`
    }

    // make an api call
    fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(params)
    })
      .then(response => response.json())
      .then(data => {
        setResponses([
          ...responses,
          data.choices[0].message.content
        ])
      })
      .catch(error => console.log('LLM API CALL FAILED', error.message));

  }

  const handleCompletionChange = (value) => {
    setCompletion(value);
    setTone(detectTone(value));
  }

  return (
    <div className="p-2 m-2">
      <div className="text-3xl text-center">
        <h1>Vibe Coding Demo</h1>

        <h3 className="text-lg text-center font-light">
          Same Intelligence. Different Vibe.
        </h3>
      </div>

      <div>
        <label>
          <span className="font-semibold">Personality</span>
          <select className="border border-gray-300 p-2 mx-2"
            value={personality}
            onChange={e => setPersonality(e.target.value)}
          >
            <option value={"Therapist"}>Therapist</option>
            <option value={"Coach"}>Coach</option>
            <option value={"Buddy"}>Buddy</option>
            <option value={"Neutral"}>Neutral</option>
          </select>
        </label>
      </div>

      <br />

      <div>
        <p className="inline font-semibold">Background tone: </p>
        <input type="text"
          placeholder="Neutral"
          className="border border-gray-400 p-2 bg-gray-50"
          readOnly
          value={tone}
        />
      </div>

      <div>
        <form className="grid grid-cols-4" onSubmit={handleSubmit}>
          <input type="text"
            placeholder="Type for example: I failed my exam."
            className="col-start-1 col-end-4 border-2 border-blue-300 p-2 mt-4"
            value={completion}
            onChange={e => handleCompletionChange(e.target.value)}
          />

          <button className="col-start-4 col-end-5 p-2 mt-4 border border-gray-100 bg-amber-700 text-white">
            Send
          </button>
        </form>
      </div>

      <div>
        {
          responses.map((response, index) => (
            <p className="border border-gray-100 shadow-sm px-4 py-2 m-2" key={index}>{ response }</p>
          ))
        }
      </div>
    </div>
  )
}

export default App;