/*
  Warnings:

  - The values [DAGEN] on the enum `productTypes` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "productTypes_new" AS ENUM ('KOSHARI', 'TAGINE', 'DESSERT', 'DRINK', 'ADD');
ALTER TABLE "Product" ALTER COLUMN "type" TYPE "productTypes_new" USING ("type"::text::"productTypes_new");
ALTER TYPE "productTypes" RENAME TO "productTypes_old";
ALTER TYPE "productTypes_new" RENAME TO "productTypes";
DROP TYPE "productTypes_old";
COMMIT;
