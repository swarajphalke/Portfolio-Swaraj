 
import GitHubCalendar from "react-github-calendar";

const Github = () => {
  const username = "swarajphalke";

  const theme = {
    dark: ["#1a1a2e", "#5a189a", "#7b2cbf", "#9d4edd", "#c77dff"],
  };

  const filterThisYear = (data) => {
    const currentYear = new Date().getFullYear();
    return data.filter(
      (activity) => new Date(activity.date).getFullYear() === currentYear
    );
  };

  return (
    <section
      id="github"
      className="py-12 sm:py-16 px-[4vw] md:px-[8vw] lg:px-[12vw] font-sans"
    >
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          GITHUB CONTRIBUTIONS
        </h2>
        <div className="w-16 sm:w-20 h-1 bg-purple-500 mx-auto mt-2 rounded-full"></div>
        <p className="text-gray-400 mt-3 text-xs sm:text-sm md:text-base max-w-2xl mx-auto px-4">
          My coding journey visualized through GitHub activity.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="relative group rounded-2xl bg-gradient-to-r from-purple-600/30 via-transparent to-pink-600/30 p-[2px] sm:p-[3px] shadow-[0_0_20px_rgba(130,69,236,0.4)] hover:shadow-[0_0_35px_rgba(130,69,236,0.6)] transition-all duration-300 w-full max-w-full md:max-w-[90%]">
          <div className="rounded-2xl bg-[#0a0a1a] p-3 sm:p-6">
            <GitHubCalendar
              username={username}
              blockSize={14}
              blockMargin={5}
              fontSize={14}
              theme={theme}
              showWeekdayLabels
              transformData={filterThisYear}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Github;
