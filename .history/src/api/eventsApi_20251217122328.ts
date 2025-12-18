export async function getEvents() {
    const res = await fetch('/events.json')
    return res.json()
}