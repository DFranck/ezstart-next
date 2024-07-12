// pages/docs/DocDbManagement.tsx
import CodeBlock from "@/components/code-block";
import Section from "@/components/layout/section";
import { useTranslations } from "next-intl";
import Link from "next/link";

const DocDbManagement = () => {
  const t = useTranslations("pages.docs.db-management");

  return (
    <>
      <Section>
        <h2>Introduction</h2>
        <p>
          Si vous avez installé la boilerplate EzStart, tout est déjà
          pré-installé pour un développement local. Si vous souhaitez utiliser
          Prisma uniquement, je vous renvoie vers{" "}
          <Link
            href="https://www.prisma.io/"
            target="_blank"
            className="font-normal"
          >
            la documentation officielle de Prisma ici.
          </Link>
        </p>
      </Section>
      <Section>
        <h2>Étapes à suivre après le clonage du dépôt</h2>
        <ol>
          <li>
            <h3>Cloner le dépôt et installer les dépendances</h3>
            <CodeBlock
              code={`git clone https://github.com/DFranck/my-ez-start.git\ncd my-ez-start\nnpm install`}
            />
          </li>
          <li>
            <h3>Installer PostgreSQL</h3>
            <p>
              Téléchargez et installez PostgreSQL à partir du site officiel :{" "}
              <Link
                href="https://www.postgresql.org/download/"
                target="_blank"
                className="font-normal"
              >
                Télécharger PostgreSQL
              </Link>
            </p>
            <p>
              Suivez les instructions d&apos;installation pour votre système
              d&apos;exploitation.
            </p>
            <p>
              Après l&apos;installation, initialisez une nouvelle base de
              données. Utilisez lapos;outil <code>psql</code> fourni avec
              PostgreSQL pour créer une base de données et un utilisateur :
            </p>
            <CodeBlock
              code={`psql -U postgres\nCREATE DATABASE mydatabase;\nCREATE USER myuser WITH ENCRYPTED PASSWORD &apos;mypasswordapos;;\nGRANT ALL PRIVILEGES ON DATABASE mydatabase TO myuser;`}
            />
          </li>
          <li>
            <h3 id="DATABASE_URL">Configurer lapos;environnement</h3>
            <p>
              Créez un fichier <code>.env</code> à la racine de votre projet
              avec les variables dapos;environnement nécessaires :
            </p>
            <CodeBlock
              code={`DATABASE_URL="postgresql://myuser:mypassword@localhost:5432/mydatabase"`}
            />
          </li>
          <li>
            <h3>Initialiser Prisma</h3>
            <p>Initialisez Prisma dans votre projet :</p>
            <CodeBlock code={`npx prisma init`} />
          </li>
          <li>
            <h3>Configurer le schéma Prisma</h3>
            <p>
              Dans le fichier <code>prisma/schema.prisma</code>, assurez-vous
              que votre configuration ressemble à ceci :
            </p>
            <CodeBlock
              code={`datasource db {\n  provider = "postgresql"\n  url      = env("DATABASE_URL")\n}\n\ngenerator client {\n  provider = "prisma-client-js"\n}\n\n// Ajoutez vos tables ici\n// Par exemple :\n// model MyNewTable {\n//   id   Int    @id @default(autoincrement())\n//   name String\n// }`}
            />
          </li>
          <li>
            <h3>Appliquer les migrations</h3>
            <p>
              Appliquez les migrations pour synchroniser votre base de données
              avec le schéma Prisma :
            </p>
            <CodeBlock code={`npx prisma migrate dev --name init`} />
          </li>
          <li>
            <h3>Démarrer lapos;application</h3>
            <p>
              Une fois que tout est configuré, vous pouvez démarrer votre
              application en mode développement :
            </p>
            <CodeBlock code={`npm run dev`} />
          </li>
        </ol>
      </Section>
      <Section id="example-table">
        <h2>Exemple de table</h2>
        <p>
          Pour ajouter une nouvelle table, éditez le fichier{" "}
          <code>schema.prisma</code> dans le dossier <code>prisma</code> à la
          racine du projet et ajoutez votre nouvelle table :
        </p>
        <CodeBlock
          code={`model MyNewTable {\n  id     Int     @id @default(autoincrement())\n  name   String\n}`}
        />
        <p>
          N&apos;oubliez pas de migrer votre base de données après avoir modifié
          le schéma :
        </p>
        <CodeBlock code={`npx prisma migrate dev --name add-mynewtable`} />
      </Section>
      <Section id="usage">
        <h2>Utilisation</h2>
        <p>
          Utilisez les fonctions Prisma pour accéder aux données dans vos
          composants :
        </p>
        <CodeBlock
          code={`import { db } from apos;@/lib/db&apos;;\n\nasync function getData() {\n  const data = await db.myNewTable.findMany();\n  console.log(data);\n}`}
        />
      </Section>
      <Section id="resources">
        <h2>Ressources supplémentaires</h2>
        <p>
          Pour plus dapos;informations, consultez les ressources suivantes :
        </p>
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
    </>
  );
};

export default DocDbManagement;
