export default function Formation() {
  const timeline = [
    {
      month: "Jun",
      date: "June 2024",
      title: "Initiation of Quota Reform Movement",
      desc: "The movement for public sector job quota reform sparked across Bangladesh, with students demanding equal opportunities and an end to discriminatory practices in the hiring process.",
    },
    {
      month: "Jul",
      date: "July 2024",
      title: "Escalation to Mass Uprising",
      desc: "As protests grew, clashes between law enforcement and demonstrators intensified. The violent crackdown by the government resulted in multiple deaths, escalating the situation into a nationwide uprising.",
    },
    {
      month: "Aug",
      date: "August 5, 2024",
      title: "Ouster of Prime Minister Sheikh Hasina",
      desc: "The government’s response to the protests culminated in the resignation of Prime Minister Sheikh Hasina. She was forced into exile following the massive uprising, marking a major political shift.",
    },
    {
      month: "Sep",
      date: "September 2024",
      title: "Formation of NCP Structure",
      desc: "Leaders formed the party's central committee, established policy goals, and launched the official manifesto.",
    },
    {
      month: "Oct",
      date: "October 2024",
      title: "First Rally Nationwide",
      desc: "Massive support gathered across the country as citizens aligned with the NCP vision.",
    },
  ];

  return (
    <section className="bg-white text-center py-12 px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 drop-shadow-sm">
        Formation of the National Citizen Party (NCP)
      </h2>
      <p className="text-gray-700 mt-2 max-w-3xl mx-auto">
        In 2024, disillusioned political leaders formed the National Citizen Party (NCP)
        to address corruption and advocate for citizen-driven change.
      </p>

      <div className="mt-10 mx-auto w-full max-w-7xl overflow-x-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-100">
        <div className="flex gap-6 w-[1600px] px-2">
          {timeline.map((item, idx) => (
            <div
              key={idx}
              className="bg-blue-600 text-white rounded-xl p-6 shadow-lg w-[33.3333%] min-w-[500px] flex-shrink-0"
            >
              <div className="w-10 h-10 bg-white text-blue-600 font-bold rounded-full flex items-center justify-center mb-2 mx-auto">
                {item.month}
              </div>
              <p className="text-sm text-blue-100">{item.date}</p>
              <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
              <p className="text-sm text-blue-100 mt-2 text-justify">{item.desc}</p>
              <button className="mt-4 bg-white text-blue-600 text-sm font-semibold px-4 py-1 rounded-md hover:bg-blue-200 transition-all">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
