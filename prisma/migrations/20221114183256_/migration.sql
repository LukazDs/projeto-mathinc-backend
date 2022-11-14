-- CreateTable
CREATE TABLE "challenges" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "disciplineId" INTEGER,

    CONSTRAINT "challenges_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "alternatives" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "challengeId" INTEGER,

    CONSTRAINT "alternatives_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "challenges" ADD CONSTRAINT "challenges_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES "disciplines"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alternatives" ADD CONSTRAINT "alternatives_challengeId_fkey" FOREIGN KEY ("challengeId") REFERENCES "challenges"("id") ON DELETE SET NULL ON UPDATE CASCADE;
