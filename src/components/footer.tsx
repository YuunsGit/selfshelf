export default function Footer() {
  return (
    <footer className="mt-16 flex w-screen flex-col justify-between bg-stone-100 py-6 text-stone-500">
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