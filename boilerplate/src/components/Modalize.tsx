import React, { forwardRef, memo, ReactNode } from 'react';
import { Modalize as Modal } from 'react-native-modalize';
import { Text } from './Text';

type Props = {
  children: ReactNode;
  title: string;
};
export const Modalize = memo(
  forwardRef<Modal, Props>(({ children, title }, ref) => {
    return (
      <Modal
        ref={ref}
        HeaderComponent={
          <Text center h3 marginT-10>
            {title}
          </Text>
        }>
        {children}
      </Modal>
    );
  })
);
