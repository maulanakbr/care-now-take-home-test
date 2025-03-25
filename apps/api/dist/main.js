/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(2);
const app_controller_1 = __webpack_require__(6);
const app_service_1 = __webpack_require__(7);
const config_1 = __webpack_require__(3);
const treatment_module_1 = __webpack_require__(8);
const treatment_description_module_1 = __webpack_require__(16);
const medication_prescribed_module_1 = __webpack_require__(19);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            treatment_module_1.TreatmentModule,
            treatment_description_module_1.TreatmentDescriptionModule,
            medication_prescribed_module_1.MedicationPrescribedModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);


/***/ }),
/* 5 */
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(2);
const app_service_1 = __webpack_require__(7);
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
};
exports.AppController = AppController;
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "getData", null);
exports.AppController = AppController = tslib_1.__decorate([
    (0, common_1.Controller)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(2);
let AppService = class AppService {
    getData() {
        return { message: 'Hello API' };
    }
};
exports.AppService = AppService;
exports.AppService = AppService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], AppService);


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TreatmentModule = void 0;
const tslib_1 = __webpack_require__(5);
const prisma_module_1 = __webpack_require__(9);
const common_1 = __webpack_require__(2);
const treatment_service_1 = __webpack_require__(12);
const treatment_controller_1 = __webpack_require__(13);
let TreatmentModule = class TreatmentModule {
};
exports.TreatmentModule = TreatmentModule;
exports.TreatmentModule = TreatmentModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        providers: [treatment_service_1.TreatmentService],
        controllers: [treatment_controller_1.TreatmentController],
    })
], TreatmentModule);


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaModule = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(2);
const prisma_service_1 = __webpack_require__(10);
const config_1 = __webpack_require__(3);
let PrismaModule = class PrismaModule {
};
exports.PrismaModule = PrismaModule;
exports.PrismaModule = PrismaModule = tslib_1.__decorate([
    (0, common_1.Module)({
        exports: [prisma_service_1.PrismaService],
        providers: [config_1.ConfigService, prisma_service_1.PrismaService],
    })
], PrismaModule);


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaService = void 0;
const common_1 = __webpack_require__(2);
const client_1 = __webpack_require__(11);
class PrismaService extends client_1.PrismaClient {
    constructor(configService) {
        let customLogLevels;
        try {
            customLogLevels = JSON.parse(configService.get('LOG_LEVELS'));
            // eslint-disable-next-line no-empty
        }
        catch { }
        const log = customLogLevels?.includes('debug') || customLogLevels?.includes('verbose')
            ? [{ emit: 'stdout', level: 'query' }]
            : [];
        super({
            log,
            errorFormat: 'colorless',
        });
    }
    async onModuleInit() {
        try {
            await this.$connect();
        }
        catch (error) {
            common_1.Logger.error(error, 'PrismaService');
        }
    }
    async onModuleDestroy() {
        await this.$disconnect();
    }
}
exports.PrismaService = PrismaService;


