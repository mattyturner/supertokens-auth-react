"use strict";
/* Copyright (c) 2021, VRAI Labs and/or its affiliates. All rights reserved.
 *
 * This software is licensed under the Apache License, Version 2.0 (the
 * "License") as published by the Apache Software Foundation.
 *
 * You may not use this file except in compliance with the License. You may
 * obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */
var __extends =
    (this && this.__extends) ||
    (function() {
        var extendStatics = function(d, b) {
            extendStatics =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                    function(d, b) {
                        d.__proto__ = b;
                    }) ||
                function(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                };
            return extendStatics(d, b);
        };
        return function(d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
        };
    })();
var __awaiter =
    (this && this.__awaiter) ||
    function(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function(resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator["throw"](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done
                    ? resolve(result.value)
                    : new P(function(resolve) {
                          resolve(result.value);
                      }).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
var __generator =
    (this && this.__generator) ||
    function(thisArg, body) {
        var _ = {
                label: 0,
                sent: function() {
                    if (t[0] & 1) throw t[1];
                    return t[1];
                },
                trys: [],
                ops: []
            },
            f,
            y,
            t,
            g;
        return (
            (g = { next: verb(0), throw: verb(1), return: verb(2) }),
            typeof Symbol === "function" &&
                (g[Symbol.iterator] = function() {
                    return this;
                }),
            g
        );
        function verb(n) {
            return function(v) {
                return step([n, v]);
            };
        }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (
                        ((f = 1),
                        y &&
                            (t =
                                op[0] & 2
                                    ? y["return"]
                                    : op[0]
                                    ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                                    : y.next) &&
                            !(t = t.call(y, op[1])).done)
                    )
                        return t;
                    if (((y = 0), t)) op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (
                                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                                (op[0] === 6 || op[0] === 2)
                            ) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2]) _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                } catch (e) {
                    op = [6, e];
                    y = 0;
                } finally {
                    f = t = 0;
                }
            if (op[0] & 5) throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    };
var __importStar =
    (this && this.__importStar) ||
    function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result["default"] = mod;
        return result;
    };
