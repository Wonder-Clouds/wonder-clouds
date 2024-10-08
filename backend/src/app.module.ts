import { Module } from '@nestjs/common';
import { PublicacionModule } from './publicacion/publicacion.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicioModule } from './servicio/servicio.module';
import { TipoGeneralModule } from './tipo-general/tipo-general.module';

@Module({
  imports: [
    PublicacionModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST,
      port: parseInt(process.env.PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      autoLoadEntities: true,
      database: process.env.POSTGRES_DB,
      synchronize: true,
      logging: true,
    }),
    ServicioModule,
    TipoGeneralModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
