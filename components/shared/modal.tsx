"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ModalProps {
  trigger?: React.ReactElement | null;
  title: string;
  description?: string;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function Modal({
  trigger,
  title,
  description,
  footer,
  children,
  open,
  setOpen,
}: Readonly<ModalProps>) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {trigger ? <DialogTrigger render={trigger} /> : null}
      <DialogContent className="max-w-96 lg:max-w-(--breakpoint-lg) rounded-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
        <DialogFooter>{footer}</DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
