# Before start please create `.env` file, see `.env.example`

To run project in development mode you can use:

```sh
    docker-compose up
```

To get into docker container you can use:

```sh
    sudo docker container exec -it ${container_id} sh
```

To get docker container id you can use:

```sh
    docker container ls
```

To run migrations locally you can use:

```sh
    docker-compose run --rm feedback npm run migrate
```

To run seeds locally you can use:

```sh
    docker-compose run --rm feedback npm run seed
```

This project used prettier to format the code.
