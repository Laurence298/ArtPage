'use client'

import { useState } from 'react'

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [tags, setTags] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) return alert('Please select a GIF file.')

    setIsLoading(true)
    setMessage(null)

    const formData = new FormData()
    formData.append('file', file)
    formData.append('title', title)
    formData.append('description', description)
    formData.append('tags', tags)
    formData.append('uploader_id', '00000000-0000-0000-0000-000000000000') 

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    })

    const data = await res.json()
    setIsLoading(false)

    if (data.error) {
      setMessage(`Error: ${data.error}`)
    } else {
      setMessage(`✅ Uploaded successfully! URL: ${data.fileUrl}`)
    }
  }

  return (
    <div className="max-w-xl mx-auto mt-12 p-6 border rounded-2xl shadow-md bg-white">
      <h1 className="text-2xl font-semibold mb-4">Upload a GIF</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="file"
          accept="image/gif"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="block w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Tags (comma-separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {isLoading ? 'Uploading...' : 'Upload GIF'}
        </button>
      </form>

      {message && (
        <p className="mt-4 text-sm text-gray-700 break-words">{message}</p>
      )}
    </div>
  )
}
