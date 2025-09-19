import "./globals.css";

export const metadata = {
  title: "RoboFriends - Next.js",
  description: "Find your robot friends",
  icons: {
    icon: [
      { url: '/robot_favicon.ico' }, // .ico favicon
      { url: '/robot_favicon-96x96.png', sizes: '96x96', type: 'image/png' }, // PNG favicon
    ],
    apple: [
      { url: '/robot_apple-touch-icon.png', sizes: '180x180', type: 'image/png' }, // Apple touch icon
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}