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
import { Dialog, DialogTrigger, DialogContent } from '../components/Dialog';
import { Popover, PopoverTrigger, PopoverContent, PopoverClose } from '../components/Popover';
import { ControlGroup } from '../components/ControlGroup';
import { Select } from '../components/Select';
import { TextField } from '../components/TextField';
import { IconButton } from '../components/IconButton';
import { Avatar } from '@radix-ui/react-avatar';
import { Avatars } from '../custom/Avatars';
import { Paragraph } from '../components/Paragraph';
import { Sup } from '../components/Sup';
import { Sub } from '../components/Sub';
import { TabLink } from '../components/Tablink';

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
import {
  ActivityLogIcon,
  ArrowRightIcon,
  BarChartIcon,
  CaretDownIcon,
  CheckIcon,
  CodeIcon,
  CommitIcon,
  Cross1Icon,
  ExclamationTriangleIcon,
  FontItalicIcon,
  FontStyleIcon,
  GearIcon,
  HeadingIcon,
  LetterCaseCapitalizeIcon,
  LetterCaseLowercaseIcon,
  LetterCaseUppercaseIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  ReaderIcon,
  ShadowNoneIcon,
  TextAlignCenterIcon,
  TextAlignJustifyIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
  TriangleUpIcon,
  VideoIcon,
  RocketIcon,
  HamburgerMenuIcon,
} from '@radix-ui/react-icons';

