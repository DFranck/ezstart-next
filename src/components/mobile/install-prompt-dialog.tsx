// src/components/install-prompt-dialog.tsx

import { Button } from "../ui/button";

interface InstallPromptDialogProps {
  onAccept: () => void;
  onDecline: () => void;
}

function InstallPromptDialog({
  onAccept,
  onDecline,
}: InstallPromptDialogProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/80">
      <div className="bg-muted p-6 rounded shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Installer l'application</h2>
        <p className="mb-4">Voulez-vous installer cette application ?</p>
        <div className="flex justify-end space-x-2">
          <Button onClick={onAccept}>Oui</Button>
          <Button variant={"outline"} onClick={onDecline}>
            Non
          </Button>
        </div>
      </div>
    </div>
  );
}

export default InstallPromptDialog;
