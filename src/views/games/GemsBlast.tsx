import { useLanguageContext } from "../../hooks/useLanguageContext"
import Divider from "../../shared/components/Divider";

import logo from '/gems-blast/logo.png';
import basic_rules_1 from '/gems-blast/basic_rules_1.gif';
import basic_rules_2 from '/gems-blast/basic_rules_1.gif';
import clear_objectives from '/gems-blast/clear_objectives.gif';
import special_1 from '/gems-blast/thunder.png';
import special_2 from '/gems-blast/bomb.png';
import special_3 from '/gems-blast/rainbowgem.png';
import special_4 from '/gems-blast/thundergem.png';
import special_5 from '/gems-blast/thunderbomb.png';
import special_6 from '/gems-blast/megabomb.png';
import special_7 from '/gems-blast/teslaball.png';
import special_8 from '/gems-blast/divinebomb.png';
import special_9 from '/gems-blast/divinegem.png';
import booster_1 from '/gems-blast/booster_1.png';
import booster_2 from '/gems-blast/booster_2.png';
import booster_3 from '/gems-blast/booster_3.png';

export default function GemsBlast() {

    const { t } = useLanguageContext()

    const specials = [
        { icon: special_1, title: t.gems_blast.powers_power_1_title, p: t.gems_blast.powers_power_1_p },
        { icon: special_2, title: t.gems_blast.powers_power_2_title, p: t.gems_blast.powers_power_2_p },
        { icon: special_3, title: t.gems_blast.powers_power_3_title, p: t.gems_blast.powers_power_3_p },
        { icon: special_4, title: t.gems_blast.powers_power_4_title, p: t.gems_blast.powers_power_4_p },
        { icon: special_5, title: t.gems_blast.powers_power_5_title, p: t.gems_blast.powers_power_5_p },
        { icon: special_6, title: t.gems_blast.powers_power_6_title, p: t.gems_blast.powers_power_6_p },
        { icon: special_7, title: t.gems_blast.powers_power_7_title, p: t.gems_blast.powers_power_7_p },
        { icon: special_8, title: t.gems_blast.powers_power_8_title, p: t.gems_blast.powers_power_8_p },
        { icon: special_9, title: t.gems_blast.powers_power_9_title, p: t.gems_blast.powers_power_9_p },
    ]
    
  return (
    <main className="w-full h-full text-white text-center overflow-x-hidden mx-auto">
      <section className="bg-gradient-to-b from-black to-70% to-gray-secondary pt-10">
        <img src={logo} alt="fruit finder logo" className="w-10/12 max-w-xs mx-auto" />
        <h2 className="heading-1">{t.base.game_about}</h2>
        <h5 className="heading-2">
          {t.gems_blast.about_text_1}
        </h5>
        <img 
          src={basic_rules_1} 
          alt={"basic rules"} 
          loading="eager" 
          className="gif-box-1"  />

        <hr />

        <h5 className="heading-2">
          {t.gems_blast.about_text_2}
        </h5>

        <img 
          src={basic_rules_2} 
          alt={"bonus point"} 
          loading="eager" 
          className="gif-box-1 mb-10"  
          />

        <p className="description-2">
          {t.gems_blast.about_text_3}
        </p>
        <p className="description-2">
          {t.gems_blast.about_text_4}
        </p>
        <p className="description-2">
          {t.gems_blast.about_text_5}
        </p>

        {specials.map((special, index) => (
            <div key={index} className="mx-auto w-fit">
                <hr />
                <div className="w-full flex justify-start gap-5 items-center h-full">
                    <img
                        src={special.icon}
                        alt={"special"}
                        loading="eager"
                        className="w-full max-w-40 h-auto object-contain object-right hidden lg:block"
                    />
                    <div className="flex-col items-start justify-center gap-y-10 h-full">
                        <h5 className="max-w-lg mb-4">
                            {special.title}
                        </h5>
                        <img
                            src={special.icon}
                            alt={"special"}
                            loading="eager"
                            className="w-full max-w-40 h-auto mx-auto object-contain mb-10 lg:hidden"
                        />
                        <p className="max-w-xl mx-auto mb-2 px-2">
                            {special.p}
                        </p>
                    </div>
                </div>
            </div>
        ))}

        <Divider color={"bg-gray-primary"} />
      </section>

      <section className="bg-gray-primary py-10">
        <h2 className="heading-1 mb-0">{t.base.game_scoring}</h2>
            <h5 className="heading-2">
                {t.gems_blast.scoring_text_1}
            </h5>

            <p className="description-2 mt-4">{t.gems_blast.scoring_text_2}</p>

            <img 
                src={clear_objectives} 
                alt={"request tiles"} 
                loading="eager" 
                className="gif-box-1 mb-10"  
            />

            <p className="description-2 mt-4">{t.gems_blast.scoring_text_3}</p>
            <p className="description-2 mt-4">{t.gems_blast.scoring_text_4}</p>
            <p className="description-2 mt-4">{t.gems_blast.scoring_text_5}</p>

      </section>

      <section className="bg-gray-secondary">
        <div className="rotate-180">
          <Divider color={"bg-gray-primary"} />
        </div>

        <h2 className="heading-1 mt-10">{t.base.game_boosters}</h2>

        <div className="flex justify-center items-start flex-wrap gap-5 p-2 mb-10">
          <div className="grow max-w-[250px]">
            <h5 className="heading-3">{t.gems_blast.boosters_booster_1_title}</h5>
            <img src={booster_1} alt={"extra time"} className="w-[160px] landscape:lg:w-[200px] h-auto mx-auto object-contain mb-4"  />
            <p className="description-1">{t.gems_blast.boosters_booster_1_p}</p>
          </div>
          
          <div className="grow max-w-[250px]">
            <h5 className="heading-3">{t.gems_blast.boosters_booster_2_title}</h5>
            <img src={booster_2} alt={"extra time"} className="w-[160px] landscape:lg:w-[200px] h-auto mx-auto object-contain mb-4"  />
            <p className="description-1">{t.gems_blast.boosters_booster_2_p}</p>
          </div>
          
          <div className="grow max-w-[250px]">
            <h5 className="heading-3">{t.gems_blast.boosters_booster_3_title}</h5>
            <img src={booster_3} alt={"extra time"} className="w-[160px] landscape:lg:w-[200px] h-auto mx-auto object-contain mb-4"  />
            <p className="description-1">{t.gems_blast.boosters_booster_3_p}</p>
          </div>
        </div>

        <Divider color={"bg-gray-primary"} />
      </section>
      
      <section className="bg-gray-primary py-8">
        <h2 className="heading-1">{t.base.game_end}</h2>
        <p className="description-1">
          {t.gems_blast.game_end_text_1}
        </p>
        <p className="description-1">
          {t.gems_blast.game_end_text_2}
        </p>
      </section>
    </main>
  )
}
