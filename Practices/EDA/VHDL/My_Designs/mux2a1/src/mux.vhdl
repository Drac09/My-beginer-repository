library IEEE;
use IEEE.std_logic_1164.all;

-- Entidad del multiplexor 2 a 1 de 8 bits
entity mux is
    port (
        a, b: IN std_logic_vector (7 DOWNTO 0);  -- Entradas del multiplexor
        sel: IN std_logic_vector (1 DOWNTO 0);  -- Se�al de selecci�n
        output: OUT std_logic_vector (7 DOWNTO 0)  -- Salida del multiplexor
    );
end mux;

-- Arquitectura del multiplexor
architecture Comportamiento of mux is
begin
    -- Proceso combinatorio que implementa la l�gica del multiplexor
    process (a, b, sel)
    begin
        -- Selecci�n de la entrada seg�n el valor de sel
        if (sel = "00") then
            output <= "00000000";  -- Selecci�n de la entrada cero
        elsif (sel = "01") then
            output <= a;  -- Selecci�n de la entrada a
        elsif (sel = "10") then
            output <= b;  -- Selecci�n de la entrada b
        else
            output <= (others => '1');  -- Selecci�n de la entrada uno (default)
        end if;
    end process;    
end Comportamiento;