"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonTrainer = exports.Pokemon = exports.colours = void 0;
var axios_1 = require("axios");
/*

Pokemon class
  - one pokemon has name, id, types and moves
  
List of goals:
  ✅ create a function to get all information of a pokemon from result of getSinglePokemon
  ✅ get a List of types from a pokemon, assign to a variable called types
  ✅ get a List of moves from a pokemon, you can only choose 4 moves by pokemon, those moves should be aleatory
  ✅ fill Moves with missing data from Types you can get the information from url of the move.
  ✅ re-write decorator to get new pokemons Ids in PokemonTrainer class
*/
exports.colours = {
    reset: "\x1b[0m",
    fgGreen: "\x1b[32m",
    fgCyan: "\x1b[36m",
    fgWhite: "\x1b[37m",
    fgRed: "\x1b[31m",
    fgYellow: "\x1b[33m",
    fgMagenta: "\x1b[35m",
};
function getNewPokemons(pokemonsToGet) {
    var pokemons = [];
    for (var pokeIndex = 0; pokeIndex < pokemonsToGet; pokeIndex++) {
        pokemons.push(Math.floor(Math.random() * maxPokemons));
    }
    return function _getNewPokemons(constructor) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.listOfIds = pokemons;
                _this.name = "oh no";
                return _this;
            }
            return class_1;
        }(constructor));
    };
}
var maxPokemons = 868;
var Pokemon = /** @class */ (function () {
    function Pokemon(pokemonResult) {
        this.name = '';
        this.id = 0;
        this.moves = [];
        this.types = [];
        this.completeData = pokemonResult;
        this.buildFieldsPokemon(pokemonResult);
    }
    Pokemon.responseToPokeData = function (pokemon) {
        return {
            name: pokemon.name,
            id: pokemon.id,
            types: pokemon.types,
            moves: pokemon.moves
        };
    };
    Pokemon.prototype.getSingleMove = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.resolve(axios_1.default.get(url))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Pokemon.prototype.getDefaultMoves = function (pokemon) {
        var movesToLook = [];
        for (var currentMove = 0; currentMove < pokemon.moves.length; currentMove++) {
            if (currentMove === 4) {
                break;
            }
            var currentSkillIndex = Math.floor(Math.random() * (pokemon.moves.length + 1));
            var partialSkill = pokemon.moves.splice(currentSkillIndex, 1)[0];
            var move = {
                name: partialSkill.move.name,
                url: partialSkill.move.url
            };
            movesToLook.push(move);
        }
        return movesToLook;
    };
    Pokemon.prototype.getDetailedMoves = function () {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var movesToLook, _i, _d, move, result;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        movesToLook = [];
                        _i = 0, _d = this.moves;
                        _e.label = 1;
                    case 1:
                        if (!(_i < _d.length)) return [3 /*break*/, 4];
                        move = _d[_i];
                        return [4 /*yield*/, this.getSingleMove(move.url)];
                    case 2:
                        result = _e.sent();
                        movesToLook.push({
                            name: move.name,
                            url: move.url,
                            powerPoints: (_a = result.data.pp) !== null && _a !== void 0 ? _a : 0,
                            accuracy: (_b = result.data.accuracy) !== null && _b !== void 0 ? _b : 0,
                            damage: (_c = result.data.power) !== null && _c !== void 0 ? _c : 0,
                            type: result.data.type,
                        });
                        _e.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, movesToLook];
                }
            });
        });
    };
    Pokemon.prototype.getDefaultTypes = function (pokemon) {
        return pokemon.types.map(function (typeData) { return typeData.type; });
    };
    Pokemon.prototype.buildFieldsPokemon = function (pokemon) {
        this.name = pokemon.name;
        this.id = pokemon.id;
        this.types = this.getDefaultTypes(pokemon);
        this.moves = this.getDefaultMoves(pokemon);
    };
    Pokemon.prototype.displayInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.getDetailedMoves()];
                    case 1:
                        _a.moves = _b.sent();
                        console.log("".concat(exports.colours.fgGreen, "==========================\n").concat(exports.colours.reset));
                        console.log("".concat(exports.colours.fgRed).concat(this.id, " ").concat(exports.colours.reset, "- ").concat(exports.colours.fgMagenta).concat(this.name.toUpperCase()).concat(exports.colours.reset));
                        console.log("".concat(exports.colours.fgGreen, "\n### ").concat(exports.colours.fgYellow, "Types ").concat(exports.colours.fgGreen, "###").concat(exports.colours.fgWhite));
                        this.types.forEach(function (type) {
                            console.log("- ".concat(type.name.replace(/^\w/, function (character) { return character.toUpperCase(); })));
                        });
                        console.log("".concat(exports.colours.fgGreen, "\n### ").concat(exports.colours.fgYellow, "Moves ").concat(exports.colours.fgGreen, "###").concat(exports.colours.fgWhite));
                        this.moves.forEach(function (move) {
                            console.log("- ".concat(move.name.replace(/^\w/, function (character) { return character.toUpperCase(); }), " ").concat(exports.colours.reset, "- ").concat(exports.colours.fgGreen, "Damage: ").concat(exports.colours.fgRed).concat(move.damage, " ").concat(exports.colours.reset, "- ").concat(exports.colours.fgGreen, "PP: ").concat(exports.colours.fgRed).concat(move.powerPoints, " ").concat(exports.colours.reset, "- ").concat(exports.colours.fgGreen, "ACC: ").concat(exports.colours.fgRed).concat(move.accuracy).concat(exports.colours.reset));
                        });
                        console.log(exports.colours.reset);
                        return [2 /*return*/];
                }
            });
        });
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
var PokemonTrainer = /** @class */ (function () {
    function PokemonTrainer(name) {
        this.pokemons = [];
        this.listOfIds = [2, 4];
        this.name = name;
    }
    PokemonTrainer.prototype.getSinglePokemon = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, axios_1.default.get("https://pokeapi.co/api/v2/pokemon/".concat(id))];
            });
        });
    };
    PokemonTrainer.prototype.getPokemons = function () {
        return __awaiter(this, void 0, void 0, function () {
            var listPokemons, results, _i, results_1, result, pokeData;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        listPokemons = this.listOfIds.map(function (id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, Promise.resolve(this.getSinglePokemon(id))];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); });
                        return [4 /*yield*/, Promise.all(listPokemons)];
                    case 1:
                        results = _a.sent();
                        _i = 0, results_1 = results;
                        _a.label = 2;
                    case 2:
                        if (!(_i < results_1.length)) return [3 /*break*/, 5];
                        result = results_1[_i];
                        return [4 /*yield*/, Pokemon.responseToPokeData(result.data)];
                    case 3:
                        pokeData = _a.sent();
                        this.pokemons.push(new Pokemon(pokeData));
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    PokemonTrainer.prototype.showTeam = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getPokemons()];
                    case 1:
                        _a.sent();
                        console.log('Trainer:', "".concat(exports.colours.fgMagenta).concat(this.name));
                        this.pokemons.forEach(function (pokemon) { return pokemon.displayInfo(); });
                        return [2 /*return*/];
                }
            });
        });
    };
    PokemonTrainer = __decorate([
        getNewPokemons(3),
        __metadata("design:paramtypes", [String])
    ], PokemonTrainer);
    return PokemonTrainer;
}());
exports.PokemonTrainer = PokemonTrainer;
