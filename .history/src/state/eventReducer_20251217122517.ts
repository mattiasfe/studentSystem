import type { DomainEvent } from "../models/DomainEvents";
import { Student } from "../models/Student";
import { state } from "./store";

export function applyEvents(events: DomainEvent[]) {
    const map: Record<string, Student> = {}

        for (const event of events) {
            if (event.type === 'student-updated') {
                map[event.id] = {
                    ...map[event.id],
                    ...event
            }
        }
    }
    state.students = Object.values(map)

}