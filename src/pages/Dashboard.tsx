import CustomersTable from "../components/CustomersTable";

type Props = {}

type PointsData = {label: string, value: number}

function Dashboard({}: Props) {

  const pointsEarned: PointsData[] = [
    {label: "Today", value: 12},
    {label: "Last 7 days", value: 32},
    {label: "Last 30 days", value: 64}
  ]

  const pointsRedeemed: PointsData = {label: "Points redeemed", value: 6};

  const ptsEarnedStyle: string = 'w-full xl:w-[10rem] h-[10rem] rounded-lg text-gray-400 text-2xl flex flex-col justify-between items-center py-8 bg-primary-200 shadow-2xl'

  const ptsEarnedValueStyle: string = 'text-4xl text-white grid place-content-center rounded-full';

  return (
  <div className="grid xl:grid-rows-2 bg-primary-100 p-5 lg:h-screen overflow-y-auto">
    <div id="topSection" className="flex flex-col xl:flex-row">
      <div className="p-5 flex-[1]">
        <div className="bg-primary-150 w-full h-full rounded-xl shadow-2xl">
          <div className="flex flex-col justify-around items-center w-full h-full py-10 text-2xl">
            <div className="border-4 w-32 h-32 text-4xl grid place-content-center rounded-full">
              {pointsRedeemed.value}
            </div>
            <div>
              {pointsRedeemed.label}
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 flex-[3]">
        <div className="bg-primary-150 w-full h-full rounded-xl shadow-2xl max-lg:flex max-lg:flex-col lg:grid max-xl:grid-rows-2 xl:grid-cols-[40%_60%]">
          <div className="text-4xl p-10 flex flex-col gap-5">
            <div>Welcome Gunther,</div>
            <div>Central Perk is doing <strong>Great</strong> ✨</div>
          </div>
          <div className="flex gap-5 justify-end items-end flex-col lg:flex-row w-full h-full p-10">
            {pointsEarned.map(({label, value}, index) => (
              <div key={index} className={ptsEarnedStyle}>
                <div className="grid place-content-center">
                  <div className={ptsEarnedValueStyle}>
                    {value}
                  </div>
                  <div className="text-lg">points</div>
                </div>
                <div className="text-gray-300">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div id="bottomSection" className="p-5 h-full">
      <div className="bg-primary-150 w-full h-full rounded-xl shadow-2xl">
        <CustomersTable/>
      </div>
    </div>
  </div>
  )
}

export default Dashboard