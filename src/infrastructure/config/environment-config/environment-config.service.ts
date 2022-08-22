import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IDatabaseConfig } from 'src/domain/Idatabase';

@Injectable()
export class EnvironmentConfigService implements IDatabaseConfig {
    constructor(private configService: ConfigService) {}

    getDatabaseHost(): string {
        return this.configService.get<string>(process.env.POSTGRES_HOST);
    }
    getDatabasePort(): number {
        return this.configService.get<number>(process.env.POSTGRES_PORT);
    }
    getDatabaseUser(): string {
        return this.configService.get<string>(process.env.POSTGRES_USER);
    }
    getDatabasePassword(): string {
        return this.configService.get<string>(process.env.POSTGRES_PASSWORD);
    }
    getDatabaseName(): string {
        return this.configService.get<string>(process.env.POSTGRES_DB);
    }
    getDatabaseSchema(): string {
        return this.configService.get<string>('test');
    }
    getDatabaseSync(): boolean {
        return this.configService.get<boolean>('true');
    }
}
