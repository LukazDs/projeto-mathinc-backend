import * as disciplineRepository from "../repositories/disciplineRepository.js";
import { Disciplines } from "@prisma/client";

export async function getDisciplines() {
  const disciplines: Disciplines[] =
    await disciplineRepository.getDisciplines();

  return await randomArray(disciplines);
}

async function randomArray(array: Object[]) {
  const arrayRandom: Object[] = [];
  const length: number = array.length;

  while (arrayRandom.length < length) {
    let numberRandom = Math.floor(Math.random() * length);
    let element: Disciplines | Object = array[numberRandom];

    if (arrayRandom.indexOf(element) == -1) arrayRandom.push(element);

    if (arrayRandom.length === length) {
      break;
    }
  }
  return arrayRandom;
}
