'use server';

import { google } from 'googleapis';
import { env } from '@/env.mjs';
import { type FormInput } from '../blackbear-form';

export async function blackbearAction(body: FormInput) {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: env.GOOGLE_CLIENT_EMAIL,
        private_key: env.GOOGLE_PRIVATE_KEY.replaceAll(/\\n/g, '\n'),
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });
    const sheets = google.sheets({
      auth,
      version: 'v4',
    });

    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'A:I',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            body.firstName,
            body.lastName,
            body.email,
            body.phone,
            body.countryAddress,
            body.itPosition,
            body.course,
            body.feedBackEssay,
            typeof body.feedBackCheck === 'string'
              ? body.feedBackCheck
              : body.feedBackCheck?.join(', '),
          ],
        ],
      },
    });
    return { type: 'success', data: response.data };
  } catch (err) {
    return { type: 'error' };
  }
}
