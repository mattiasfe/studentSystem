export async function getEvents() {
    const res = await fetch('/events')
    return res.json()
}