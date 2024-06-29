type Props = {}

function Dashboard({}: Props) {


  const ptsEarnedStyle: string = 'w-[12rem] h-[12rem] rounded-lg text-gray-400 text-2xl flex flex-col justify-between items-center py-10 bg-primary-200 shadow-2xl'

  const ptsEarnedValueStyle: string = 'text-4xl text-white w-14 h-14 grid place-content-center rounded-full';

  return (
  <div className="grid grid-rows-2 bg-primary-100 p-5">
    <div id="topSection" className="grid grid-cols-[24rem_auto]">
      <div className="p-5">
        <div className="bg-primary-150 w-full h-full rounded-xl shadow-2xl">
          <div className="flex flex-col justify-around items-center w-full h-full py-20 text-3xl">
            <div className="border-4 w-36 h-36 text-4xl grid place-content-center rounded-full">
              6
            </div>
            <div>
              Points redeemed
            </div>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="bg-primary-150 w-full h-full rounded-xl shadow-2xl grid grid-cols-[36rem_auto]">
          <div className="text-4xl p-10 py-12 flex flex-col gap-5">
            <div>Welcome Gunther,</div>
            <div>Central Perk is doing <strong>Great</strong> ✨</div>
          </div>
          <div className="flex gap-5 justify-end items-end w-full h-full p-10">
            <div className={ptsEarnedStyle}>
              <div className={ptsEarnedValueStyle}>
                12
              </div>
              <div>
                Today
              </div>
            </div>
            <div className={ptsEarnedStyle}>
              <div className={ptsEarnedValueStyle}>
                32
              </div>
              <div>
                last 7 days
              </div>
            </div>
            <div className={ptsEarnedStyle}>
              <div className={ptsEarnedValueStyle}>
                64
              </div>
              <div>
                last 30 days
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="bottomSection" className="p-5">
      <div className="bg-primary-150 w-full h-full rounded-xl shadow-2xl">
      </div>
    </div>
  </div>
  )
}

export default Dashboard