import PropTypes from 'prop-types';

export default function Paciente() {
  return (
    <>
      <h1 className="text-blue-500">Hola Pacientes</h1>
    </>
  );
}

Paciente.propTypes = {
  children: PropTypes.node,
};
