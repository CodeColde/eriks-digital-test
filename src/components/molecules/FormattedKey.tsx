interface IProps {
  children: string;
}

const FormattedKey: React.FC<IProps> = ({ children }) => {
  const addMeasurements = ["Inwendige diameter", "Maat volgens AS568", "Snoerdikte"];
  const keyCapitalized = children.charAt(0).toUpperCase() + children.slice(1);
  return (
    <td>{keyCapitalized}{addMeasurements.includes(children) && " (mm)"}</td>
  )
}

export default FormattedKey;