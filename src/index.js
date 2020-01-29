/*
https://www.prisma.io/docs/1.13/tutorials/build-graphql-servers/development/build-a-graphql-server-from-scratch-nahgaghei6
*/


/*
Za početak, pozicioniranje u folder i naredba: npm init -y (package.json)
*/

/*
Kreiranje foldera /src i datoteke index.js
*/

/*
Instalacija dependancyja graphql-yoga: yarn add graphql-yoga
*/

const {
  GraphQLServer
} = require('graphql-yoga')

/*
U datoteci index.js kreiramo prvo typeDefs -> definicija sheme pisana u GraphQL
SDL-u -> struktura GQL API-ja. U ovom slučaju samo jedan query -> description.
*/

const typeDefs = `
type Query {
  description: String
}
`

/*
Rsolveri su implementacija GQL API-ja, u ovom slučaju vraća samo String u pozivu
funkcije description
*/

const resolvers = {
  Query: {
    description: () => `This is the API for a simple blogging application`
  }
}

/*
Konstruktoru GQL servera prosljeđujemo typeDefs i resolvers. Kada god server
zaprimi query "description", poziva Query.description resolver
*/

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

/*
Podizanje servera uz Callback funkciju koja se poziva kad je server podignut.
U ovom slučaju se samo console.log();
*/

server.start(() => console.log(`The server is running on http://localhost:4000`))

/*
Naredba node src/index.js za pokretanje servera
Odlazak na http://localhost:4000 za pokretanje GQL playgrounda
*/