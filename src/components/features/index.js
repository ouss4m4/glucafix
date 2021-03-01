import React from "react"
import { Link } from "react-scroll"
import FluidImg from "../Image/FluidIMG"

function Features() {
  return (
    <section id="features" className="max-w-4xl mx-auto">
      <div className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center md:text-center">
            <Link to="ingredients" smooth className="cursor-pointer">
              <h2
                id="ingredients"
                className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl"
              >
                GlucaFix Ingredients
              </h2>
            </Link>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              "It's a brand new way of helping your liver to release more
              glucagon..."
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    {/*   <!-- Heroicon name: outline/globe-alt --> */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-bold text-gray-900 ">
                    BHB Ketones
                  </dt>
                  <dd className="mt-2 text-base text-gray-700 text-justify">
                    BHB stands for Beta-Hydroxybutyrate, which are ketones
                    extracted from the raspberry pulp. These ketones form a
                    natural compound with carbohydrates stored in the body. This
                    compound helps promote muscle mass and allows the body to
                    gain muscle.
                  </dd>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    {/*   <!-- Heroicon name: outline/globe-alt --> */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-bold text-gray-900">
                    Sodium
                  </dt>
                  <dd className="mt-2 text-base text-gray-700 text-justify">
                    It is an essential mineral for the body and helps maintain
                    the ionic concentration in the body. It has the attributes
                    this to the proper use of energy in the body.
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    {/*  <!-- Heroicon name: outline/scale --> */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-bold text-gray-900">
                    Green Tea Extract
                  </dt>
                  <dd className="mt-2 text-base text-gray-700 text-justify">
                    The extract is one of the best ingredients used; it boosts
                    metabolism, enhancing the body’s fat-burning capability to
                    melt off the already existing fat. You will mostly find this
                    ingredient in a keto diet to initiate the ketosis process..
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    {/*   <!-- Heroicon name: outline/lightning-bolt --> */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-bold text-gray-900">
                    Caffeine
                  </dt>
                  <dd className="mt-2 text-base text-gray-700 text-justify">
                    This is an antioxidant that serves to rid the body of
                    cholesterol and all types of oxidative toxins. Caffeine
                    alone won't help you slim down. But it boost weight-loss
                    efforts and help prevent weight gain,
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    {/*   <!-- Heroicon name: outline/annotation --> */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-bold text-gray-900">
                    Calcium
                  </dt>
                  <dd className="mt-2 text-base text-gray-700 text-justify">
                    Calcium helps to strengthen the bones. That way, you will
                    feel less pain in the joints since your bones will be strong
                    enough to efficiently hurdle your body weight. Other
                    benefits associated with calcium include the improvement of
                    muscles and healthy nerves. Moreover, it is essential to
                    note that calcium has no direct impact on weight loss but
                    works as one of the natural ingredients for the obese.
                  </dd>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    {/*   <!-- Heroicon name: outline/annotation --> */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-bold text-gray-900">
                    Magnesium
                  </dt>
                  <dd className="mt-2 text-base text-gray-700 text-justify">
                    This essential mineral helps your body to perform more than
                    300 regular functions. You can balance the blood pressure
                    and blood sugar level, that can prevent depression and
                    strengthens your heart and joint health..
                  </dd>
                </div>
              </div>
            </dl>
          </div>
          <div className="lg:text-center">
            <p className="mt-4 max-w-2xl text-xl text-gray-700 lg:mx-auto text-justify">
              As per the product webpage, Glucafix has been taken by thousands
              of folks with no reported side effects. Unlike allopathic
              medications, everything inside Glucafix is reported to be natural.
              Users might experience some nights where you don’t want to go to
              sleep when your energy levels soar through the roof! Also people
              around you might keep asking what you’ve been up to look so
              good…but we trust those are minor annoyances.
            </p>
          </div>
          <div className="max-h-sm max-w-xs mx-auto">
            <FluidImg filename="liver-ketones" />
            <p className="text-center text-gray-400 text-italic">
              Liver and ketones{" "}
            </p>
          </div>
          <div className="text-center">
            <a
              href="https://www.wingcards.com/2676DXDQ/QBLQ9F3/"
              className="inline-block px-4 py-4 mx-2 my-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700  cursor-pointer"
            >
              Order A Sample
            </a>
          </div>
          <div className="lg:text-center md:text-center">
            <Link to="benefits" smooth className="cursor-pointer">
              <h2
                id="benefits"
                className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl"
              >
                GlucaFix Benefits
              </h2>
            </Link>
            <p className="mt-2 text-2xl leading-8 font-bold tracking-tight text-gray-900 sm:text-2xl">
              What are the benefits that you could expect, by taking GlucaFix?{" "}
            </p>
          </div>
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    {/*  <!-- Heroicon name: outline/scale --> */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-bold text-gray-900">
                    <strong>All Natural </strong>
                  </dt>
                  <dd className="mt-2 text-base text-gray-700 text-justify">
                    You will love the fact that the supplement is entirely made
                    of natural ingredients sourced from the best farms around
                    the world. It guarantees that it is free of any side
                    effects. Thus, anyone can use this formula without feeling
                    any harmful effects, unlike the many over-the-counter drugs.
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    {/*   <!-- Heroicon name: outline/globe-alt --> */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-bold text-gray-900 ">
                    Enhanced metabolism.
                  </dt>
                  <dd className="mt-2 text-base text-gray-700 text-justify">
                    Similar to other weight loss supplements, GlucaFix help to
                    enhance metabolic metabolism activities in the body. The
                    increased metabolic activities will help burn fat quickly,
                    and your weight will subsequently begin going down.
                  </dd>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    {/*   <!-- Heroicon name: outline/globe-alt --> */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-bold text-gray-900">
                    Increased energy
                  </dt>
                  <dd className="mt-2 text-base text-gray-700 text-justify">
                    Plus sized people need more energy to stay active, and
                    GlucaFix works perfectly to replenish the energy levels in
                    your body. That way, you can hit the gym and reduce your
                    weight since you will feel more energetic throughout the
                    day.
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    {/*   <!-- Heroicon name: outline/annotation --> */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-bold text-gray-900">
                    <strong>Cash-Back Guarantee</strong>
                  </dt>
                  <dd className="mt-2 text-base text-gray-700 text-justify">
                    Glucafix™ supplement is backed with a no question asked
                    money-back guarantee. You don’t have to worry about whether
                    it will work or not. If you purchase it and find that it’s a
                    complete bunch of hogwash, just return it and ask for your
                    money.
                  </dd>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    {/*   <!-- Heroicon name: outline/annotation --> */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-bold text-gray-900">
                    reduce the food craving.
                  </dt>
                  <dd className="mt-2 text-base text-gray-700 text-justify">
                    GlucaFix ingredients suppress appetite, burn fat, and
                    optimize hormonal function without causing you any harmful
                    effects.
                  </dd>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    {/*   <!-- Heroicon name: outline/lightning-bolt --> */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-bold text-gray-900">
                    <strong>Enhances and escalates the Ketosis</strong>
                  </dt>
                  <dd className="mt-2 text-base text-gray-700 text-justify">
                    The supplement also helps to ramp up your weight loss
                    journey by supplying you with important nutrients.ang get
                    your body into a KETOSIS state faster. accelerating the fat
                    burning
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          <div className="lg:text-center md:text-center">
            <Link to="benefits" smooth className="cursor-pointer">
              <h2
                id="benefits"
                className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl"
              >
                Advanced GlucaFix
              </h2>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1">
            <div>
              <h2 className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-2xl text-center">
                PROs
              </h2>
              <ul className="pros">
                <li>
                  There is a tasty<strong> discount for you</strong> if you buy
                  more than one bottle
                </li>
                <li>
                  The only place you can get the capsule is by ordering from the
                  official manufacturer’s website. This guarantees that you
                  cannot get counterfeit.
                </li>
                <li>
                  You will <strong>start seeing changes </strong> shortly after
                  beginning to use the supplement.
                </li>
                <li>
                  The <strong>delivery is quick.</strong> You will usually get
                  your shipment in just 3-5 days.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mt-2 text-2xl leading-8 font-bold tracking-tight text-gray-900 sm:text-2xl text-center">
                CONs
              </h2>
              <p>
                You must order your <strong>GlucaFix</strong> supplement at
                least one week before your current supply gets depleted.
                Otherwise, you will find it challenging to maintain dosage due
                to the high demand. But this problem can be solved by purchasing
                a complete six-month supply at once.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-xl">
            <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Do Not Miss The Limited Discount
            </h2>
            <a href="https://www.wingcards.com/2676DXDQ/QBLQ9F3/">
              <FluidImg filename="discount.jpg" />
            </a>

            <div className="text-center">
              <a
                href="https://www.wingcards.com/2676DXDQ/QBLQ9F3/"
                className="inline-block px-4 py-4 mx-2 my-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700  cursor-pointer"
              >
                Get The Discount Here
              </a>
            </div>
          </div>
          <div className="mx-auto max-w-xl">
            <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions{" "}
            </h2>

            <h2 className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-2xl">
              Why GlucaFIx Is Different?
            </h2>

            <p className="mt-2 text-base text-gray-700 text-justify max-w-xl">
              Ketosis is the state where your body is actually burning fat for
              energy instead of carbs. Ketosis is extremely hard to obtain on
              your own and takes weeks to accomplish. GlucaFix actually helps
              your body achieve ketosis fast and helps you burn fat for energy
              instead of carbs!
            </p>
            <h2 className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-2xl">
              How long does it take to work?
            </h2>

            <p className="mt-2 text-base text-gray-700 text-justify max-w-xl">
              This supplement has natural ingredients making it absorbed quickly
              in the body. Hence, it should start showing results quickly
              provided you follow dosage instructions and adhere to other
              conditions. In any case, there's a 60-day money-back guarantee.
            </p>
            <h2 className="mt-2 text-2xl leading-8 font-bold tracking-tight text-gray-900 sm:text-2xl">
              Where can i buy this supplement?
            </h2>

            <p className="mt-2 text-base text-gray-700 text-justify max-w-xl">
              You can buy this supplement from the official website. The
              supplement is available in quantities of 1 bottle as a sample, 3
              bottles with free US shipping and handling, and finally, and the
              Best Value package of 6 bottles that gives best value.
            </p>

            <h2 className="mt-2 text-2xl leading-8 font-bold tracking-tight text-gray-900 sm:text-2xl">
              GlucaFix Supplements Side Effects and Dosage
            </h2>

            <p className="mt-2 text-base text-gray-700 text-justify max-w-xl">
              All you need is simply take GlucaFix with a glass of water 1 hour
              before dinner.. The ingredients are quickly absorbed by the body,
              and you feel healthy physically and mentally. Containing mostly
              natural ingredients, this supplement doesn't have side effects.
            </p>
            <div className="lg:text-center md:text-center">
              <h2
                id="benefits"
                className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
              >
                Watch The Official Video For More Details
              </h2>
              <a href="https://www.wingcards.com/2676DXDQ/QBLQ9F3/">
                <FluidImg filename="original-video.JPG" />
              </a>
            </div>
            <div className="lg:text-center md:text-center">
              <h2
                id="benefits"
                className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
              >
                Conclusion
              </h2>
              <p className="text-justify">
                <span className="mt-2 text-xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-xl ">
                  Is it worth it ? Absolutely.
                </span>{" "}
                Backed by a <em>No Question Asked </em> money back guaranteed
                policy. You are either satisfied or refunded. The supplement was
                prepared after exhaustive research and has scientific studies to
                back up its claims. You can always cross-check with your doctor
                before consuming it. Although the results vary from person to
                person, the supplement works out for most. However, if it
                doesn’t work, you can rest assured and rely on the money-back
                guarantee.
              </p>
              <div className="text-center">
                <a
                  href="https://www.wingcards.com/2676DXDQ/QBLQ9F3/"
                  className="inline-block px-4 py-4 mx-2 my-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700  cursor-pointer"
                >
                  Visit Official WebSite
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer navbar-static-bottom">
        <div className="flex flex-col">
          <span className="self-center cursor-pointer ">
            <Link to="lander" smooth duration={1000}>
              <svg
                className="w-6 h-6 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
                />
              </svg>
            </Link>
          </span>
          <hr />
          <p className="footer__text">
            © {new Date().getFullYear()} - The statements made within this
            website have not been evaluated by the U.S. Food and Drug
            Administration. These statements and the products of this company
            are not intended to diagnose, treat, cure or prevent any disease.
          </p>
        </div>
      </footer>
    </section>
  )
}

export default Features
