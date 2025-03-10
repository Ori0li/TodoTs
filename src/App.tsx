import Time from "./Time/Time";
import Todo from "./Todo/Todo";
import Weather from "./Weather/Weather";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 ">
      <section className="w-full max-w-4xl flex flex-col sm:flex-row gap-6 h-full">
        {/* Weather and Time Section */}
        <article className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-between w-full sm:w-1/3 h-full">
          <div className="w-full flex-1">
            <Weather />
          </div>
          <div className="w-full flex-1 mt-4">
            <Time />
          </div>
        </article>

        {/* Todo Section */}
        <article className="bg-white p-6 h-[800px] rounded-lg shadow-lg flex flex-col items-center justify-between sm:w-2/3">
          <div className="w-full flex flex-col overflow-hidden">
            <div className="w-full flex-1">
              <Todo />
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default App;
