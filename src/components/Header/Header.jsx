import { Link, NavLink } from 'react-router-dom';
import DropdownImg from '../../assets/images/header-dropdown-item.svg';
import searchInputImg from '../../assets/images/searchIcon.svg';
import WishlistIcon from '../../assets/images/likeIcon.svg';
import cardIcon from '../../assets/images/cartIcon.svg';
import profileIcon from '../../assets/images/profileIcon.svg';
import userIcon from '../../assets/images/userIcon.svg';
import orderIcon from '../../assets/images/orderIcon.svg';
import cancelIcon from '../../assets/images/cancelIcon.svg';
import reviewIcon from '../../assets/images/reviewIcon.svg';
import logoutIcon from '../../assets/images/logoutIcon.svg';
import { LuPhone } from 'react-icons/lu';
import logo from '../../assets/images/logo.png';
import './Header.scss';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
export const Header = () => {
	const [active, setActive] = useState();

	const orders = [
		{
			id: 1,
			orderName: 'Xizmatlar',
		},
		{
			id: 2,
			orderName: 'Xizmatlar2',
		},
		{
			id: 3,
			orderName: 'Xizmatlar3',
		},
	];

	function toggleTheme() {}

	return (
		<header className='header sticky top-0   z-50 bg-white '>
			<div className='header_top bg-[#332942] text-white  hidden md:block '>
			<div className='mycontainer top_container'>
					<div className='top_shopping'>
						<p className='flex items-center gap-[15px] flex-wrap'>
							<div className='flex items-center gap-[15px]'>
								<LuPhone size='20 ' />
								<span className=''>77 57</span>
							</div>
							<span className=' w-[25px] h-[2px] bg-white   md:inline-block hidden'></span>
							Xizmatlarimiz haqida bepul ma’lumot olish uchun qo'ng'iroq qiling!
						</p>
						<p className='flex items-center gap-[15px]'>
							<span className=' w-[25px] h-[2px] bg-white md:inline-block hidden'></span>
							Ish vaqti: 09:00 - 18:00
						</p>
					</div>

					<div className='flex items-center gap-[15px] '>
						<NavLink to={'https://t.me/Muhammadqodir_Programmer'}>
							YouTube
						</NavLink>
						<NavLink to={'https://t.me/muhammadqodir_dev'}>Telegram</NavLink>
						<NavLink to={'https://www.instagram.com/muhammadqodirkomilov02/'}>
							Instagram
						</NavLink>
					</div>
				</div>
			</div>
			<div className='header_bottom mycontainer  '>
				<div className='logo'>
					<Link to={'/'}>
						<img src={logo} alt='logo ' className=' md:w-auto w-[130px] ' />
					</Link>
				</div>
				<div className=' items-center gap-[24px]  lg:flex hidden  '>
				<Link to={"/orders"}>
					<select className='p-2  rounded-md outline-none'>
						{orders.map((el) => {
							return (
								<option value={`${el?.id}`} key={el?.id}>
									<Link to={'/orders'} className="w-full h-full bg-red-700 ">{el?.orderName}</Link>
								</option>
							);
						})}
					</select>

				</Link>

					<NavLink to={'/blog'}>Blog</NavLink>
					<NavLink to={'/about'}>Biz haqimizda</NavLink>
				</div>

				<div className='flex items-center  gap-[24px] '>
					{/* <ModeToggle /> */}
					<button
						type='button'
						className='w-[48px] h-[48px]  flex items-center justify-center bg-[#F6F7ED] relative  rounded-[12px] p-[12px]  '
						onClick={() => {
							toggleTheme();
							setActive(!active);
						}}
					>
						<svg
							className={active ? '' : 'hidden'}
							stroke='currentColor'
							fill='none'
							stroke-width='2'
							viewBox='0 0 24 24'
							stroke-linecap='round'
							stroke-linejoin='round'
							height='1em'
							width='1em'
							xmlns='http://www.w3.org/2000/svg'
						>
							<circle cx='12' cy='12' r='5'></circle>
							<line x1='12' y1='1' x2='12' y2='3'></line>
							<line x1='12' y1='21' x2='12' y2='23'></line>
							<line x1='4.22' y1='4.22' x2='5.64' y2='5.64'></line>
							<line x1='18.36' y1='18.36' x2='19.78' y2='19.78'></line>
							<line x1='1' y1='12' x2='3' y2='12'></line>
							<line x1='21' y1='12' x2='23' y2='12'></line>
							<line x1='4.22' y1='19.78' x2='5.64' y2='18.36'></line>
							<line x1='18.36' y1='5.64' x2='19.78' y2='4.22'></line>
						</svg>
						{/* <ModeToggle/> */}
						<svg
							className={!active ? '' : 'hidden'}
							stroke='currentColor'
							fill='currentColor'
							strokeWidth={0}
							viewBox='0 0 16 16'
							height='1em'
							width='1em'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path d='M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z' />
							<path d='M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z' />
						</svg>
					</button>
					{/* mode  */}
					<button
						type='button'
						className='  w-[48px] h-[48px]  flex items-center justify-center bg-[#F6F7ED] relative  rounded-[12px] p-[12px] '
					>
						<select className='outline-none  bg-[transparent]    appearance-none  w-full h-full p-[12px]  absolute   top-0'>
							<option value='uz' selected>
								uz
							</option>
							<option value='ru'>ru</option>
							<option value='eng'>eng</option>
						</select>
					</button>

					<button
						type='button'
						className='menu header_icons_box '
						//   onClick={}
					>
						<svg
							stroke=''
							fill=''
							viewBox='0 0 24 24'
							focusable='false'
							className='chakra-icon css-13otjrl'
							height='1em'
							width='1em'
							xmlns='http://www.w3.org/2000/svg'
						>
							<g id='Menu_Fries'>
								<path d='M20.437,19.937c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.002c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.002Z' />
								<path d='M20.437,11.5c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l10,-0.001Z' />
								<path d='M20.437,3.062c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.001Z' />
							</g>
						</svg>
					</button>

					<button className=' text-white rounded-[12px] md:flex hidden items-center justify-center py-[16px] px-[24px] bg-[#0FC36D] border-none  lg:text-[16px] md:text-[14px]   shadow-lg font-bold'>
						Ilovamizni sinab ko’ring
					</button>

					{/* <div className='dropdown' ref={dropRef}>
						<button className='ProfileButton dropbtn'>
							<img className='cartIcon' src={profileIcon} />
						</button>
						<div className='dropdown-content'>
							<ul>
								<li>
									<Link to='/account'>
										<img src={userIcon} />
										Manage My Account
									</Link>
								</li>
								<li>
									<Link to='/checkout'>
										<img src={orderIcon} />
										My Order
									</Link>
								</li>
								<li>
									<Link to='/checkout'>
										<img src={cancelIcon} />
										My Cancellations
									</Link>
								</li>
								<li>
									<Link to='/wishlist'>
										<img src={reviewIcon} />
										My Reviews
									</Link>
								</li>
								<li>
									<Link to='/logout'>
										<img src={logoutIcon} />
										Log out
									</Link>
								</li>
							</ul>
						</div>
					</div> */}
				</div>
			</div>
		</header>
	);
};
