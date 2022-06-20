import styles from './styles.module.scss';
import { useSession, signIn } from 'next-auth/react';

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const [session] = useSession();

  const handleSubscribe = () => {
    if(!session) {
      signIn('github')
      return;
    }

    
  }

  return ( 
    <button 
      className={styles.subscribeButton}
      type="button"
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  );
}