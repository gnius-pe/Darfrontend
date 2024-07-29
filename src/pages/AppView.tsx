import StatsEspec from '../sections/dashboard/view/StatsEspec';
import { Cupos } from '../sections/dashboard/view/Statistics/Cupos';
import { CountCard } from '../sections/dashboard/view/Statistics/CountPacients';
import ic_world from '../assets/images/dashboard/ic_world.svg';
import ic_human from '../assets/images/dashboard/ic_human.svg';
import RecentPatients from '../sections/dashboard/view/Statistics/RecentPatients';

const AppView = () => {
  return (
      <div className="h-auto flex flex-col justify-center bg-custom-fondodash">
					<div className='flex h-16 bg-gradient-to-b from-custom-celeste to-custom-blue items-end justify-between px-4 py-2'>
						<h2 className='text-3xl text-white'>Panel de Control</h2>
						<select className='rounded-full px-3 py-1'>
							<option value="01 de agosto">1 de agosto</option>
						</select>
					</div> 
          <div className="mt-4 space-y-3 md:space-y-0 grid grid-cols-1 gap:2 lg:gap-4 md:grid-cols-3 p-2 sm:p-0 md:grid-rows-5 max-w-[1070px] mx-auto">
            <div className="row-span-2 md:row-span-2">
              <Cupos />
            </div>
            <div className='row-span-2 md:row-span-2 space-y-3'>
              <CountCard title="Total de inscritos" countPacient={250} imageSrc={ic_world} bgColor='bg-custom-blue' />
              <CountCard title="Niños inscrito" countPacient={159} imageSrc={ic_human} bgColor='bg-teal-300' />
            </div>
            <div className="row-span-1 col-start-1 row-start-3 md:row-span-5 md:col-start-3 md:row-start-1 bg-white rounded-2xl">
              <RecentPatients/>
            </div>
            <div className=" col-span-1 row-span-1 row-start-4 md:col-span-2 md:row-span-3 md:row-start-3">
              <StatsEspec />
            </div>
					</div>
      </div>
  );
};

export default AppView;
