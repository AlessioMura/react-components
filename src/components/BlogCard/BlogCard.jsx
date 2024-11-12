import style from './BlogCard.module.css'

export default function BlogCard() {
    return (

        <div className={style.BlogCard}>
            <p className={style.emptyImg}>600 x 400</p>
            <div className={style.content}>
            <h2>Titolo del Post</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod inventore distinctio facere reiciendis sapiente error temporibus nobis illum, officia libero facilis saepe atque neque, soluta ut minima voluptatem recusandae amet!</p>
            <button>LEGGI DI PIU</button>
            </div>
        </div>



    )
}