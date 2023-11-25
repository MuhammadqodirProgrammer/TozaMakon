import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import clean1 from "../../assets/images/clean1.png";
import clean2 from "../../assets/images/clean2.png";
import clean3 from "../../assets/images/clean3.png";
import arrow from "../../assets/images/arrow-right.png";
import invation1 from "../../assets/images/invation1.png";
import invation2 from "../../assets/images/invation2.png";
import invation3 from "../../assets/images/invation3.png";

import barg from "../../assets/images/leaf.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseUrl, baseUrlImg } from "../../api/api";

export const BlogPage = () => {
  const [active, setActive] = useState(true);
  const [currentTab, setCurrentTab] = useState("");
  const [news, setNews] = useState([
    {
      id:1,
      news_description:"description",
      news_title:"title",
    }
  ]);
  const [searchData, setSearchData] = useState([]);
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Category",
    },
    {
      id: 2,
      name: "Category2",
    },
  ]);

  useEffect(() => {
    fetch(baseUrl + "/news")
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch((err) => {
        console.log(err.message);
      });
  }, [news]);

  const handleSearch = (latter) => {
    fetch(baseUrl + `/service/search/?letter=${latter}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setSearchData(data);
        console.log(data);
      });
  };

  const handleTabClick = (e) => {
    setCurrentTab(e.target?.id || e.target?.closest("svg")?.id);
    console.log(e.target?.id);
    setActive(false);
  };
  return (
    <div className="">
      <Header />

      {/* invitation section start */}

      <section className="invitation text-center pb-[60px] pt-[15px]  ">
        <div className="mycontainer">
          <div className="flex items-center my_b gap-2 mycontainer">
            <Link to="/" className=" text-[#7B7C77] text-[16px] font-bold ">
              Bosh sahifa
            </Link>
            <img src={arrow} alt="img" />
            <Link to="/blog" className=" text-[#000] text-[16px] font-bold ">
              Yangiliklar
            </Link>
          </div>

          <div className="hero_left mb-[20px] text-center w-full">
            <p className="text-[#0FC36D] text-[24px] font-bold ">
              Biz siz uchun
            </p>
            <h3 className=" text-[#332942] md:text-[38px] text-[36px]  mx-auto font-bold max-w-[545px]  ">
              Toza va sog’lom muhit yaratamiz
            </h3>
            <p className="text-[#726A7E] text-[16px] mx-auto font-normal max-w-[479px] md:mt-[24px] mt-[18px] ">
              Biz sizning uyingiz, ofisingiz tozaligi va farovonligi uchun keng
              ko'lamli xizmatlarni taqdim etamiz.
            </p>
          </div>

          <div className="filter_box    rounded-[24px] bg-[#F6F7ED] p-[16px]  flex items-center justify-between ">
            <div className="btn_box flex items-center gap-1">
              <button
                className={`   rounded-[12px] h-[60px] flex items-center justify-center md:py-[16px] md:px-[20px] px-[16px] py-[10px]   hover:bg-[#0FC36D] border-[1px] border-[#0FC36D]   shadow-lg font-bold md:text-[16px] text-[14px] transition 
									${active ? "bg-[#0FC36D] text-white" : " text-[#808080] bg-[tranparent] "}
								 `}
                onClick={() => setActive(!active)}
              >
                Barchasi
                <span className=" p-[10px] bg-white rounded-full  ml-2 text-[10px] w-[25px] h-[25px] flex items-center justify-center  text-[#808080]">
                  25
                </span>
              </button>

              {categories.map((tab, i) => (
                <button
                  className={`   rounded-[12px] flex items-center h-[60px] justify-center md:py-[16px] md:px-[20px] px-[16px] py-[10px]   hover:bg-[#0FC36D] border-[1px] border-[#0FC36D]  text-[#808080]  shadow-lg font-bold md:text-[16px] text-[14px] transition   disabled:bg-[#0FC36D] disabled:text-white`}
                  key={i}
                  id={tab?.id + ""}
                  disabled={currentTab == `${tab?.id}`}
                  onClick={handleTabClick}
                >
                  {tab?.name}

                  <span className=" p-[10px] bg-white rounded-full  ml-2 text-[10px] w-[25px] h-[25px] flex items-center justify-center  text-[#808080] ">
                    2
                  </span>
                </button>
              ))}
            </div>
            <div className="search max-w-[20%]">
              <div className="flex min-h-[56px] grow items-center gap-4 rounded-md bg-[white]  dark:bg-bgColor px-4 w-full flex-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-[24px] w-[24px] cursor-pointer"
                >
                  <circle cx={11} cy={11} r={8} />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <input
                  className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground  focus-visible:ring-ring  disabled:cursor-not-allowed disabled:opacity-50 no-focus grow border-none bg-[transparent] outline-none"
                  placeholder="Qidirish"
                  type="text"
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="service_box text-left  grid mt-[56px]  lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-[24px] ">
            {news.map((element) => (
              <div
                key={element.id}
                className="service_card bg-[#F6F7ED] p-[24px]  rounded-[32px] "
              >
                <img
                  src={baseUrlImg + `${element.news_image}`}
                  alt="img "
                  className="mx-auto w-full object-cover mb-[16px] "
                />

                <button className=" bg-[#0FC36D] px-[12px] py-[2px] rounded-[8px]  mb-3 text-[#fff] ml-0  ">
                  {" "}
                  Tozalash{" "}
                </button>

                <p className=" text-[#332942] text-[18px]  font-bold  ">
                  {element.news_title}
                </p>

                <p className="text-[#726A7E] mx-auto text-[14px] font-normal max-w-[411px] mt-[12px] ">
                  {element.news_description}
                </p>

                <button className=" my-[15px] w-full   rounded-[12px] flex items-center justify-center md:py-[16px] md:px-[24px] px-[16px] py-[10px] bg-[tranparent]  hover:bg-[#0FC36D] border-[1px] border-[#0FC36D]  text-[#0FC36D] hover:text-white shadow-lg font-bold md:text-[16px] text-[14px] transition">
                  Batafsil
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* invitation section finish */}

      <section className=" bg-[#F6F7ED] py-[60px] ">
        <div className=" mycontainer ">
          <div className="my_box text-center bg-white rounded-[20px]  py-[40px] px-[20px] ">
            <p className="text-[#0FC36D] text-[24px] font-bold  ">Biz uchun</p>

            <h3 className=" text-[#332942] text-[40px]  font-bold  ">
              Yana savollaringiz bormi?
            </h3>
            <p className="text-[#726A7E] mx-auto text-[16px] font-normal max-w-[575px] mt-[24px] ">
              Sizni qiynayotgan savollaringiz bo’lsa biz bilan bog’laning!
              Mutaxassislarimiz sizning savollaringizga javob berishadi!
            </p>

            <button className=" text-white rounded-[12px] mx-auto mt-[40px] flex  items-center justify-center py-[16px] px-[24px] bg-[#0FC36D] border-none  shadow-lg font-bold">
              Buyurtma qilish
            </button>
          </div>

          <div className="mt-[50px] ">
            <img src={barg} alt=" img" className=" mx-auto " />

            <h3 className="text-[#0FC36D] text-[24px] font-bold  text-center my-[16px] ">
              Toza Makon
            </h3>

            <p className=" text-[#332942] text-[16px]  font-medium text-center  ">
              Tozalik biz bilan boshlanadi
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
