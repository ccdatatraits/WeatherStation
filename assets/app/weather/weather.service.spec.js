"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const weather_service_1 = require("./weather.service");
describe('WeatherService', () => {
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            providers: [weather_service_1.WeatherService]
        });
    });
    it('should ...', testing_1.inject([weather_service_1.WeatherService], (service) => {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=weather.service.spec.js.map