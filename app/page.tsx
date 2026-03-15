"use client";
import { useState } from "react";

export default function Home() {

  const [error, setError] = useState("");
  const [code, setCode] = useState("");
  const [result, setResult] = useState<any>(null);
  async function investigateBug() {

  const res = await fetch("/api/analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      error,
      code
    })
  });

  const data = await res.json();

  setResult(data);
}
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-10">

      <h1 className="text-4xl font-bold mb-8">
        AI Bug Investigation Agent
      </h1>

      <div className="w-full max-w-2xl space-y-4">

        <textarea
          placeholder="Paste the error message..."
          className="w-full p-3 rounded bg-gray-800"
          rows={3}
          value={error}
          onChange={(e) => setError(e.target.value)}
        />

        <textarea
          placeholder="Paste the code snippet..."
          className="w-full p-3 rounded bg-gray-800"
          rows={6}
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <button onClick={investigateBug} className="bg-blue-600 px-6 py-3 rounded hover:bg-blue-700"> 
        Investigate Bug 
        </button>
        {result && (
  <div className="mt-8 w-full max-w-2xl bg-gray-800 p-6 rounded">

    <h2 className="text-xl font-bold mb-3">Bug Analysis</h2>

    <p className="mb-2"> 
      <strong>Language:</strong> {result.language} </p>
      
    <p className="mb-4">
      <strong>Bug Type:</strong> {result.bugType} </p>

    <p className="mb-3">
      <strong>Explanation:</strong> {result.explanation} </p>

    <p className="mb-3"> 
      <strong>Root Causes:</strong> </p>
    
    <ul className="list-disc ml-6">
      {result.rootCause?.map((cause:any, i:number) => (
        <li key={i}>{cause}</li>
        ))}
</ul>

<p className="mt-3 mb-2">
<strong>Suggested Fix:</strong> </p>

<ul className="list-disc ml-6">
{result.fix?.map((f:any, i:number) => (
  <li key={i}>{f}</li>
))}
</ul>
{result.correctedCode && (
  <> 
  <p className="mt-5 mb-2"><strong>Corrected Code:</strong></p>
  <pre className="bg-gray-900 p-4 rounded text-sm overflow-x-auto">
    <code>{result.correctedCode}</code> </pre> 
    </> 
  )}

  </div>
)}
      </div>

    </div>
  ); }