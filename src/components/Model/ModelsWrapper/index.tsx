import React, { useRef, useState, useCallback, useContext } from 'react';
import ModelOverlay from '../ModelOverlay/index';
import ModelsContext, { CarModel } from '../ModelsContext';

import { Container, OverlaysRoot } from './styles';

const ModelsWrapper: React.FC = ({ children }) => {
	const wrapperRef = useRef<HTMLDivElement>(null)

	const [registerModels, setRegisteredModels] = useState<CarModel[]>([]);

	const registerModel = useCallback((model: CarModel) => {
		setRegisteredModels(state => [...state, model]);
	}, []);

	const unregisterModel = useCallback((modelName: string) => {
		setRegisteredModels(state => state.filter(model => model.modelName !== modelName))
	}, [])

	const getModelByName = useCallback((modelName: string) => {
		return registerModels.find(item => item.modelName === modelName) || null;
	}, [registerModels])

	return (
		<ModelsContext.Provider value={{
			wrapperRef,
			registerModels,
			registerModel,
			unregisterModel,
			getModelByName
		}}>
			<Container ref={wrapperRef}>
				<OverlaysRoot>
					{registerModels.map(item => (<ModelOverlay key={item.modelName} model={item} >{item.overlayNode}</ModelOverlay>))}
				</OverlaysRoot>


				{children}
			</Container>
		</ModelsContext.Provider>
	);
};

export default ModelsWrapper;
