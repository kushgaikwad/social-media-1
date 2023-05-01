import useLoginModal from '@/hooks/UseLoginModal'
import useRegisterModal from '@/hooks/UseRegisterModal';
import { signIn } from 'next-auth/react';
import React, { useCallback, useState } from 'react'
import Input from '../Input';
import Modal from '../Modal';
import RegisterModal from './RegisterModal';

type Props = {}

const LoginModal = (props: Props) => {

    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = useCallback( async () => {
            try {
                console.log('Ssubmit started')
                setIsLoading(true);
                await signIn('credentials', { email, password })
                console.log('Signed In')
                loginModal.onClose();
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        },
        [loginModal, email, password],
    )

    const onToggle = useCallback(() => {
        if(isLoading) return;
        loginModal.onClose();
        registerModal.onOpen();
    },[isLoading, registerModal, loginModal]);

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={isLoading}
            />
            <Input
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                disabled={isLoading}
            />
        </div>
    )

    const footerContent = (
        <div className="mt-4 text-center text-neutral-400">
          <p>First time using Twitter?
            <span 
              onClick={onToggle} 
              className="text-white cursor-pointer hover:underline"
              > Create an account</span>
          </p>
        </div>
      )


    return (
        <Modal
        disabled={isLoading}
        isOpen={loginModal.isOpen}
        title="Login"
        actionLabel="Sign in"
        onClose={loginModal.onClose}
        onSubmit={onSubmit}
        body={bodyContent}
        footer={footerContent}
      />
    )
}

export default LoginModal