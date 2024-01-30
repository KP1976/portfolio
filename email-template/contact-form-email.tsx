import React from 'react';
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from '@react-email/components';

type ContactFormEmailProps = {
  message: string;
  senderName: string;
  senderEmail: string;
};

const ContactFormEmail = ({
  message,
  senderName,
  senderEmail,
}: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Nowa wiadomość ze strony twojego portfolio</Preview>
      <Body>
        <Container>
          <Section
            style={{
              backgroundColor: '#f5f5f5',
              padding: '30px',
            }}
          >
            <Heading style={{ textAlign: 'center' }}>
              Otrzymałeś tę wiadomość z&nbsp;formularza kontaktowego
            </Heading>
            <Text style={{ fontSize: '18px' }}>{message}</Text>
            <Hr />
            <Text>
              Email wysłał(a) Ci {senderName} z emaila: {senderEmail}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactFormEmail;
