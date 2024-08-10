import { useTranslations } from 'next-intl';

const ErrorForm = ({ name, form }: { name: string; form: any }) => {
  const err = useTranslations('app.errors');
  const errorMessage = form.formState.errors[name]?.message;
  if (!errorMessage) {
    return null;
  }
  return (
    <div className="flex gap-1 items-center">
      <span className="bg-destructive rounded-full p-1 text-destructive-foreground w-4 h-4 flex justify-center items-center text-xs">
        !
      </span>
      <p className="text-sm font-semibold text-destructive text-left">
        {err(errorMessage)}
      </p>
    </div>
  );
};
export default ErrorForm;
