import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import React from 'react';
import { Badge } from '../components/Badge';
import { Box } from '../components/Box';
import { Button } from '../components/Button';
import { Flex } from '../components/Flex';
import { primitivesRoutes, RouteProps } from '../lib/primitivesRoute';
import { NavHeading, NavItem } from './DocNav';
import { Text } from '../components/Text';
import { ScrollArea } from './ScrollArea';
import { Container } from '../components/Container';
import { css } from '@stitches/react';

export default function PrimitivesPage({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Flex
      css={{
        flexDirection: 'column',
        '@bp2': { flexDirection: 'row' },
      }}
    >
      <Box
        css={{
          width: '100%',
          maxHeight: 'auto',
          borderBottom: '1px solid',
          borderColor: '$slate6',
          WebkitOverflowScrolling: 'touch',
          overflowX: 'hidden',
          left: 0,
          top: '0',
          zIndex: '$zIndices$max',
          position: 'fixed',
          backgroundColor: '$loContrast',

          ...(isOpen ? { bottom: 0 } : {}),

          '@bp2': {
            bottom: 0,
            width: '250px',
            borderRight: '1px solid',
            borderBottom: '0',
            borderColor: '$slate6',
          },
        }}
      >
        <ScrollArea>
          <Flex
            css={{
              alignItems: 'center',
              py: '$2',
              px: '$4',
              '@bp2': { display: 'none' },
            }}
          >
            <Box css={{ ml: '-$1' }}>
              <Button
                ghost
                onClick={() => {
                  setIsOpen(!isOpen);
                  // if (isOpen === true) document.body.style.overflow = 'visible';
                  // if (isOpen === false) document.body.style.overflow = 'hidden';
                }}
                state={isOpen ? 'active' : undefined}
              >
                <HamburgerMenuIcon />
                <Box css={{ ml: '$2', color: '$tomatoA11' }}>Menu</Box>
              </Button>
            </Box>
          </Flex>

          <Box
            css={{
              display: isOpen ? 'block' : 'none',
              '@bp2': { display: 'block', mt: '$4' },
            }}
          >
            {primitivesRoutes.map((section: RouteProps) => (
              <Box key={section.label} css={{ mb: '$4' }}>
                <NavHeading>{section.label}</NavHeading>
                {section.pages.map((page) => {
                  const isBeta = page.beta;
                  const isDraft = page.draft;
                  const isDeprecated = page.deprecated;
                  return (
                    <NavItem
                      key={page.slug}
                      href={`/${page.slug}`}
                      disabled={isDraft}
                      // active={currentPageSlug === page.slug}
                    >
                      <Text size="2" css={{ color: 'inherit', lineHeight: '1' }}>
                        {page.title}
                      </Text>
                      {isBeta ? (
                        <Badge css={{ ml: '$2' }} variant="blue">
                          Beta
                        </Badge>
                      ) : null}
                      {isDraft ? <Badge css={{ ml: '$2' }}>Coming soon</Badge> : null}
                      {isDeprecated ? (
                        <Badge variant="yellow" css={{ ml: '$2' }}>
                          Deprecated
                        </Badge>
                      ) : null}
                    </NavItem>
                  );
                })}
              </Box>
            ))}
            <Box css={{ height: '$5', '@bp2': { height: '$8' } }} />
          </Box>
        </ScrollArea>
      </Box>
      <Box
        css={{
          maxWidth: '100%',
          flex: 1,
          pt: '$8',
          pb: '$5',
          zIndex: 0,

          '@bp2': { pb: '$9', pl: '250px' },
          // '@media (min-width: 1440px)': { pr: '250px' },
        }}
      >
        <Container size="3" css={{ minWidth: '320px', position: 'relative' }}>
          {children}
        </Container>
      </Box>
    </Flex>
  );
}
