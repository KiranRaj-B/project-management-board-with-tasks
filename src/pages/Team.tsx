
import { Mail, Phone, Users, Briefcase, Globe } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  avatar: string;
}

function Team() {
  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      role: 'Project Manager',
      email: 'sarah.j@company.com',
      phone: '(555) 123-4567',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    },
    {
      id: '2',
      name: 'Michael Chen',
      role: 'Senior Developer',
      email: 'michael.c@company.com',
      phone: '(555) 234-5678',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop',
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      role: 'UI/UX Designer',
      email: 'emily.r@company.com',
      phone: '(555) 345-6789',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    },
    {
      id: '4',
      name: 'David Kim',
      role: 'Backend Developer',
      email: 'david.k@company.com',
      phone: '(555) 456-7890',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
    },
  ];

  return (
    <div className="p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Team Members</h1>
          <p className="text-gray-600">Meet the talented individuals behind our projects.</p>
        </div>

        {/* Team Overview Section */}
        <div className="mb-8 bg-blue-50 p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-4">
            <Users size={32} className="text-blue-600" />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Our Team</h2>
              <p className="text-gray-600">
                We are a group of passionate professionals dedicated to delivering exceptional results.
              </p>
            </div>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {teamMembers.map(member => (
            <div key={member.id} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-medium text-gray-800">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Mail size={16} />
                  <span>{member.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Phone size={16} />
                  <span>{member.phone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Our Team Section */}
        <div className="mt-12 bg-green-50 p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-4">
            <Briefcase size={32} className="text-green-600" />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Join Our Team</h2>
              <p className="text-gray-600">
                Interested in working with us? Explore career opportunities and become part of our journey.
              </p>
            </div>
          </div>
          <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            View Careers
          </button>
        </div>

        {/* Contact Us Section */}
        <div className="mt-12 bg-gray-50 p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-4">
            <Globe size={32} className="text-gray-600" />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Contact Us</h2>
              <p className="text-gray-600">
                Have questions or need assistance? Reach out to us, and we’ll be happy to help.
              </p>
            </div>
          </div>
          <button className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}

export default Team;