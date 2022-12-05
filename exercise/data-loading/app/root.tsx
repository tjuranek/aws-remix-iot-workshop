import type { MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react';
import tailwind from './styles/tailwind.css';

export function links() {
  return [{ rel: 'stylesheet', href: tailwind }];
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Printster',
  viewport: 'width=device-width,initial-scale=1'
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-screen w-screen">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}