import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function About() {
  const navigate =useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser);
  useEffect(() =>{
    if(!currentUser){
      navigate('/');
    }
  },[0]);
  return (
    <div className="about">
    <div className=' bg-cover bg-[url(https://img.freepik.com/premium-photo/businessman-working-smart-phone-laptop-open-space-office_11304-828.jpg)] min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-6xl font font-bold  text-center my-7 bg-gradient-to-r text-transparent from-cyan-200 via-purple-500 to-gray-300 bg-clip-text shadow-lg' >
            About Note's Cluster
          </h1>
          <div className='text-md text-white flex flex-col gap-6'>
            <p><i>
            At Notes Cluster, your ultimate destination for all things tech! At Notes Cluster, we're passionate about technology and committed to empowering individuals with the knowledge they need to thrive in the digital age. Our platform offers a comprehensive range of resources, including meticulously crafted notes, insightful blog articles, and engaging video content, all designed to demystify complex tech concepts and inspire learning and growth.
           </i> </p>

            <p><i>
            Our extensive collection of notes covers a wide array of tech topics, serving as a valuable resource for students, professionals, and enthusiasts alike. From in-depth analyses to practical tutorials, our blog section offers valuable insights and perspectives on the latest trends and developments in the tech industry. And on our YouTube channel, we bring tech concepts to life through engaging videos, catering to visual learners and tech enthusiasts of all levels.
            </i> </p>

            <p><i>
            Our mission is clear: to bridge the gap between complexity and understanding in the realm of technology. We understand that the digital landscape can often seem daunting, filled with jargon and rapid advancements. That's why we're committed to providing accessible, insightful, and reliable resources that enable individuals to thrive in the digital age.

            </i>
            </p>
          </div>

        </div>
      </div>
     </div>
     <section className="features bg-gray-200 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What We Offer?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">
              Notes Repository
              </h3>
              <p className="text-gray-700">
              Dive into our extensive collection of notes covering a wide range of tech subjects. Whether you're study for exams, preparing for a presentation, or simply expanding your knowledge, our meticulously curated notes are here to guide you.
              </p>
            </div>
            <div className="feature bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Insightful Blog</h3>
              <p className="text-gray-700">
              Explore our blog section, where our team of tech experts shares their perspectives on the latest trends, innovations, and developments in the tech industry. From in-depth analyses to practical tips and tutorials, our blog is your go-to resource for staying informed and inspired.
              </p>
            </div>
            <div className="feature bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">YouTube Channel</h3>
              <p className="text-gray-700">
              Sit back, relax, and tune in to our YouTube channel, where we bring tech concepts to life through engaging videos. Whether you're a visual learner or simply enjoy multimedia content, our videos offer valuable insights, demonstrations, and discussions on all things tech-related.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="features  py-16">
      <h2 className="text-3xl font-bold mb-8 dark:text-white">JOIN US</h2>
      <div class="container mx-auto rounded-lg">
  <h1 class="mx-20 p-6 dark:text-white">Whether you're a student, a professional, or simply curious about the world of technology, we invite you to join our community at Notes Cluster. Explore our resources, participate in discussions, and embark on a journey of discovery and growth with us. Together, let's unlock the power of knowledge and harness the limitless possibilities of technology.

  Thank you for choosing Notes Cluster as your trusted companion in your tech journey. Let's learn, explore, and innovate together!
   
  </h1>
</div>
      </section>
     
    </div>
  );
}