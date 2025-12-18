
export interface StudentUpdatedEvent {
    type: 'student-updated'
    date: string
    id: string
    navn?: string
    epostPrivat?: string
    telefon?: string
    discord: string
}
export type DomainEvent = StudentUpdatedEvent