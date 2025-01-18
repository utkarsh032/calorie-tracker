import { useState } from 'react';
import { MessageCircle, X, Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { motion } from 'framer-motion';

function Support() {
  const [showChatbot, setShowChatbot] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    query: '',
  });
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', text: 'Hello! How can I help you today?' },
  ]);
  const [currentMessage, setCurrentMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.query) {
      alert("All fields are required");
      return;
    }

    console.log('Form submitted:', formData); // You can replace this with your form handling logic, e.g., API call
    setFormData({ name: '', email: '', query: '' }); // Reset the form
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!currentMessage.trim()) return;

    setChatMessages((prev) => [...prev, { type: 'user', text: currentMessage }]);
    setCurrentMessage('');

    setTimeout(() => {
      const botResponses = [
        "I'll help you with that right away!",
        "Let me check that for you.",
        "Thanks for your question. Here's what I can tell you...",
        "I understand your concern. Let me assist you.",
      ];
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      setChatMessages((prev) => [...prev, { type: 'bot', text: randomResponse }]);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Support",
      detail: "24/7 Hotline: +1 (555) 123-4567",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      detail: "support@company.com",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office Location",
      detail: "123 Support Street, Tech City",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      detail: "Mon-Fri: 9AM-6PM EST",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-purple-500 to-pink-500">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-6xl font-extrabold mb-8">How Can We Help?</h1>
            <p className="text-xl text-white/90 mb-12">
              Our support team is here to assist you 24/7. Get the help you need through our various support channels.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/20 transition-all"
                >
                  <div className="flex items-center gap-4">
                    {info.icon}
                    <div>
                      <h3 className="font-semibold">{info.title}</h3>
                      <p className="text-sm text-white/80">{info.detail}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="Support Team"
              className="rounded-lg shadow-2xl w-full"
            />
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -top-8 -right-8 bg-white p-4 rounded-lg shadow-xl"
            >
              <p className="text-purple-600 font-semibold">Need Help? 👋</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Message Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-20"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-2xl max-w-2xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a aessage👇</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
                  required
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                name="query"
                value={formData.query}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-6 w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </motion.div>
      </div>

      {/* Chatbot Component */}
      <div className="fixed bottom-4 right-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowChatbot((prev) => !prev)}
          className="bg-gradient-to-r from-purple-600 to-pink-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all"
        >
          <MessageCircle size={24} />
        </motion.button>
      </div>

      {showChatbot && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative bg-white p-4 rounded-lg shadow-2xl w-80 max-w-full"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Live Chat Support</h2>
              <button
                onClick={() => setShowChatbot(false)}
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col h-80">
              <div className="flex-1 overflow-y-auto mb-4 bg-gray-50 rounded-lg p-4">
                {chatMessages.map((message, index) => (
                  <div
                    key={index}
                    className={`mb-4 ${message.type === 'user' ? 'text-right' : 'text-left'}`}
                  >
                    <div
                      className={`inline-block p-3 rounded-lg ${
                        message.type === 'user' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-800'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>
              <form onSubmit={handleChatSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <button
                  type="submit"
                  className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <Send size={20} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Support;
