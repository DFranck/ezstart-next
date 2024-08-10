// pages/docs/DocAuthentication.tsx
import CodeBlock from '@/components/code-block';
import Section from '@/components/shared/section';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const DocAuthentication = () => {
  const t = useTranslations('pages.docs.authentication');
  const t2 = useTranslations('pages.docs');

  return (
    <>
      <Section>
        <h2>{t('setup.title')}</h2>
        <ol>
          <li>
            <h3 id="AUTH_URL">{t('setup.authUrl.title')}</h3>
            <p>{t('setup.authUrl.description')}</p>
            <CodeBlock src="// .env" code={`AUTH_URL=http://localhost:3000`} />
          </li>
          <li>
            <h3 id="AUTH_SECRET">{t('setup.authSecret.title')}</h3>
            <p>
              {t('setup.authSecret.description')}
              <Link
                href="https://randomkeygen.com/"
                target="_blank"
                className="font-normal hover:underline"
              >
                RandomKeygen
              </Link>
            </p>

            <CodeBlock src="// .env" code={`AUTH_SECRET=your_auth_secret`} />
          </li>
          <li>
            <h3 id="AUTH_SALT">{t('setup.authSalt.title')}</h3>
            <p>{t('setup.authSalt.description')}</p>
            <CodeBlock src="// .env" code={`AUTH_SALT=your_auth_salt`} />
          </li>
          <li>
            <h3 id="GOOGLE_CLIENT">{t('setup.googleClient.title')}</h3>
            <p>{t('setup.googleClient.description')}</p>
            <CodeBlock
              src="// .env"
              code={`GOOGLE_CLIENT_ID=your_google_client_id\nGOOGLE_CLIENT_SECRET=your_google_client_secret`}
            />
          </li>
          <li>
            <h3 id="GITHUB_CLIENT">{t('setup.githubClient.title')}</h3>
            <p>{t('setup.githubClient.description')}</p>
            <CodeBlock
              src="// .env"
              code={`GITHUB_CLIENT_ID=your_github_client_id\nGITHUB_CLIENT_SECRET=your_github_client_secret`}
            />
          </li>
          <li>
            <h3 id="MAILJET_API">{t('setup.mailjetApi.title')}</h3>
            <p>{t('setup.mailjetApi.description')}</p>
            <CodeBlock
              src="// .env"
              code={`MAILJET_API_SECRET=your_mailjet_api_secret\nMAILJET_API_KEY=your_mailjet_api_key`}
            />
          </li>
        </ol>
      </Section>
      <Section id="resources">
        <h2>{t('resources.title')}</h2>
        <p>{t('resources.description')}</p>
        <ul>
          <li>
            <Link
              href="https://next-auth.js.org/getting-started/introduction"
              target="_blank"
              className="hover:underline"
            >
              {t('resources.nextAuth')}
            </Link>
          </li>
          <li>
            <Link
              href="https://developers.google.com/identity"
              target="_blank"
              className="hover:underline"
            >
              {t('resources.googleIdentity')}
            </Link>
          </li>
          <li>
            <Link
              href="https://docs.github.com/en/developers/apps/building-oauth-apps"
              target="_blank"
              className="hover:underline"
            >
              {t('resources.githubOAuth')}
            </Link>
          </li>
          <li>
            <Link
              href="https://www.mailjet.com/docs/"
              target="_blank"
              className="hover:underline"
            >
              {t('resources.mailjet')}
            </Link>
          </li>
        </ul>
      </Section>
      <Section>
        <Button asChild className="w-fit self-end" size={'lg'}>
          <Link href="payment">{t2('nav-links.payment')}</Link>
        </Button>
      </Section>
    </>
  );
};

export default DocAuthentication;
