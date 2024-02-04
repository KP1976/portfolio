export const clearInputs = (
  nameRef: React.RefObject<HTMLInputElement>,
  emailRef: React.RefObject<HTMLInputElement>,
  messageRef: React.RefObject<HTMLTextAreaElement>
) => {
  if (nameRef.current) {
    nameRef.current.value = '';
  }
  if (emailRef.current) {
    emailRef.current.value = '';
  }
  if (messageRef.current) {
    messageRef.current.value = '';
  }
};
