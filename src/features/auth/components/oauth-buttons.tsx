import GithubSvg from '@/components/svgs/github-svg';
import GoogleSvg from '@/components/svgs/google-svg';
import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';

const OAuthButtons = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-2 text-center w-full">
      <Button
        className="border shadow rounded p-1 bg-white hover:bg-white/80"
        type="button"
        onClick={() => signIn('google')}
      >
        <GoogleSvg className="w-8" background="transparent" />
      </Button>
      <Button
        className="border shadow rounded p-1 bg-black hover:bg-black/80  dark:hover:bg-black/60"
        type="button"
        onClick={() => signIn('github')}
      >
        <GithubSvg className="w-8 " background="transparent" />
      </Button>
    </div>
  );
};

export default OAuthButtons;
