import { randomUUID } from "crypto";
import { User, Note, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log: ["query", "error", "warn"],
});

async function users(count: number = 5): Promise<Array<User>> {
    let users: Array<User> = [];

    for (let i = 1; i <= count; i++) {
        let id = randomUUID();
        users.push(<User>await prisma.user.upsert({
            where: { id: id },
            create: {
                id: id,
                name: `Test ${i}`,
            },
            update: {},
        }));
    }

    return new Promise((resolve, reject) => resolve(users));
}

async function notes(users: Array<User>, count: number = 15): Promise<Array<Note>> {
    let notes: Array<Note> = [];

    for (let i = 1; i <= count; i++) {
        let id = randomUUID();
        let user = <User>users[Math.floor((Math.random() * users.length))];

        notes.push(<Note>await prisma.note.upsert({
            where: { id: id },
            create: {
                id: id,
                title: `Test node ${i}`,
                content: `Test content ${i}`,
                userId: user.id
            },
            update: {},
        }));
    }

    return new Promise((resolve, reject) => resolve(notes));
}

users().then(async (users: Array<User>) => {
    await notes(users);
}).then(async () => {
    await prisma.$disconnect();
}).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});