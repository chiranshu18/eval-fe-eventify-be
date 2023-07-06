import { IsNumber } from 'class-validator';

export class UpdateActiveTheme {
  @IsNumber()
  preferredThemeId: number;
}
