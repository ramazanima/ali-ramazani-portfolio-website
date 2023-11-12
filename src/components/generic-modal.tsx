import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import React, { Fragment, ReactNode, useRef } from 'react';

interface ModalLayoutProps {
  children: ReactNode;
  title?: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  mainStyles?: string;
  showCloseButton?: boolean;
}

export const ModalLayout = ({
  children,
  open,
  setOpen,
  mainStyles,
  showCloseButton = true,
}: ModalLayoutProps) => {
  const cancelButtonRef = useRef(null);
  return (
    <Transition.Root as={Fragment} show={open}>
      <Dialog as="div" className="relative z-50" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0  backdrop-blur-sm transition-opacity" />
        </Transition.Child>
        <div className="fixed inset-0 z-10 overflow-y-auto bg-black/20">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className={`relative h-full w-full transform overflow-hidden rounded-lg bg-primary text-left shadow-xl transition-all ${mainStyles}`}
              >
                <div className="h-full w-full bg-primary">
                  <div className="w-full text-left sm:mt-0">
                    
                    <div className="overflow-y-auto h-[600px]">{children}</div>
                  </div>
                </div>
                {showCloseButton && (
                  <button
                    className="absolute right-5 top-5 w-fit"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                    type="button"
                  >
                    <XMarkIcon className="h-7 w-7 text-tertiary" />
                  </button>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};