import type { DomainEvent } from "../models/DomainEvents";
import type { Student } from "../models/Student";
import { state } from "./store";

export function applyEvents(events: DomainEvent[]) {
    const map: Record<string, Student> = {}

        for (const event of events) {
            if (event.type === 'student-updated') {
                map[Number(event.id)] = {
                    ...map[Number(event.id)],
                    ...event,
                    id: Number(event.id)
            }
        }
    }
    state.students = Object.values(map)

}