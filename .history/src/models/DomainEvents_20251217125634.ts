
export interface StudentUpdatedEvent {
    type: 'student-updated'
    date: string
    id: number
    navn?: string
    epostPrivat?: string
    telefon?: string
}
export type DomainEvent = StudentUpdatedEvent