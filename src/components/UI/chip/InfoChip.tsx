import { Chip, type ChipProps } from "@mui/material";
import cn from "classnames";

interface InfoChipProps extends ChipProps {}

const InfoChip: React.FC<InfoChipProps> = (props): React.JSX.Element => {
  const { className = "" } = props;
  return <Chip variant="outlined" color="primary" label="куку" {...props} />;
};

export default InfoChip;

{
  /* <Chip icon={<FaceIcon />} label="With Icon" />; */
}
