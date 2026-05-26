export const metadata = {
  title: "TELOS",
  description: "텔로스 진로진학연구소",
};

export default function RootLayout({ children }) {
  return (
    <html lang=\"ko\">
      <body style={{margin:0}}>
        {children}
      </body>
    </html>
  );
}
