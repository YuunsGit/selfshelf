export default function Footer() {
  return (
    <footer className="mt-8 flex w-screen flex-col justify-between py-6 text-text text-opacity-70 lg:mt-16">
      <div className="mx-auto text-center">
        Self Shelf &bull; This is an{" "}
        <a
          href="https://github.com/YuunsGit/selfshelf"
          className="z-0 inline-block underline underline-offset-2 hover:text-stone-900"
          target="_blank"
          rel="noreferrer"
        >
          open source
        </a>{" "}
        project.
      </div>
    </footer>
  );
}
