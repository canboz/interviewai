import React from 'react';
import { Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import LandingPageStats from '@/components/layout/landing-page-stats/LandingPageStats';
import Testimonials from '@/components/layout/testimonials/Testimonials';
import Pricing from '@/components/layout/pricing/Pricing';
import InterviewProcessCards from '@/components/layout/interview-process/InterviewProcessCards';

const HomePage = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Button
        className="h-9 overflow-hidden border border-default-100 bg-default-50 px-4.5 py-2 text-small font-normal leading-5 text-default-500"
        variant="outline"
      >
        Practice smarter with AI feedback
        <Icon
          className="flex-none outline-none [&>path]:stroke-2"
          icon="solar:arrow-right-linear"
          width={20}
        />
      </Button>
      <div className="inline-block max-w-xl text-center justify-center">
        <span className="tracking-tight inline font-semibold bg-clip-text text-transparent bg-linear-to-r from-[#6366F1] to-[#EC4899] text-[2.3rem] lg:text-5xl leading-9">
          Walk Into Every
        </span>
        <br />
        <span className="tracking-tight inline font-semibold text-[2.3rem] lg:text-5xl leading-9">
          Interview Ready
        </span>
        <div className="w-full  my-2 text-lg lg:text-xl text-default-600 block mt-4">
          Run realistic mock interviews, get instant feedback on every answer,
          and build the confidence to land the job you want.
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
        <Link
          className="inline-flex h-10 items-center justify-center bg-default-foreground px-7.5 py-2.5 text-small font-medium leading-5 text-background"
          href="/subscribe"
        >
          Start Practicing Now
        </Link>
        <a href="#pricing">
          <Button
            className="h-10  border border-default-100 px-4 py-2.5 text-small font-medium leading-5"
            variant="outline"
          >
            View pricing{' '}
            <Icon
              className="text-default-500 [&>path]:stroke-[1.5]"
              icon="solar:arrow-right-linear"
              width={16}
            />
          </Button>
        </a>
      </div>
      <LandingPageStats />
      <Testimonials />
      <Pricing />
      <InterviewProcessCards />
    </section>
  );
};

export default HomePage;
