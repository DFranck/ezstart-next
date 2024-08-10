// src\components\shared\user-change-password-form.tsx
'use client';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const UserChangePasswordForm = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const inputStyle = 'm-2 text-lg w-auto h-16';
  const handlePasswordChange = async () => {
    if (newPassword !== confirmPassword) {
      alert('New password and confirm password do not match');
      return;
    }

    try {
      const response = await fetch('/api/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ currentPassword, newPassword }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
      setIsOpen(false);
      alert('Password changed successfully');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.error('Error:', error);
      // alert(error.message);
    }
  };

  return (
    <div className={cn('w-full')}>
      <h2
        className="my-0 text-start flex items-center h-16 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        Change Password
      </h2>
      <div
        className={cn(
          'transition-[max-height] duration-500 ease-in-out overflow-hidden',
          isOpen ? 'max-h-screen' : 'max-h-0',
        )}
      >
        <div className="flex flex-col">
          <Input
            type="password"
            placeholder="Current Password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className={inputStyle}
          />
          <Input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className={inputStyle}
          />
          <Input
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={inputStyle}
          />
          <Button
            className="h-16 w-auto m-2 border shadow"
            size={'lg'}
            onClick={handlePasswordChange}
          >
            <h3 className="my-0">Change Password</h3>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserChangePasswordForm;
