import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const DEFAULT_CONTACT = [
  {
    "userName": "Bobby User 1",
    "userEmail": "testuser1@gmail.com",
    "userPhone": "1231231234",
    "userWebsite": "http://testuser.com",
    "userCompanyName": "Test Company"
  },
  {
    "userName": "Angela User 2",
    "userEmail": "testuser2@gmail.com",
    "userPhone": "1231231234",
    "userWebsite": "http://testuser.com",
    "userCompanyName": "Test Company"
  },
  {
    "userName": "Jerome User 3",
    "userEmail": "testuser3@gmail.com",
    "userPhone": "1231231234",
    "userWebsite": "http://testuser.com",
    "userCompanyName": "Test Company"
  },
  {
    "userName": "Steeve User 4",
    "userEmail": "testuser4@gmail.com",
    "userPhone": "1231231234",
    "userWebsite": "http://testuser.com",
    "userCompanyName": "Test Company"
  },
  {
    "userName": "Benjamin User 5",
    "userEmail": "testuser5@gmail.com",
    "userPhone": "1231231234",
    "userWebsite": "http://testuser.com",
    "userCompanyName": "Test Company"
  },
  {
    "userName": "Samuel User 6",
    "userEmail": "testuser6@gmail.com",
    "userPhone": "1231231234",
    "userWebsite": "http://testuser.com",
    "userCompanyName": "Test Company"
  },
  {
    "userName": "Martin User 7",
    "userEmail": "testuser7@gmail.com",
    "userPhone": "1231231234",
    "userWebsite": "http://testuser.com",
    "userCompanyName": "Test Company"
  },
  {
    "userName": "Lori User 8",
    "userEmail": "testuser8@gmail.com",
    "userPhone": "1231231234",
    "userWebsite": "http://testuser.com",
    "userCompanyName": "Test Company"
  },
  {
    "userName": "Patricia User 9",
    "userEmail": "testuser9@gmail.com",
    "userPhone": "1231231234",
    "userWebsite": "http://testuser.com",
    "userCompanyName": "Test Company"
  },
  {
    "userName": "Simon User 10",
    "userEmail": "testuser10@gmail.com",
    "userPhone": "1231231234",
    "userWebsite": "http://testuser.com",
    "userCompanyName": "Test Company"
  }
]

const seedContact = async () => {

  await prisma.contact.deleteMany()
  console.log('Deleted records in Contact table')

  await prisma.$queryRaw`ALTER TABLE Contact AUTO_INCREMENT = 1`
  console.log('reset contact auto increment to 1')


  Promise.all(DEFAULT_CONTACT.map(n => prisma.contact.create({
    data: {
      userName: n.userName,
      userEmail: n.userEmail,
      userPhone: n.userPhone,
      userWebsite: n.userWebsite,
      userCompanyName: n.userCompanyName
    }
  })))
    .then(() => console.info('[SEED] Succussfully create contact records'))
    .catch(e => console.error('[SEED] Failed to create contact records', e))
}

seedContact();