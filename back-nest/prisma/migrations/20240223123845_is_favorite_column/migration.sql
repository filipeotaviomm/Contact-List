-- AlterTable
ALTER TABLE "contacts" ADD COLUMN     "isFavorite" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "email" DROP NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "avatar" DROP NOT NULL;
