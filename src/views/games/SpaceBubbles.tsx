import { useLanguageContext } from "../../hooks/useLanguageContext"
import Divider from "../../shared/components/Divider";

import logo from '/space-bubbles/logo.png';

import burst_streak from '/space-bubbles/burst_streak.gif';
// import bubble_meteor from '/space-bubbles/bubble_meteor.gif';
import bubble_bomb from '/space-bubbles/bubble_bomb.gif';
import bubbles from '/space-bubbles/bubbles.gif';

import special_1 from '/space-bubbles/special_1.png';
import special_2 from '/space-bubbles/special_2.png';
import special_3 from '/space-bubbles/special_3.png';

import booster_1 from '/space-bubbles/booster_1.png';
import booster_2 from '/space-bubbles/booster_2.png';
import booster_3 from '/space-bubbles/booster_3.png';


export default function SpaceBubbles() {

    const { t } = useLanguageContext()
    
  return (
    <main className="w-full h-full text-white text-center overflow-x-hidden mx-auto">
      <section className="bg-gradient-to-b from-black to-70% to-gray-secondary pt-10">
        <img src={logo} alt="fruit finder logo" className="w-10/12 max-w-xs mx-auto" />
        <h2 className="heading-1">{t.base.game_about}</h2>
        <h5 className="w-11/12 mb-6 mx-auto">
          {t.space_bubbles.about_text_1}
        </h5>
        <img 
          src={bubbles} 
          alt={"basic rules"} 
          loading="eager" 
          className="w-full max-w-sm h-auto mx-auto object-contain mb-14 rounded-xl shadow-box-md shadow-black border-2 border-gray-400/50 transition-all hover:border-white"  />
        <p className="description-1">
          {t.space_bubbles.about_text_2}
        </p>

        <hr />

        <h5 className="w-11/12 mb-6  mx-auto">
          {t.space_bubbles.about_text_3}
        </h5>
        <img 
          src={burst_streak} 
          alt={"Burst Streak"} 
          loading="eager" 
          className="w-full max-w-lg h-auto mx-auto object-contain rounded-xl shadow-box-md shadow-black border-2 border-gray-400/50 transition-all hover:border-white mb-10"  
          />

        <hr />

        <h5 className="w-11/12 mb-6 mx-auto">
          {t.space_bubbles.about_text_4}
        </h5>
        <img 
          src={bubble_bomb} 
          alt={"Burst Streak"} 
          loading="eager" 
          className="w-full max-w-lg h-auto mx-auto object-contain rounded-xl shadow-box-md shadow-black border-2 border-gray-400/50 transition-all hover:border-white mb-10"  
          />



        <div className="w-11/12 max-w-2xl text-center lg:text-left flex flex-col items-center justify-center gap-y-2 mx-auto mt-20">
            <div className="w-full flex justify-start gap-5 items-center h-full">
                <img 
                    src={special_1} 
                    alt={"special"} 
                    loading="eager" 
                    className="w-full max-w-40 h-auto object-contain object-right hidden lg:block"  
                />
                <div className="flex-col items-start justify-center gap-y-10 h-full">
                    <h5 className="max-w-lg mb-4">
                        {t.space_bubbles.about_special_1_title}
                    </h5>
                    <img 
                        src={special_1} 
                        alt={"special"} 
                        loading="eager" 
                        className="w-full max-w-40 h-auto mx-auto object-contain mb-10 lg:hidden"  
                        />
                    <p className="max-w-xl mx-auto mb-2">
                        {t.space_bubbles.about_special_1_p}
                    </p>
                </div>
            </div>
            <hr />
            <div className="w-full flex justify-start gap-5 items-center h-full">
                <img 
                    src={special_2} 
                    alt={"special"} 
                    loading="eager" 
                    className="w-full max-w-40 h-auto object-contain object-right hidden lg:block"  
                />
                <div className="flex-col items-start justify-center gap-y-10 h-full">
                    <h5 className="max-w-lg mb-4">
                        {t.space_bubbles.about_special_2_title}
                    </h5>
                    <img 
                        src={special_2} 
                        alt={"special"} 
                        loading="eager" 
                        className="w-full max-w-40 h-auto mx-auto object-contain mb-10 lg:hidden"  
                        />
                    <p className="max-w-xl mx-auto mb-2">
                        {t.space_bubbles.about_special_2_p}
                    </p>
                </div>
      
            </div>
            <hr />
            <div className="w-full flex justify-start gap-5 items-center h-full">
                <img 
                    src={special_3} 
                    alt={"special"} 
                    loading="eager" 
                    className="w-full max-w-40 h-auto object-contain object-right hidden lg:block"  
                />
                <div className="flex-col items-start justify-center gap-y-10 h-full">
                    <h5 className="max-w-lg mb-4">
                        {t.space_bubbles.about_special_3_title}
                    </h5>
                    <img 
                        src={special_3} 
                        alt={"special"} 
                        loading="eager" 
                        className="w-full max-w-40 h-auto mx-auto object-contain mb-10 lg:hidden"  
                        />
                    <p className="max-w-xl mx-auto mb-2">
                        {t.space_bubbles.about_special_3_p}
                    </p>
                </div>
            </div>
        </div>

        <h5 className="w-10/12 mx-auto mt-20 mb-6">{t.space_bubbles.about_text_5}</h5>


        <Divider color={"bg-gray-primary"} />
      </section>

      <section className="bg-gray-primary py-10">
        <h2 className="heading-1 mb-0">{t.base.game_scoring}</h2>

                
        <div className="w-full flex flex-col items-center justify-center gap-y-6 h-full">
            <h4 className="max-w-lg mb-4">
                {t.space_bubbles.scoring_text_1}
            </h4>
      
            <p className="max-w-xl mx-auto mb-2">
                {t.space_bubbles.scoring_text_1_example}
            </p>
            <p className="text-sm text-white">
                {t.space_bubbles.scoring_text_1_note}
            </p>
        </div>
        <hr />
        <div className="flex flex-col items-center justify-center gap-y-6 h-full">
            <h4 className="max-w-lg mb-4">
                {t.space_bubbles.scoring_text_2}
            </h4>
        </div>
        <hr />
        <div className="flex flex-col items-center justify-center gap-y-6 h-full">
            <h4 className="max-w-lg mb-4">
                {t.space_bubbles.scoring_text_3}
            </h4>
      
            <p className="max-w-xl mx-auto mb-2">
                {t.space_bubbles.scoring_text_3_example}
            </p>
        </div>
        <hr />
        <div className="flex flex-col items-center justify-center gap-y-6 h-full">
            <h4 className="max-w-lg mb-4">
                {t.space_bubbles.scoring_text_4}
            </h4>
      
            <p className="max-w-xl mx-auto mb-2">
                {t.space_bubbles.scoring_text_4_li_1}
            </p>
            <p className="max-w-xl mx-auto mb-2">
                {t.space_bubbles.scoring_text_4_li_2}
            </p>
            <p className="text-sm text-white">
                {t.space_bubbles.scoring_text_4_note}
            </p>
        </div>


      </section>

      <section className="bg-gray-secondary">
        <div className="rotate-180">
          <Divider color={"bg-gray-primary"} />
        </div>

        <h2 className="heading-1 mt-10">{t.base.game_boosters}</h2>

        <div className="flex justify-center items-start flex-wrap gap-5 p-2 mb-10">
          <div className="grow max-w-[250px]">
            <h5 className="heading-3">{t.space_bubbles.boosters_booster_1_title}</h5>
            <img src={booster_1} alt={"extra time"} className="w-[160px] landscape:lg:w-[200px] h-auto mx-auto object-contain mb-4"  />
            <p className="description-1">{t.space_bubbles.boosters_booster_1_p}</p>
          </div>
          
          <div className="grow max-w-[250px]">
            <h5 className="heading-3">{t.space_bubbles.boosters_booster_2_title}</h5>
            <img src={booster_2} alt={"extra time"} className="w-[160px] landscape:lg:w-[200px] h-auto mx-auto object-contain mb-4"  />
            <p className="description-1">{t.space_bubbles.boosters_booster_2_p}</p>
          </div>
          
          <div className="grow max-w-[250px]">
            <h5 className="heading-3">{t.space_bubbles.boosters_booster_3_title}</h5>
            <img src={booster_3} alt={"extra time"} className="w-[160px] landscape:lg:w-[200px] h-auto mx-auto object-contain mb-4"  />
            <p className="description-1">{t.space_bubbles.boosters_booster_3_p}</p>
          </div>
        </div>

        <Divider color={"bg-gray-primary"} />
      </section>
      
      <section className="bg-gray-primary py-8">
        <h2 className="heading-1">{t.base.game_end}</h2>
        <p className="description-1">
          {t.space_bubbles.game_end_text_1}
        </p>
        <p className="description-1">
          {t.space_bubbles.game_end_text_2}
        </p>
      </section>
    </main>
  )
}
