import { faker } from "@faker-js/faker";

async function createUser() {
  return {
    name: faker.name.fullName(),
    imageUrl: faker.internet.url(),
    email: faker.internet.email(),
    password: faker.random.alphaNumeric(8),
  };
}

export { createUser };
