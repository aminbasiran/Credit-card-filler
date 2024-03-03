export const displayCcNumber = (number) => {
    let maskedNumber = 'xxxx xxxx xxxx xxxx';
    for (let i = 0; i < number.length; i++) {
      if (i >= 16) break; // Ensure we don't exceed 16 digits
      maskedNumber = maskedNumber.replace('x', number[i]);
    }
    return maskedNumber;
  };