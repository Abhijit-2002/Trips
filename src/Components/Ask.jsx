import React, { useState ,useRef} from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import toast from "react-hot-toast";

const genAI = new GoogleGenerativeAI("AIzaSyBovXgko9yh1p5NPf1HFddHagJD-B1bNcg");
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const Ask = () => {
  const [city, setCity] = useState("");
  const [days, setDays] = useState("");
  const [budget, setBudget] = useState("budget");
  const [mood, setMood] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const resultRef = useRef(null);
  const [formData, setFormData] = useState({
    traveler: "",
    budget: "",
  });

  //   const formatResponseText = (text) => {
  //     let formattedText = text
  //       .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")
  //       .replace(/\* \*\*(.*?):\*\*/g, "» <b>$1:</b>")
  //       .replace(/\* (.*?)/g, "• $1")
  //       .replace(/(?:\r\n|\r|\n)/g, "<br>");

  //     formattedText = formattedText.replace(/```([\s\S]*?)```/g, (match, p1) => {
  //       return `<pre><code>${p1}</code></pre>`;
  //     });

  //     return formattedText;
  //   };
  const formatResponseText = (text) => {
    let formattedText = text
      .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")
      .replace(/\* \*\*(.*?):\*\*/g, "» <b>$1:</b>")
      .replace(/\* (.*?)/g, "• $1")
      .replace(/(?:\r\n|\r|\n)/g, "<br>");

    // Handle hotel options formatting
    const hotelOptionsRegex = /Hotel Options:\s*([\s\S]*?)(?=\n\n|\Z)/;
    formattedText = formattedText.replace(
      hotelOptionsRegex,
      (match, hotelTable) => {
        const rows = hotelTable.trim().split("\n").slice(1); // Skip header
        const tableRows = rows
          .map((row) => {
            const columns = row
              .split("|")
              .map((col) => col.trim())
              .filter((col) => col);
            return `
          <tr>
            ${columns
              .map(
                (col) => `<td class="border border-gray-300 p-2">${col}</td>`
              )
              .join("")}
          </tr>
        `;
          })
          .join("");

        return `
        <h2 class="font-bold">Hotel Options:</h2>
        <table class="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr class="bg-gray-200">
              <th class="border border-gray-300 p-2">Hotel Name</th>
              <th class="border border-gray-300 p-2">Hotel Address</th>
              <th class="border border-gray-300 p-2">Price (per night)</th>
              <th class="border border-gray-300 p-2">Image URL</th>
              <th class="border border-gray-300 p-2">Geo Coordinates</th>
              <th class="border border-gray-300 p-2">Rating</th>
              <th class="border border-gray-300 p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            ${tableRows}
          </tbody>
        </table>
      `;
      }
    );

    formattedText = formattedText.replace(/```([\s\S]*?)```/g, (match, p1) => {
      return `<pre><code>${p1}</code></pre>`;
    });

    return formattedText;
  };

  const FormattedResponse = ({ responseText }) => {
    const formattedText = formatResponseText(responseText);
    return (
      <div
        dangerouslySetInnerHTML={{ __html: formattedText }}
        className="font-sans leading-6 mt-4"
      />
    );
  };

  const handleFetchRecommendation = async () => {
    // if (!city.trim()) {
    //   toast.error("Please enter a city.");
    //   return; // Prevent further action if the input is blank
    // }
    // if (!days.trim()) {
    //   toast.error("Please enter no of days more than 0");
    //   return; // Prevent further action if the input is blank
    // }
    setLoading(true);
    try {
      //   const prompt = `Plan a ${days}-day trip to ${city} with a ${budget} budget (in Indian Rs.). Focus on ${mood} activities.`;
      const prompt = `Generate Travel Plan for Location : ${city} for ${days} for a ${formData} with a ${budget} budget (in Indian Rs.), Give me Hotels option list with HotelName, Hotel address, Price, Hotel image url , geo coordinates , rating , description and suggest itinerary with placeName, Place Details, Place image URL, geo Coordinates, tickets pricing, time to travel each location for ${days} days with each day plan with best time to visit`;
      const result = await model.generateContent(prompt);
      const aiResponse = await result.response.text();
      const formattedResponse = formatResponseText(aiResponse);
      setResponse(formattedResponse);
      resultRef.current.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      console.error("Error fetching data:", error);
      setResponse("Failed to get AI recommendation. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const increaseDays = () => {
    setDays((prev) => Math.max(1, Number(prev) + 1));
  };

  const decreaseDays = () => {
    setDays((prev) => Math.max(1, Number(prev) - 1));
  };

  const handleTravellerChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleBudgetChange = (type, value) => {
    setFormData((prev) => ({ ...prev, [type]: value }));
  };

  return (
    <div className="bg-gradient-to-r from-teal-400 to-yellow-200">
      <div className="px-5 py-6 sm:px-10 md:px-32 lg:px-56 xl:px-10 mx-5 sm:mx-10 md:mx-32 lg:mx-56 xl:mx-10 ">
        {/* <div className="p-6 max-w-lg mx-auto my-6 bg-gradient-to-r from-yellow-200 to-teal-400  rounded-lg shadow-md"> */}
        <h1 className="text-2xl font-bold mb-4 text-gray-800">TripStar</h1>
        <div className="flex flex-col gap-6">
          <div>
            <label className="block mb-2 text-gray-600">
              City Name:
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Where do you want to go?"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </label>
          </div>
          <div>
            <label className="block mb-2 text-gray-600">
              Days:
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setDays((prev) => Math.max(1, prev - 1))}
                  className="text-2xl font-bold border-2 border-yellow-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  value={days}
                  onChange={(e) => setDays(Math.max(1, Number(e.target.value)))}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-400 text-center"
                  required
                />
                <button
                  onClick={() => setDays(days + 1)}
                  className="text-2xl font-bold border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                >
                  +
                </button>
              </div>
            </label>
          </div>
          {/* Travellers */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-600">
              How many travelers?
              <div className="grid grid-cols-1 gap-4 mt-2">
                {[
                  {
                    id: 1,
                    title: "Solo",
                    desc: "A solo journey of exploration",
                    icon: "✈",
                    people: "1",
                  },
                  {
                    id: 2,
                    title: "Couple",
                    desc: "Romantic getaway",
                    icon: "💕",
                    people: "2",
                  },
                  {
                    id: 3,
                    title: "Family",
                    desc: "Fun for the whole family",
                    icon: "👨‍👩‍👧‍👦",
                    people: "4",
                  },
                  {
                    id: 4,
                    title: "Friends",
                    desc: "Adventures with friends",
                    icon: "👫",
                    people: "3",
                  },
                  {
                    id: 5,
                    title: "Group",
                    desc: "Group travel made easy",
                    icon: "👥",
                    people: "5+",
                  },
                ].map((option) => (
                  <div
                    key={option.id}
                    onClick={() =>
                      handleTravellerChange("traveler", option.people)
                    }
                    className={`p-4 cursor-pointer border rounded-md bg-white shadow transition ease-in-out delay-150 hover:shadow-lg hover:shadow-slate-800 ${
                      formData.traveler === option.people
                        ? "border-black  bg-green-200"
                        : "border-gray-300"
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">{option.icon}</span>
                      <div>
                        <h3 className="font-bold">{option.title}</h3>
                        <p className="text-sm text-gray-600">{option.desc}</p>
                      </div>
                    </div>
                    <p className="font-light text-gray-500">
                      Travelers: {option.people}
                    </p>
                  </div>
                ))}
              </div>
            </label>
          </div>

          {/* Budget */}

          <div className="mb-4">
            <label className="block mb-2 text-gray-600">
              Budget:
              <div className="grid grid-cols-1 gap-4 mt-2">
                {[
                  {
                    id: 1,
                    title: "Economy",
                    desc: "Stay budget-friendly",
                    icon: "💰",
                  },
                  {
                    id: 2,
                    title: "Budget",
                    desc: "Affordable comfort",
                    icon: "🪙",
                  },
                  { id: 3, title: "Standard", desc: "Great value", icon: "💵" },
                  {
                    id: 4,
                    title: "Comfort",
                    desc: "Extra amenities",
                    icon: "💳",
                  },
                  {
                    id: 5,
                    title: "Premium",
                    desc: "Superior experience",
                    icon: "🏷️",
                  },
                ].map((option) => (
                  <div
                    key={option.id}
                    onClick={() => handleBudgetChange("budget", option.title)}
                    className={`p-4 cursor-pointer border rounded-md bg-white shadow transition ease-in-out delay-150 hover:shadow-lg hover:shadow-slate-800 ${
                      formData.budget === option.title
                        ? "border-black bg-green-200"
                        : "border-gray-300"
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">{option.icon}</span>
                      <div>
                        <h3 className="font-bold">{option.title}</h3>
                        <p className="text-sm text-gray-600">{option.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </label>
          </div>

          {/* Mood */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-600">
              Features:
              <div className="grid grid-cols-1 gap-4 mt-2">
                {[
                  { value: "", title: "Select mood", desc: "", icon: "" },
                  {
                    value: "Chill",
                    title: "Chill",
                    desc: "Relax and unwind",
                    icon: "🏖️",
                  },
                  {
                    value: "Nature",
                    title: "Nature",
                    desc: "Explore the great outdoors",
                    icon: "🏞️",
                  },
                  {
                    value: "Urban",
                    title: "Urban",
                    desc: "Experience city life",
                    icon: "🏙️",
                  },
                ].map((option) => (
                  <div
                    key={option.value}
                    onClick={() => option.value && setMood(option.value)}
                    className={`p-4 cursor-pointer border rounded-md bg-white shadow transition ease-in-out delay-150 hover:shadow-lg hover:shadow-slate-800 ${
                      mood === option.value
                        ? "border-black bg-green-200"
                        : "border-gray-300"
                    }`}
                  >
                    <div className="flex items-center">
                      {option.icon && (
                        <span className="text-2xl mr-2">{option.icon}</span>
                      )}
                      <div>
                        <h3 className="font-bold">{option.title}</h3>
                        {option.desc && (
                          <p className="text-sm text-gray-600">{option.desc}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </label>
          </div>

          <button
            onClick={handleFetchRecommendation}
            disabled={loading}
            className="mt-4 w-full bg-teal-500 text-white rounded-md p-2 hover:bg-teal-600 disabled:opacity-50"
          >
            {loading ? "Loading..." : "Get AI Recommendation"}
          </button>
        </div>
        {/* //Show recommendation */}
        <div ref={resultRef} className="mt-6">
        {response && (
            <>
              <h2 className="text-xl font-bold text-gray-800">AI Recommendation:</h2>
              <FormattedResponse responseText={response} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Ask;

