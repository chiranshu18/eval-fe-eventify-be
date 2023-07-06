import { getModelToken, SequelizeModule } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';
import { Theme } from '../themes.model';
import { ThemesService } from '../themes.service';

describe('ThemesService', () => {
  let service: ThemesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [SequelizeModule.forRoot({ dialect: 'sqlite' })],
      providers: [
        ThemesService,
        { provide: getModelToken(Theme), useValue: jest.fn() },
        SequelizeModule,
      ],
    }).compile();

    service = module.get<ThemesService>(ThemesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
