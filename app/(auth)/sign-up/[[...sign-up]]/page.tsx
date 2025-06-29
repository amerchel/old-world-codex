import { SignUp } from '@clerk/nextjs';
import {clerkAppearance} from "@/app/components/ui/ClerkAppearance";

export default function Page() {
  return (
    <div
      style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <SignUp appearance={clerkAppearance} />
    </div>
  );
}