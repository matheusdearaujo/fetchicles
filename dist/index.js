"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.models = exports.brands = void 0;
const api_1 = require("./services/api");
const brands = (vehicle) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `/brands/${vehicle}`;
    const response = yield api_1.api.get(url);
    return response.data;
});
exports.brands = brands;
const models = ({ vehicle, brand, }) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `/brands/${vehicle}/${brand}`;
    const response = yield api_1.api.get(url);
    return response.data;
});
exports.models = models;
