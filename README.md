docker exec -it puttana_db bash
psql -U usertest -d puttana_db

docker exec -it p1db psql -U usertest -d postgres

REVOKE CONNECT ON DATABASE puttana_db FROM public;
REVOKE ALL ON SCHEMA public FROM PUBLIC;
CREATE USER ptuser WITH PASSWORD '1234';
GRANT CONNECT ON DATABASE puttana_db TO ptuser;
GRANT USAGE ON SCHEMA public TO ptuser;
GRANT CREATE ON SCHEMA public TO ptuser;
GRANT ALL ON DATABASE puttana_db TO ptuser;
GRANT ALL ON SCHEMA public TO ptuser;
ALTER USER ptuser CREATEDB;

# Database prisma setup
```
npx prisma migrate dev --name init
npx prisma generate
```