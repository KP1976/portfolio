import { toast } from 'sonner';

export const toastNotification = (
  nameRef: React.RefObject<HTMLInputElement>,
  emailRef: React.RefObject<HTMLInputElement>,
  messageRef: React.RefObject<HTMLTextAreaElement>
) => {
  if (
    nameRef.current?.value === '' ||
    emailRef.current?.value === '' ||
    messageRef.current?.value === ''
  ) {
    toast.error('Wypełnij wszystkie pola!');
  } else {
    toast.success('Wiadomość została wysłana!');
  }
};
