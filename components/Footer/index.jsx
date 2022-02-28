import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-center lg:text-left text-gray-600">
      <div className="max-w-6xl mx-auto">
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div>
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">Useful links</h6>
              <p className="mb-4">
                <Link href="/border-information">
                  <a className="text-gray-600">Border Info</a>
                </Link>
              </p>
              <p className="mb-4">
                <Link href="/">
                  <a className="text-gray-600">Host a refugee</a>
                </Link>
              </p>
            </div>

            <div>
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">Contacts</h6>
              <p className="flex items-center justify-center md:justify-start mb-4">
                <Link href="/">
                  <a className="text-gray-600">Twitter</a>
                </Link>
              </p>
              <p className="flex items-center justify-center md:justify-start mb-4">
                <Link href="/">
                  <a className="text-gray-600">Facebook</a>
                </Link>
              </p>
              <p className="flex items-center justify-center md:justify-start mb-4">
                <Link href="/">
                  <a className="text-gray-600">Telegram</a>
                </Link>
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <Link href="/">
                  <a className="text-gray-600">Instagram</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center p-6 bg-gray-200">
        <span>© {new Date().getFullYear()} Copyright </span>
        <Link className="text-gray-600 font-semibold" href="/">
          LeaveUkraine
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
