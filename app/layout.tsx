import '@/app/ui/global.css';
import  {imbplexmono} from '@/app/ui/fonts';
 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${imbplexmono.className} antialiased`}>{children}</body>
    </html>
  );
}
