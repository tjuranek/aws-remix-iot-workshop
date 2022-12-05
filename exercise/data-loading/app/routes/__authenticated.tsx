import { Outlet } from '@remix-run/react';
import { Navbar } from '~/components/Navbar';

export default function App() {
  return (
    <>
      <Navbar />

      <main className="mx-[15%]">
        <div className="my-4">
          <Outlet />
        </div>
      </main>

      <div className="fixed bottom-0 left-0 w-full">
        <footer
          data-test-id="footer"
          className="footer footer-center p-4 bg-base-300 text-base-content"
        >
          <div>
            <p data-test-id="footer-copyright">
              © {new Date().getFullYear()} Printster
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
