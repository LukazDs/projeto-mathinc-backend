import * as disciplineRepository from "../repositories/disciplineRepository.js";
import { faker } from "@faker-js/faker";
import { Disciplines, prisma } from "@prisma/client";

export async function getDisciplines() {
  const discipline: Disciplines[] = await disciplineRepository.getDisciplines();
  const number: number = Number(faker.random.numeric());

  const id: number = Math.floor((number * discipline.length) / 10 + 1);

  return await disciplineRepository.getDisciplinesById(id);
}
