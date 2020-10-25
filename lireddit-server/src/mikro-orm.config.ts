import { User } from './entities/User';
import { MikroORM } from '@mikro-orm/core';
import { Post } from './entities/Post';
import { __prod__ } from './constants';
import path from 'path';

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post, User],
  dbName: "lireddit",
  type: "postgresql",
  debug: !__prod__,
  password: 'duytan'
} as Parameters<typeof MikroORM.init>[0];