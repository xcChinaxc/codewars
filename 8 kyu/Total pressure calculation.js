/* Total pressure calculation */
/* Given the molecular mass of two molecules M1M_1M1​ and M2M_2M2​, their masses present m1m_1m1​ and m2m_2m2​ in a vessel of volume VVV at a specific temperature TTT, find the total pressure PtotalP_{total}Ptotal​ exerted by the molecules. Formula to calculate the pressure is:
Ptotal=(m1M1+m2M2)RTV\LARGE P_{total} = {{({{m_1} \over {M_1}} + {{m_2} \over {M_2}}) R T} \over V}Ptotal​=V(M1​m1​​+M2​m2​​)RT​ */

solution= (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
  return ((givenMass1/molarMass1)+(givenMass2/molarMass2))*(0.082)*(temp + 273.15) / volume
}