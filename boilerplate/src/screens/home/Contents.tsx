import {FlashList} from '@shopify/flash-list';
import React from 'react';
import {Card} from '../../components/Card';
import {CategoryItem} from '../../types/categority-item';
import {Separator} from './Categories';

type Props = {
  data: CategoryItem[];
};
export const Contents = ({data}: Props) => {
  return (
    <FlashList
      horizontal
      data={data}
      estimatedItemSize={216}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={Separator}
      renderItem={({item}) => (
        <Card
          image={item.image}
          title={item.title}
          description={item.description}
        />
      )}
    />
  );
};
