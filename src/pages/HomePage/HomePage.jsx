import './Home.scss';

import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import heroImg from '../../assets/images/seneorita.png';
import clean1 from '../../assets/images/clean1.png';
import clean2 from '../../assets/images/clean2.png';
import clean3 from '../../assets/images/clean3.png';
import invation1 from '../../assets/images/invation1.png';
import invation2 from '../../assets/images/invation2.png';
import invation3 from '../../assets/images/invation3.png';
import iPhoneImg from '../../assets/images/iPhone.png';
import qoshtirnoq from '../../assets/images/qoshtirnoq.png';
import user from '../../assets/images/user.png';
import user2 from '../../assets/images/user2.png';
import stars from '../../assets/images/stars.png';
import barg from '../../assets/images/leaf.png';
import GooglePlay from '../../assets/images/Google-Play.png';
import AppStore from '../../assets/images/App-Store.png';
import { Link } from 'react-router-dom';
import Partner from '../../components/HeroCarousel/Carousel';
import { useRef, useState } from 'react';


import {AiOutlineUser} from "react-icons/ai"
import {AiOutlineClose} from "react-icons/ai"
import {BsTelephone} from "react-icons/bs"
import instance from '../../api/api';

export const HomePage = () => {
	const [modal, setModal] = useState(false);
	const nameRef = useRef();
	const phonenumberRef = useRef();

async	function handleSubmit(e) {
		e.preventDefault();
		
		const formData = new FormData();

		formData.append('name', nameRef?.current?.value);
		formData.append('phone_number', phonenumberRef?.current?.value);

		const data = await instance.post('/customer', formData);
		console.log(data, 'data');
	}



	return (
		<div className=''>
			<Header />

			{
				modal && <div className=' min-w-[100vw] min-h-[100vh] fixed top-0 left-0 bg-[#010101a5]    z-50  my_overlay'>
				<div className='modal_form  px-[40px] flex items-center justify-center  min-w-[100vw] min-h-[100vh] '>
					<form
						className=' bg-white max-w-[482px]  mx-auto p-[32px]  pt-[40px] rounded-[32px] relative'
						onSubmit={handleSubmit}
					>

<AiOutlineClose size={30} className='  text-[#786868]  cursor-pointer absolute right-[20px] top-[20px] ' onClick={() => setModal((prev) => !prev)} />


						<h4 className=' text-[#332942] font-semibold  text-[24px] '>
							Aloqa malumotlari
						</h4>

						<p className=' text-[#726A7E] font-normal  text-[16px] mt-[8px] mb-[30px] '>
							Aloqaga chiqishimiz uchun quyida so’ralgan ma’lumotlarni bizga
							jo’nating
						</p>
					
							<div className='flex min-h-[56px] grow items-center gap-4 rounded-[16px] bg-[white] border-[1px]   mb-[20px] border-solid border-[#E3E2E2]  dark:bg-bgColor px-4 w-full flex-1'>
								<AiOutlineUser size={30} className='  text-[#786868] ' />
								<input
									className='flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground  focus-visible:ring-ring  disabled:cursor-not-allowed disabled:opacity-50 no-focus grow border-none bg-[transparent] outline-none'
									placeholder="Ismingiz"
									maxLength={35}
									type='text'
									ref={nameRef}
								/>
							</div>
							<div className='flex min-h-[56px] grow items-center gap-4 rounded-[16px] bg-[white] border-[1px]   mb-[20px] border-solid border-[#E3E2E2]  dark:bg-bgColor px-4 w-full flex-1'>
								<BsTelephone size={30} className='  text-[#786868] ' />
								<input
									className='flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground  focus-visible:ring-ring  disabled:cursor-not-allowed disabled:opacity-50 no-focus grow border-none bg-[transparent] outline-none'
									placeholder="Telefon raqamingiz"
									maxLength={13}
									
									type='number'
									ref={phonenumberRef}
								/>
							</div>
					
						<button
								className=' text-white rounded-[12px] flex items-center justify-center md:py-[16px] md:px-[24px] px-[16px] py-[10px] bg-[#0FC36D] border-none  w-full shadow-lg font-bold'
							>
								Yuborish
							</button>
					</form>
				</div>
			</div>
			}

			<section className=' bg-[#F6F7ED] '>
				<div className='hero mycontainer flex items-center   one_test '>
					<div className='hero_left mb-[20px]'>
						<p className='text-[#0FC36D] text-[24px] font-bold '>
							Biz siz uchun
						</p>
						<h3 className=' text-[#332942] md:text-[56px] text-[36px]  font-bold max-w-[615px]  '>
							Toza va sog’lom muhit yaratamiz
						</h3>
						<p className='text-[#726A7E] text-[16px] font-normal max-w-[479px] md:mt-[24px] mt-[18px] '>
							Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun
							keng ko'lamli xizmatlarni taqdim etamiz.
						</p>
						<div className='flex items-center gap-[34px] md:mt-[56px] mt-[36px]'>
							<button
								className=' text-white rounded-[12px] flex items-center justify-center md:py-[16px] md:px-[24px] px-[16px] py-[10px] bg-[#0FC36D] border-none  shadow-lg font-bold'
								onClick={() => setModal((prev) => !prev)}
							>
								Bog’lanish
							</button>
							<Link
								to='/orders'
								className='  rounded-[12px] flex items-center justify-center md:py-[16px] md:px-[24px] px-[16px] py-[10px] bg-[tranparent]  hover:bg-[#0FC36D] border-[1px] border-[#0FC36D]  text-[#0FC36D] hover:text-white shadow-lg font-bold md:text-[16px] text-[14px] transition'
							>
								Bizning xizmatlar
							</Link>
						</div>
					</div>
					<div className='hero_right'>
						<img
							src={heroImg}
							alt='farrosh opa '
							className=' sm:w-auto w-[90%] lg:h-auto h-[50vh] object-cover mx-auto '
						/>
					</div>
				</div>
			</section>

			{/* why choose us section start */}
			<section className='why_us text-center py-[60px]   '>
				<div className='mycontainer'>
					<p className='text-[#0FC36D] text-[24px] font-bold  '>Nima uchun</p>

					<h3 className=' text-[#332942] text-[40px]  font-bold  '>
						Bizni tanlashingiz shart
					</h3>
					<p className='text-[#726A7E] mx-auto text-[16px] font-normal max-w-[480px] mt-[24px] '>
						Xizmatlarimizdan foydalanishda quyidagi qulayliklarga va
						imkoniyatlarga ega bo’lasiz
					</p>

					<div className='service_box grid mt-[56px]  lg:grid-cols-3 md:grid-cols-3 grid-cols-1 '>
						<div className=' p-[10px]'>
							<img src={clean1} alt='img ' className='mx-auto mb-[16px] ' />

							<p className=' text-[#332942] text-[18px]  font-bold  '>
								Tozalikdan rohatlanish
							</p>

							<p className='text-[#726A7E] mx-auto text-[14px] font-normal max-w-[411px] mt-[12px] '>
								Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun
								keng ko'lamli xizmatlarni taqdim etamiz.
							</p>
						</div>
						<div className=' p-[10px]'>
							<img src={clean2} alt='img ' className='mx-auto mb-[16px] ' />

							<p className=' text-[#332942] text-[18px]  font-bold  '>
								Professionallik
							</p>

							<p className='text-[#726A7E] mx-auto text-[14px] font-normal max-w-[411px] mt-[12px] '>
								Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun
								keng ko'lamli xizmatlarni taqdim etamiz.
							</p>
						</div>

						<div className=' p-[10px]'>
							<img src={clean3} alt='img ' className='mx-auto mb-[16px] ' />

							<p className=' text-[#332942] text-[18px]  font-bold  '>
								Mutaxassislar xizmati
							</p>

							<p className='text-[#726A7E] mx-auto text-[14px] font-normal max-w-[411px] mt-[12px] '>
								Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun
								keng ko'lamli xizmatlarni taqdim etamiz.
							</p>
						</div>
					</div>
				</div>
			</section>
			{/* why choose us section finished */}

			{/* invitation section start */}

			<section className='invitation text-center py-[60px]  '>
				<div className='mycontainer'>
					<p className='text-[#0FC36D] text-[24px] font-bold  '>
						Biz siz uchun
					</p>

					<h3 className=' text-[#332942] text-[40px]  font-bold  '>
						Nimalarni taklif qilamiz
					</h3>
					<p className='text-[#726A7E] mx-auto text-[16px] font-normal max-w-[500px] mt-[24px] '>
						Biz sizning uyingiz, ofisingiz tozaligi va farovonligi uchun
						quyidagi xizmatlarni taklif qilamiz
					</p>

					<div className='service_box grid mt-[56px]  lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-[24px] '>
						<div className='service_card bg-[#F6F7ED] p-[24px]  rounded-[32px] '>
							<img
								src={invation1}
								alt='img '
								className='mx-auto w-full object-cover mb-[16px] '
							/>

							<p className=' text-[#332942] text-[18px]  font-bold  '>
								Tozalikdan rohatlanish
							</p>

							<p className='text-[#726A7E] mx-auto text-[14px] font-normal max-w-[411px] mt-[12px] '>
								Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun
								keng ko'lamli xizmatlarni taqdim etamiz.
							</p>

							<button className=' my-[15px] w-full   rounded-[12px] flex items-center justify-center md:py-[16px] md:px-[24px] px-[16px] py-[10px] bg-[tranparent]  hover:bg-[#0FC36D] border-[1px] border-[#0FC36D]  text-[#0FC36D] hover:text-white shadow-lg font-bold md:text-[16px] text-[14px] transition'>
								Batafsil
							</button>
						</div>
						<div className='service_card bg-[#F6F7ED] p-[24px]  rounded-[32px] '>
							<img
								src={invation2}
								alt='img '
								className='mx-auto w-full object-cover mb-[16px] '
							/>

							<p className=' text-[#332942] text-[18px]  font-bold  '>
								Professionallik
							</p>

							<p className='text-[#726A7E] mx-auto text-[14px] font-normal max-w-[411px] mt-[12px] '>
								Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun
								keng ko'lamli xizmatlarni taqdim etamiz.
							</p>

							<button className=' my-[15px] w-full   rounded-[12px] flex items-center justify-center md:py-[16px] md:px-[24px] px-[16px] py-[10px] bg-[tranparent]  hover:bg-[#0FC36D] border-[1px] border-[#0FC36D]  text-[#0FC36D] hover:text-white shadow-lg font-bold md:text-[16px] text-[14px] transition'>
								Batafsil
							</button>
						</div>

						<div className='service_card bg-[#F6F7ED] p-[24px]  rounded-[32px] '>
							<img
								src={invation3}
								alt='img '
								className='mx-auto w-full object-cover mb-[16px] '
							/>

							<p className=' text-[#332942] text-[18px]  font-bold  '>
								Mutaxassislar xizmati
							</p>

							<p className='text-[#726A7E] mx-auto text-[14px] font-normal max-w-[411px] mt-[12px] '>
								Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun
								keng ko'lamli xizmatlarni taqdim etamiz.
							</p>

							<button className=' my-[15px] w-full   rounded-[12px] flex items-center justify-center md:py-[16px] md:px-[24px] px-[16px] py-[10px] bg-[tranparent]  hover:bg-[#0FC36D] border-[1px] border-[#0FC36D]  text-[#0FC36D] hover:text-white shadow-lg font-bold md:text-[16px] text-[14px] transition'>
								Batafsil
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* invitation section finish */}

			{/* our  app start */}

			<section className=' bg-[#F6F7ED] py-[35px] my-[80px] '>
				<div className='ourapp mycontainer flex items-center justify-between relative flex-wrap gap-4'>
					<div className='ourapp_left'>
						<p className='text-[#0FC36D] text-[24px] font-bold '>
							Biz siz uchun
						</p>
						<h3 className=' text-[#332942] text-[40px]  font-medium'>
							Ilovamizdan foydalanib ko’ring!
						</h3>
						<p className='text-[#726A7E] text-[16px] font-normal max-w-[479px] mt-[24px] '>
							Ilovamizni hoziroq yuklab oling va u orqali xizmatlarimizdan tez
							va oson foydalaning.
						</p>
						<div className='flex items-center gap-[34px] mt-[56px]'>
							<Link to='#'>
								{' '}
								<img src={GooglePlay} alt='img' />{' '}
							</Link>
							<Link to='#'>
								{' '}
								<img src={AppStore} alt='img' />{' '}
							</Link>
						</div>
					</div>
					<div className='ourapp_right   mx-auto '>
						<img
							src={iPhoneImg}
							alt='iPhoneImg  '
							className='   md:static  lg:absolute top-[-33%] right-[10%]  '
						/>
					</div>
				</div>
			</section>

			{/* our  app finish */}

			{/* our clients section start */}
			<section className='why_us text-center py-[60px]   '>
				<div className='mycontainer'>
					<p className='text-[#0FC36D] text-[24px] font-bold  '>
						Biz haqimizda
					</p>

					<h3 className=' text-[#332942] text-[40px]  font-bold  '>
						Mijozlar nima deydi
					</h3>

					<div className='service_box grid mt-[56px]  md:grid-cols-2  grid-cols-1 '>
						<div className=' p-[10px]'>
							<img src={qoshtirnoq} alt='img ' className='mx-auto mb-[16px] ' />

							<p className=' text-[#332942] text-[18px]  font-medium  '>
								Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun
								keng ko'lamli xizmatlarni taqdim etamiz.
							</p>

							<div className='mt-[10px]'>
								<img src={user} alt='img ' className='mx-auto mb-[16px] ' />

								<p className=' text-[#726A7E] text-[16px]  font-normal  '>
									John Doe
								</p>

								<img src={stars} alt='img ' className='mx-auto mt-[16px] ' />
							</div>
						</div>
						<div className=' p-[10px]'>
							<img src={qoshtirnoq} alt='img ' className='mx-auto mb-[16px] ' />

							<p className=' text-[#332942] text-[18px]  font-medium  '>
								Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun
								keng ko'lamli xizmatlarni taqdim etamiz.
							</p>

							<div className='mt-[10px]'>
								<img src={user2} alt='img ' className='mx-auto mb-[16px] ' />

								<p className=' text-[#726A7E] text-[16px]  font-normal  '>
									Alisa
								</p>

								<img src={stars} alt='img ' className='mx-auto mt-[16px] ' />
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* our clients section finished */}

			{/* our partners section start */}
			<section className='why_us text-center py-[60px]   '>
				<div className='mycontainer'>
					<p className='text-[#0FC36D] text-[24px] font-bold  '>
						Biz bilan ishlovchi
					</p>

					<h3 className=' text-[#332942] text-[40px]  font-bold  '>
						Hamkor kompaniyalar
					</h3>

					<Partner />
				</div>
			</section>
			{/* our partners section finished */}

			<section className=' bg-[#F6F7ED] py-[60px] '>
				<div className=' mycontainer '>
					<div className='my_box text-center bg-white rounded-[20px]  py-[40px] px-[20px] '>
						<p className='text-[#0FC36D] text-[24px] font-bold  '>Biz uchun</p>

						<h3 className=' text-[#332942] text-[40px]  font-bold  '>
							Yana savollaringiz bormi?
						</h3>
						<p className='text-[#726A7E] mx-auto text-[16px] font-normal max-w-[575px] mt-[24px] '>
							Sizni qiynayotgan savollaringiz bo’lsa biz bilan bog’laning!
							Mutaxassislarimiz sizning savollaringizga javob berishadi!
						</p>

						<button className=' text-white rounded-[12px] mx-auto mt-[40px] flex  items-center justify-center py-[16px] px-[24px] bg-[#0FC36D] border-none  shadow-lg font-bold'>
							Buyurtma qilish
						</button>
					</div>

					<div className='mt-[50px] '>
						<img src={barg} alt=' img' className=' mx-auto ' />

						<h3 className='text-[#0FC36D] text-[24px] font-bold  text-center my-[16px] '>
							Toza Makon
						</h3>

						<p className=' text-[#332942] text-[16px]  font-medium text-center  '>
							Tozalik biz bilan boshlanadi
						</p>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
};
