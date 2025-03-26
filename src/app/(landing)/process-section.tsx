import { SectionLabel } from '@shared/components'
import * as React from 'react'
import * as motion from 'motion/react-client'

export function ProcessSection(): React.ReactElement {
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
      id="how-it-works"
    >
      <div className="flex items-center">
        <SectionLabel>How it works</SectionLabel>
      </div>
      <h2 className="text-4xl font-semibold text-center leading-tight mt-10 font-bricolage">
        Simple yet to increase
        <br />
        conversions
      </h2>

      <div className="flex justify-center w-full mt-28">
        <div className="grid grid-cols-1 gap-3 tablet:w-10/12 laptop:w-8/12">
          <div className="flex flex-col col-span-1 bg-surface border-2 border-border border-dashed rounded-2xl p-4 cursor-pointer transition-all duration-300 hover:-translate-y-2 group hover:scale-105 -rotate-6 hover:-rotate-3">
            <div className="flex relative">
              <span className="flex items-center gap-1 pl-1 pr-3 py-1 rounded-full bg-gray-100 text-gray-500 text-sm font-medium transition-all duration-300 group-hover:bg-rose-100 group-hover:text-rose-500">
                <i className="fi fi-sr-bullet" />
                01. Book
              </span>

              <i className="fi fi-sr-bullet absolute -right-2 -top-2 text-lg text-foreground/50" />
            </div>

            <h3 className="text-lg font-medium mt-3 text-pretty font-bricolage">
              Book a roast
            </h3>

            <p className="text-foreground/60 leading-relaxed mt-5 text-pretty">
              Submit your URL and answer some very simple questions to help me
              understand your business goals and ideal customers.
            </p>
          </div>
          <div className="flex flex-col col-span-1 bg-surface border-2 border-border border-dashed rounded-2xl p-4 cursor-pointer transition-all duration-300 hover:-translate-y-2 group hover:scale-105 rotate-6 hover:rotate-3">
            <div className="flex relative">
              <span className="flex items-center gap-1 pl-1 pr-3 py-1 rounded-full bg-gray-100 text-gray-500 text-sm font-medium transition-all duration-300 group-hover:bg-rose-100 group-hover:text-rose-500">
                <i className="fi fi-sr-bullet" />
                02. Identify
              </span>

              <i className="fi fi-sr-bullet absolute -right-2 -top-2 text-lg text-foreground/50" />
            </div>

            <h3 className="text-lg font-medium mt-3 text-pretty font-bricolage">
              Find problems
            </h3>

            <p className="text-foreground/60 leading-relaxed mt-5 text-pretty">
              I'll review your page and record a 15 minute personalised videos
              identifying the most important fixes to increase your conversion
              rate. Sent to you in less than 48 hours.
            </p>
          </div>
          <div className="flex flex-col col-span-1 bg-surface border-2 border-border border-dashed rounded-2xl p-4 cursor-pointer transition-all duration-300 hover:-translate-y-2 group hover:scale-105 -rotate-6 hover:-rotate-3">
            <div className="flex relative">
              <span className="flex items-center gap-1 pl-1 pr-3 py-1 rounded-full bg-gray-100 text-gray-500 text-sm font-medium transition-all duration-300 group-hover:bg-rose-100 group-hover:text-rose-500">
                <i className="fi fi-sr-bullet" />
                03. Fix
              </span>

              <i className="fi fi-sr-bullet absolute -right-2 -top-2 text-lg text-foreground/50" />
            </div>

            <h3 className="text-lg font-medium mt-3 text-pretty font-bricolage">
              Fix & Reviews
            </h3>

            <p className="text-foreground/60 leading-relaxed mt-5 text-pretty">
              You watch the video, make the fixes to your landing page and hit
              publish. Not sure how to implement your changes? I'll help with
              that too. Just ask.
            </p>
          </div>
          <div className="flex flex-col col-span-1 bg-surface border-2 border-border border-dashed rounded-2xl p-4 cursor-pointer transition-all duration-300 hover:-translate-y-2 group hover:scale-105 rotate-6 hover:rotate-3">
            <div className="flex relative">
              <span className="flex items-center gap-1 pl-1 pr-3 py-1 rounded-full bg-gray-100 text-gray-500 text-sm font-medium transition-all duration-300 group-hover:bg-rose-100 group-hover:text-rose-500">
                <i className="fi fi-sr-bullet" />
                04. Publish
              </span>

              <i className="fi fi-sr-bullet absolute -right-2 -top-2 text-lg text-foreground/50" />
            </div>

            <h3 className="text-lg font-medium mt-3 text-pretty font-bricolage">
              Updates & Publish
            </h3>

            <p className="text-foreground/60 leading-relaxed mt-5 text-pretty">
              You can start making changes and upgrade your website with the
              feedback and publish it. You can also work with us for help.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
