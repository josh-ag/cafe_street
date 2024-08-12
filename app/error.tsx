"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.log(error);
  return (
    <div className="flex-1 flex items-center justify-center h-full min-h-full mt-12">
      <h2 className="text-slate-800 font-bold text-3xl p-4">Oops</h2> |
      <p className="text-center font-regular text-slate-500 p-4">
        Something went wrong!
      </p>
    </div>
  );
}
