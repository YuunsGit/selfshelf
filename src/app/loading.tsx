import LoadingAnimation from "@/assets/animations/loading";

export default function Loading() {
  return (
    <main className="mx-auto my-4 flex h-full max-w-6xl flex-grow items-center text-center">
      {/*<h1 className="text-4xl font-bold text-text">&bull; Library &bull;</h1>*/}
      {/*<div className="mt-16 grid grid-cols-4 place-items-center gap-y-12">*/}
      {/*  {[...new Array(12)]?.map((_, index) => (*/}
      {/*    <>*/}
      {/*      <div*/}
      {/*        key={index}*/}
      {/*        className="mt-4 h-[250px] w-[150px] animate-pulse rounded-md border border-taupe border-opacity-20 bg-taupe bg-opacity-40 shadow-2xl"*/}
      {/*      />*/}
      {/*      {(index + 1) % 4 === 0 && (*/}
      {/*        <Image*/}
      {/*          key={index * 2}*/}
      {/*          priority={index < 10}*/}
      {/*          src="/shelf.png"*/}
      {/*          width={1400}*/}
      {/*          height={50}*/}
      {/*          alt="Shelf"*/}
      {/*          className="-z-10 col-span-4 -translate-y-16"*/}
      {/*          style={{*/}
      {/*            filter: "drop-shadow(0px 20px 15px #222)",*/}
      {/*          }}*/}
      {/*        />*/}
      {/*      )}*/}
      {/*    </>*/}
      {/*  ))}*/}
      {/*</div>*/}
      <LoadingAnimation />
    </main>
  );
}
