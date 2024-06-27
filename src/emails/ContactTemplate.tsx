import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Heading,
  Section,
} from '@react-email/components';

const ContactTemplate = ({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) => {
  return (
    <Html>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          <Heading style={headingStyle}>New Contact Request</Heading>
          <Section style={sectionStyle}>
            <Text style={labelStyle}>From:</Text>
            <Text style={valueStyle}>{name}</Text>
          </Section>
          <Section style={sectionStyle}>
            <Text style={labelStyle}>Email:</Text>
            <Link href={`mailto:${email}`} style={linkStyle}>
              {email}
            </Link>
          </Section>
          <Section style={sectionStyle}>
            <Text style={labelStyle}>Message:</Text>
            <Text style={messageStyle}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const bodyStyle = {
  backgroundColor: '#f3f4f6',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
};

const containerStyle = {
  backgroundColor: '#ffffff',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  margin: '0 auto',
  maxWidth: '600px',
};

const headingStyle = {
  fontSize: '25px',
  fontWeight: 'bold',
  color: '#1f2937',
  marginBottom: '20px',
};

const sectionStyle = {
  marginBottom: '15px',
};

const labelStyle = {
  fontSize: '14px',
  fontWeight: 'bold',
  color: '#4b5563',
};

const valueStyle = {
  fontSize: '14px',
  color: '#374151',
};

const linkStyle = {
  fontSize: '14px',
  color: '#1d4ed8',
  textDecoration: 'underline',
};

const messageStyle = {
  fontSize: '14px',
  color: '#374151',
  whiteSpace: 'pre-line',
};

export default ContactTemplate;
