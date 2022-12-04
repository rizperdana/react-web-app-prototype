import { Project } from "./Project";
import { faker } from "@faker-js/faker";

export const PROJECTS: Project[] = [];

export function createRandomProject(): Project {
  faker.locale = 'id_ID';
  var googleMapPrefix = "https://www.google.com/maps/@";
  var lat = faker.address.latitude();
  var long = faker.address.longitude();
  return {
    id: faker.datatype.uuid(),
    name: faker.animal.cat(),
    address: faker.address.streetAddress(),
    phoneNumber: faker.phone.number(),
    email: faker.internet.email(),
    description: faker.commerce.productDescription(),
    imageUrl: faker.image.cats(),
    latitude: lat,
    longitude: long,
    mapUrl: googleMapPrefix + lat + "," + long,
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    isSoftDeleted: false
  };
}

Array.from({ length: 10 }).forEach(() => {
  PROJECTS.push(createRandomProject());
});
