import { expect, test } from 'vitest'
import TicketManager from './ticketingManager';

test('should add a ticket', () => {
    const manager = new TicketManager();
    const ticket = {
        id: 1,
        title: 'This is a great ticket'
    };

    manager.addTicket(ticket);

    const tickets = manager.getTickets();
    expect(tickets[0]).toBe(ticket);
});