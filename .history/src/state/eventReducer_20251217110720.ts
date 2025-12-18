import { DomainEvent } from "../models/DomainEvents";
import { state } from "./store";
import { Student } from "../models/Student";

export function applyEvents(events: DomainEvent[]) {
    const studentsById: Record<string, Student> = {}

    for (const event of events) {
        if (event.type === 'sudent-updated') {
            const existing = studentsById[event.id] ?? { id: event.id }
        
            studentsById[event.id] = {
                ...existing,
                ...event
        }
    }
}