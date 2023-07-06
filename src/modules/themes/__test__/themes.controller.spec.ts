import { getModelToken, SequelizeModule } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';
import { ThemesController } from '../themes.controller';
import { Theme } from '../themes.model';
import { ThemesService } from '../themes.service';

describe('ThemesController', () => {
  let controller: ThemesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [SequelizeModule.forRoot({ dialect: 'sqlite' })],
      controllers: [ThemesController],
      providers: [
        ThemesService,
        { provide: getModelToken(Theme), useValue: jest.fn() },
        SequelizeModule,
      ],
    }).compile();

    controller = module.get<ThemesController>(ThemesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
