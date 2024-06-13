export interface Quote {
    firstName: string;
    lastName: string;
    emailAddress: string;
    phoneNumber: string;
  }
  
  export interface Address {
    streetName: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;
  }
  
  export interface Details {
    length: number;
    singleGate: boolean;
  }
  
  export type IncomingQuote = [Quote, Address, Details];
  
  export function createQuote(
    quote: IncomingQuote,
    materialId: string,
    styleId: string,
    colorId: string,
    heightId: string,
    tenantId: string
  ) {
    const [userInfo, addressInfo, details] = quote;
  
    const formattedQuote = {
      materialId,
      styleId,
      colorId,
      heightId,
      feet: details.length,
      singleGate: details.singleGate,
      status: "PENDING", 
      customerInfo: {
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        address: {
          street: addressInfo.streetName,
          city: addressInfo.city,
          province: addressInfo.province,
          postalCode: addressInfo.postalCode,
          country: addressInfo.country,
        },
        phoneNumber: userInfo.phoneNumber,
        email: userInfo.emailAddress,
      },
    };
  
    fetch(`https://fencier-api.onrender.com/quote?tenantId=${tenantId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formattedQuote),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  