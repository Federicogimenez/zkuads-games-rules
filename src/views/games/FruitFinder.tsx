import { useLanguageContext } from "../../hooks/useLanguageContext"
import Divider from "../../shared/components/Divider";

import logo from '/fruit-finder/logo.png';
import basic_rules from '/fruit-finder/basic_rules.gif';
import bonus_point from '/fruit-finder/bonus_point.gif';
import streak from '/fruit-finder/streaks.gif';
import booster_1 from '/fruit-finder/booster_1.png';
import booster_2 from '/fruit-finder/booster_2.png';
import booster_3 from '/fruit-finder/booster_3.png';

export default function FruitFinder() {

    const { t } = useLanguageContext()
    
  return (
    <main className="w-full h-full text-white text-center overflow-x-hidden mx-auto">
      <section className="bg-gradient-to-b from-black to-70% to-gray-secondary pt-10">
        <img src={logo} alt="fruit finder logo" className="w-10/12 max-w-xs mx-auto" />
        <h2 className="heading-1">{t.base.game_about}</h2>
        <h5 className="heading-2">
          {t.fruit_finder.about_text_1}
        </h5>
        <img 
          src={basic_rules} 
          alt={"basic rules"} 
          loading="eager" 
          className="gif-box-1"  />
        <p className="description-1">
          {t.fruit_finder.about_text_2}
        </p>

        <hr />

        <h5 className="heading-3">
          {t.fruit_finder.about_text_3}
        </h5>
        <img 
          src={bonus_point} 
          alt={"bonus point"} 
          loading="eager" 
          className="gif-box-1 mb-10"  
          />

        <Divider color={"bg-gray-primary"} />
      </section>

      <section className="bg-gray-primary py-10">
        <h2 className="heading-1 mb-0">{t.base.game_scoring}</h2>
          <h5 className="heading-3">
            {t.fruit_finder.scoring_text_1}
          </h5>
            <img 
                src={streak} 
                alt={"streak"} 
                loading="eager" 
                className="gif-box-1"  
            />
            <p className="description-1 mt-4">{t.fruit_finder.scoring_text_2}</p>
            <h5 className="heading-3">{t.fruit_finder.scoring_text_3}</h5>



      </section>

      <section className="bg-gray-secondary">
        <div className="rotate-180">
          <Divider color={"bg-gray-primary"} />
        </div>

        <h2 className="heading-1 mt-10">{t.base.game_boosters}</h2>

        <div className="flex justify-center items-start flex-wrap gap-5 p-2 mb-10">
          <div className="grow max-w-[250px]">
            <h5 className="heading-3">{t.fruit_finder.boosters_booster_1_title}</h5>
            <img src={booster_1} alt={"extra time"} className="w-[160px] landscape:lg:w-[200px] h-auto mx-auto object-contain mb-4"  />
            <p className="description-1">{t.fruit_finder.boosters_booster_1_p}</p>
          </div>
          
          <div className="grow max-w-[250px]">
            <h5 className="heading-3">{t.fruit_finder.boosters_booster_2_title}</h5>
            <img src={booster_2} alt={"extra time"} className="w-[160px] landscape:lg:w-[200px] h-auto mx-auto object-contain mb-4"  />
            <p className="description-1">{t.fruit_finder.boosters_booster_2_p}</p>
          </div>
          
          <div className="grow max-w-[250px]">
            <h5 className="heading-3">{t.fruit_finder.boosters_booster_3_title}</h5>
            <img src={booster_3} alt={"extra time"} className="w-[160px] landscape:lg:w-[200px] h-auto mx-auto object-contain mb-4"  />
            <p className="description-1">{t.fruit_finder.boosters_booster_3_p}</p>
          </div>
        </div>

        <Divider color={"bg-gray-primary"} />
      </section>
      
      <section className="bg-gray-primary py-8">
        <h2 className="heading-1">{t.base.game_end}</h2>
        <p className="description-1">
          {t.fruit_finder.game_end_text_1}
        </p>
        <p className="description-1">
          {t.fruit_finder.game_end_text_2}
        </p>
      </section>
    </main>
  )
}
