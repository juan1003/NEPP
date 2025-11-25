# NEPP

## Boilerplate for NEPP stack

### The NEPP stack consists on the following tools

- [NextJS]("https://nextjs.org")
- [ExpressJS]("https://expressjs.com")
- [PrismaJS]("https://prisma.io/orm)
- [Postgres]("https://www.postgresql.org/")

### You will need the following toolkit

- [Docker]("https://www.docker.com/products/docker-desktop/")
- [NPM]("https://www.npmjs.com/")
- [NodeJS]("https://nodejs.org/en")

## Backend setup

### To run the container you will execute

```sh
cd NEPP
cd backend
npm install
cd ../
docker compose up -d
```

### After the backend container is up

```sh
cd backend/
npx prisma migrate dev
npx prisma generate
```

## Frontend setup

### To ramp up frontend

```sh
cd frontend/
npm install
npm run dev
```

And that's it!

Happy Hacking!