/***/ }),
/* 11 */
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TreatmentService = void 0;
const tslib_1 = __webpack_require__(5);
const prisma_service_1 = __webpack_require__(10);
const common_1 = __webpack_require__(2);
let TreatmentService = class TreatmentService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create({ name, treatmentDescriptionsIds, medicationsPrescribedIds, date, cost, }) {
        const validTreatmentDescriptionItems = await this.prismaService.treatmentDescription.findMany({
            where: {
                id: { in: treatmentDescriptionsIds },
            },
        });
        const validMedicationPrescribedItems = await this.prismaService.medicationPrescribed.findMany({
            where: {
                id: { in: medicationsPrescribedIds },
            },
        });
        if (validTreatmentDescriptionItems.length !==
            treatmentDescriptionsIds.length &&
            validMedicationPrescribedItems.length !== medicationsPrescribedIds.length) {
            throw new common_1.BadRequestException('Input not valid');
        }
        const treatment = await this.prismaService.treatment.create({
            data: {
                name,
                treatmentDescriptionsIds,
                medicationsPrescribedIds,
                date,
                cost,
            },
        });
        const [treatmentDescriptions, medicationsPrescribed] = await Promise.all([
            this.prismaService.treatmentDescription.findMany({
                where: { id: { in: treatment.treatmentDescriptionsIds } },
            }),
            this.prismaService.medicationPrescribed.findMany({
                where: { id: { in: treatment.medicationsPrescribedIds } },
            }),
        ]);
        return {
            id: treatment.id,
            name: treatment.name,
            date: treatment.date,
            cost: treatment.cost,
            treatmentDescriptions,
            medicationsPrescribed,
        };
    }
};
exports.TreatmentService = TreatmentService;
exports.TreatmentService = TreatmentService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], TreatmentService);


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TreatmentController = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(2);
const treatment_service_1 = __webpack_require__(12);
const create_treatment_dto_1 = __webpack_require__(14);
let TreatmentController = class TreatmentController {
    constructor(treatmentService) {
        this.treatmentService = treatmentService;
    }
    async create(data) {
        const treatment = await this.treatmentService.create(data);
        return {
            status: common_1.HttpStatus.CREATED,
            data: treatment,
        };
    }
};
exports.TreatmentController = TreatmentController;
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof create_treatment_dto_1.CreateTreatmentDto !== "undefined" && create_treatment_dto_1.CreateTreatmentDto) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TreatmentController.prototype, "create", null);
exports.TreatmentController = TreatmentController = tslib_1.__decorate([
    (0, common_1.Controller)('treatment'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof treatment_service_1.TreatmentService !== "undefined" && treatment_service_1.TreatmentService) === "function" ? _a : Object])
], TreatmentController);


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateTreatmentDto = void 0;
const tslib_1 = __webpack_require__(5);
const class_validator_1 = __webpack_require__(15);
class CreateTreatmentDto {
}
exports.CreateTreatmentDto = CreateTreatmentDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateTreatmentDto.prototype, "name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsDateString)(),
    tslib_1.__metadata("design:type", String)
], CreateTreatmentDto.prototype, "date", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    tslib_1.__metadata("design:type", Array)
], CreateTreatmentDto.prototype, "treatmentDescriptionsIds", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    tslib_1.__metadata("design:type", Array)
], CreateTreatmentDto.prototype, "medicationsPrescribedIds", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsNumber)(),
    tslib_1.__metadata("design:type", Number)
], CreateTreatmentDto.prototype, "cost", void 0);


