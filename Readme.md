# Before start please create `.env` file, see `.env.example`

This project used prettier to format the code.

To install local dependencies please use:

```sh
    npm run installAll
```

To run project in development mode you can use:

```sh
    npm run dev
```

To get into docker container you can use:

```sh
    docker container exec -it ${container_id} sh
```

To get docker containers you can use:

```sh
    docker container ls
```

To run migrations locally you can use:

```sh
    docker container exec feedback npm run migrate
```

To run seeds locally you can use:

```sh
    docker container exec feedback npm run seed
```

To create dump you can use:

```sh
    docker container exec postgres_database pg_dump -U ${DB_USER} ${DB_NAME} > ./server/feedbackService/dumps/${dumpfile}.sql
```

To apply dump you can use:

```sh
    docker container exec -i postgres_database psql -U ${DB_USER} ${DB_NAME} < ./server/feedbackService/dumps/${dumpfile}.sql
```

### !!! If applying dump doesn't work for you, you will need to drop db and create again

```sh
    docker container exec postgres_database dropdb -U ${DB_USER} -f ${DB_NAME}
    docker container exec postgres_database createdb -U ${DB_USER} ${DB_NAME}
```
