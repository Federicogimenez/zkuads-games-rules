import { useLanguageContext } from "../../hooks/useLanguageContext"
import Divider from "../../shared/components/Divider";

import logo from '/into-the-dungeon/logo.png';
import trap from '/into-the-dungeon/trap.gif';
import movement from '/into-the-dungeon/movement.gif';
import treasure from '/into-the-dungeon/treasures.gif';
// import booster_1 from '/into-the-dungeon/booster_1.png';
// import booster_2 from '/into-the-dungeon/booster_2.png';
// import booster_3 from '/into-the-dungeon/booster_3.png';

export default function IntoTheDungeon() {

    const { t } = useLanguageContext()
    
  return (
    <main className="w-full h-full text-white text-center overflow-x-hidden mx-auto">
      <section className="bg-gradient-to-b from-black to-70% to-gray-secondary pt-10">
        <img src={logo} alt="fruit finder logo" className="w-10/12 max-w-xs mx-auto" />
        <h2 className="heading-1">{t.base.game_about}</h2>
        <h5 className="heading-2">
          {t.into_the_dungeon.about_text_1}
        </h5>
        <img 
          src={movement} 
          alt={"basic rules"} 
          loading="eager" 
          className="gif-box-1"  />

        <hr />

        <h5 className="heading-2">
          {t.into_the_dungeon.about_text_2}
        </h5>

        <img 
          src={trap} 
          alt={"bonus point"} 
          loading="eager" 
          className="gif-box-1 mb-10"  
          />

        <hr />

        <h5 className="heading-2">
          {t.into_the_dungeon.about_text_3}
        </h5>
        <img 
          src={treasure} 
          alt={"request tiles"} 
          loading="eager" 
          className="gif-box-1 mb-10"  
          />

        <p className="description-2">
          {t.into_the_dungeon.about_text_4}
        </p>

        <Divider color={"bg-gray-primary"} />
      </section>

      <section className="bg-gray-primary py-10">
        <h2 className="heading-1 mb-0">{t.base.game_scoring}</h2>
          <h5 className="heading-2">
            {t.into_the_dungeon.scoring_text_1}
          </h5>

            <p className="description-2 mt-4">{t.into_the_dungeon.scoring_text_2}</p>
      </section>

      <section className="bg-gray-secondary">
        <div className="rotate-180">
          <Divider color={"bg-gray-primary"} />
        </div>

        <h2 className="heading-1 mt-10">{t.base.game_boosters}</h2>

        <div className="flex justify-center items-start flex-wrap gap-5 p-2 mb-10">
          <div className="grow max-w-[250px]">
            <h5 className="heading-3">{t.into_the_dungeon.boosters_booster_1_title}</h5>
            {/* <img src={booster_1} alt={"extra time"} className="w-[160px] landscape:lg:w-[200px] h-auto mx-auto object-contain mb-4"  /> */}
            <p className="description-1">{t.into_the_dungeon.boosters_booster_1_p}</p>
          </div>
          
          <div className="grow max-w-[250px]">
            <h5 className="heading-3">{t.into_the_dungeon.boosters_booster_2_title}</h5>
            {/* <img src={booster_2} alt={"extra time"} className="w-[160px] landscape:lg:w-[200px] h-auto mx-auto object-contain mb-4"  /> */}
            <p className="description-1">{t.into_the_dungeon.boosters_booster_2_p}</p>
          </div>
          
          <div className="grow max-w-[250px]">
            <h5 className="heading-3">{t.into_the_dungeon.boosters_booster_3_title}</h5>
            {/* <img src={booster_3} alt={"extra time"} className="w-[160px] landscape:lg:w-[200px] h-auto mx-auto object-contain mb-4"  /> */}
            <p className="description-1">{t.into_the_dungeon.boosters_booster_3_p}</p>
          </div>
        </div>

        <Divider color={"bg-gray-primary"} />
      </section>
      
      <section className="bg-gray-primary py-8">
        <h2 className="heading-1">{t.base.game_end}</h2>
        <p className="description-1">
          {t.into_the_dungeon.game_end_text_1}
        </p>
        <p className="description-1">
          {t.into_the_dungeon.game_end_text_2}
        </p>
      </section>
    </main>
  )
}
