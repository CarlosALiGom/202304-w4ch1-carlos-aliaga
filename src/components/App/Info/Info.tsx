interface InfoProps {
  selectedsNumber: number;
}

const Info = ({ selectedsNumber }: InfoProps): JSX.Element => {
  return (
    <p className="info">
      {selectedsNumber} señores que te apuntan con el dedo marcados
    </p>
  );
};

export default Info;
