import { FC } from 'react';
import { Card } from "../Card";

export interface IStatisticsProps {
  title: string;
  countPacient: number;
  imageSrc: string;
	bgColor?: string;
}  

export const CountCard: FC<IStatisticsProps> = ({ title, countPacient, imageSrc,  bgColor = 'bg-blue-300' }) => {
  return (
    <Card>
			<div className='flex md:self-start gap-5'>
				<div className={`${bgColor} px-3 py-3 rounded-full`}>
          <img src={imageSrc} alt={`${title} icon`} className="w-12 h-12 mx-auto"/>
        </div>
				<div>
					<h4 className="font-inter text-sm text-black flex items-center justify-center">
						{title}
					</h4>
					<span className='text-3xl font-semibold'>
						{countPacient}
					</span>
				</div>
			</div>
    </Card>
  );
};
