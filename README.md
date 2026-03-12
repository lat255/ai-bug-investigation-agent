🤖 AI Bug Investigation Agent

An AI-powered debugging assistant that analyzes programming errors, detects the programming language, classifies bug types, identifies root causes, and suggests fixes using Large Language Models.

This tool helps developers quickly understand and resolve bugs by providing structured debugging insights.

---

# 🚀 Features

* 🔍 **Programming Language Detection**
  Automatically detects the programming language from the provided code snippet.

* 🐞 **Bug Type Classification**
  Categorizes errors such as:

  * Runtime Error
  * Syntax Error
  * API Error
  * Dependency Error
  * Logic Error

* 🧠 **AI-Powered Bug Explanation**
  Provides a clear explanation of the error.

* ⚠️ **Root Cause Analysis**
  Identifies possible reasons behind the bug.

* 🛠 **Suggested Fixes**
  Recommends actionable solutions to resolve the issue.

* 💡 **Corrected Code Generation**
  Generates a corrected version of the problematic code.

* ⏳ **Loading State UI**
  Displays a loading state while the AI analyzes the bug.

---

# 🖥️ Example

### Input

Error

```
TypeError: Cannot read properties of undefined (reading 'map')
```

Code

```javascript
const data = response.items;
data.map(item => console.log(item));
```

### Output

```
Language: JavaScript
Bug Type: Runtime Error

Explanation:
The error occurs because map() is being called on an undefined value.

Root Causes:
• response.items may not exist  
• API response returned unexpected structure

Suggested Fix:
• Validate API response before accessing items  
• Use optional chaining

Corrected Code:

const data = response?.items || [];
data.map(item => console.log(item));
```

---

# 🏗️ Architecture

```
User Input (Error + Code)
        ↓
Next.js Frontend
        ↓
API Route (/api/analyze)
        ↓
Groq LLM API
        ↓
Structured JSON Response
        ↓
UI Displays Bug Analysis
```

---

# 🛠️ Tech Stack

Frontend

* Next.js
* React
* Tailwind CSS

Backend

* Next.js API Routes
* Node.js

AI Integration

* Groq API
* Llama 3.1 LLM

---

# 📂 Project Structure

```
ai-bug-investigation-agent
│
├── app
│   ├── page.tsx
│   └── api
│       └── analyze
│           └── route.ts
│
├── public
├── package.json
└── README.md
```

---

# ⚙️ Installation

### 1. Clone the Repository

```
git clone https://github.com/lat255/ai-bug-investigation-agent.git
```

```
cd ai-bug-investigation-agent
```

---

### 2. Install Dependencies

```
npm install
```

---

### 3. Create Environment Variables

Create a file:

```
.env.local
```

Add your Groq API key:

```
GROQ_API_KEY=your_api_key_here
```

---

### 4. Run the Development Server

```
npm run dev
```

Open in browser:

```
http://localhost:3000
```

---

# 🧪 Example Test Cases

You can test the agent using errors like:

### JavaScript Runtime Error

```
TypeError: Cannot read properties of undefined (reading 'map')
```

### Python Index Error

```
IndexError: list index out of range
```

### Node.js Dependency Error

```
Error: Cannot find module 'express'
```

### SQL Syntax Error

```
You have an error in your SQL syntax
```

---

# 🎯 Use Cases

* Learning debugging techniques
* Understanding programming errors faster
* AI-assisted development
* Educational tool for beginner developers

---

# 🔮 Future Improvements

* GitHub repository bug scanning
* Syntax highlighted corrected code
* Integration with StackOverflow references

---
