import 'dotenv/config';
import { createAuth } from '@keystone-next/auth'
import { config, createSchema } from '@keystone-next/keystone/schema';
import { User } from './schemas/User';
import { withItemData, statelessSessions } from '@keystone-next/keystone/session'
import { Product } from './schemas/Products';
import { ProductImage } from './schemas/ProductImage';

const databaseURL =
  process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits-tutorial';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // how long should they stay singed in
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    //TODO add initial roles here
  }
})

export default withAuth(config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL,
    // TODO add data seeding here
  },
  lists: createSchema({
    User,
    Product,
    ProductImage
  }),
  ui: {
    //show the ui for ppl who pass this test
    isAccessAllowed: ({session}) => {
      return !!session?.data;
    },
  },
  session: withItemData(statelessSessions(sessionConfig), {
    User: `id`
  })
}));
