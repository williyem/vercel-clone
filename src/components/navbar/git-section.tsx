import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

// Define types for the chat message
interface ChatMessage {
  text: string;
  user: string;
  highlight?: boolean;
}

// Chart data type
interface ChartData {
  views: number;
  percentage: string;
}

const GitSection: React.FC = () => {
  // Sample data for chat messages
  const chatMessages: ChatMessage[] = [
    { text: "Swapped out the button for some variants we needed.", user: "" },
    { text: "How about this instead?", user: "Pranathi" },
    {
      text: "I like it. Does this work with the brand tweaks @mamuso?",
      user: "",
    },
    { text: "This looks great!", user: "Rauno", highlight: true },
  ];

  // Analytics chart data
  const chartData: ChartData = {
    views: 5218,
    percentage: "+53%",
  };

  return (
    <div className="bg-black text-white min-h-screen w-full p-8">
      <motion.div
        className="max-w-6xl mx-auto space-y-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* First Section */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <div className="space-y-4">
            <Badge
              variant="outline"
              className="bg-transparent border-gray-700 text-gray-400"
            >
              Git-connected Deploys
            </Badge>
            <h2 className="text-3xl font-bold mb-2">
              From localhost to https, in seconds.
            </h2>
            <p className="text-gray-400 text-xl">
              Deploy from Git or your CLI.
            </p>

            <div className="mt-8 relative">
              <Card className="bg-zinc-950 border-gray-800 text-gray-300 font-mono text-sm overflow-hidden">
                <CardContent className="p-4">
                  <pre className="whitespace-pre-line">
                    ~ vercel-site/ git push Enumerating objects: 1, done.
                    Counting objects: 100% (1/1), done. Writing objects: 100%
                    (1/1), 72 bytes, done. Total 1 (delta 0), reused 0 (delta
                    0). To github.com:vercel/vercel-site.git 21326a9..8
                  </pre>
                </CardContent>
              </Card>

              <motion.div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <div className="flex space-x-1">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                </div>
              </motion.div>

              <Card className="bg-zinc-950 border-gray-800 text-gray-300 mt-4 relative">
                <CardContent className="p-6 flex items-center justify-center">
                  <div className="text-2xl font-bold text-gray-600">
                    What will you ship?
                  </div>
                  <div className="absolute top-4 right-4 text-xs text-gray-500 flex items-center">
                    <span className="inline-block h-2 w-2 mr-1 bg-gray-600 rounded-full"></span>
                    vercel.com
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-4">
            <Badge
              variant="outline"
              className="bg-transparent border-gray-700 text-gray-400"
            >
              Collaborative pre-production
            </Badge>
            <h2 className="text-3xl font-bold mb-2">
              Every deploy is remarkable.
            </h2>
            <p className="text-gray-400 text-xl">
              Chat with your team on real, production-grade UI, not just
              designs.
            </p>

            <div className="mt-8">
              <Card className="bg-zinc-950 border-gray-800 p-6 relative">
                <CardContent className="p-0 space-y-4">
                  {chatMessages.map((message, index) => (
                    <motion.div
                      key={index}
                      className={`flex ${
                        message.user ? "justify-end" : "justify-start"
                      }`}
                      initial={{ opacity: 0, x: message.user ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <div
                        className={`rounded-lg px-4 py-2 max-w-xs relative ${
                          message.highlight
                            ? "bg-gray-800 text-white"
                            : message.user
                            ? "bg-blue-600 text-white"
                            : "bg-gray-800 text-white"
                        }`}
                      >
                        {message.text}
                        {message.user && (
                          <Badge
                            className={`absolute -bottom-6 right-2 ${
                              message.highlight ? "bg-red-500" : "bg-blue-600"
                            }`}
                          >
                            {message.user}
                          </Badge>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>

        {/* Second Section */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <div className="space-y-4">
            <Badge
              variant="outline"
              className="bg-transparent border-gray-700 text-gray-400"
            >
              Frontend Observability
            </Badge>
            <h2 className="text-3xl font-bold mb-2">
              Privacy-friendly, lightweight Analytics.
            </h2>
            <p className="text-gray-400 text-xl">
              Upgrade your post-launch workflow with actionable, real-time
              insights.
            </p>
          </div>

          <div>
            <Card className="bg-transparent border-none overflow-hidden h-64">
              <CardContent className="p-0 h-full relative">
                <motion.div
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <svg viewBox="0 0 400 100" className="w-full h-full">
                    <motion.path
                      d="M0,80 L40,80 L80,75 L120,70 L160,65 L200,40 L240,38 L280,20 L320,15 L360,10 L400,5"
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    <motion.circle
                      cx="200"
                      cy="40"
                      r="4"
                      fill="#3B82F6"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1 }}
                    />
                  </svg>

                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 p-2 rounded-md flex items-center space-x-4">
                    <span className="text-gray-400">Views</span>
                    <span className="text-xl font-bold">
                      {chartData.views.toLocaleString()}
                    </span>
                    <Badge className="bg-blue-600">
                      {chartData.percentage}
                    </Badge>
                  </div>

                  <div className="absolute bottom-4 left-4 text-gray-500">
                    4000
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GitSection;
