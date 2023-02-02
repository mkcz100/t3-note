#/bin/sh
npx prisma migrate reset --force --skip-seed --skip-generate
npx prisma db push