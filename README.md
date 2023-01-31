## Requirements
- node 16+
- npm
- docker
- docker-compose

## Installation

- create `.env` file using `.env.example` as template
- build and run dockers using `docker-compose up`
- run `npx prisma db push` to sync database changes

## Usefull commands
- `npx prisma db push` - sync Prisma schema with database
- `npm run dev` - starts dev environment locally
- `docker-compose up` - builds and start containers (required for database in local use)

## Learn More T3 Stack

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!