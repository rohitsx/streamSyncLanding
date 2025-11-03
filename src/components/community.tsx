import { Twitter, Linkedin, Mail } from "lucide-react";
import Card from "./ui/card";

const Community = () => (
  <section className="py-12 md:py-24">
    <Card title="Join the Community" className="max-w-4xl mx-auto">
      <div className="text-center">
        <p className="text-gray-300 text-base md:text-lg mb-6 md:mb-8">
          Help shape the future of our projects with your valuable feedback and suggestions!
        </p>
        <div className="flex justify-center gap-6 md:gap-8">
          {[
            {
              Icon: Twitter,
              href: "https://x.com/rohitsxx",
              label: "Twitter",
            },
            {
              Icon: Linkedin,
              href: "https://www.linkedin.com/in/rohiitrb/",
              label: "LinkedIn",
            },
            {
              Icon: Mail,
              href: "mailto:rohiitrb@gmail.com",
              label: "Email",
            },
          ].map(({ Icon, href, label }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
              aria-label={label}
            >
              <Icon className="w-6 h-6 md:w-8 md:h-8" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-6 md:mt-8">
          <p className="text-gray-400">Contact: rohiitrb@gmail.com</p>
        </div>
      </div>
    </Card>
  </section>
);

export default Community;
