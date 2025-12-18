export type DomainEvent =
    | StudentUpdatedEvent
    | CourseAddedEvent
    | CourseStudentUpdatedEvent

export interface StudentUpdatedEvent {
    type: 'sudent-updated'
    data: string
    id: number
    name: string
    privateEmail: string
    phoneNumber: string
}