import { Controller,Get,Post,Body, Query,} from '@nestjs/common';
import { monitorpurchasesService } from './monitorpurchases.service';
import { MonthlyPurchesesDto } from './monthlypurchases.dto';
import { YearlyPurchesesDto } from './yearlypurchases.dto';
import { purchases } from 'src/entity/purchases.entity';
import { CreatePurchesesDto } from './createpurcheses.dto';


@Controller('purchases')
export class MonitorPurchasesController {
  constructor(private readonly monitorPurchasesService: monitorpurchasesService) {}

  
  @Post()
  async createpurchases(@Body() createpurchasesDto: CreatePurchesesDto) {
    return this.monitorPurchasesService.createpurchases(createpurchasesDto);
  }
  
  @Get('monthly')
  async getmonthlypurchase(@Query() monthlypurchesesDto:MonthlyPurchesesDto): Promise<purchases[]> {
    // Implement logic to get purchases for the current month
    return this.monitorPurchasesService.getmonthlypurchase(monthlypurchesesDto);
  }

  @Get('yearly')
  async getyearlypurchase(@Query() yearlypurchesesDto: YearlyPurchesesDto): Promise<purchases[]> {
    // Implement logic to get purchases for the entire year
    return this.monitorPurchasesService.getyearlypurchase(yearlypurchesesDto);
  }


}

