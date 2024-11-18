import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {PrismaModule} from "./modules/prisma/prisma.module";
import {UsersModule} from "./modules/users/users.module";
import {CompaniesModule} from "./modules/company/companies.module";
import {AuthModule} from "./modules/auth/auth.module";

@Module({
    imports: [PrismaModule, UsersModule, CompaniesModule, AuthModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
