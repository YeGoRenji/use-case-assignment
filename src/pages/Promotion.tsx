import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Typography } from "@mui/material";
import InputMultiline from "../components/InputMultiline";
import PromotionHistoryTable from "../components/PromotionHistoryTable";
import { addPromotion } from "../state/promotionSlice";
import { RootState } from "../state/store";

function Promotion() {
  const [message, setMessage] = useState("");
  const promotions = useSelector(
    (state: RootState) => state.promotion.promotions
  );
  const dispatch = useDispatch();

  const handleSendPromotion = () => {
    const trimmedMessage: string = message.trim();
    if (trimmedMessage.length == 0) return;
    const newPromotion = {
      id: promotions.length + 1,
      message: trimmedMessage,
      date: new Date(),
    };
    dispatch(addPromotion(newPromotion));
    setMessage("");
  };

  return (
    <div className="grid xl:grid-rows-2 bg-primary-100 p-5 lg:h-screen overflow-y-auto">
      <div className="p-5">
        <div className="grid grid-rows-[2rem_auto] gap-10 bg-primary-150 w-full h-full rounded-xl shadow-2xl p-10">
          <Typography variant="h4" className="text-white">
            Send Promotion
          </Typography>
          <div className="flex flex-col justify-between h-full">
            <InputMultiline
              label="Promotion Message"
              value={message}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setMessage(e.target.value)
              }
            />
            <div>
              <Button
                variant="contained"
                color="primary"
                className="bg-primary-200 text-white float-right"
                onClick={handleSendPromotion}
              >
                Send Promotion
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="grid grid-rows-[20%_80%] bg-primary-150 w-full h-full rounded-xl shadow-2xl p-10">
          <Typography variant="h4" className="text-white">
            Promotion History
          </Typography>
          <PromotionHistoryTable promotions={promotions} />
        </div>
      </div>
    </div>
  );
}

export default Promotion;
