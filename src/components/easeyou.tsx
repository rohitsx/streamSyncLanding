import {
  Mail,
  MessageCircle,
  Phone,
  Video,
  Shield,
  Clock,
  DollarSign,
  UserCheck,
  Sparkles,
  Globe,
} from "lucide-react";
import { EaseYouLogo } from "./ui/logo";

const EaseYou = () => (
  <div className="min-h-screen bg-gray-900 text-gray-100">
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-6">
          <EaseYouLogo />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-3 text-white">
          EaseYou
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-4">
          Anonymous Emotional Support Platform
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-900/30 border border-yellow-700 rounded-full text-yellow-400 text-sm font-medium">
          <Sparkles className="w-4 h-4" />
          Coming Soon - Android App
        </div>
      </div>

      {/* HIRING SECTION - PRIORITIZED */}
      <div className="bg-gray-800 rounded-lg border-2 border-pink-500 p-6 md:p-8">
        <div className="space-y-6">
          <div className="text-center">
            <div className="inline-block px-4 py-1 bg-pink-500 text-white text-sm font-bold rounded-full mb-4">
              NOW HIRING
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
              Become a Listener - Earn While Helping Others
            </h2>
            <p className="text-gray-300 text-lg">
              We're looking for compassionate individuals to join us as listeners
            </p>
          </div>

          {/* Earning Potential */}
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
              <DollarSign className="w-6 h-6 text-green-500" />
              Earning Potential
            </h3>
            <div className="bg-green-900/30 border border-green-700 rounded-lg p-5">
              <p className="text-white text-lg mb-3">
                <strong className="text-green-400">₹6 per minute</strong> of conversation
              </p>
              <p className="text-gray-300 text-lg mb-3">
                Work just <strong className="text-white">2 hours a day</strong> = earn at least{" "}
                <strong className="text-green-400">₹720 daily</strong>
              </p>
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <p className="text-blue-200 text-sm font-medium">
                  <strong className="text-blue-300">International rates may vary.</strong> We welcome your rate recommendations.
                </p>
              </div>
            </div>
          </div>

          {/* Requirements */}
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
              <UserCheck className="w-6 h-6 text-blue-500" />
              Who We're Looking For
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">•</span>
                <span><strong className="text-white">Age:</strong> Minimum 20 years (ideally 21+)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">•</span>
                <span><strong className="text-white">Gender:</strong> Female candidates preferred</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">•</span>
                <span><strong className="text-white">Skills:</strong> Good communication and active listening</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">•</span>
                <span><strong className="text-white">Empathy:</strong> Understanding of others' struggles</span>
              </li>
            </ul>
          </div>

          {/* How It Works */}
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
              <Clock className="w-6 h-6 text-purple-500" />
              How It Works
            </h3>
            <div className="space-y-3">
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <p className="font-bold text-blue-400 mb-2">Step 1: Initial Testing</p>
                <p className="text-gray-300 text-sm">
                  We need <strong>12-14 users</strong> to install the app for <strong>14 days</strong> to meet Google Play Store requirements.
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <p className="font-bold text-green-400 mb-2">Step 2: After Launch</p>
                <p className="text-gray-300 text-sm">
                  Once launched, you'll start talking to users who need emotional support and begin earning.
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <p className="font-bold text-purple-400 mb-2">Step 3: Grow With Us</p>
                <p className="text-gray-300 text-sm">
                  As the platform grows over 3+ months, your income potential increases. Early joiners have better opportunities!
                </p>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-5">
            <h4 className="font-bold text-blue-400 mb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Important Notes
            </h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">✓</span>
                <span>You won't lose anything by installing the app</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">✓</span>
                <span>App is still under development - patience required</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">✓</span>
                <span>Growth takes time - realistic expectations needed</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">✓</span>
                <span>Only 14 initial testers needed - apply early!</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center pt-4">
            <a
              href="mailto:rohiitrb@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-pink-500 hover:bg-pink-600 rounded-lg text-lg font-bold transition-all duration-200 shadow-lg"
            >
              <Mail className="w-5 h-5" />
              Apply to Become a Listener
            </a>
            <p className="text-gray-400 text-sm mt-4">
              Email: <strong className="text-white">rohiitrb@gmail.com</strong>
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 md:p-8">
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
            What is EaseYou?
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            EaseYou is an online emotional support platform where you can talk to trained listeners about your feelings in complete privacy. Whether you're going through a breakup, relationship issues, feeling lonely, or just need someone to talk to - our listeners are here to help you feel better.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 text-center">
              <MessageCircle className="w-8 h-8 text-pink-500 mx-auto mb-3" />
              <h3 className="font-bold text-white mb-2">Chat</h3>
              <p className="text-gray-400 text-sm">Text conversations</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 text-center">
              <Phone className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <h3 className="font-bold text-white mb-2">Voice Call</h3>
              <p className="text-gray-400 text-sm">Audio support</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 text-center">
              <Video className="w-8 h-8 text-purple-500 mx-auto mb-3" />
              <h3 className="font-bold text-white mb-2">Video Call</h3>
              <p className="text-gray-400 text-sm">Face-to-face</p>
            </div>
          </div>

          <div className="bg-green-900/30 border border-green-700 rounded-lg p-5 mt-6">
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-green-400 mb-2">100% Anonymous & Safe</h3>
                <p className="text-gray-300 text-sm">
                  Your identity is completely hidden. Listeners will never know who they're talking to, creating a safe and non-judgmental space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default EaseYou;
