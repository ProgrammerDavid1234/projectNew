✅ Step-by-Step: React + Supabase Setup (Client-side only)
🧱 1. Create a Supabase Project
Go to https://supabase.com

Click "Start Project" > sign in.

Create a new project:

Choose a name (e.g., hand-recognition)

Select a region

Set a strong password (you'll use it for the database)

Wait for setup (~1-2 mins)

🔐 2. Get API Keys
In your Supabase project, go to Project Settings > API

Copy:

Project URL

Anon public key

⚛️ 3. Set Up in React (Vite)
Inside the React project folder:

npm install @supabase/supabase-js
Then, create a supabaseClient.js file in the src/ folder:

js
Copy
// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://your-project-url.supabase.co'
const supabaseKey = 'your-anon-key'
export const supabase = createClient(supabaseUrl, supabaseKey)
Replace your-project-url and your-anon-key with the actual values from step 2.

👤 4. Basic Usage Example: Sign Up Users

// src/App.jsx
import { useState } from 'react'
import { supabase } from './supabaseClient'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignup = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password
    })
    if (error) console.error('Signup error:', error.message)
    else console.log('Signed up:', data)
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" type="password" />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  )
}
🛠 5. Optional: Create a Table for Data
If you want to store hand recognition data (e.g., name, result, timestamp):

Go to:

Table Editor > Create Table

Table name: gestures

Columns:

id: UUID, primary key

name: text

result: text

created_at: timestamp (default now())

Then from React, you can insert:

await supabase
  .from('gestures')
  .insert([{ name: 'Chi', result: 'Thumbs up' }])






// src/App.jsx
import { useState } from 'react'
import { supabase } from './supabaseClient'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignup = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password
    })
    if (error) console.error('Signup error:', error.message)
    else console.log('Signed up:', data)
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" type="password" />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  )
}
export default App; // 👈 VERY IMPORTANT
# projectNew
