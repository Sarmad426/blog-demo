-- AlterTable
ALTER TABLE `blog` MODIFY `Liked` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `Disliked` BOOLEAN NOT NULL DEFAULT false;
