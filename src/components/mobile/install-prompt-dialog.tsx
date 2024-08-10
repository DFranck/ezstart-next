// src/components/install-prompt-dialog.tsx

import { useTranslations } from 'next-intl';
import { Button } from '../ui/button';

interface InstallPromptDialogProps {
  onAccept: () => void;
  onDecline: () => void;
}

function InstallPromptDialog({
  onAccept,
  onDecline,
}: InstallPromptDialogProps) {
  const t = useTranslations('app.pwa');
  console.log('Rendering InstallPromptDialog');

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/80 px-5">
      <div className="bg-muted p-6 rounded border shadow-lg">
        <h2 className="text-lg font-semibold mb-4">{t('popup-title')}</h2>
        <p className="mb-4">{t('popup-description')}</p>
        <div className="flex justify-end space-x-2">
          <Button onClick={onAccept} size={'lg'} className="text-lg">
            {t('popup-accept')}
          </Button>
          <Button
            variant={'outline'}
            size={'lg'}
            className="text-lg"
            onClick={onDecline}
          >
            {t('popup-decline')}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default InstallPromptDialog;
