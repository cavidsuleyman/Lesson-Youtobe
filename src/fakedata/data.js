import {GrHomeRounded, GrHistory} from "react-icons/gr";
import {FaDollarSign, FaGamepad} from "react-icons/fa";
import {BsFillCollectionPlayFill, BsChevronDown, BsFire, BsYoutube, BsFlag} from "react-icons/bs";
import {MdOutlineVideoLibrary, MdOutlineOndemandVideo, MdOutlineWatchLater, MdSettings, MdOutlineFeedback} from "react-icons/md";
import {BiLike, BiMovie, BiNews, BiHelpCircle} from "react-icons/bi";
import {RiMusicFill} from "react-icons/ri";
import { TbMapPinShare, TbBrandYoutubeKids } from "react-icons/tb";
import { GiTrophyCup } from "react-icons/gi";
import { SiYoutubestudio, SiYoutubemusic } from "react-icons/si";
import { Link } from "react-router-dom";


const linkdata1 = [
    {
        icon1: <GrHomeRounded fontSize={18}/>,
        title1: <Link className="link" to="/">Home</Link>
    },
    {
        icon1: <FaDollarSign fontSize={18}/>,
        title1: <Link className="link" to="/">Shorts</Link>
    },
    {
        icon1: <BsFillCollectionPlayFill fontSize={18}/>,
        title1: <Link className="link" to="">Subscriptions</Link>
    },
]
const linkdata2 = [
    {
        icon2: <MdOutlineVideoLibrary fontSize={18}/>,
        title2: <Link className="link" to="">Library</Link>
    },
    {
        icon2: <GrHistory fontSize={18}/>,
        title2: <Link className="link" to="">History</Link>
    },
    {
        icon2: <MdOutlineOndemandVideo fontSize={18}/>,
        title2: <Link className="link" to="">Your videos</Link>
    },
    {
        icon2: <MdOutlineWatchLater fontSize={18}/>,
        title2: <Link className="link" to="">Watch later</Link>
    },
    {
        icon2: <BiLike fontSize={18}/>,
        title2: <Link className="link" to="">Liked videos</Link>
    },
    {
        icon2: <BsChevronDown fontSize={18}/>,
        title2: <Link className="link" to="">Show more</Link>
    },
]


const linkdata3 = [
    {
        img: "https://picsum.photos/seed/picsum/200/300",
        title3: <Link className="link" to="">Simplearn</Link>
    },
    {
        img: "https://picsum.photos/seed/picsum/200/300",
        title3: <Link className="link" to="">Tepkikolik</Link>
    },
    {
        img: "https://picsum.photos/seed/picsum/200/300",
        title3: <Link className="link" to="">Literat</Link>
    },
    {
        img: "https://picsum.photos/seed/picsum/200/300",
        title3: <Link className="link" to="">Easy Tutorials</Link>
    },
    {
        img: "https://picsum.photos/seed/picsum/200/300",
        title3: <Link className="link" to="">CBC Sport</Link>
    },
]

const linkdata4 = [
    {
        icon3: <BsFire fontSize={18}/>,
        title4: <Link className="link" to="">Trending</Link>
    },
    {
        icon3: <RiMusicFill fontSize={18}/>,
        title4: <Link className="link" to="">Music</Link>
    },
    {
        icon3: <BiMovie fontSize={18}/>,
        title4: <Link className="link" to="">Movies</Link>
    },
    {
        icon3: <TbMapPinShare fontSize={18}/>,
        title4: <Link className="link" to="">Live</Link>
    },
    {
        icon3: <FaGamepad fontSize={18}/>,
        title4: <Link className="link" to="">Gaming</Link>
    },
    {
        icon3: <BiNews fontSize={18}/>,
        title4: <Link className="link" to="">News</Link>
    },
    {
        icon3: <GiTrophyCup fontSize={18}/>,
        title4: <Link className="link" to="">Sports</Link>
    },
]

const linkdata5 = [
    {
        icon5: <BsYoutube color='red' fontSize={18}/>,
        title5: <Link className="link" to="">Youtube Premium</Link>
    },
    {
        icon5: <SiYoutubestudio color='red' fontSize={18}/>,
        title5: <Link className="link" to="">Youtube Studio</Link>
    },
    {
        icon5: <SiYoutubemusic color='red' fontSize={18}/>,
        title5: <Link className="link" to="">Youtube Movies</Link>
    },
    {
        icon5: <TbBrandYoutubeKids color='red' fontSize={18}/>,
        title5: <Link className="link" to="">Youtube Kids</Link>
    }
]


const linkdata6 = [
    {
        icon6: <MdSettings fontSize={18}/>,
        title6: <Link className="link" to="">Settings</Link>
    },
    {
        icon6: <BsFlag fontSize={18}/>,
        title6: <Link className="link" to="">Report history</Link>
    },
    {
        icon6: <BiHelpCircle fontSize={18}/>,
        title6: <Link className="link" to="">Help</Link>
    },
    {
        icon6: <MdOutlineFeedback fontSize={18}/>,
        title6: <Link className="link" to="">Send feedback</Link>
    }
]


export {
    linkdata1,
    linkdata2,
    linkdata3,
    linkdata4,
    linkdata5,
    linkdata6,
}