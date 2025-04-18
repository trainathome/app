import type { TextRef, ViewRef } from '@rn-primitives/types';
import * as React from 'react';
import { Text, type TextProps, View, type ViewProps } from 'react-native';
import { TextClassContext } from '~/components/ui/text';
import { cn } from '~/lib/utils';

interface CardProps extends ViewProps {
  bottomColor?: string;
}

const Card = React.forwardRef<ViewRef, CardProps>(
  ({ className, bottomColor, ...props }, ref) => (
    <View
      ref={ref}
      className={cn(
        'rounded-lg border border-border bg-card shadow-sm shadow-foreground/10 overflow-hidden',
        className
      )}
    >
      <View className='p-6' {...props} />
      {bottomColor && <View className={cn('w-full h-1', bottomColor)} />}
    </View>
  )
);
Card.displayName = 'Card';

const CardHeader = React.forwardRef<ViewRef, ViewProps>(
  ({ className, ...props }, ref) => (
    <View
      ref={ref}
      className={cn('flex flex-col space-y-1.5 p-6', className)}
      {...props}
    />
  )
);
CardHeader.displayName = 'CardHeader';

interface CardTitleProps extends TextProps {
  icon?: React.ReactNode;
  iconClassName?: string;
}

const CardTitle = React.forwardRef<TextRef, CardTitleProps>(
  ({ className, icon, iconClassName, ...props }, ref) => (
    <View className='flex flex-row items-end gap-x-2 mb-4'>
      {icon && (
        <View className={cn('flex justify-center', iconClassName)}>
          {React.cloneElement(icon as React.ReactElement, {
            className: 'h-4 w-4 text-black dark:text-white',
          })}
        </View>
      )}
      <Text
        role='heading'
        aria-level={3}
        ref={ref}
        className={cn(
          'text-sm text-card-foreground font-semibold leading-none tracking-tight',
          className
        )}
        {...props}
      />
    </View>
  )
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<TextRef, TextProps>(
  ({ className, ...props }, ref) => (
    <Text
      ref={ref}
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  )
);
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<ViewRef, ViewProps>(
  ({ className, ...props }, ref) => (
    <TextClassContext.Provider value='text-card-foreground'>
      <View ref={ref} className={cn('p-6', className)} {...props} />
    </TextClassContext.Provider>
  )
);
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<ViewRef, ViewProps>(
  ({ className, ...props }, ref) => (
    <View
      ref={ref}
      className={cn('flex flex-row items-center p-6 pt-0', className)}
      {...props}
    />
  )
);
CardFooter.displayName = 'CardFooter';

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};
