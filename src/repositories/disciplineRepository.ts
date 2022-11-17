import { Disciplines } from "@prisma/client";
import { prisma } from "../config/database.js";

export async function getDisciplines() {
  const disciplines: Disciplines[] = await prisma.disciplines.findMany({
    take: 3,
    include: {
      challenges: { include: { alternatives: true } },
    },
  });

  return disciplines;
}
