import {Statistics} from '../sections/dashboard/view/Statistics'
import StatsEspec from '../sections/dashboard/view/StatsEspec';

const AppView = () => {
  return (
      <div className="sm:flex sm:justify-center sm:items-center h-auto">
        <div className="container grid-cols-1 mx-auto px-4 grid gap-1 max-w-[1200px]">
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-1">
            
            <Statistics
              title="Paicientes atendidos"
              data={{
                expected: 100,
                reached: 70,
                type: "integer",
              }}
              backgroundColor={"bg-[#2667F0]"}
              strokeColor={"stroke-[#2667F0]"}
            />
            <Statistics
              title="Pacientes en consulta"
              data={{
                expected: 120,
                reached: 26,
                type: "integer",
              }}
              backgroundColor={"bg-[#7367F0]"}
              strokeColor={"stroke-[#7367F0]"}
            />

            <Statistics
              title="Pacientes restantes"
              data={{
                expected: 70,
                reached: 63,
                type: "integer",
              }}
              backgroundColor={"bg-[#A66DE9]"}
              strokeColor={"stroke-[#A66DE9]"}
            />
          </div>
          <StatsEspec />
          <StatsEspec />
          <StatsEspec />
        </div>
      </div>
  );
};

export default AppView;
