import axios from 'axios'

const API_URL = "https://rbiipaewqzsajpguavxg.supabase.co/rest/v1/notes"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJiaWlwYWV3cXpzYWpwZ3VhdnhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwMTk0NDYsImV4cCI6MjA2NDU5NTQ0Nn0.DO-bw79krRsQStIXFK8T7i99A5yhoyIl5om6ZzxuGNM"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },
     async deleteNote(id) {
        await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
}
}