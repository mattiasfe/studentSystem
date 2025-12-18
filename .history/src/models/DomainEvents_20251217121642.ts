export type DomainEvent =
    | StudentUpdatedEvent
    | CourseAddedEvent
    | CourseStudentUpdatedEvent

export interface StudentUpdatedEvent {
    type: 'sudent-updated'
    date: string
    id: number
    navn?: string
    epostPrivat?: string
    telefon?: string
}