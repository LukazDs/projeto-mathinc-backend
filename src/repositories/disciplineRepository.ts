import { Disciplines } from "@prisma/client";
import { alternatives } from "joi";
import { prisma } from "../config/database.js";

export async function getDisciplinesById(id: number) {
  const disciplines: Disciplines[] = await prisma.disciplines.findMany({
    where: {
      id,
    },
    include: {
      challenges: { include: { alternatives: true } },
    },
  });

  return disciplines;
}

export async function getDisciplines() {
  const disciplines: Disciplines[] = await prisma.disciplines.findMany();

  return disciplines;
}
