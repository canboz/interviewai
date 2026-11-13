'use client';

import React from 'react';
import { Icon } from '@iconify/react';

import FeatureCard from './FeatureCard';

const featuresCategories = [
  {
    key: 'generate',
    title: 'Get Your Questions',
    icon: (
      <Icon
        icon="solar:question-circle-bold-duotone"
        width={40}
        className="text-indigo-500"
      />
    ),
    descriptions: [
      'Receive interview questions tailored to your field and target role.',
      'Practice technical, behavioral, and situational topics in one place.',
      'Work through realistic scenarios that test how you think.',
    ],
  },
  {
    key: 'provide',
    title: 'Practice Your Answers',
    icon: (
      <Icon
        icon="solar:microphone-3-bold-duotone"
        width={40}
        className="text-pink-500"
      />
    ),
    descriptions: [
      'Get AI suggestions that make your answers clear and memorable.',
      'Compare with model answers to polish your own.',
      'Run live mock interviews whenever you want.',
    ],
  },
  {
    key: 'analyze',
    title: 'Review and Level Up',
    icon: (
      <Icon
        icon="solar:chart-2-bold-duotone"
        width={40}
        className="text-teal-500"
      />
    ),
    descriptions: [
      'Get detailed feedback right after every session.',
      'See your strengths and what to work on next.',
      'Track your progress until you feel fully ready.',
    ],
  },
];

export default function InterviewProcessCards() {
  return (
    <div className="my-10">
      <div className="text-center">
        <span className="tracking-tight inline font-semibold bg-clip-text text-transparent bg-linear-to-r from-[#6366F1] to-[#EC4899] text-[2.3rem] lg:text-5xl leading-9">
          How It Works
        </span>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 my-10">
        {featuresCategories.map((category) => (
          <FeatureCard
            key={category.key}
            descriptions={category.descriptions}
            icon={category.icon}
            title={category.title}
          />
        ))}
      </div>
    </div>
  );
}
