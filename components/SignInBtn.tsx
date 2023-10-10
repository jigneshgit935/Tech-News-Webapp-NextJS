import Image from 'next/image';

export default function SignInButton() {
  return (
    <>
      <h1 className="text-center mt-8">Sign in</h1>
      <div className="mt-4 p-4 flex flex-col  items-center justify-center gap-4">
        <button className="flex items-center p-4 rounded-full gap-4 hover:bg-slate-100/25 transition">
          <span>
            <Image
              src="/github-logo.svg"
              width={30}
              height={30}
              alt="githubLogo"
            />
          </span>
          Sign In with GitHub
        </button>
        <button className="flex items-center p-4 rounded-full gap-4 hover:bg-slate-100/25 transition">
          <span>
            <Image
              src="/google-logo.svg"
              width={30}
              height={30}
              alt="githubLogo"
            />
          </span>
          Sign In with Google
        </button>
      </div>
    </>
  );
}
