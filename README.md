Steps to reproduce:
- Create a Firebase and Firestore application
- Generate a service account
- Add the service account to `.env` under the key `FIREBASE_SERVICE_ACCOUNT`
- Run `bun run start`

It will build a bundle and run it. The script will hang because of the gRPC bundling bug.

Bun version: `1.2.13` (`bun -v`)