var __importDefault =
    (this && this.__importDefault) ||
    function(mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Imports.
 */
/** @jsx jsx */
var react_1 = require("@emotion/react");
var React = __importStar(require("react"));
var react_2 = require("react");
var emailPassword_1 = __importDefault(require("../../../emailPassword"));
var __1 = require("../../..");
var featureWrapper_1 = __importDefault(require("../../../../components/featureWrapper"));
var constants_1 = require("../../../constants");
var utils_1 = require("../../../../../utils");
var api_1 = require("./api");
/*
 * Component.
 */
var ResetPasswordUsingToken = /** @class */ (function(_super) {
    __extends(ResetPasswordUsingToken, _super);
    /*
     * Constructor.
     */
    function ResetPasswordUsingToken(props) {
        var _this = _super.call(this, props) || this;
        /*
         * Methods.
         */
        _this.getRecipeInstanceOrThrow = function() {
            var instance;
            if (_this.props.__internal !== undefined && _this.props.__internal.instance !== undefined) {
                instance = _this.props.__internal.instance;
            } else {
                instance = emailPassword_1.default.getInstanceOrThrow();
            }
            return instance;
        };
        _this.submitNewPassword = function(formFields) {
            return __awaiter(_this, void 0, void 0, function() {
                var validationErrors;
                return __generator(this, function(_a) {
                    switch (_a.label) {
                        case 0:
                            return [
                                4 /*yield*/,
                                utils_1.validateForm(
                                    formFields,
                                    this.getRecipeInstanceOrThrow().getConfig().resetPasswordUsingTokenFeature
                                        .submitNewPasswordForm.formFields
                                )
                            ];
                        case 1:
                            validationErrors = _a.sent();
                            // If errors, return.
                            if (validationErrors.length > 0) {
                                return [
                                    2 /*return*/,
                                    {
                                        status: constants_1.FORM_BASE_API_RESPONSE.FIELD_ERROR,
                                        formFields: validationErrors
                                    }
                                ];
                            }
                            // Verify that both passwords match.
                            if (formFields[0].value !== formFields[1].value) {
                                return [
                                    2 /*return*/,
                                    {
                                        status: constants_1.FORM_BASE_API_RESPONSE.FIELD_ERROR,
                                        formFields: [
                                            {
                                                id: "confirm-password",
                                                error: "Confirmation password doesn't match"
                                            }
                                        ]
                                    }
                                ];
                            }
                            return [
                                4 /*yield*/,
                                api_1.handleSubmitNewPasswordAPI(
                                    [formFields[0]],
                                    this.getRecipeInstanceOrThrow(),
                                    this.state.token
                                )
                            ];
                        case 2:
                            // Call API, only send first password.
                            return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        _this.enterEmail = function(formFields) {
            return __awaiter(_this, void 0, void 0, function() {
                var validationErrors;
                return __generator(this, function(_a) {
                    switch (_a.label) {
                        case 0:
                            return [
                                4 /*yield*/,
                                utils_1.validateForm(
                                    formFields,
                                    this.getRecipeInstanceOrThrow().getConfig().resetPasswordUsingTokenFeature
                                        .enterEmailForm.formFields
                                )
                            ];
                        case 1:
                            validationErrors = _a.sent();
                            // If errors, return.
                            if (validationErrors.length > 0) {
                                return [
                                    2 /*return*/,
                                    {
                                        status: constants_1.FORM_BASE_API_RESPONSE.FIELD_ERROR,
                                        formFields: validationErrors
                                    }
                                ];
                            }
                            return [4 /*yield*/, api_1.enterEmailAPI(formFields, this.getRecipeInstanceOrThrow())];
                        case 2:
                            return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        _this.render = function() {
            var enterEmailFormFeature = _this.getRecipeInstanceOrThrow().getConfig().resetPasswordUsingTokenFeature
                .enterEmailForm;
            var submitNewPasswordFormFeature = _this.getRecipeInstanceOrThrow().getConfig()
                .resetPasswordUsingTokenFeature.submitNewPasswordForm;
            var submitNewPasswordForm = {
                styleFromInit: submitNewPasswordFormFeature.style,
                formFields: submitNewPasswordFormFeature.formFields,
                submitNewPasswordAPI: _this.submitNewPassword,
                onSuccess: function() {
                    _this.getRecipeInstanceOrThrow().onHandleEvent({
                        action: constants_1.EMAIL_PASSWORD_SUCCESS_ACTION.PASSWORD_RESET_SUCCESSFUL
                    });
                },
                onSignInClicked: function() {
                    _this
                        .getRecipeInstanceOrThrow()
                        .redirect(
                            { action: constants_1.EMAIL_PASSWORD_REDIRECTION_URL_ACTION.SIGN_IN_AND_UP },
                            _this.props.history
                        );
                }
            };
            var enterEmailForm = {
                styleFromInit: enterEmailFormFeature.style,
                formFields: enterEmailFormFeature.formFields,
                onSuccess: function() {
                    _this.getRecipeInstanceOrThrow().onHandleEvent({
                        action: constants_1.EMAIL_PASSWORD_SUCCESS_ACTION.RESET_PASSWORD_EMAIL_SENT
                    });
                },
                enterEmailAPI: _this.enterEmail
            };
            var useShadowDom = _this.getRecipeInstanceOrThrow().getConfig().useShadowDom;
            var hasToken = _this.state.token.length !== 0;
            /*
             * Render.
             */
            return react_1.jsx(
                featureWrapper_1.default,
                { useShadowDom: useShadowDom },
                react_1.jsx(
                    react_2.Fragment,
                    null,
                    _this.props.children === undefined &&
                        react_1.jsx(__1.ResetPasswordUsingTokenTheme, {
                            submitNewPasswordForm: submitNewPasswordForm,
                            enterEmailForm: enterEmailForm,
                            hasToken: hasToken
                        }),
                    _this.props.children &&
                        React.cloneElement(_this.props.children, {
                            submitNewPasswordForm: submitNewPasswordForm,
                            enterEmailForm: enterEmailForm,
                            hasToken: hasToken
                        })
                )
            );
        };
        var urlParams = new URLSearchParams(utils_1.getWindowOrThrow().location.search);
        var token = urlParams.get("token");
        if (token === null) {
            token = "";
        }
        _this.state = {
            token: token
        };
        return _this;
    }
    return ResetPasswordUsingToken;
})(react_2.PureComponent);
exports.default = ResetPasswordUsingToken;
