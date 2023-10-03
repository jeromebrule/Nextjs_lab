FROM node:17-alpine
RUN mkdir -p /opt
WORKDIR /opt
COPY . .
RUN npm install

RUN npx prisma migrate dev --name init
RUN npx prisma db seed
RUN npm uninstall bcrypt
RUN npm install bcrypt

EXPOSE 3000
CMD ["npm", "run", "dev"]