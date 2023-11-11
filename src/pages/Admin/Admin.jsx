import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import logoutIcon from '../../assets/images/logoutIcon.svg';
import userIcon from '../../assets/images/userIcon.svg';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import invation1 from '../../assets/images/invation1.png';

import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import instance, { baseUrl, baseUrlImg } from '../../api/api';
export const Admin = () => {
	const [modal, setModal] = useState(false);
	const [catalogModal, setcatalogModal] = useState(false);
	const [verifyMadal, setverifyMadal] = useState(false);
	const [serviceModal, setserviceModal] = useState(false);
	const [loginModal, setloginModal] = useState(true);
	const [newsContent, setnewsContent] = useState(true);
	const [catalogContent, setcatalogContent] = useState(false);
	const [serviceContent, setserviceContent] = useState(false);

	const token = localStorage.getItem('token');

	const [news, setNews] = useState([
		{
			id: 'id',
			news_title: 'news_title',
			news_description: 'news_description',
			news_image: 'news_image',
			news_video: 'news_video',
		},
	]);
	const [service, setService] = useState([
		{
			id: 'id',
			title: 'news_title',
			description: 'news_description',
			catalog_id: '2',
		},
	]);

	const [catalog, setCatalog] = useState([
		{
			id: 'id',
			catalog_name: 'catalog_name',
		},
	]);

	console.log(token, 'token');

	const news_title = useRef();
	const news_description = useRef();
	const news_image = useRef();
	const [setnews_imagest, setsetnews_imagest] = useState('');

	const news_video = useRef();
	const [news_videost, setnews_videost] = useState('');

	const verifyCode = useRef();
	const catalog_name = useRef();
	const service_title = useRef();
	const service_description = useRef();
	const catalog_id = useRef();
	const catagory_name = useRef();
	const service_id = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();

	async function handleChange() {
		const formData = new FormData();
		formData.append('file', news_image?.current?.files[0]);
		const resp = await instance.post('/upload', formData);
		console.log(resp?.data?.file, 'fiel');
		setsetnews_imagest(resp?.data?.file);
	}

	async function handleChangeVideo() {
		const formData = new FormData();
		formData.append('file', news_video?.current?.files[0]);
		const resp = await instance.post('/upload', formData);
		console.log(resp?.data?.file, 'fiel');
		setnews_videost(resp?.data?.file);
	}

	async function handleSubmitLogin(e) {
		e.preventDefault();

		const req = {
			email: emailRef?.current?.value,
			password: passwordRef?.current?.value,
		};
		const data = await instance.post('/auth/login', req);
		console.log(data?.data, 'login');
		if (data?.data?.message) {
			setloginModal((prev) => !prev);
			setverifyMadal(true);
		}
	}

	async function handleSubmitVerify(e) {
		e.preventDefault();

		const req = {
			verifyCode: +verifyCode?.current?.value,
		};
		console.log(req, 'req');
		const data = await instance.post('/auth/verify', req);
		console.log(data?.data?.token, 'login');
		if (data?.data?.token) {
			localStorage.setItem('token', data?.data?.token);

			setverifyMadal(false);
		}
	}

	async function handleSubmit(e) {
		e.preventDefault();

		console.dir(news_title?.current?.value);
		const data = {
			news_title: news_title?.current?.value,
			news_description: news_description?.current?.value,
			news_image: setnews_imagest,
			news_video: news_videost,
		};
		const data2 = await instance.post('/news', data);
		console.log(data2?.data, 'data');
		alert(data2?.data?.message);
		if (data2?.data?.message) {
			getNews();
		}
	}

	async function handleSubmitCatalog(e) {
		e.preventDefault();

		console.dir(catalog_name?.current?.value);
		const data = {
			catalog_name: catalog_name?.current?.value,
		};
		const data2 = await instance.post('/catalog', data);
		console.log(data2?.data, 'data');
		alert(data2?.data?.message);
		if (data2?.data?.message) {
			getCatalog();
		}
	}

	const getNews = async () => {
		const data = await instance.get('/news');
		console.log(data?.data, 'getNews');
		setNews(data?.data);
	};

	const getCatalog = async () => {
		const data = await instance.get('/catalog');
		console.log(data?.data, 'catalog');
		setCatalog(data?.data);
	};

	const getservice = async () => {
		const data = await instance.get('/service');
		console.log(data?.data, 'catalog');
		setService(data?.data);
	};

	const deleteNews = async (id) => {
		const data = await instance.delete(`/news/${id}`);
		alert(data?.data?.message);
		if(data?.data){
			getNews()
		}
	};
	 

	const deleteCatalog = async (id) => {
		const data = await instance.delete(`/catalog/${id}`);
		alert(data?.data?.message);
		if(data?.data){
			getCatalog()
		}
	};


	const deleteService = async (id) => {
		const data = await instance.delete(`/service/${id}`);
		alert(data?.data?.message);
		if(data?.data){
			getservice()
		}
	};

	async function handleSubmitServise(e) {
		e.preventDefault();

		const data = {
			title: service_title?.current?.value,
			description: service_description?.current?.value,
			catalog_id: catalog_id?.current?.value,
		};
		console.dir(data);

		const data2 = await instance.post('/service', data);
		console.log(data2, 'data');
		alert(data2?.data?.message);
		if (data2?.data?.message) {
			getservice();
		}
	}

	useEffect(() => {
		if (token) {
			setloginModal(false);
		}
		getNews();
		getCatalog();
		getservice();
	}, []);
	return (
		<>
			<div className='  py-[15px]  fixed top-0 left-0 w-full px-[25px] shadow-md bg-white flex items-center justify-between   '>
				<div className='logo'>
					<Link to={'/'}>
						<img src={logo} alt='logo ' className=' md:w-auto w-[130px] ' />
					</Link>
				</div>

				<div className='dropdown'>
					<button className=' text-[#000]  font-semibold text-[24px]'>
						Admin
					</button>
					<div className='dropdown-content'>
						<ul>
							<li>
								<Link
									to='/account'
									className='flex items-center justify-between '
								>
									<img src={userIcon} />
									Manage My Account
								</Link>
							</li>

							<li>
								<Link
									to='/logout'
									className='flex items-center justify-between '
								>
									<img src={logoutIcon} />
									Log out
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className=' flex  '>
				<div className='  w-[22%]  bg-[#171923] min-h-screen  px-[20px] py-[40px]  pt-[110px] '>
					<div className='flex items-start w-full justify-start flex-col gap-5 '>
						<button className='  rounded-[12px] flex items-center justify-center md:py-[16px] md:px-[24px] px-[16px] py-[10px] bg-[tranparent]  hover:bg-[#0FC36D] border-[1px] border-[#0FC36D]  text-white  hover:text-white shadow-lg font-bold md:text-[16px] text-[14px] w-full transition' 	onClick={() => {
								setnewsContent(true);
								setserviceContent(false);
								setcatalogContent(false);
							}}>
							Add news
						</button>

						<button
							className='  rounded-[12px] flex items-center justify-center md:py-[16px] md:px-[24px] px-[16px] py-[10px] bg-[tranparent]  hover:bg-[#0FC36D] border-[1px] border-[#0FC36D]  text-white  hover:text-white shadow-lg font-bold md:text-[16px] text-[14px] w-full transition'
							onClick={() => {
								setnewsContent(false);
								setserviceContent(false);
								setcatalogContent(true);
							}}
						>
							Add Catalog
						</button>

						<button
							className='  rounded-[12px] flex items-center justify-center md:py-[16px] md:px-[24px] px-[16px] py-[10px] bg-[tranparent]  hover:bg-[#0FC36D] border-[1px] border-[#0FC36D]  text-white  hover:text-white shadow-lg font-bold md:text-[16px] text-[14px] w-full transition'
							onClick={() => {
								setnewsContent(false);
								setserviceContent(true);
								setcatalogContent(false);
							}}
						>
							Add Service
						</button>

						<button className='  rounded-[12px] flex items-center justify-center md:py-[16px] md:px-[24px] px-[16px] py-[10px] bg-[tranparent]  hover:bg-[#0FC36D] border-[1px] border-[#0FC36D]  text-white  hover:text-white shadow-lg font-bold md:text-[16px] text-[14px] w-full transition'>
							Bizning xizmatlar
						</button>
					</div>
				</div>

				<div className='right w-[78%] bg-[#d0c9c9] min-h-screen pt-[100px] px-[20px]'>
					{newsContent && (
						<div className='news'>
							<div className='flex justify-between items-center '>
								<h2 className=' text-[24px] font-semibold   '> News</h2>

								<button
									className=' text-white rounded-[12px] flex items-center justify-center md:py-[16px] md:px-[24px] px-[16px] py-[10px] bg-[#0FC36D] border-none  shadow-lg font-bold'
									onClick={() => setModal((prev) => !prev)}
								>
									Add news
								</button>
							</div>

							{news?.length ? (
								<div className='service_box text-left  grid mt-[56px]  lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[24px] '>
									{news.map((el) => (
										<div
											className='service_card bg-[#F6F7ED] p-[24px]  rounded-[32px] '
											key={el?.id}
										>
											<img
												src={`${baseUrlImg}/${el?.news_image}`}
												alt='img '
												className='mx-auto w-full object-cover mb-[16px] '
											/>

											<button className=' bg-[#0FC36D] px-[12px] py-[2px] rounded-[8px]  mb-3 text-[#fff] ml-0  '>
												{' '}
												Tozalash{' '}
											</button>

											<p className=' text-[#332942] text-[18px]  font-bold  '>
												{el?.news_title}
											</p>

											<p className='text-[#726A7E] mx-auto text-[14px] font-normal max-w-[411px] mt-[12px] '>
												{el?.news_description}
											</p>

											<div className='flex gap-2'>
												<button className=' my-[15px] w-full   rounded-[12px] flex items-center justify-center md:py-[16px] md:px-[24px] px-[16px] py-[10px] bg-[tranparent]  hover:bg-[#0FC36D] border-[1px] border-[#0FC36D]  text-[#0FC36D] hover:text-white shadow-lg font-bold md:text-[16px] text-[14px] transition'>
													edit
												</button>
												<button className=' my-[15px] w-full   rounded-[12px] flex items-center justify-center md:py-[16px] md:px-[24px] px-[16px] py-[10px] bg-[tranparent]   border-[1px] bg-red-600  text-[#fff] hover:text-white shadow-lg font-bold md:text-[16px] text-[14px] transition' onClick={()=> deleteNews(el?.id) } >
													delate
												</button>
											</div>
										</div>
									))}
								</div>
							) : (
								'yangiliklar yoq'
							)}
						</div>
					)}

					{/* catalog */}

					{catalogContent && (
						<div className='catalogContent'>
							<div className='flex justify-between items-center '>
								<h2 className=' text-[24px] font-semibold   '> Catalog</h2>

								<button
									className=' text-white rounded-[12px] flex items-center justify-center md:py-[16px] md:px-[24px] px-[16px] py-[10px] bg-[#0FC36D] border-none  shadow-lg font-bold'
									onClick={() => setcatalogModal((prev) => !prev)}
								>
									Add catalog
								</button>
							</div>

							{catalog?.length ? (
								<div className='service_box text-left  grid mt-[56px]  lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[24px] '>
									{catalog.map((el) => (
										<div
											className='service_card bg-[#F6F7ED] p-[24px]  rounded-[32px] '
											key={el?.id}
										>
											<p className=' text-[#332942] text-[18px]  font-bold  text-center  '>
												{el?.catalog_name}
											</p>

											<div className='flex gap-2'>
												<button className=' my-[15px] w-full   rounded-[12px] flex items-center justify-center md:py-[16px] md:px-[24px] px-[16px] py-[10px] bg-[tranparent]  hover:bg-[#0FC36D] border-[1px] border-[#0FC36D]  text-[#0FC36D] hover:text-white shadow-lg font-bold md:text-[16px] text-[14px] transition'>
													edit
												</button>
												<button className=' my-[15px] w-full   rounded-[12px] flex items-center justify-center md:py-[16px] md:px-[24px] px-[16px] py-[10px] bg-[tranparent]   border-[1px] bg-red-600  text-[#fff] hover:text-white shadow-lg font-bold md:text-[16px] text-[14px] transition' onClick={()=> deleteCatalog(el?.id)} >
													delate
												</button>
											</div>
										</div>
									))}
								</div>
							) : (
								'catalog yoq'
							)}
						</div>
					)}
					{/* service */}

					{serviceContent && (
						<div className='serviceContent'>
							<div className='flex justify-between items-center '>
								<h2 className=' text-[24px] font-semibold   '> service</h2>

								<button
									className=' text-white rounded-[12px] flex items-center justify-center md:py-[16px] md:px-[24px] px-[16px] py-[10px] bg-[#0FC36D] border-none  shadow-lg font-bold'
									onClick={() => setserviceModal((prev) => !prev)}
								>
									Add service
								</button>
							</div>

							{service?.length ? (
								<div className='service_box text-left  grid mt-[56px]  lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[24px] '>
									{service.map((el) => (
										<div
											className='service_card bg-[#F6F7ED] p-[24px]  rounded-[32px] '
											key={el?.id}
										>
											<img
												src={invation1}
												alt='img '
												className='mx-auto w-full object-cover mb-[16px] '
											/>

											<button className=' bg-[#0FC36D] px-[12px] py-[2px] rounded-[8px]  mb-3 text-[#fff] ml-0  '>
												{' '}
												catalog_id {el?.catalog_id}
											</button>

											<p className=' text-[#332942] text-[18px]  font-bold  '>
												{el?.title}
											</p>

											<p className='text-[#726A7E] mx-auto text-[14px] font-normal max-w-[411px] mt-[12px] '>
												{el?.description}
											</p>

											<div className='flex gap-2'>
												<button className=' my-[15px] w-full   rounded-[12px] flex items-center justify-center md:py-[16px] md:px-[24px] px-[16px] py-[10px] bg-[tranparent]  hover:bg-[#0FC36D] border-[1px] border-[#0FC36D]  text-[#0FC36D] hover:text-white shadow-lg font-bold md:text-[16px] text-[14px] transition'>
													edit
												</button>
												<button className=' my-[15px] w-full   rounded-[12px] flex items-center justify-center md:py-[16px] md:px-[24px] px-[16px] py-[10px] bg-[tranparent]   border-[1px] bg-red-600  text-[#fff] hover:text-white shadow-lg font-bold md:text-[16px] text-[14px] transition' onClick={()=>deleteService(el?.id)} >
													delate
												</button>
											</div>
										</div>
									))}
								</div>
							) : (
								'yangiliklar yoq'
							)}
						</div>
					)}
				</div>
			</div>

			{loginModal && (
				<div className=' min-w-[100vw] min-h-[100vh] fixed top-0 left-0 bg-[#010101a5]    z-50  my_overlay'>
					<div className='modal_form  px-[40px] flex items-center justify-center  min-w-[100vw] min-h-[100vh] '>
						<form
							className=' bg-white max-w-[482px]  mx-auto p-[32px]  pt-[40px] rounded-[32px] relative'
							onSubmit={handleSubmitLogin}
						>
							<h4 className=' text-[#332942] font-semibold  text-[24px] mb-[20px] '>
								login
							</h4>

							<div className='flex min-h-[56px] grow items-center gap-4 rounded-[16px] bg-[white] border-[1px]   mb-[20px] border-solid border-[#E3E2E2]  dark:bg-bgColor px-4 w-full flex-1'>
								<AiOutlineUser size={30} className='  text-[#786868] ' />
								<input
									className='flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground  focus-visible:ring-ring  disabled:cursor-not-allowed disabled:opacity-50 no-focus grow border-none bg-[transparent] outline-none'
									placeholder='enter your email'
									maxLength={35}
									type='email'
									ref={emailRef}
								/>
							</div>
							<div className='flex min-h-[56px] grow items-center gap-4 rounded-[16px] bg-[white] border-[1px]   mb-[20px] border-solid border-[#E3E2E2]  dark:bg-bgColor px-4 w-full flex-1'>
								<BsTelephone size={30} className='  text-[#786868] ' />
								<input
									className='flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground  focus-visible:ring-ring  disabled:cursor-not-allowed disabled:opacity-50 no-focus grow border-none bg-[transparent] outline-none'
									placeholder='password'
									type='password'
									ref={passwordRef}
								/>
							</div>

							<button className=' text-white rounded-[12px] flex items-center justify-center md:py-[16px] md:px-[24px] px-[16px] py-[10px] bg-[#0FC36D] border-none  w-full shadow-lg font-bold'>
								Yuborish
							</button>
						</form>
					</div>
				</div>
			)}

			{modal && (
				<div className=' min-w-[100vw] min-h-[100vh] fixed top-0 left-0 bg-[#010101a5]    z-50  my_overlay'>
					<div className='modal_form  px-[40px] flex items-center justify-center  min-w-[100vw] min-h-[100vh] '>
						<form
							className=' bg-white max-w-[482px]  mx-auto p-[32px]  pt-[40px] rounded-[32px] relative'
							onSubmit={handleSubmit}
						>
							<AiOutlineClose
								size={30}
								className='  text-[#786868]  cursor-pointer absolute right-[20px] top-[20px] '
								onClick={() => setModal((prev) => !prev)}
							/>

							<h4 className=' text-[#332942] font-semibold  text-[24px] mb-[20px] '>
								Yangilik qoshish
							</h4>

							<div className='flex min-h-[56px] grow items-center gap-4 rounded-[16px] bg-[white] border-[1px]   mb-[20px] border-solid border-[#E3E2E2]  dark:bg-bgColor px-4 w-full flex-1'>
								<input
									className='flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground  focus-visible:ring-ring  disabled:cursor-not-allowed disabled:opacity-50 no-focus grow border-none bg-[transparent] outline-none'
									placeholder='news_title'
									ref={news_title}
									type='text'
								/>
							</div>
							<div className='flex min-h-[56px] grow items-center gap-4 rounded-[16px] bg-[white] border-[1px]   mb-[20px] border-solid border-[#E3E2E2]  dark:bg-bgColor px-4 w-full flex-1'>
								<input
									className='flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground  focus-visible:ring-ring  disabled:cursor-not-allowed disabled:opacity-50 no-focus grow border-none bg-[transparent] outline-none'
									placeholder='news_description'
									ref={news_description}
									type='text'
								/>
							</div>
							<div className='flex items-center justify-center w-full'>
								<label
									htmlFor='dropzone-file'
									className='flex flex-col items-center justify-center w-full h-[78px] border-2 border-gray-500 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'
								>
									<div className='flex flex-col items-center justify-center pt-3 pb-4'>
										<svg
											className='w-8 h-6 mb-4 text-gray-500 dark:text-gray-400'
											aria-hidden='true'
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 20 16'
										>
											<path
												stroke='currentColor'
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
											/>
										</svg>
										<p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
											<span className='font-semibold'>Click to upload</span> img
										</p>
									</div>
									<input
										id='dropzone-file'
										type='file'
										className='hidden'
										ref={news_image}
										onChange={handleChange}
									/>
								</label>
							</div>
							<div className='flex items-center justify-center w-full my-4'>
								<label
									htmlFor='dropzone-file'
									className='flex flex-col items-center justify-center w-full h-[78px] border-2 border-gray-500 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'
								>
									<div className='flex flex-col items-center justify-center pt-3 pb-4'>
										<svg
											className='w-8 h-6 mb-4 text-gray-500 dark:text-gray-400'
											aria-hidden='true'
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 20 16'
										>
											<path
												stroke='currentColor'
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
											/>
										</svg>
										<p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
											<span className='font-semibold'>Click to upload</span>{' '}
											video
										</p>
									</div>
									<input
										id='dropzone-file'
										type='file'
										className='hidden'
										ref={news_video}
										onChange={handleChangeVideo}
									/>
								</label>
							</div>

							<button className=' text-white rounded-[12px] flex items-center justify-center md:py-[16px] md:px-[24px] px-[16px] py-[10px] bg-[#0FC36D] border-none  w-full shadow-lg font-bold'>
								Yuborish
							</button>
						</form>
					</div>
				</div>
			)}

			{/* catalog */}

			{catalogModal && (
				<div className=' min-w-[100vw] min-h-[100vh] fixed top-0 left-0 bg-[#010101a5]    z-50  my_overlay'>
					<div className='modal_form  px-[40px] flex items-center justify-center  min-w-[100vw] min-h-[100vh] '>
						<form
							className=' bg-white max-w-[482px]  mx-auto p-[32px]  pt-[40px] rounded-[32px] relative'
							onSubmit={handleSubmitCatalog}
						>
							<AiOutlineClose
								size={30}
								className='  text-[#786868]  cursor-pointer absolute right-[20px] top-[20px] '
								onClick={() => setcatalogModal((prev) => !prev)}
							/>

							<h4 className=' text-[#332942] font-semibold  text-[24px] mb-[20px] '>
								Catalog qoshish
							</h4>

							<div className='flex min-h-[56px] grow items-center gap-4 rounded-[16px] bg-[white] border-[1px]   mb-[20px] border-solid border-[#E3E2E2]  dark:bg-bgColor px-4 w-full flex-1'>
								<input
									className='flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground  focus-visible:ring-ring  disabled:cursor-not-allowed disabled:opacity-50 no-focus grow border-none bg-[transparent] outline-none'
									placeholder='catalog_name'
									ref={catalog_name}
									type='text'
								/>
							</div>

							<button className=' text-white rounded-[12px] flex items-center justify-center md:py-[16px] md:px-[24px] px-[16px] py-[10px] bg-[#0FC36D] border-none  w-full shadow-lg font-bold'>
								Yuborish
							</button>
						</form>
					</div>
				</div>
			)}

			{verifyMadal && (
				<div className=' min-w-[100vw] min-h-[100vh] fixed top-0 left-0 bg-[#010101a5]    z-50  my_overlay'>
					<div className='modal_form  px-[40px] flex items-center justify-center  min-w-[100vw] min-h-[100vh] '>
						<form
							className=' bg-white max-w-[482px]  mx-auto p-[32px]  pt-[40px] rounded-[32px] relative'
							onSubmit={handleSubmitVerify}
						>
							<AiOutlineClose
								size={30}
								className='  text-[#786868]  cursor-pointer absolute right-[20px] top-[20px] '
								onClick={() => verifyMadal((prev) => !prev)}
							/>

							<h4 className=' text-[#332942] font-semibold  text-[24px] mb-[20px] '>
								Verify codni kiriting
							</h4>

							<div className='flex min-h-[56px] grow items-center gap-4 rounded-[16px] bg-[white] border-[1px]   mb-[20px] border-solid border-[#E3E2E2]  dark:bg-bgColor px-4 w-full flex-1'>
								<input
									className='flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground  focus-visible:ring-ring  disabled:cursor-not-allowed disabled:opacity-50 no-focus grow border-none bg-[transparent] outline-none'
									placeholder='verifyCodeni kiriting'
									ref={verifyCode}
									type='number'
								/>
							</div>

							<button className=' text-white rounded-[12px] flex items-center justify-center md:py-[16px] md:px-[24px] px-[16px] py-[10px] bg-[#0FC36D] border-none  w-full shadow-lg font-bold'>
								Yuborish
							</button>
						</form>
					</div>
				</div>
			)}

			{/* service */}

			{serviceModal && (
				<div className=' min-w-[100vw] min-h-[100vh] fixed top-0 left-0 bg-[#010101a5]    z-50  my_overlay'>
					<div className='modal_form  px-[40px] flex items-center justify-center  min-w-[100vw] min-h-[100vh] '>
						<form
							className=' bg-white max-w-[482px]  mx-auto p-[32px]  pt-[40px] rounded-[32px] relative'
							onSubmit={handleSubmitServise}
						>
							<AiOutlineClose
								size={30}
								className='  text-[#786868]  cursor-pointer absolute right-[20px] top-[20px] '
								onClick={() => setserviceModal((prev) => !prev)}
							/>

							<h4 className=' text-[#332942] font-semibold  text-[24px] mb-[20px] '>
								service qoshish
							</h4>

							<div className='flex min-h-[56px] grow items-center gap-4 rounded-[16px] bg-[white] border-[1px]   mb-[20px] border-solid border-[#E3E2E2]  dark:bg-bgColor px-4 w-full flex-1'>
								<input
									className='flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground  focus-visible:ring-ring  disabled:cursor-not-allowed disabled:opacity-50 no-focus grow border-none bg-[transparent] outline-none'
									placeholder='news_title'
									ref={service_title}
									type='text'
								/>
							</div>
							<div className='flex min-h-[56px] grow items-center gap-4 rounded-[16px] bg-[white] border-[1px]   mb-[20px] border-solid border-[#E3E2E2]  dark:bg-bgColor px-4 w-full flex-1'>
								<input
									className='flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground  focus-visible:ring-ring  disabled:cursor-not-allowed disabled:opacity-50 no-focus grow border-none bg-[transparent] outline-none'
									placeholder='news_description'
									ref={service_description}
									type='text'
								/>
							</div>
							<select
								ref={catalog_id}
								className='w-full   border rounded-[12px] p-[16px]  border-gray-500 outline-none    dark:bg-gray-700 bg-transparent  dark:focus:border-blue-500  focus:border-blue-500  mb-4 '
							>
								<option selected disabled value='Select'>
									catalog_id
								</option>

								{catalog.map((el) => (
									<option value={el?.id} key={el?.id}>
										{el?.catalog_name}
									</option>
								))}
							</select>

							<button
								type='submit'
								className=' text-white rounded-[12px] flex items-center justify-center md:py-[16px] md:px-[24px] px-[16px] py-[10px] bg-[#0FC36D] border-none  w-full shadow-lg font-bold'
							>
								Yuborish
							</button>
						</form>
					</div>
				</div>
			)}
		</>
	);
};
