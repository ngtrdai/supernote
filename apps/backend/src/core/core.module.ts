import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UserModule } from './user/user.module';
import {AuthModule} from "./auth/auth.module";
import { WorkspaceModule } from './workspace/workspace.module';
import { SpaceModule } from './space/space.module';
import { GroupModule } from './group/group.module';
import { DomainMiddleware } from '../common/middlewares/domain.middleware';

@Module({
  imports: [
    UserModule,
    AuthModule,
    WorkspaceModule,
    SpaceModule,
    GroupModule,
  ],
})
export class CoreModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(DomainMiddleware)
      .exclude(
        { path: 'auth/setup', method: RequestMethod.POST },
        { path: 'health', method: RequestMethod.GET },
      )
      .forRoutes('*');
  }
}
