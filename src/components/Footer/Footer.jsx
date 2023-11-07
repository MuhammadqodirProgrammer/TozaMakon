import { Link, NavLink } from 'react-router-dom';
import './Footer.scss';
import copyrightIcon from '../../assets/images/copyrightIcon.svg';
import sendIcon from '../../assets/images/sendIcon.svg';
import facebook from '../../assets/images/facebook.svg';
import instagram from '../../assets/images/instagram.svg';
import { LuPhone } from 'react-icons/lu';
export const Footer = () => {
	return (
		<footer >
			<div className='header_top bg-[#332942] text-white '>
			<div className='container top_container'>
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
		</footer>
	);
};
