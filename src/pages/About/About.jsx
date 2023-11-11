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
import arrow from '../../assets/images/arrow-right.png';

export const About = () => {
	return (
		<div className=''>
			<Header />

			<section className=' bg-[#F6F7ED] py-[40px] '>
				<div className='flex items-center my_b gap-2 mycontainer'>
					<Link to='/' className=' text-[#7B7C77] text-[16px] font-bold '>
						Bosh sahifa
					</Link>
					<img src={arrow} alt='img' />
					<h2 className=' text-[#000] text-[16px] font-bold '>Biz haqimizda</h2>
				</div>

				<div className='hero mycontainer flex items-center   one_test '>
					<div className='hero_left mb-[20px] md:w-[50% ] w-full'>
						<p className='text-[#0FC36D] text-[24px] font-bold '>Toza Makon</p>
						<h3 className=' text-[#332942] md:text-[38px] text-[36px]  font-bold max-w-[545px]  '>
							Biz haqimizda
						</h3>
						<p className='text-[#726A7E] text-[16px] font-normal max-w-[479px] md:mt-[24px] mt-[18px] '>
							Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun
							keng ko'lamli xizmatlarni taqdim etamiz.
						</p>
						<div className='flex items-center gap-[34px] md:mt-[56px] mt-[36px]'>
							<div>
								<p className='text-[#726A7E] text-[16px] font-normal max-w-[479px] md:mt-[24px] mt-[18px] '>
									Mijozlarimiz
								</p>
								<h3 className='text-[#0FC36D] text-[32px] mt-[5px] font-bold '>
									2000+
								</h3>
							</div>

							<div>
								<p className='text-[#726A7E] text-[16px] font-normal max-w-[479px] md:mt-[24px] mt-[18px] '>
									Ish tajribamiz
								</p>
								<h3 className='text-[#0FC36D] text-[32px] mt-[5px] font-bold '>
									10 yil
								</h3>
							</div>
						</div>
					</div>
					<div className='hero_right md:w-[50% ] w-full  h-[355px] rounded-[32px] overflow-hidden '>
						<iframe
							width={'100%'}
							height={355}
							src='https://www.youtube.com/embed/mc2QKJaM9Mc?si=70EhtxwzEI8c5Z2J'
							title='YouTube video player'
							frameBorder={0}
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							allowFullScreen
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
						Biz sizning uyingiz, ofisingiz tozaligi va farovonligi uchun
						quyidagi xizmatlarni taklif qilamiz
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

			
			{/* our  app start */}

			<section className=' bg-[#F6F7ED] py-[35px] md:my-[100px] my-[80px] '>
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
