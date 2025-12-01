import { NextRequest, NextResponse } from 'next/server';

const INFOBIP_BASE_URL = process.env.INFOBIP_BASE_URL;
const INFOBIP_API_KEY = process.env.INFOBIP_API_KEY;

export async function POST(req: NextRequest) {
  if (!INFOBIP_BASE_URL || !INFOBIP_API_KEY) {
    return NextResponse.json(
      { error: 'Server configuration error: Infobip env vars missing.' },
      { status: 500 }
    );
  }

  try {
    const body = (await req.json()) as {
      firstName: string;
      surname: string;
      phone: string;
      facilityType: string;
      birthMethod: string;
      addrNumber: string;
      addrStreet: string;
      addrArea: string;
      addrProvince: string;
      addrZip: string;
    };

    const {
      firstName,
      surname,
      phone,
      facilityType,
      birthMethod,
      addrNumber,
      addrStreet,
      addrArea,
      addrProvince,
      addrZip
    } = body;

    if (!firstName || !surname || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields (firstName, surname, phone).' },
        { status: 400 }
      );
    }

    const address = `${addrNumber} ${addrStreet}, ${addrArea}, ${addrProvince} ${addrZip}`;

    // People API payload – adjust attributes according to your schema
    const peoplePayload = {
      firstName,
      lastName: surname,
      channels: [
        {
          channel: 'SMS',
          identifiers: [{ identifier: phone }]
        }
      ],
      attributes: {
        birthFacilityType: facilityType,
        plannedBirthMethod: birthMethod,
        addressFull: address
      }
    };

    const ibRes = await fetch(`${INFOBIP_BASE_URL}/people/1/persons`, {
      method: 'POST',
      headers: {
        Authorization: `App ${INFOBIP_API_KEY}`,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(peoplePayload)
    });

    const ibData = await ibRes.json();

    if (!ibRes.ok) {
      console.error('Infobip error:', ibData);
      return NextResponse.json(
        { error: 'Infobip API error', details: ibData },
        { status: ibRes.status }
      );
    }

    return NextResponse.json({ success: true, person: ibData }, { status: 201 });
  } catch (err) {
    console.error('Server error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
