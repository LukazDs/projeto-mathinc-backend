/*
  Warnings:

  - Added the required column `status` to the `alternatives` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "alternatives" ADD COLUMN     "status" BOOLEAN NOT NULL;
