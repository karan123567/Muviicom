import Image from "next/image";

export default function CommunitySection() {
  const testimonials = [
    {
      text: "Muvii completely changed how I watch films. Before, I’d scroll for hours not knowing what to watch. Now, it feels like the app just gets me — my mood, my vibe — and picks the perfect movie every time.",
      name: "Arjun Sharma",
      icon: "/users/user1.jpg", // replace with your image path
    },
    {
      text: "As someone who works long hours, I don’t have time to browse endless lists. Muvii’s mood-based recommendations have helped me discover hidden gems that I’d never have found otherwise.",
      name: "Priya Mehta",
      icon: "/users/user2.jpg",
    },
    {
      text: "I love how Muvii makes movie nights with friends so easy. No arguments over what to watch — we just set the mood and let Muvii decide. It’s like having a personal movie curator!",
      name: "Rohan Kapoor",
      icon: "/users/user3.jpg",
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          A community of movie lovers is waiting for you
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Muvii goes beyond just suggesting movies — we’re building one of the
          most passionate and supportive film-loving communities worldwide,
          where mood meets the perfect movie.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-800">
          {testimonials.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center px-6 py-8">
              <p className="text-gray-200 italic mb-6">"{item.text}"</p>
              <div className="flex items-center gap-3">
                {/* <Image
                  src={item.icon}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                /> */}
                <span className="text-gray-300 font-medium">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
