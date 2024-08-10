'use client';

import { Edit3, Save, Settings } from 'lucide-react';
import Link from 'next/link';

const UserProfileBanner = ({
  device,
  isEditing,
  setIsEditing,
  handleSave,
}: {
  device: string;
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  handleSave: () => void;
}) => {
  return (
    <div
      className="bg-primary absolute inset-x-0 top-0 w-full h-1/3 text-primary-foreground flex justify-between p-5 cursor-pointer"
      style={{ clipPath: 'polygon(0 0, 100% 0, 100% 25%, 0 100%)' }}
    >
      {device !== 'desktop' && (
        <Link href={'/settings'}>
          <Settings className="w-9 h-9 cursor-pointer" strokeWidth={1.5} />
        </Link>
      )}
      {!isEditing
        ? device !== 'desktop' && (
            <Edit3
              className="w-9 h-9 cursor-pointer"
              onClick={() => setIsEditing(!isEditing)}
              strokeWidth={1.5}
            />
          )
        : device !== 'desktop' && (
            <Save
              className="w-9 h-9 cursor-pointer"
              onClick={() => {
                handleSave();
                setIsEditing(!isEditing);
              }}
              strokeWidth={1.5}
            />
          )}
    </div>
  );
};

export default UserProfileBanner;
