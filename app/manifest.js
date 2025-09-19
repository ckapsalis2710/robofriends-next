export default function manifest() {
  return {
    name: 'RoboFriends',
    short_name: 'RoboFriends',
    description: 'Find your robot friends',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/robot_favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/robot_favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: '/robot_apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'maskable any',
      },
    ],
  };
}