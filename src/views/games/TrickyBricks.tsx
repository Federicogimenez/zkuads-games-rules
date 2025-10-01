import { useLanguageContext } from '../../hooks/useLanguageContext';
import Divider from '../../shared/components/Divider';

import logo from '/tricky-bricks/logo.png';
import basic_rules from '/tricky-bricks/basic_rules.gif';
import combos from '/tricky-bricks/combos.gif';
import special_1 from '/tricky-bricks/bomb_idle.gif';
import special_2 from '/tricky-bricks/rainbow_bomb.gif';
// import the_roof from '/tricky-bricks/the_roof.gif';
import booster_1 from '/tricky-bricks/booster_1.png';
import booster_2 from '/tricky-bricks/booster_2.png';
import booster_3 from '/tricky-bricks/booster_3.png';



export default function TrickyBricks() {

    const { t } = useLanguageContext()
    
    
  return (
    <main className="w-full h-full text-white text-center overflow-x-hidden mx-auto">
      <section className="bg-gradient-to-b from-black to-70% to-gray-secondary pt-10">
        <img src={logo} alt="fruit finder logo" className="w-10/12 max-w-xs mx-auto" />
        <h2 className="heading-1">{t.base.game_about}</h2>
        <h5 className="heading-2">
          {t.tricky_bricks.about_text_1}
        </h5>
        <img 
          src={basic_rules} 
          alt={"basic rules"} 
          loading="eager" 
          className="gif-box-1"  />

        <hr />

        <h5 className="w-11/12 mx-auto max-w-3xl mb-8">
          {t.tricky_bricks.about_text_2}
        </h5>
        <img 
          src={combos} 
          alt={"combos"} 
          loading="eager" 
          className="gif-box-1"  
          />

        <hr />

        <h5 className='heading-2'>
            {t.tricky_bricks.about_text_3}
        </h5>

        <div className=' w-full flex flex-col md:flex-row max-w-2xl gap-10 justify-between mx-auto mb-10'>
            <div className='flex flex-col justify-center gap-y-8 items-center'>
                <h4>{t.tricky_bricks.about_special_1_title}</h4>
                <img 
                    src={special_1} 
                    alt={"special bricks"} 
                    loading="eager" 
                    className="w-full max-w-44 h-auto mx-auto object-contain"  
                    />
                <p>{t.tricky_bricks.about_special_1_p}</p>
            </div>
            <div className='flex flex-col justify-center gap-y-8 items-center'>
                <h4>{t.tricky_bricks.about_special_2_title}</h4>
                <img 
                    src={special_2} 
                    alt={"special bricks"} 
                    loading="eager" 
                    className="w-full max-w-44 h-auto mx-auto object-contain"  
                    />
                <p>{t.tricky_bricks.about_special_2_p}</p>
            </div>
        </div>


        <Divider color={"bg-gray-primary"} />
      </section>

      <section className="bg-gray-primary py-10">
        <h2 className="heading-1 mb-0">{t.base.game_scoring}</h2>
        <h5 className="heading-3">
            {t.tricky_bricks.scoring_text_1}
        </h5>

        <p className="description-1 mt-4">{t.tricky_bricks.scoring_text_2}</p>



      </section>

      <section className="bg-gray-secondary">
        <div className="rotate-180">
          <Divider color={"bg-gray-primary"} />
        </div>

        <h2 className="heading-1 mt-10">{t.base.game_boosters}</h2>

        <div className="flex justify-center items-start flex-wrap gap-5 p-2 mb-10">
          <div className="grow max-w-[250px]">
            <h5 className="heading-3">{t.tricky_bricks.boosters_booster_1_title}</h5>
            <img src={booster_1} alt={"extra time"} className="w-[160px] landscape:lg:w-[200px] h-auto mx-auto object-contain mb-4"  />
            <p className="description-1">{t.tricky_bricks.boosters_booster_1_p}</p>
          </div>
          
          <div className="grow max-w-[250px]">
            <h5 className="heading-3">{t.tricky_bricks.boosters_booster_2_title}</h5>
            <img src={booster_2} alt={"extra time"} className="w-[160px] landscape:lg:w-[200px] h-auto mx-auto object-contain mb-4"  />
            <p className="description-1">{t.tricky_bricks.boosters_booster_2_p}</p>
          </div>
          
          <div className="grow max-w-[250px]">
            <h5 className="heading-3">{t.tricky_bricks.boosters_booster_3_title}</h5>
            <img src={booster_3} alt={"extra time"} className="w-[160px] landscape:lg:w-[200px] h-auto mx-auto object-contain mb-4"  />
            <p className="description-1">{t.tricky_bricks.boosters_booster_3_p}</p>
          </div>
        </div>

        <Divider color={"bg-gray-primary"} />
      </section>
      
      <section className="bg-gray-primary py-8">
        <h2 className="heading-1">{t.base.game_end}</h2>
        <p className="description-1">
          {t.tricky_bricks.game_end_text_1}
        </p>
        <p className="description-1">
          {t.tricky_bricks.game_end_text_2}
        </p>
      </section>
    </main>
  )
}
