'use client';
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import Section from './section';
import UserProfileBanner from './user-profile-banner';

const UserProfileInfos = ({
  className,
  device,
}: {
  className?: string;
  device: string;
}) => {
  const { data: session, update } = useSession();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const user = session?.user;

  useEffect(() => {
    console.log('Session on client-side:', session);
    if (user) {
      setName(user.name || '');
      setEmail(user.email || '');
    }
  }, [user, session]);

  const handleSave = async () => {
    try {
      const response = await fetch('/api/update-user', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });

      if (!response.ok) {
        throw new Error('Failed to update user');
      }
      await update({
        ...session,
        user: {
          ...session?.user,
          name: name,
        },
      });
      const data = await response.json();
      console.log(data.message);
      setIsEditing(false);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <UserProfileBanner
        device={device}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        handleSave={handleSave}
      />
      <Section
        className={cn('flex flex-col items-center pt-0 px-0', className)}
      >
        <div className="flex mb-4 relative">
          <Avatar className="w-32 h-32 ">
            {user?.image ? (
              <Image
                src={user.image}
                width={128}
                height={128}
                alt={user.name ?? ''}
                className="rounded-full w-full h-full"
              />
            ) : (
              <Avatar>
                <AvatarImage
                  src={'https://github.com/shadcn.png'}
                  className="rounded-full"
                />
              </Avatar>
            )}
          </Avatar>
        </div>
        <Input
          value={name}
          placeholder="John Doe"
          type="text"
          onChange={(e) => setName(e.target.value)}
          readOnly={!isEditing}
          className={cn('w-fit text-3xl text-foreground mb-2 text-center', {
            'border-none bg-transparent cursor-default': !isEditing,
          })}
          style={{
            pointerEvents: isEditing ? 'auto' : 'none',
            fieldSizing: 'content',
          }}
        />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          readOnly={!isEditing}
          className={cn('w-fit text-lg  text-center text-foreground mb-4', {
            'border-none bg-transparent cursor-default': !isEditing,
          })}
          style={{
            pointerEvents: isEditing ? 'auto' : 'none',
            fieldSizing: 'content',
          }}
        />
        {device === 'desktop' && (
          <Button
            variant={isEditing ? 'default' : 'outline'}
            onClick={() => {
              setIsEditing((prev) => {
                if (prev) {
                  handleSave();
                }
                return !prev;
              });
            }}
          >
            {isEditing ? 'Save' : 'Edit'}
          </Button>
        )}
      </Section>
    </>
  );
};

export default UserProfileInfos;
