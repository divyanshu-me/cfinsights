import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full py-4 bg-gray-100 dark:bg-gray-900 text-gray-500 dark:text-gray-400 text-sm border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 flex flex-col md:flex-row flex-wrap items-center justify-between gap-2 text-center">
        <div>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            CF Visualizer
          </span>
        </div>
        <div>
          Built with <span className="text-red-500">♥</span> by{" "}
          <a
            href="https://www.linkedin.com/in/divyanshu-kumar-me/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
          >
            Divyanshu Kumar
          </a>
        </div>
        <a
          href="https://github.com/divyanshu-me"
          className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <FaGithub /> GitHub
        </a>
      </div>
    </footer>
);
}
