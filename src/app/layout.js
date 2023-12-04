import './globals.css';

export const metadata = {
  title: 'React next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
