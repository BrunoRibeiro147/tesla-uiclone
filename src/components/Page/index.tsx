import React from 'react';
import DefaultOverlayContent from '../DefaultOverlayContent';
import { ModelSection, ModelsWrapper } from '../Model';
import UniqueOverlay from '../UniqueOverlay';

import { Container, Spacer } from './styles';

const Page: React.FC = () => {
	return (
		<Container>
			<ModelsWrapper>
				<div>
					{[
						'Aston Martin Vantage',
						'Ford Mustang',
						'Audi R8',
						'Lamborghini Huracán',
						'Subaru BZR',
						'Toyota Supra',
						'Model Seven',
					].map(modelName => (
						<ModelSection
							key={modelName}
							className="colored"
							modelName={modelName}
							overlayNode={
								< DefaultOverlayContent
									label={modelName}
									description="Order Online for Delivery"
								/>}
						/>
					))}
				</div>

				<Spacer />
				<UniqueOverlay />
			</ModelsWrapper>
		</Container>
	);
};

export default Page;
