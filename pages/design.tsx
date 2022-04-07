import React from 'react';

// Building blocks components
import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { Box } from '../components/Box';
import { Button } from '../components/Button';
import { Text } from '../components/Text';
import { Link } from '../components/Link';
import { Separator } from '../components/Separator';
import { Heading } from '../components/Heading';
import { Sheet, SheetTrigger, SheetContent } from '../components/Sheet';
import { Badge } from '../components/Badge';
import { Flex } from '../components/Flex';
import {
  Accordion,
  AccordionTrigger,
  AccordionItem,
  AccordionContent,
} from '../components/Accordion';

// Custom Components built for this site
import { ScrollArea } from '../custom/ScrollArea';
import { NavHeading, NavItem } from '../custom/DocNav';

// lib folder
import { allPrimitivesRoutes, primitivesRoutes, RouteProps } from '../lib/primitivesRoute';

// Radix icons
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

export default function Design() {
  return (
    <Box
      css={{
        maxWidth: '100%',
        flex: 1,
        pt: '$8',
        pb: '$5',
        zIndex: 0,

        // '@bp2': { pb: '$9', pl: '250px' },
        // '@media (min-width: 1440px)': { pr: '250px' },
      }}
    >
      <Section size="3">
        <Container size="2">
          <Heading id="sheet" css={{ mb: '$6', scrollMarginTop: '$7' }}>
            Sheet
          </Heading>
          <Sheet>
            <SheetTrigger asChild>
              <Button>Open Sheet</Button>
            </SheetTrigger>
            <SheetContent></SheetContent>
          </Sheet>
          <Sheet>
            <SheetTrigger asChild>
              <Button>Top</Button>
            </SheetTrigger>
            <SheetContent side="top"></SheetContent>
          </Sheet>
          <Sheet>
            <SheetTrigger asChild>
              <Button>Right</Button>
            </SheetTrigger>
            <SheetContent side="right"></SheetContent>
          </Sheet>
          <Sheet>
            <SheetTrigger asChild>
              <Button>Bottom</Button>
            </SheetTrigger>
            <SheetContent side="bottom"></SheetContent>
          </Sheet>
          <Sheet>
            <SheetTrigger asChild>
              <Button>Left</Button>
            </SheetTrigger>
            <SheetContent side="left"></SheetContent>
          </Sheet>
        </Container>
      </Section>

      <Flex css={{ jc: 'center' }}>
        <Separator size="2" />
      </Flex>

      <Section size="3">
        <Container size="2">
          <Heading id="accordion" css={{ mb: '$6', scrollMarginTop: '$7' }}>
            Accordion
          </Heading>
          <Accordion type="single">
            <AccordionItem value="accordion-one">
              <AccordionTrigger>
                <Text size="3" css={{ fontWeight: 500 }}>
                  Accordion one
                </Text>
              </AccordionTrigger>
              <AccordionContent>
                <Text size="3" css={{ lineHeight: '23px' }}>
                  The other main iimprovement is with tables, which we&apos;ll probably use a lot.
                  With horizontal sssoverflow on small devices and when zoomed in, tables are a pain
                  to navigate. I added a focus wrapper that will announce the table context to the
                  user when focused, which also allows keyboard users to navigate the overflow more
                  easily.
                </Text>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="accordion-two">
              <AccordionTrigger>
                <Text size="3" css={{ fontWeight: 500 }}>
                  Accordion two
                </Text>
              </AccordionTrigger>
              <AccordionContent>
                <Text size="3" css={{ lineHeight: '23px' }}>
                  The other main improvement is with tables, which we&apos;ll probably use a lot.
                  With horizontal overflow on small devices and when zoomed in, tables are a pain to
                  navigate. I added a focus wrapper that will announce the table context to the user
                  when focused, which also allows keyboard users to navigate the overflow more
                  easily.
                </Text>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="accordion-three">
              <AccordionTrigger>
                <Text size="3" css={{ fontWeight: 500 }}>
                  Accordion one
                </Text>
              </AccordionTrigger>
              <AccordionContent>
                <Text size="3" css={{ lineHeight: '23px' }}>
                  The other main improvement is with tables, which we&apos;ll probably use a lot.
                  With horizontal overflow on small devicess and when zoomed in, tables are a pain
                  to navigate. I added a focus wrapper that will announce the table context to the
                  user when focused, which also allows keyboard users to navigate the overflow more
                  easily.
                </Text>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="accordion-four">
              <AccordionTrigger>
                <Text size="3" css={{ fontWeight: 500 }}>
                  Accordion two
                </Text>
              </AccordionTrigger>
              <AccordionContent>
                <Text size="3" css={{ lineHeight: '23px' }}>
                  The other main improvement is with tables, which we&apos;ll probably use a lot.
                  With horizontal overflow on small devices and when zoomed in, tables are a pain to
                  navigate. I added a focus wrapper that will announce the table context to the user
                  when focused, which also allows keyboard users to navigate the overflow more
                  easily.
                </Text>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Container>
      </Section>

      <Flex css={{ jc: 'center' }}>
        <Separator size="2" />
      </Flex>
    </Box>
  );
}
