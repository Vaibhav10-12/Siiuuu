import React from 'react';
import { Code, Palette, Zap, Heart } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Code, title: 'Frontend Development', description: 'React, TypeScript, Next.js, Vue.js' },
    { icon: Palette, title: 'UI/UX Design', description: 'Figma, Adobe Creative Suite, Prototyping' },
    { icon: Zap, title: 'Performance', description: 'Optimization, SEO, Accessibility, PWAs' },
    { icon: Heart, title: 'User Experience', description: 'Research, Testing, Conversion Optimization' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer with 5+ years of experience creating digital solutions 
            that combine beautiful design with powerful functionality. I believe in the power 
            of clean code and intuitive user experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <skill.icon className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">My Journey</h3>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900">Senior Frontend Developer</h4>
                <p className="text-orange-500 font-medium">TechCorp Inc. • 2022 - Present</p>
                <p className="text-gray-600 mt-2">Leading a team of 4 developers, architecting scalable React applications, and mentoring junior developers.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900">Full Stack Developer</h4>
                <p className="text-blue-500 font-medium">StartupXYZ • 2020 - 2022</p>
                <p className="text-gray-600 mt-2">Built and maintained multiple client projects using React, Node.js, and MongoDB.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900">Junior Developer</h4>
                <p className="text-purple-500 font-medium">Digital Agency • 2019 - 2020</p>
                <p className="text-gray-600 mt-2">Started my career creating responsive websites and learning modern development practices.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;