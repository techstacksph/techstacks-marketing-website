import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';
import { cn } from '@/utils/cn';
import { H2 } from './typography';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  title?: string;
}
export function Modal({
  open,
  onClose,
  children,
  className,
  title,
}: ModalProps) {
  if (typeof window === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.div
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-40 bg-black/50 flex justify-center items-center"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
        >
          <motion.div
            animate={{ scale: 1, opacity: 1 }}
            className={`bg-popover border  rounded-md w-full max-w-4xl shadow-lg relative  ${className} `}
            exit={{ scale: 0.9, opacity: 0 }}
            initial={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <div
              className={cn(
                `flex w-full  mb-3 px-3 md:px-6   transition-all backdrop-blur-sm border-b  bg-gradient-to-r  to-transparent 
              from-primary/100 border-border
                `,
              )}
            >
              <H2 className="text-popover-foreground w-full  font-semibold shadow-sm">
                {title}
              </H2>
              <button
                className=" text-md font-bold text-secondary-"
                onClick={onClose}
                type="button"
              >
                <X />
              </button>
            </div>

            {children}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
