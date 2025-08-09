import React from 'react';
import { BookOpen, Video, FileText, Award, MonitorSmartphone, Code } from 'lucide-react';

const resources = [
  {
    type: "Online Courses",
    description: "High-quality courses from top platforms to master the latest technologies and advance your career.",
    examples: [
      { name: "freeCodeCamp", url: "https://www.freecodecamp.org/" },
      { name: "Coursera", url: "https://www.coursera.org/" },
      { name: "Udemy", url: "https://www.udemy.com/" },
      { name: "edX", url: "https://www.edx.org/" },
      { name: "Pluralsight", url: "https://www.pluralsight.com/" },
    ],
    icon: Video,
    bgColor: "bg-green-50",
    color: "text-green-600",
  },
  {
    type: "Documentation & Tutorials",
    description: "Comprehensive official documentation and detailed tutorials to deepen your understanding of tools and frameworks.",
    examples: [
      { name: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/" },
      { name: "React Docs", url: "https://reactjs.org/docs/getting-started.html" },
      { name: "Python Docs", url: "https://docs.python.org/3/" },
      { name: "Kubernetes Docs", url: "https://kubernetes.io/docs/" },
      { name: "Docker Docs", url: "https://docs.docker.com/" },
    ],
    icon: BookOpen,
    bgColor: "bg-blue-50",
    color: "text-blue-600",
  },
  {
    type: "Books & Articles",
    description: "Classic and modern literature from industry experts to enhance your programming mindset and best practices.",
    examples: [
      { name: "Clean Code by Robert C. Martin", url: "https://www.oreilly.com/library/view/clean-code-a/9780136083238/" },
      { name: "You Don't Know JS by Kyle Simpson", url: "https://github.com/getify/You-Dont-Know-JS" },
      { name: "The Pragmatic Programmer", url: "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/" },
      { name: "Design Patterns by GoF", url: "https://en.wikipedia.org/wiki/Design_Patterns" },
      { name: "Introduction to Algorithms by Cormen et al.", url: "https://mitpress.mit.edu/books/introduction-algorithms" },
    ],
    icon: FileText,
    bgColor: "bg-yellow-50",
    color: "text-yellow-600",
  },
  {
    type: "Certifications",
    description: "Industry-recognized certifications to validate your skills and boost your professional credibility.",
    examples: [
      { name: "AWS Certified Solutions Architect", url: "https://aws.amazon.com/certification/certified-solutions-architect-associate/" },
      { name: "Google Professional Cloud Architect", url: "https://cloud.google.com/certification/cloud-architect" },
      { name: "Certified Kubernetes Administrator (CKA)", url: "https://www.cncf.io/certification/cka/" },
      { name: "Cisco Certified Network Associate (CCNA)", url: "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html" },
      { name: "Certified Information Systems Security Professional (CISSP)", url: "https://www.isc2.org/cissp/default.aspx" },
    ],
    icon: Award,
    bgColor: "bg-purple-50",
    color: "text-purple-600",
  },
  {
    type: "Mobile Development Tutorials",
    description: "Learn mobile app development for iOS and Android with tutorials and guides from industry leaders.",
    examples: [
      { name: "RayWenderlich Tutorials", url: "https://www.raywenderlich.com/" },
      { name: "Android Developers", url: "https://developer.android.com/" },
      { name: "Flutter Docs", url: "https://flutter.dev/docs" },
      { name: "Swift.org", url: "https://swift.org/documentation/" },
      { name: "React Native Docs", url: "https://reactnative.dev/docs/getting-started" },
    ],
    icon: MonitorSmartphone,
    bgColor: "bg-pink-50",
    color: "text-pink-600",
  },
  {
    type: "Coding Practice & Challenges",
    description: "Sharpen your coding skills with interactive problem solving and competitions.",
    examples: [
      { name: "LeetCode", url: "https://leetcode.com/" },
      { name: "HackerRank", url: "https://www.hackerrank.com/" },
      { name: "Codewars", url: "https://www.codewars.com/" },
      { name: "Codeforces", url: "https://codeforces.com/" },
      { name: "Project Euler", url: "https://projecteuler.net/" },
    ],
    icon: Code,
    bgColor: "bg-teal-50",
    color: "text-teal-600",
  },
];

const LearningResources: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Curated Learning Resources</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mt-4">
            Access a comprehensive collection of online courses, tutorials, certifications, books, and coding platforms to elevate your technical skills.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, idx) => {
            const Icon = resource.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-3 p-8 flex flex-col"
              >
                <div className={`p-4 rounded-full mb-6 self-start ${resource.bgColor}`}>
                  <Icon className={`w-10 h-10 ${resource.color}`} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{resource.type}</h3>
                <p className="text-gray-700 flex-grow">{resource.description}</p>
                
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Top Platforms & Books:</h4>
                  <ul className="list-disc list-inside text-blue-600 space-y-1">
                    {resource.examples.map((ex, i) => (
                      <li key={i}>
                        <a
                          href={ex.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {ex.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LearningResources;
