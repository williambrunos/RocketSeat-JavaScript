const transformDegree = (degree) => {
  const isCelsius = degree.toUpperCase().includes('C');

  const isFahrenheit = degree.toUpperCase().includes('F');

  if(!isCelsius && !isFahrenheit) {
    throw new Error('Degree not identified!');
  }else if(isCelsius) {
    const updatedDegree = degree.toUpperCase().replace('C', '');
    const fahrenheit = (Number(updatedDegree) * 9/5) + 32;
    return fahrenheit + '°F';
  } else {
    const updatedDegree = degree.toUpperCase().replace('F', '');
    const celsius = (Number(updatedDegree) - 32) * 5/9;
    return celsius + '°C';
  }
}

try {
  const fahrenheit = transformDegree('932f');
  console.log(fahrenheit);
}catch(error) {
  console.log(error);
}