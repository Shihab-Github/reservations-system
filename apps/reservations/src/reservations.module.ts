import { Module } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import { DatabaseModule } from '@app/common/database/database.module';
import { ReservationsRepository } from './reservations.repository';
import { ReservationDocument, ReservationSchema } from './models/reservation.schema';
import { LoggerModule } from '@app/common/logger/logger.module';

@Module({
  imports: [DatabaseModule, LoggerModule, DatabaseModule.forFeature([{name: ReservationDocument.name, schema: ReservationSchema}])],
  controllers: [ReservationsController],
  providers: [ReservationsService, ReservationsRepository]
})
export class ReservationsModule {}
