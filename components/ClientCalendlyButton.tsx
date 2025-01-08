'use client';

import React from 'react';
import { useCalendlyEventListener, InlineWidget } from "react-calendly";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar } from "lucide-react";

interface ClientCalendlyButtonProps {
  className?: string;
}

const ClientCalendlyButton: React.FC<ClientCalendlyButtonProps> = ({ className }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  useCalendlyEventListener({
    onEventScheduled: (e) => {
      setIsOpen(false);
    },
  });

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className={className}>
              <Calendar className='mr-2 w-4 h-4' />
              Schedule a Meeting
            </Button>
          </DialogTrigger>
          <DialogContent className='max-w-[90%] sm:max-w-[50%] sm:max-h-[80vh] md:py-6 py-1 bg-white'>
            <div className='h-[70vh]'>
              <InlineWidget
                url='https://calendly.com/kulmidigital'
                styles={{ height: "100%", width: "100%" }}
              />
            </div>
          </DialogContent>
        </Dialog>
    );
};

export default ClientCalendlyButton;
