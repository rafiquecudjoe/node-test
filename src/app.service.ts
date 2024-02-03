import { Injectable } from '@nestjs/common';
import { HealthCheckService, HealthIndicatorResult, HealthIndicatorStatus } from '@nestjs/terminus';

@Injectable()
export class AppService {
  constructor(private health: HealthCheckService) {}

  private checkServiceStatus = (): HealthIndicatorResult => {
    return { service: { status: 'up' } };
  };

  private checkDBStatus = async (): Promise<HealthIndicatorResult> => {
    let status: HealthIndicatorStatus = 'up';

    return { db: { status } };
  };

  async getServicesStatuses(): Promise<any> {
    const results = await this.health.check([this.checkServiceStatus, this.checkDBStatus]);

    const services = Object.values(results.info!);
    const areAllServicesUp = services.every(service => service.status === 'up');

    return {
      status: areAllServicesUp ? 200 : 500,
      message: areAllServicesUp ? 'Hello World!!' : 'Service Unavailable',
    };
  }
}
