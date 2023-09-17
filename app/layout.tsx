import '@styles/globals.css';
import styles from '@styles/Home.module.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <head />
      <body>
        <div className={styles['flare1']}></div>
        <div className={styles['flare2']}></div>
        {children}
      </body>
    </html>
  );
}
