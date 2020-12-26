import styled from 'styled-components';

import CarOne from '../../images/car_one.jpg';
import CarTwo from '../../images/car_two.jpg'
import CarThree from '../../images/car_three.jpg'
import CarFour from '../../images/car_four.jpg'
import CarFive from '../../images/car_five.jpg'
import CarSix from '../../images/car_six.jpg'
import CarSeven from '../../images/car_seven.jpg'


export const Container = styled.div`
	
	.colored:nth-child(1) {
		background-image: url(${CarFive});
		background-size:	cover;
		background-repeat:no-repeat;
		background-position:center center;
	}
	
	.colored:nth-child(2) {
		background-image: url(${CarTwo});
		background-size: cover;
		background-repeat:no-repeat;
		background-position:center;
	}
	.colored:nth-child(3) {
		background-image: url(${CarThree});
		background-size: cover;
		background-repeat:no-repeat;
		background-position:center;
	}
	.colored:nth-child(4) {
		background-image: url(${CarFour});
		background-size: cover;
		background-repeat:no-repeat;
		background-position:center;
	}
	.colored:nth-child(5) {
		background-image: url(${CarOne});
		background-size: cover;
		background-repeat:no-repeat;
		background-position:center;
	}
	.colored:nth-child(6) {
		background-image: url(${CarSix});
		background-size: cover;
		background-repeat:no-repeat;
		background-position:center;
	}
	.colored:nth-child(7) {
		background-image: url(${CarSeven});
		background-size: cover;
		background-repeat:no-repeat;
		background-position:center;
	}
`;

export const Spacer = styled.div`
	height: 15vh;
	background: #0E0D12
`;

