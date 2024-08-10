import CodeBlock from '@/components/code-block';
import Section from '@/components/shared/section';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const DocDbManagement = () => {
  const t = useTranslations('pages.docs.db-management');
  const t2 = useTranslations('pages.docs');

  return (
    <>
      <Section>
        <h2>{t('first-time-postgresql')}</h2>
        <ol>
          <li>
            <h3>{t('install-postgresql.title')}</h3>
            <p>
              {t('install-postgresql.download')}{' '}
              <Link
                href="https://www.postgresql.org/download/"
                target="_blank"
                className="font-normal"
              >
                PostgreSQL
              </Link>
            </p>
            <p>{t('install-postgresql.instructions')}</p>
          </li>
          <li>
            <h3>{t('initialize-database.title')}</h3>
            <p>
              {t('initialize-database.description')}{' '}
              <Link
                href="https://www.pgadmin.org/"
                target="_blank"
                className="font-normal"
              >
                PGadmin
              </Link>{' '}
            </p>
            <CodeBlock
              src="// bash"
              code={`psql -U postgres\nCREATE DATABASE mydatabase;\nCREATE USER myuser WITH ENCRYPTED PASSWORD 'mypassword';\nGRANT ALL PRIVILEGES ON DATABASE mydatabase TO myuser;`}
            />
          </li>
          <li>
            <h3 id="DATABASE_URL">{t('configure-environment.title')}</h3>
            <p>{t('configure-environment.description')}</p>
            <CodeBlock
              src="// .env"
              code={`DATABASE_URL="postgresql://myuser:mypassword@localhost:5432/mydatabase"`}
            />
          </li>
          <li>
            <h3>{t('initialize-prisma.title')}</h3>
            <p>{t('initialize-prisma.description')}</p>
            <CodeBlock src="// bash" code={`npx prisma init`} />
          </li>
          <li>
            <h3>{t('configure-prisma-schema.title')}</h3>
            <p>{t('configure-prisma-schema.description')}</p>
            <CodeBlock
              src="// prisma/schema.prisma"
              code={`datasource db {\n  provider = "postgresql"\n  url      = env("DATABASE_URL")\n}\n\ngenerator client {\n  provider = "prisma-client-js"\n}\n\n// Ajoutez vos tables ici\n// Par exemple :\n// model MyNewTable {\n//   id   Int    @id @default(autoincrement())\n//   name String\n// }`}
            />
          </li>
          <li>
            <h3>{t('apply-migrations.title')}</h3>
            <p>{t('apply-migrations.description')}</p>
            <CodeBlock
              src="// bash"
              code={`npx prisma migrate dev --name init`}
            />
          </li>
          <li>
            <h3>{t('start-application.title')}</h3>
            <p>{t('start-application.description')}</p>
            <CodeBlock src="// bash" code={`npm run dev`} />
          </li>
        </ol>
      </Section>
      <Section id="example-table">
        <h2>{t('example-table.title')}</h2>
        <p>{t('example-table.description')}</p>
        <CodeBlock
          src="// prisma/schema.prisma"
          code={`model MyNewTable {\n  id     Int     @id @default(autoincrement())\n  name   String\n}`}
        />
        <p>{t('example-table.migrate')}</p>
        <CodeBlock
          src="// bash"
          code={`npx prisma migrate dev --name add-mynewtable`}
        />
      </Section>
      <Section id="usage">
        <h2>{t('usage.title')}</h2>
        <p>{t('usage.description')}</p>
        <CodeBlock
          src="// any component"
          code={`import { db } from '@/lib/db';\n\nasync function getData() {\n  const data = await db.myNewTable.findMany();\n  console.log(data);\n}`}
        />
      </Section>
      <Section id="resources">
        <h2>{t('additional-resources.title')}</h2>
        <p>{t('additional-resources.description')}</p>
        <ul>
          <li>
            <Link
              href="https://www.prisma.io/docs/"
              target="_blank"
              className="hover:underline"
            >
              Documentation officielle de Prisma
            </Link>
          </li>
        </ul>
      </Section>
      <Section>
        <Button asChild className="w-fit self-end" size={'lg'}>
          <Link href="authentication">{t2('nav-links.authentication')}</Link>
        </Button>
      </Section>
    </>
  );
};

export default DocDbManagement;
