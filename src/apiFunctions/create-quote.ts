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

export async function createQuote(
  quote: IncomingQuote,
  materialId: string,
  styleId: string,
  colorId: string,
  heightId: string,
  tenantId: string
): Promise<any> {
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

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_FENCIER_API_URL}/quote?tenantId=${tenantId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedQuote),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Success:", data);
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
