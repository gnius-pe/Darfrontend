import { Card } from "../Card";

import { Columns } from "./Columns";

export const Cupos: React.FC = () => {

  return (
    <Card>
      <div className="px-12 py-7 flex flex-col justify-center">
        <span className="text-black font-inter text-2xl text-center sm:text-left">
          Cupos
        </span>
        <div className="grid sm:grid-cols-1 grid-cols-1 pt-1">
          <Columns />
        </div>
      </div>
    </Card>
  );
};
