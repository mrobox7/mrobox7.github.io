export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline-soft">
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center gap-6 px-md py-16 text-center tablet:px-xl desktop:px-section">
        <nav
          aria-label="Footer"
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-body-sm text-muted transition-colors duration-200 hover:text-ink"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-body-sm text-muted transition-colors duration-200 hover:text-ink"
          >
            LinkedIn
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            className="text-body-sm text-muted transition-colors duration-200 hover:text-ink"
          >
            Resume
          </a>

          <a
            href="mailto:hello@example.com"
            className="text-body-sm text-muted transition-colors duration-200 hover:text-ink"
          >
            Email
          </a>
        </nav>

        <p className="text-caption text-muted">
          © {year} Mohit Bajaj
        </p>
      </div>
    </footer>
  );
}