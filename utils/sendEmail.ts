export const sendEmail = async (formData: FormData) => {
  console.log('Running on serwer');
  console.log(formData.get('sendEmail'));
  console.log(formData.get('message'));
};
