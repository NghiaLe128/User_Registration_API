import { Test, TestingModule } from '@nestjs/testing';
import { UsersnpmController } from './usersnpm.controller';

describe('UsersnpmController', () => {
  let controller: UsersnpmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersnpmController],
    }).compile();

    controller = module.get<UsersnpmController>(UsersnpmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
