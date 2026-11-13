import React from 'react';
import { Card, CardHeader, CardContent, CardFooter, Link } from '@heroui/react';
import { Icon } from '@iconify/react';

const Pricing = () => {
  const features = [
    'Unlimited AI-generated questions',
    'Detailed feedback reports',
    'Practice anytime, in any field',
    'Role and industry-specific interviews',
    'Step-by-step video guides',
    'Technical question practice',
    'Behavioral question practice',
    'Situational scenario practice',
    '24/7 AI interview coach',
    'Communication and soft skills tips',
  ];

  return (
    <div id="pricing">
      <div className="text-center my-10">
        <span className="tracking-tight inline font-semibold bg-clip-text text-transparent bg-linear-to-r from-[#6366F1] to-[#EC4899] text-[2.3rem] lg:text-5xl leading-9">
          Pricing
        </span>
      </div>

      <Card className="max-w-100 p-2 border-solid border-4 border-indigo-400">
        <CardHeader className="flex gap-3 mb-3">
          <div className="flex flex-col">
            <p className="text-xl font-extrabold">Interview AI Pro</p>
            <p className="text-md text-default-500">
              Everything you need to get hired
            </p>
          </div>
        </CardHeader>
        <hr className="border-divider" />
        <CardContent>
          <div className="flex items-baseline space-x-1">
            <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-4xl">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#6366F1] to-[#EC4899]">
                $9.99
              </span>
            </h1>
            <p>/ month</p>
          </div>

          <ul className="mt-8 max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <Icon icon="hugeicons-tick-02" fontSize={26} color="#6366F1" />{' '}
                {feature}
              </li>
            ))}
          </ul>
        </CardContent>
        <hr className="border-divider" />
        <CardFooter>
          <Link
            className="w-full my-3 px-2 bg-linear-to-r from-[#6366F1] to-[#EC4899] text-white"
            href="/subscribe"
          >
            <span>Start Practicing</span>
            <Icon icon="akar-icons:arrow-right" />
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Pricing;
