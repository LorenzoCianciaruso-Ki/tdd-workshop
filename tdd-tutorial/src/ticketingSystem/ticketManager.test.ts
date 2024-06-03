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

test('should be able to assign a ticket ', () => {
    //given
    const theName = 'Paul'
    const ticketId = 1
    const manager = new TicketManager();
    const ticket = {
        id: ticketId,
        title: 'This is a great ticket'
    };
    const newTicket = {
     ...ticket,
        name: theName
    };
    manager.addTicket(ticket);

    //when
    manager.assignTicket(theName, ticketId);

    //then
    const tickets = manager.getTickets();
    expect(tickets[0].name).toBe(newTicket.name);
    expect(tickets[0].id).toBe(newTicket.id);
});

test("should throw not found exception when assigning a user to a ticket that does not exist", () => {
    const manager = new TicketManager();

    expect(() => {
        manager.assignTicket("Barry", 1)
    }).toThrowError("Ticket not found")
})

// test('should be able to mark a ticket as in progress', () => {
//     const manager = new TicketManager();
//
//     manager.assignTicket(name, ticketId);
//
//     const tickets = manager.getTickets();
//     expect(tickets[0]).toBe(ticket);
// });