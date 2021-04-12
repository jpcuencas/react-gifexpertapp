import React from 'react';
import '@testing-library/jest-dom'; // inteligence

import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';


describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

    beforeEach( () => {
        jest.clearAllMocks();// limpiar las simulaciones de los test anteriores
        wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
    });

    
    test('debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const val = 'Hola Mundo';

        input.simulate('change', { target: { value:val } });

        expect( wrapper.find('p').text().trim() ).toBe( value );
    });

    test('NO debe de postear la información con submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });// evita el evento submit pero llama a la funcion

        // porque el input value esta vacio
        expect( setCategories ).not.toHaveBeenCalled();

    });
    
    test('debe de llamar el setCategories y limpiar la caja de texto', () => {

        const value = 'Hola Mundo';

        // 1. simular el inputChange (cambia el valor)
        wrapper.find('input').simulate('change', { target: { value } });

        // 2. simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        // 3. setCategories se debe de haber llamado
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1); //haber llamado una vez
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function)  );// argumento con una funcion

        // 4. el valor del input debe de estar ''
        expect( wrapper.find('input').prop('value') ).toBe('');

        
    })
    
    

})
