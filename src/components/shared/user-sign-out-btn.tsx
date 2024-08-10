// src\components\shared\user-sign-out-btn.tsx
'use client';
import { signOut } from 'next-auth/react';
import { Button } from '../ui/button';

const UserSignOutBtn = () => {
  return (
    <Button
      variant={'outline'}
      size={'lg'}
      className="h-16 w-full"
      onClick={() => signOut({ redirect: true, callbackUrl: '/' })}
    >
      <h2 className="text-start flex items-center my-0 ">Sign out</h2>
    </Button>
  );
};

export default UserSignOutBtn;
