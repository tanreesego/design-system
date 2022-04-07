import React from 'react';
import NextLink from 'next/link';
import { Text } from '../components/Text';
import { Box } from '../components/Box';

export function NavHeading({ children }: { children: React.ReactNode }) {
  return (
    <Text
      as="h4"
      size="3"
      css={{
        fontWeight: 500,
        px: '$5',
        py: '$2',
      }}
    >
      {children}
    </Text>
  );
}

type NavItemProps = {
  children: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  href: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export function NavItem({ children, active, disabled, href, ...props }: NavItemProps) {
  const isExternal = href.startsWith('http');

  return (
    <Box
      as={isExternal || disabled ? 'span' : (NextLink as any)}
      {...(isExternal || disabled ? {} : { href, passHref: true })}
    >
      <Box
        {...props}
        {...(isExternal ? { href, target: '_blank' } : {})}
        as={disabled ? 'div' : 'a'}
        css={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
          color: disabled ? '$gray10' : '$hiContrast',
          py: '$2',
          px: '$5',
          backgroundColor: active ? '$violet5' : 'transparent',
          userSelect: 'none',
          minHeight: '$6',
          transition: 'background-color 50ms linear',
          ...(disabled ? { pointerEvents: 'none' } : {}),
          '&:hover': {
            backgroundColor: active ? '$violet5' : '$violet4',
          },
          '&:focus': {
            outline: 'none',
            boxShadow: '0 0 0 1px $colors$violet7',
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
