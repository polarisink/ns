import { Controller, Get, Req } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get('find')
    findAll(): string {
        return 'This action returns all cats';
    }
}
