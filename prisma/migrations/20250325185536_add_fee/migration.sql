/*
  Warnings:

  - Added the required column `fee` to the `medications_prescribed` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fee` to the `treatment_descriptions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "medications_prescribed" ADD COLUMN     "fee" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "treatment_descriptions" ADD COLUMN     "fee" DOUBLE PRECISION NOT NULL;
