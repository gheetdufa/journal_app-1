// @ts-ignore
"use client";
import exp from 'constants';
import { Navbar } from '../components/Navbar';
import 'tailwindcss/tailwind.css';

export default function Mission() {  
  return (
    <>
      <Navbar />
      <div className='container mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-16'> {/* Add mt-16 for margin-top */}
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-red-700 from-red-400">
            Here at rant.AI, we focus on your mental health.
          </span>
        </h1>
        

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Our Mission
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-loose mb-8">
          At <span className='font-semibold'>rant.AI</span>, our mission is to empower individuals to embrace self-discovery, cultivate emotional well-being, and foster personal growth through the art of daily journaling. We believe in the transformative power of self-expression and the strength of human connection, and we are committed to providing a safe, supportive, and innovative space for all.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Our Principles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Emotional Support
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              We understand that life can be challenging, and everyone faces their own set of emotions and experiences. Our chatbot, powered by ChatGPT, is here to listen, empathize, and provide a compassionate presence whenever you need it. We're your non-judgmental confidant, available 24/7 to help you navigate life's ups and downs.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Coping Strategies
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Your well-being is our priority. Through the power of AI, we offer personalized coping strategies and emotional tools based on your journal entries. Whether you're feeling overwhelmed, anxious, or simply seeking to manage stress, our platform provides tailored recommendations to help you build resilience and find inner balance.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Self-Help Resources
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              We believe that knowledge is empowerment. Based on your journal entries and individual needs, we curate a wealth of self-help resources, from articles and exercises to podcasts and guided meditations. Our aim is to equip you with the tools you need to take control of your emotional health and personal growth.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Privacy and Security
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Your thoughts and feelings are personal, and your privacy is non-negotiable. We employ state-of-the-art security measures to ensure that your journal entries remain confidential, and you have full control over who accesses your content.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-loose">
            By combining the timeless practice of journaling with the capabilities of AI, we aspire to help you not only understand your emotions but also transform them into a source of strength, wisdom, and personal fulfillment. Join us on this remarkable path of self-discovery, and together, let's nurture emotional well-being, one journal entry at a time.
          </p>
        </div>
      </div>
    </>
  )
}
