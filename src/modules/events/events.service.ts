import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Event } from './events.model';

@Injectable()
export class EventsService {
  constructor(
    @InjectModel(Event)
    private eventModel: typeof Event,
  ) {}

  findAll(): Promise<Event[]> {
    return this.eventModel.findAll();
  }

  findOne(id: number): Promise<Event> {
    return this.eventModel.findOne({
      where: { id },
    });
  }

  async fetchSeatAvailability(id: number) {
    const seatAvailability = await this.eventModel.findOne({
      attributes: ['areSeatsAvailable'],
      where: { id },
    });
    return seatAvailability;
  }

  async updateRegister(eventId, isRegistered) {
    try {
      const res = await this.eventModel.update(
        { isRegistered: isRegistered },
        { where: { id: eventId } },
      );

      // No rows were updated
      if (res[0] == 0) {
        throw new BadRequestException('Invalid Event Id');
      }
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  async updateBookmark(eventId, isBookmarked) {
    try {
      const res = await this.eventModel.update(
        { isBookmarked: isBookmarked },
        { where: { id: eventId } },
      );

      // No rows were updated
      if (res[0] == 0) {
        throw new BadRequestException('Invalid Event Id');
      }
    } catch (err) {
      throw new BadRequestException(err);
    }
  }
}
