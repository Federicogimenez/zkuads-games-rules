import { useLanguageContext } from "../../hooks/useLanguageContext";
import Table from "../../shared/components/Table";
import Divider from "../../shared/components/Divider";

import logo from '/blackjack/logo.png';
import scoring from '/blackjack/scoring.gif';
import busted from '/blackjack/busted.gif';
import booster_1 from '/blackjack/booster-1.png';
import booster_2 from '/blackjack/booster-2.png';
import booster_3 from '/blackjack/booster-3.png';



export default function BlackJack() {

  const { t } = useLanguageContext()


  const table_header = {
    name: t.blackjack.table_game,
    detail: t.blackjack.table_details,
    points: t.blackjack.table_points
  }

  const table_body_1 = [
    {
      name: "21",
      detail: t.blackjack.table_name_21,
      points: "100"
    },
    {
      name: "Blackjack",
      detail: t.blackjack.table_name_blackjack,
      points: "200"
    },
        {
      name: "Wild",
      detail: t.blackjack.table_name_wild,
      points: "200"
    },
    {
      name: "Flush",
      detail: t.blackjack.table_name_flush,
      points: "200"
    },
    {
      name: "5 Cards",
      detail: t.blackjack.table_name_5cards,
      points: "600"
    },
    {
      name: "777",
      detail: t.blackjack.table_name_777,
      points: "777"
    }
  ]
  
  const table_body_2 = [
    {
      name: "Combo!",
      detail: t.blackjack.table_name_combo,
      points: "250"
    },
    {
      name: "On Fire!",
      detail: t.blackjack.table_name_onfire,
      points: "500"
    },
        {
      name: "Outstanding!",
      detail: t.blackjack.table_name_outstanding,
      points: "750"
    },
    {
      name: "Wild Jack",
      detail: t.blackjack.table_name_wildjack,
      points: "1000"
    },
    {
      name: "Jack Jack",
      detail: t.blackjack.table_name_jackjack,
      points: "1200"
    },
  ]

  const table_body_3 = [
    {
      name: "Free Bust",
      detail: t.blackjack.table_name_freebust,
      points: "100"
    },
    {
      name: "Flawless",
      detail: t.blackjack.table_name_flawless,
      points: "200"
    },
        {
      name: "Game Completed!",
      detail: t.blackjack.table_name_gamecompleted,
      points: "500"
    },
    {
      name: "All Clear",
      detail: t.blackjack.table_name_allclear,
      points: "1000"
    },
    {
      name: "Time Bonus!",
      detail: t.blackjack.table_name_timebonus,
      points: t.blackjack.table_name_timebonus_points
    },
  ]


  return (
    <main className="w-full h-full text-white text-center overflow-x-hidden mx-auto">
      <section className="bg-gradient-to-b from-black to-70% to-gray-secondary pt-10">
        <img src={logo} alt="blackjack logo" className="w-10/12 max-w-xs mx-auto" />
        <h2 className="heading-1">{t.base.game_about}</h2>
        <h5 className="heading-2">
          {t.blackjack.about_text_1}
        </h5>
        <p className="description-1">
          {t.blackjack.about_text_2}
        </p>
        <img 
          src={scoring} 
          alt={"basic rules"} 
          loading="eager" 
          className="gif-box-1"  />

        <hr />

        <h5 className="heading-3">
          {t.blackjack.about_text_3}
        </h5>
        <img 
          src={busted} 
          alt={"basic rules"} 
          loading="eager" 
          className="gif-box-1"  
          />

          <ul className="w-full max-w-lg text-left mx-auto mt-10 pl-6 mb-10">
            <li>
              {t.blackjack.about_text_4}
            </li>
            <li>
              {t.blackjack.about_text_5}
            </li>
            <li>
              {t.blackjack.about_text_6}
            </li>
          </ul>

        <Divider color={"bg-gray-primary"} />
      </section>

      <section className="bg-gradient-to-b from-gray-primary via-gray-secondary to-gray-primary  py-10">
        <h2 className="heading-1 mb-0">{t.base.game_scoring}</h2>
        <div className="relative mb-10">
          <h5 className="heading-3">
            {t.blackjack.scoring_text_1}
          </h5>
          <Table header={table_header} rows={table_body_1} />
        </div>
        <hr />
        <div className="relative mb-10">
          <h5 className="heading-3 mt-10">
            {t.blackjack.scoring_text_2}
          </h5>
          <Table header={table_header} rows={table_body_2} />
        </div>
        <hr />
        <div className="relative mb-10">
          <h5 className="heading-3">
            {t.blackjack.scoring_text_3}
          </h5>
          <Table header={table_header} rows={table_body_3}/>
        </div>
      </section>

      <section className="bg-gray-secondary">
        <div className="rotate-180">
          <Divider color={"bg-gray-primary"} />
        </div>

        <h2 className="heading-1 mt-10">{t.base.game_boosters}</h2>

        <div className="flex justify-center items-start flex-wrap gap-5 p-2 mb-10">
          <div className="grow max-w-[250px]">
            <h5 className="heading-3">{t.blackjack.boosters_booster_1_title}</h5>
            <img src={booster_1} alt={"extra time"} className="w-[160px] landscape:lg:w-[200px] h-auto mx-auto object-contain mb-4"  />
            <p className="description-1">{t.blackjack.boosters_booster_1_p}</p>
          </div>
          
          <div className="grow max-w-[250px]">
            <h5 className="heading-3">{t.blackjack.boosters_booster_2_title}</h5>
            <img src={booster_2} alt={"extra time"} className="w-[160px] landscape:lg:w-[200px] h-auto mx-auto object-contain mb-4"  />
            <p className="description-1">{t.blackjack.boosters_booster_2_p}</p>
          </div>
          
          <div className="grow max-w-[250px]">
            <h5 className="heading-3">{t.blackjack.boosters_booster_3_title}</h5>
            <img src={booster_3} alt={"extra time"} className="w-[160px] landscape:lg:w-[200px] h-auto mx-auto object-contain mb-4"  />
            <p className="description-1">{t.blackjack.boosters_booster_3_p}</p>
          </div>
        </div>

        <Divider color={"bg-gray-primary"} />
      </section>
      
      <section className="bg-gray-primary py-8">
        <h2 className="heading-1">{t.base.game_end}</h2>
        <p className="description-1">
          {t.blackjack.game_end_text_1}
        </p>
        <p className="description-1">
          {t.blackjack.game_end_text_2}
        </p>
      </section>
    </main>
  )
}
