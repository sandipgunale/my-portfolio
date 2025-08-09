import React from 'react';
import {
  Brain,
  Cloud,
  Shield,
  GitBranch,
  Database,
  Smartphone,
  TrendingUp,
  ArrowRight,
  Activity,
  Server,
  Key,
  Codesandbox,
  LayoutDashboard,
  Palette
} from 'lucide-react';

interface Category {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  trends: string[];
  growth: string;
  jobs: string;
  color: string;
  bgColor: string;
  textColor: string;
  popularTech?: string[];
  resources?: { name: string; url: string }[];
  careerPaths?: string[];
}

const categories: Category[] = [
  {
    icon: Brain,
    title: "Artificial Intelligence / Machine Learning",
    description:
      "AI/ML involves creating algorithms and models that enable computers to learn from data and make decisions. Popular tools include TensorFlow, PyTorch, and scikit-learn.",
    trends: ["ChatGPT Integration", "Computer Vision", "Natural Language Processing"],
    growth: "+45%",
    jobs: "12.5K",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
    popularTech: ["TensorFlow", "PyTorch", "scikit-learn", "Keras"],
    resources: [
      { name: "Coursera AI courses", url: "https://www.coursera.org/browse/data-science/ai" },
      { name: "fast.ai", url: "https://www.fast.ai/" },
    ],
    careerPaths: ["Data Scientist", "ML Engineer", "Research Scientist"],
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description:
      "Cloud Computing involves delivering computing services over the internet, including storage, databases, networking, and analytics via platforms like AWS, Azure, and GCP.",
    trends: ["Serverless Architecture", "Multi-Cloud Strategy", "Edge Computing"],
    growth: "+38%",
    jobs: "8.2K",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    popularTech: ["AWS", "Microsoft Azure", "Google Cloud Platform"],
    resources: [
      { name: "AWS Training", url: "https://aws.amazon.com/training/" },
      { name: "Microsoft Learn", url: "https://docs.microsoft.com/en-us/learn/azure/" },
    ],
    careerPaths: ["Cloud Engineer", "DevOps Engineer", "Site Reliability Engineer"],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Cybersecurity focuses on protecting networks, devices, and data from unauthorized access or attacks, using tools and practices like encryption, firewalls, and penetration testing.",
    trends: ["Zero Trust Security", "Ransomware Protection", "AI-Powered Threats"],
    growth: "+52%",
    jobs: "9.8K",
    color: "from-red-500 to-orange-500",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
    popularTech: ["Wireshark", "Metasploit", "Nmap"],
    resources: [
      { name: "Cybrary", url: "https://www.cybrary.it/" },
      { name: "OWASP", url: "https://owasp.org/" },
    ],
    careerPaths: ["Security Analyst", "Penetration Tester", "Security Engineer"],
  },
  {
    icon: GitBranch,
    title: "DevOps & Automation",
    description:
      "DevOps integrates software development and IT operations for faster delivery and improved reliability using tools like Docker, Kubernetes, Jenkins, and Terraform.",
    trends: ["Kubernetes Adoption", "GitOps Workflows", "Site Reliability Engineering"],
    growth: "+41%",
    jobs: "7.3K",
    color: "from-green-500 to-teal-500",
    bgColor: "bg-green-50",
    textColor: "text-green-600",
    popularTech: ["Docker", "Kubernetes", "Jenkins", "Terraform"],
    resources: [
      { name: "Docker Docs", url: "https://docs.docker.com/" },
      { name: "Kubernetes Tutorials", url: "https://kubernetes.io/docs/tutorials/" },
    ],
    careerPaths: ["DevOps Engineer", "Site Reliability Engineer", "Automation Engineer"],
  },
  {
    icon: Database,
    title: "Big Data & Analytics",
    description:
      "Real-time data processing and predictive analytics solutions.",
    trends: ["Real-time Analytics", "Data Mesh Architecture", "Streaming Platforms"],
    growth: "+35%",
    jobs: "6.1K",
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-50",
    textColor: "text-indigo-600",
    popularTech: ["Apache Spark", "Kafka", "Airflow", "Hadoop"],
    resources: [
      { name: "Data Engineering on Coursera", url: "https://www.coursera.org/specializations/data-engineering" },
      { name: "Apache Spark Documentation", url: "https://spark.apache.org/docs/latest/" },
    ],
    careerPaths: ["Data Engineer", "ETL Developer", "Big Data Engineer"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Mobile Development focuses on building apps for iOS, Android, and cross-platform using technologies like Swift, Kotlin, Flutter, and React Native.",
    trends: ["Flutter Growth", "5G Applications", "AR/VR Integration"],
    growth: "+29%",
    jobs: "5.4K",
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50",
    textColor: "text-yellow-600",
    popularTech: ["Swift", "Kotlin", "Flutter", "React Native"],
    resources: [
      { name: "RayWenderlich Tutorials", url: "https://www.raywenderlich.com/" },
      { name: "Android Developers", url: "https://developer.android.com/" },
    ],
    careerPaths: ["iOS Developer", "Android Developer", "Mobile App Developer"],
  },
  // Additional categories
  {
    icon: Activity,
    title: "Blockchain Development",
    description:
      "Blockchain development involves building decentralized applications (dApps) and smart contracts on blockchain platforms like Ethereum, Binance Smart Chain, and Solana.",
    trends: ["Smart Contracts", "DeFi Platforms", "NFT Marketplaces"],
    growth: "+50%",
    jobs: "4.8K",
    color: "from-yellow-400 to-pink-600",
    bgColor: "bg-yellow-50",
    textColor: "text-yellow-600",
    popularTech: ["Solidity", "Ethereum", "Hyperledger", "Rust"],
    resources: [
      { name: "Ethereum Docs", url: "https://ethereum.org/en/developers/docs/" },
      { name: "CryptoZombies", url: "https://cryptozombies.io/" },
    ],
    careerPaths: ["Blockchain Developer", "Smart Contract Engineer", "Crypto Analyst"],
  },
  {
    icon: Server,
    title: "Cloud Infrastructure",
    description:
      "Managing scalable cloud infrastructure with best practices for security, cost, and performance.",
    trends: ["Infrastructure as Code", "Hybrid Cloud", "Container Orchestration"],
    growth: "+40%",
    jobs: "7.0K",
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-50",
    textColor: "text-cyan-600",
    popularTech: ["AWS", "Azure", "Google Cloud", "Terraform"],
    resources: [
      { name: "AWS Certification", url: "https://aws.amazon.com/certification/" },
      { name: "Google Cloud Training", url: "https://cloud.google.com/training" },
    ],
    careerPaths: ["Cloud Engineer", "DevOps Engineer", "Systems Architect"],
  },
  {
    icon: Key,
    title: "Information Security",
    description:
      "Ensuring confidentiality, integrity, and availability of data with advanced security protocols.",
    trends: ["Zero Trust", "Multi-Factor Authentication", "Threat Hunting"],
    growth: "+47%",
    jobs: "5.6K",
    color: "from-red-600 to-pink-600",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
    popularTech: ["Wireshark", "Nmap", "Metasploit"],
    resources: [
      { name: "OWASP Foundation", url: "https://owasp.org/" },
      { name: "Cybrary Security", url: "https://www.cybrary.it/" },
    ],
    careerPaths: ["Security Analyst", "Penetration Tester", "Security Engineer"],
  },
  {
    icon: Codesandbox,
    title: "Software Engineering",
    description:
      "Developing robust software applications with best practices and modern frameworks.",
    trends: ["Microservices", "API-first Design", "Test Automation"],
    growth: "+33%",
    jobs: "14K",
    color: "from-blue-400 to-indigo-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    popularTech: ["JavaScript", "TypeScript", "React", "Node.js"],
    resources: [
      { name: "MDN Web Docs", url: "https://developer.mozilla.org/" },
      { name: "freeCodeCamp", url: "https://www.freecodecamp.org/" },
    ],
    careerPaths: ["Frontend Developer", "Backend Developer", "Full Stack Developer"],
  },
  {
    icon: LayoutDashboard,
    title: "UI/UX Design",
    description:
      "Designing user-friendly interfaces and engaging experiences using tools like Figma and Adobe XD.",
    trends: ["User Research", "Wireframing", "Prototyping"],
    growth: "+27%",
    jobs: "3.2K",
    color: "from-pink-400 to-purple-600",
    bgColor: "bg-pink-50",
    textColor: "text-pink-600",
    popularTech: ["Figma", "Sketch", "Adobe XD", "InVision"],
    resources: [
      { name: "Interaction Design Foundation", url: "https://www.interaction-design.org/" },
      { name: "Smashing Magazine", url: "https://www.smashingmagazine.com/" },
    ],
    careerPaths: ["UI Designer", "UX Designer", "Product Designer"],
  },
  {
    icon: Palette,
    title: "Game Development",
    description:
      "Creating immersive games using engines like Unity and Unreal Engine across platforms.",
    trends: ["Real-time Rendering", "AR/VR Integration", "Cloud Gaming"],
    growth: "+31%",
    jobs: "4.1K",
    color: "from-green-400 to-teal-600",
    bgColor: "bg-green-50",
    textColor: "text-green-600",
    popularTech: ["Unity", "Unreal Engine", "C#", "C++"],
    resources: [
      { name: "Unity Learn", url: "https://learn.unity.com/" },
      { name: "Unreal Online Learning", url: "https://www.unrealengine.com/en-US/onlinelearning-courses" },
    ],
    careerPaths: ["Game Developer", "Gameplay Programmer", "Game Designer"],
  },
];

const TechCategories: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Technology Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the latest developments and career opportunities across major technology domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-4 rounded-xl ${category.bgColor}`}>
                    <category.icon className={`h-8 w-8 ${category.textColor}`} />
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center text-green-600 font-bold text-lg">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      <span>{category.growth}</span>
                    </div>
                    <div className="text-xs text-gray-500">Growth</div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Hot Trends:</h4>
                  <div className="space-y-2">
                    {category.trends.map((trend, trendIndex) => (
                      <div key={trendIndex} className="flex items-center text-sm text-gray-600">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} mr-3`}></div>
                        {trend}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional detailed info */}
                {(category.popularTech || category.resources || category.careerPaths) && (
                  <div className="text-gray-700 text-sm space-y-4">
                    {category.popularTech && (
                      <p>
                        <strong>Popular Technologies:</strong> {category.popularTech.join(', ')}
                      </p>
                    )}
                    {category.resources && (
                      <div>
                        <strong>Learning Resources:</strong>
                        <ul className="list-disc ml-6">
                          {category.resources.map((res) => (
                            <li key={res.url}>
                              <a
                                href={res.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                              >
                                {res.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {category.careerPaths && (
                      <p>
                        <strong>Career Paths:</strong> {category.careerPaths.join(', ')}
                      </p>
                    )}
                  </div>
                )}

                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{category.jobs}</div>
                    <div className="text-xs text-gray-500">Open Positions</div>
                  </div>
                  
                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium group">
                    <span>Explore</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechCategories;
