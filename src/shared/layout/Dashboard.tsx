import { Link } from 'react-router-dom';

import fruit_finder from '/fruit-finder/preview.png';
import blackjack from '/blackjack/preview.png';
import space_bubbles from '/space-bubbles/preview.png'
import jungle_treasures from '/jungle-treasures/preview.png'
import solitaire_paradise from '/solitaire-paradise/preview.png'
import sunny_blocks from '/sunny-blocks/preview.png'
import tricky_bricks from '/tricky-bricks/preview.png'
import just_bingo from '/just-bingo/preview.png'
import gems_blast from '/gems-blast/preview.png'
import domino from '/domino/preview.png'
import into_the_dungeon from '/into-the-dungeon/preview.png'


const Dashboard = () => {


    const helpLinks = [
        {
            img: fruit_finder,
            path: "/fruit-finder"
        },
        {
            img: blackjack,
            path: "/21-blackjack/"
        },
        {
            img: tricky_bricks,
            path: "/tricky-bricks/"
        },
        {
            img: jungle_treasures,
            path: "/jungle-treasures/"
        },
        {
            img: sunny_blocks,
            path: "/sunny-blocks/"
        },
        {
            img: space_bubbles,
            path: "/space-bubbles/"
        },
        {
            img: solitaire_paradise,
            path: "/solitare-paradise/"
        },
        {
            img: just_bingo,
            path: "/just-bingo"
        },
        {
            img: domino,
            path: "/domino"
        },
        {
            img: into_the_dungeon,
            path: "/into-the-dungeon"
        },
        {
            img: gems_blast,
            path: "/gems-blast"
        },
    ]



  return (
    <nav className="grid grid-cols-2 md:grid-cols-3 row-auto gap-[3vw] justify-center place-content-center">
       {
        helpLinks.map(( { img, path } )=>{
            return <Link to={path} className='block relative w-full h-fit overflow-hidden rounded-xl shadow-black box-content transition-all duration-200 
                                            hover:translate-1 shadow-box-lg hover:shadow-none
                                            active:translate-1.5
                                            after:absolute after:inset-0 after:rounded-xl after:transition-all  after:border-t-4 after:border-transparent hover:after:border-white
                                            before:absolute before:inset-0 before:bg-transparent before:transition-all before:duration-500 before:bg-gradient-to-b before:from-white/40 before:to-transparent before:opacity-0 hover:before:opacity-70
                                            '>
                <img src={img} alt={"game logo"} className='w-full h-full object-cover object-center'/>
            </Link>
        })
       }
    </nav>
  )
}

export default Dashboard