/***/ }),
/* 15 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TreatmentDescriptionModule = void 0;
const tslib_1 = __webpack_require__(5);
const prisma_module_1 = __webpack_require__(9);
const common_1 = __webpack_require__(2);
const treatment_description_service_1 = __webpack_require__(17);
const treatment_description_controller_1 = __webpack_require__(18);
let TreatmentDescriptionModule = class TreatmentDescriptionModule {
};
exports.TreatmentDescriptionModule = TreatmentDescriptionModule;
exports.TreatmentDescriptionModule = TreatmentDescriptionModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        providers: [treatment_description_service_1.TreatmentDescriptionService],
        controllers: [treatment_description_controller_1.TreatmentDescriptionController],
    })
], TreatmentDescriptionModule);


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TreatmentDescriptionService = void 0;
const tslib_1 = __webpack_require__(5);
const prisma_service_1 = __webpack_require__(10);
const common_1 = __webpack_require__(2);
let TreatmentDescriptionService = class TreatmentDescriptionService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getAll() {
        return await this.prismaService.treatmentDescription.findMany();
    }
};
exports.TreatmentDescriptionService = TreatmentDescriptionService;
exports.TreatmentDescriptionService = TreatmentDescriptionService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], TreatmentDescriptionService);


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TreatmentDescriptionController = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(2);
const treatment_description_service_1 = __webpack_require__(17);
let TreatmentDescriptionController = class TreatmentDescriptionController {
    constructor(treatmentDescriptionService) {
        this.treatmentDescriptionService = treatmentDescriptionService;
    }
    async getAll() {
        const treatmentDescriptions = await this.treatmentDescriptionService.getAll();
        return {
            status: common_1.HttpStatus.OK,
            data: treatmentDescriptions,
        };
    }
};
exports.TreatmentDescriptionController = TreatmentDescriptionController;
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], TreatmentDescriptionController.prototype, "getAll", null);
exports.TreatmentDescriptionController = TreatmentDescriptionController = tslib_1.__decorate([
    (0, common_1.Controller)('treatment-description'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof treatment_description_service_1.TreatmentDescriptionService !== "undefined" && treatment_description_service_1.TreatmentDescriptionService) === "function" ? _a : Object])
], TreatmentDescriptionController);


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MedicationPrescribedModule = void 0;
const tslib_1 = __webpack_require__(5);
const prisma_module_1 = __webpack_require__(9);
const common_1 = __webpack_require__(2);
const medication_prescribed_service_1 = __webpack_require__(20);
const medication_prescribed_controller_1 = __webpack_require__(21);
let MedicationPrescribedModule = class MedicationPrescribedModule {
};
exports.MedicationPrescribedModule = MedicationPrescribedModule;
exports.MedicationPrescribedModule = MedicationPrescribedModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        providers: [medication_prescribed_service_1.MedicationPrescribedService],
        controllers: [medication_prescribed_controller_1.MedicationPrescribedController],
    })
], MedicationPrescribedModule);


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MedicationPrescribedService = void 0;
const tslib_1 = __webpack_require__(5);
const prisma_service_1 = __webpack_require__(10);
const common_1 = __webpack_require__(2);
let MedicationPrescribedService = class MedicationPrescribedService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getAll() {
        return await this.prismaService.medicationPrescribed.findMany();
    }
};
exports.MedicationPrescribedService = MedicationPrescribedService;
exports.MedicationPrescribedService = MedicationPrescribedService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], MedicationPrescribedService);


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MedicationPrescribedController = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(2);
const medication_prescribed_service_1 = __webpack_require__(20);
let MedicationPrescribedController = class MedicationPrescribedController {
    constructor(medicationPrescribedService) {
        this.medicationPrescribedService = medicationPrescribedService;
    }
    async getAll() {
        const medicationsPrescribed = await this.medicationPrescribedService.getAll();
        return {
            status: common_1.HttpStatus.OK,
            data: medicationsPrescribed,
        };
    }
};
exports.MedicationPrescribedController = MedicationPrescribedController;
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], MedicationPrescribedController.prototype, "getAll", null);
exports.MedicationPrescribedController = MedicationPrescribedController = tslib_1.__decorate([
    (0, common_1.Controller)('medication-prescribed'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof medication_prescribed_service_1.MedicationPrescribedService !== "undefined" && medication_prescribed_service_1.MedicationPrescribedService) === "function" ? _a : Object])
], MedicationPrescribedController);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const config_1 = __webpack_require__(3);
const app_module_1 = __webpack_require__(4);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    app.enableCors({
        origin: [
            configService.get('FRONTEND_URL'),
            configService.get('APP_URL'),
            'http://localhost:3111',
            'http://localhost:3100',
        ],
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        credentials: true,
        allowedHeaders: [
            'Content-Type',
            'Authorization',
            'Accept',
            'Origin',
            'X-Requested-With',
            'Access-Control-Request-Method',
            'Access-Control-Request-Headers',
            'Cache-Control',
            'Pragma',
            'If-None-Match',
            'If-Modified-Since',
            'Refresh-Token',
        ],
        exposedHeaders: [
            'Access-Control-Allow-Origin',
            'Access-Control-Allow-Credentials',
            'Access-Control-Allow-Methods',
            'Access-Control-Allow-Headers',
            'Access-Control-Max-Age',
            'Content-Length',
            'Content-Type',
            'Date',
            'ETag',
            'Last-Modified',
            'Vary',
        ],
        maxAge: 3600,
    });
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(process.env.PORT ?? 3100);
}
bootstrap();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map