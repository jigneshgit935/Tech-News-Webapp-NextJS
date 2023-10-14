import SignInButton from '@/components/SignInBtn';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function SignIn() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/dashboard');
  }
  return (
    <div>
      <SignInButton />
    </div>
  );
}
