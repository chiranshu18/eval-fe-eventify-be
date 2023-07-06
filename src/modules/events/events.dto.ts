import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateEventDto {
  @IsOptional()
  @IsBoolean()
  isRegistered?: boolean = undefined;

  @IsOptional()
  @IsBoolean()
  isBookmarked?: boolean = undefined;
}
