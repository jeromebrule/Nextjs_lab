import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const COFFEE_NAMES = [
  "Black Coffee",
  "Turkish Coffee",
]
/**
 * For each coffee name, create a Coffee record in the DB
 */
function seedContact() {
  Promise.all(COFFEE_NAMES.map(n => prisma.contact.create({ data: { userName: n } })))
    .then(() => console.info('[SEED] Succussfully create contact records'))
    .catch(e => console.error('[SEED] Failed to create contact records', e))
}

seedContact();