import { FC } from 'react';
import { Card } from "../Card";
import icPaciente from '../../../../assets/images/dashboard/ic_paciente.svg';

export interface IStatisticsProps {
 	name: string;
	lastName: string;
}  

export const PacienteCard: FC<IStatisticsProps> = ({ name, lastName }) => {
  return (
    <Card>
			<div className='flex gap-5'>
				<div className={`px-3 py-3 rounded-full`}>
          <img src={icPaciente} alt='icon-paciente' className="w-12 h-12 mx-auto"/>
        </div>
				<div>
					<h4 className="text-lg font-semibold whitespace-nowrap">
						{name}
					</h4>
					<h4 className="text-lg font-semibold whitespace-nowrap">
						{lastName}
					</h4>
					<span className='  font-inter text-sm text-black flex items-center justify-center'>
						paciente
					</span>
				</div>
			</div>
    </Card>
  );
};
