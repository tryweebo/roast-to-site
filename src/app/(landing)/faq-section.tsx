import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  SectionLabel,
} from '@shared/components'
import * as React from 'react'
import * as motion from 'motion/react-client'

type FAQ = {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: 'Will my conversions actually increase?',
    answer:
      "Yes, or you will get another extra strategies. Also you can get the money back if you don't see any results.",
  },
  {
    question: 'How much does it cost?',
    answer:
      'All you need is pay for $99 for roasting with no contract, no risk and money back guarantee. You can get more benefits by spending less money rather than marketing.',
  },
  {
    question: "My landing page isn't live yet. Can you roast it?",
    answer:
      'Sure, pre launched is the perfect timing for us to roast your landing page. We will roast your landing page and give you feedback on how to improve it.',
  },
  {
    question: 'Can you design, write copy and develop my landing page?',
    answer:
      'Yap, we can help you design, develope and writing better copy for your changes. We build team for helping you. Connect with tryweebo.one or usesonibble.site',
  },
]

function FAQItem({ faq, id }: { faq: FAQ; id: string }): React.ReactElement {
  const { question, answer } = faq
  return (
    <AccordionItem
      value={`faq-${id}`}
      className="transition-all duration-300 hover:-translate-y-1 hover:scale-105"
    >
      <AccordionTrigger>{question}</AccordionTrigger>
      <AccordionContent>{answer}</AccordionContent>
    </AccordionItem>
  )
}

export function FAQSection(): React.ReactElement {
  return (
    <motion.section
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        damping: 8,
        stiffness: 60,
        ease: 'easeInOut',
        duration: '1.2',
      }}
      viewport={{ once: true, margin: '0% 0% -30% 0%' }}
      className="flex flex-col items-center py-20"
      id="faqs"
    >
      <div className="flex items-center">
        <SectionLabel>FAQs</SectionLabel>
      </div>
      <h2 className="text-4xl font-semibold text-center leading-tight mt-10 font-bricolage">
        Most asked
        <br />
        questions
      </h2>

      <div className="flex flex-col items-center mt-16 w-full">
        <Accordion
          type="single"
          collapsible
          className="flex flex-col w-full tablet:w-10/12 laptop:w-8/12 gap-3"
        >
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} id={index.toString()} />
          ))}
        </Accordion>
      </div>
    </motion.section>
  )
}
