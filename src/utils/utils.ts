export function formatPhoneNumber(phoneNumber: string) {
  if (!phoneNumber) return "";
  const cleaned = phoneNumber.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `${match[1]}-${match[2]}-${match[3]}`;
  }
  return phoneNumber;
}

export function formatPostalCode(postalCode: string) {
  if (!postalCode) return "";
  const cleaned = ("" + postalCode).replace(/\s/g, "").toUpperCase();
  const match = cleaned.match(/^([A-Za-z]\d[A-Za-z])(\d[A-Za-z]\d)$/);
  if (match) {
    return `${match[1]}-${match[2]}`;
  }
  return postalCode;
}

export const metersToFeet = (meters: number): number => {
  return meters * 3.28084;
};

export const parseAddress = (address: string) => {
  const addressParts = address.split(", ");
  const streetParts = addressParts[0].split(" ");
  const provinceZip = addressParts[2].split(" ");

  return {
    streetName: addressParts[0],
    city: addressParts[1],
    province: provinceZip[0],
    postalCode: provinceZip.slice(1).join(" "),
    country: addressParts[3],
  };
};
