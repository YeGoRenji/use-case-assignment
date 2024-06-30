import InputMultiline from "../components/InputMultiline";
import { Button, Typography } from '@mui/material';
import PromotionHistoryTable from "../components/PromotionHistoryTable";

type Props = {}

function Promotion({}: Props) {
  return (
    <div className="grid grid-rows-2 bg-primary-100 p-5 h-screen gap-5">
      <div className="p-5">
        <div className="grid grid-rows-[2rem_auto] gap-10 bg-primary-150 w-full h-full rounded-xl shadow-2xl p-10">
          <Typography variant="h4" className="text-white">Send Promotion</Typography>
          <div className="flex flex-col justify-between h-full">
            <InputMultiline label="Promotion Message" />
            <div>
              <Button 
                variant="contained" 
                color="primary" 
                className="bg-primary-200 text-white float-right"
              >
                Send Promotion
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="grid grid-rows-[4rem_auto] bg-primary-150 w-full h-full rounded-xl shadow-2xl p-10">
          <Typography variant="h4" className="text-white">Promotion History</Typography>
          <PromotionHistoryTable />
        </div>
      </div>
    </div>
  );
}

export default Promotion;
