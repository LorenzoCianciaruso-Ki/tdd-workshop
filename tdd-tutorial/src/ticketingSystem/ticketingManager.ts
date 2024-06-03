// Adding Tickets: Enabling users to add new tickets with a unique ID and title.

// Assigning Tickets: Allowing the system to assign tickets to team members, marking them as in progress.

// Completing Tickets: Enabling tickets to be marked as completed once the tasks are done.

interface Ticket {
    id: number,
    title: string,
    name?: string
}

export default class TicketManager {

    tickets: Ticket[] = []

    addTicket(ticket: Ticket){
        this.tickets = [...this.tickets, ticket]
    }

    getTickets(){
        return this.tickets
    }

    assignTicket(name: string, ticketId: number) {
        const ticket = this.tickets.find(ticket => ticket.id === ticketId)!
        ticket.name = name
    }
    
}