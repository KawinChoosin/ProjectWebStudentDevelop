# Get started

- Make `.env` from `.env.example`
- `docker compose up -d`

# User management 

- `docker exec -it puttana_db bash`
- `psql -U usertest -d puttana_db`
- Don't forget to change the password.

```
REVOKE CONNECT ON DATABASE puttana_db FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM PUBLIC;

-- Create user if not already existing
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM pg_roles
        WHERE rolname = 'ptuser'
    ) THEN
        CREATE USER ptuser WITH PASSWORD '1234';
    END IF;
END
$$;

-- Grant permissions
GRANT CONNECT ON DATABASE puttana_db TO ptuser;
GRANT USAGE ON SCHEMA public TO ptuser;
GRANT CREATE ON SCHEMA public TO ptuser;
GRANT ALL ON DATABASE puttana_db TO ptuser;
GRANT ALL ON SCHEMA public TO ptuser;
ALTER USER ptuser CREATEDB;


```

# Database prisma setup
```
npx prisma migrate dev --name init
npx prisma generate
```

# Data Insert and run 
```
node test.js
node index.js
```