export default function Design() {
  return (
    <Box
      css={{
        maxWidth: '100%',
        flex: 1,
        pt: '$8',
        pb: '$5',

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

      <Container size="2">
        <Flex css={{ jc: 'left' }}>
          <Separator
            size="2"
            css={{
              '&[data-orientation=horizontal]': {
                height: 2,
                width: '84px',
                backgroundColor: '$crimson11',
              },
            }}
          />
        </Flex>
      </Container>

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

      <Container size="2">
        <Flex css={{ jc: 'left' }}>
          <Separator
            size="2"
            css={{
              '&[data-orientation=horizontal]': {
                height: 2,
                width: '84px',
                backgroundColor: '$crimson11',
              },
            }}
          />
        </Flex>
      </Container>

      <Section size="3">
        <Container size="2">
          <Heading id="dialog" css={{ mb: '$6', scrollMarginTop: '$7' }}>
            Dialog
          </Heading>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Open dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <Text size="5" as="h6" css={{ fontWeight: 500, mb: '$3' }}>
                Dialog Heading
              </Text>
              <Text size="3" as="p" css={{ lineHeight: '25px' }}>
                There are 5 variants to choose from. Use is for positive states. This is a link
                Traditional business literature won’t help you solve it- most of that stuff is
                focused on life after product/market fit, after the Trough of Sorrow.
              </Text>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button>Dialog</Button>
            </DialogTrigger>

            <DialogContent>
              <Text size="5" as="h6" css={{ fontWeight: 500, mb: '$3' }}>
                Dialog Heading
              </Text>
              <Text size="3" as="p" css={{ lineHeight: '25px' }}>
                There are 5 variants to choose from. Use is for positive states. This is a link
                Traditional business literature won’t help you solve it- most of that stuff is
                focused on life after product/market fit, after the Trough of Sorrow.
              </Text>

              <Popover>
                <PopoverTrigger asChild>
                  <Button>Open</Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverClose asChild>
                    <Button ghost>Close</Button>
                  </PopoverClose>
                </PopoverContent>
              </Popover>
            </DialogContent>
          </Dialog>
        </Container>
      </Section>

      <Container size="2">
        <Flex css={{ jc: 'left' }}>
          <Separator
            size="2"
            css={{
              '&[data-orientation=horizontal]': {
                height: 2,
                width: '84px',
                backgroundColor: '$crimson11',
              },
            }}
          />
        </Flex>
      </Container>

      <Section size="3">
        <Container size="2">
          <Heading id="controlgroup" css={{ mb: '$6', scrollMarginTop: '$7' }}>
            ControlGroup
          </Heading>
          <ControlGroup>
            <Button>Button</Button>
            <Button>Button</Button>
            <Button>Button</Button>
            <Button>Button</Button>
          </ControlGroup>
          <ControlGroup css={{ mt: '$6' }}>
            <Button>Button</Button>
            <Button>Button</Button>
          </ControlGroup>
          <ControlGroup css={{ mt: '$6' }}>
            <Button>Button</Button>
            <TextField placeholder="Hello world" />
          </ControlGroup>
          <ControlGroup css={{ mt: '$6' }}>
            <TextField placeholder="Hello world" />
            <Button>Button</Button>
          </ControlGroup>
          <ControlGroup css={{ mt: '$6' }}>
            <TextField size="1" placeholder="Hello world" />
            <Select>
              <option>Button</option>
              <option>Button</option>
              <option>Button</option>
              <option>Button</option>
              <option>Button</option>
            </Select>
          </ControlGroup>
          <ControlGroup css={{ mt: '$6' }}>
            <TextField placeholder="Hello world" />
            <TextField placeholder="Hello world" />
            <TextField placeholder="Hello world" />
          </ControlGroup>
          <ControlGroup css={{ mt: '$6' }}>
            <TextField size="2" placeholder="Hello world" />
            <Button size="2">Button</Button>
          </ControlGroup>
        </Container>
      </Section>

      <Container size="2">
        <Flex css={{ jc: 'left' }}>
          <Separator
            size="2"
            css={{
              '&[data-orientation=horizontal]': {
                height: 2,
                width: '84px',
                backgroundColor: '$crimson11',
              },
            }}
          />
        </Flex>
      </Container>

      <Section size="3">
        <Container size="2">
          <Heading id="popover" css={{ mb: '$6', scrollMarginTop: '$7' }}>
            Popover
          </Heading>
          <Flex css={{ gap: '$6', fw: 'wrap' }}>
            <Popover>
              <PopoverTrigger asChild>
                <Button>Popover</Button>
              </PopoverTrigger>
              <PopoverContent css={{ padding: '$3' }}>
                <Text size="2" css={{ lineHeight: '18px' }}>
                  The other main improvement is with tables, which we&apos;ll probably use a lot.
                  With horizontal overflow on small devices and when zoomed in.
                </Text>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button>Hide arrow</Button>
              </PopoverTrigger>
              <PopoverContent css={{ padding: '$3' }} hideArrow>
                <Text size="2" css={{ lineHeight: '18px' }}>
                  The other main improvement is with tables, which we&apos;ll probably use a lot.
                  With horizontal overflow on small devices and when zoomed in.
                </Text>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="blue">Blue</Button>
              </PopoverTrigger>
              <PopoverContent css={{ padding: '$3' }}>
                <Text size="2" css={{ lineHeight: '18px' }}>
                  The other main improvement is with tables, which we&apos;ll probably use a lot.
                  With horizontal overflow on small devices and when zoomed in.
                </Text>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="green">Green</Button>
              </PopoverTrigger>
              <PopoverContent css={{ padding: '$3' }}>
                <Text size="2" css={{ lineHeight: '18px' }}>
                  The other main improvement is with tables, which we&apos;ll probably use a lot.
                  With horizontal overflow on small devices and when zoomed in.
                </Text>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="red">Red</Button>
              </PopoverTrigger>
              <PopoverContent css={{ padding: '$3' }}>
                <Text size="2" css={{ lineHeight: '18px' }}>
                  The other main improvement is with tables, which we&apos;ll probably use a lot.
                  With horizontal overflow on small devices and when zoomed in.
                </Text>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button ghost>Ghost</Button>
              </PopoverTrigger>
              <PopoverContent css={{ padding: '$3' }}>
                <Text size="2" css={{ lineHeight: '18px' }}>
                  The other main improvement is with tables, which we&apos;ll probably use a lot.
                  With horizontal overflow on small devices and when zoomed in.
                </Text>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <IconButton>
                  <VideoIcon />
                </IconButton>
              </PopoverTrigger>
              <PopoverContent css={{ padding: '$3' }}>
                <Text size="2" css={{ lineHeight: '18px' }}>
                  The other main improvement is with tables, which we&apos;ll probably use a lot.
                  With horizontal overflow on small devices and when zoomed in.
                </Text>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Badge size="2" variant="violet" interactive>
                  Badge
                  <Box css={{ ml: '$1' }}>
                    <CaretDownIcon />
                  </Box>
                </Badge>
              </PopoverTrigger>
              <PopoverContent css={{ padding: '$3' }}>
                <Text size="2" css={{ lineHeight: '18px' }}>
                  The other main improvement is with tables, which we&apos;ll probably use a lot.
                  With horizontal overflow on small devices and when zoomed in.
                </Text>
              </PopoverContent>
            </Popover>
          </Flex>
        </Container>
      </Section>

      <Container size="2">
        <Flex css={{ jc: 'left' }}>
          <Separator
            size="2"
            css={{
              '&[data-orientation=horizontal]': {
                height: 2,
                width: '84px',
                backgroundColor: '$crimson11',
              },
            }}
          />
        </Flex>
      </Container>

      <Avatars />

      <Container size="2">
        <Flex css={{ jc: 'left' }}>
          <Separator
            size="2"
            css={{
              '&[data-orientation=horizontal]': {
                height: 2,
                width: '84px',
                backgroundColor: '$crimson11',
              },
            }}
          />
        </Flex>
      </Container>

      <Section size="3">
        <Container size="2">
          <Heading id="typography" css={{ mb: '$6', scrollMarginTop: '$7' }}>
            Typography
          </Heading>
          <Flex css={{ fd: 'column', gap: '$4' }}>
            <Heading size="4" as="h1">
              This is a heading size 4
            </Heading>
            <Heading size="3" as="h1">
              This is a heading size 3
            </Heading>
            <Heading size="2" as="h1">
              This is a heading size 2
            </Heading>
            <Heading size="1" as="h1">
              This is a heading size 1
            </Heading>
            <Paragraph size="2">
              This is a Paragraph size 2. Design in the target medium. Prototype with real
              components. Handoff production code.
            </Paragraph>
            <Paragraph size="1">
              This is a Paragraph size 1. A really long paragraph of text, to demonstrate prose
              text, like for example, the kind you might read in a blog post. The reason we&apos;re
              using prose here is because the most common use case for this container size is
              longform text. So we&apos;re previewing some longform text here so we can make sure
              the container width provides an optimal line length for this font size. yay
            </Paragraph>
            <Paragraph>
              This is a Sup and Sub demo. The kind you might read in a blog post.<Sup>1</Sup> This
              is a really long paragraph of text, to demonstrate prose text.<Sub>1</Sub>
            </Paragraph>
          </Flex>
        </Container>
      </Section>

      <Container size="2">
        <Flex css={{ jc: 'left' }}>
          <Separator
            size="2"
            css={{
              '&[data-orientation=horizontal]': {
                height: 2,
                width: '84px',
                backgroundColor: '$crimson11',
              },
            }}
          />
        </Flex>
      </Container>

      <Section size="3">
        <Container size="2">
          <Container size="2">
            <Heading id="tablink" css={{ mb: '$6', scrollMarginTop: '$7' }}>
              TabLink
            </Heading>
          </Container>
          <Flex css={{ borderBottom: '1px solid $slate6', overflowX: 'auto', pb: '0' }}>
            <TabLink href="#" active>
              <Box css={{ mr: '$1' }}>
                <CodeIcon />
              </Box>
              Code
            </TabLink>
            <TabLink href="#">
              <Box css={{ mr: '$1' }}>
                <ExclamationTriangleIcon />
              </Box>
              Issues
            </TabLink>
            <TabLink href="#">
              <Box css={{ mr: '$1' }}>
                <CommitIcon />
              </Box>
              Pull requests
            </TabLink>
            <TabLink href="#">
              <Box css={{ mr: '$1' }}>
                <VideoIcon />
              </Box>
              Actions
            </TabLink>
            <TabLink href="#">
              <Box css={{ mr: '$1' }}>
                <ActivityLogIcon />
              </Box>
              Projects
            </TabLink>
            <TabLink href="#">
              <Box css={{ mr: '$1' }}>
                <ReaderIcon />
              </Box>
              Wiki
            </TabLink>
            <TabLink href="#">
              <Box css={{ mr: '$1' }}>
                <LockClosedIcon />
              </Box>
              Security
            </TabLink>
            <TabLink href="#">
              <Box css={{ mr: '$1' }}>
                <BarChartIcon />
              </Box>
              Insights
            </TabLink>
            <TabLink href="#">
              <Box css={{ mr: '$1' }}>
                <GearIcon />
              </Box>
              Settings
            </TabLink>
          </Flex>
        </Container>
      </Section>
    </Box>
  );
}
