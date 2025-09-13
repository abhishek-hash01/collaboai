import { useRouter } from 'next/navigation';
import { useLayoutEffect, useState } from 'react';
import { auth } from '@/lib/firebase/client';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const WithAuthComponent: React.FC<P> = (props) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useLayoutEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (!user) {
          const currentPath = window.location.pathname + window.location.search;
          sessionStorage.setItem('redirectAfterLogin', currentPath);
          router.replace('/login');
        } else {
          setIsLoading(false);
        }
      });

      return () => unsubscribe();
    }, [router]);

    if (isLoading) {
      return (
        <div className="flex h-screen items-center justify-center">
          <LoadingSpinner />
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };

  return WithAuthComponent;
};

export default withAuth;
