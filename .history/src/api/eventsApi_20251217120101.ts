export async function getEvents() {
    const response = await fetch('/events')
    return response.json()
}