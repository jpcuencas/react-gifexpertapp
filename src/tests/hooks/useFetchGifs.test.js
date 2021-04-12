import '@testing-library/jest-dom';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchGifs', () => {


    test('debe de retornar el estado inicial', async() => {

        // crea un componente que usa el hoock (los hoock solo pueden ser llamados con compoentes funcionales)
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) );
        const { data, loading } = result.current; // se guarda el estado antes de ejecutar el hoock

        await waitForNextUpdate(); // espera a que se ejecute el hoock

        expect( data ).toEqual([]);
        expect( loading ).toBe(true);

    });

    test('debe de retornar un arreglo de imgs y el loading en false', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) );
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toBe( 10 );
        expect( loading ).toBe( false );
    });
    
    
});
