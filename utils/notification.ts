import { toast } from 'sonner';
import { isEmailValid } from './isEmailValid';

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
  }

  if (!isEmailValid(emailRef.current?.value as string)) {
    toast.error('Zły email! Popraw go!');
  }

  if (isEmailValid(emailRef.current?.value as string)) {
    if (nameRef.current?.value !== '' && messageRef.current?.value !== '') {
      toast.success('Wiadomość została wysłana!');
    }
  }
};
