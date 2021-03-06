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

import { RESET_PASSWORD_INVALID_TOKEN_ERROR, SOMETHING_WENT_WRONG_ERROR } from "../../../../../constants";
import { APIFormField } from "../../../../../types";
import RecipeModule from "../../../../recipeModule";
import { API_RESPONSE_STATUS, EMAIL_PASSWORD_PRE_API_HOOK_ACTION, FORM_BASE_API_RESPONSE } from "../../../constants";
import { EnterEmailAPIResponse, FormBaseAPIResponse, SubmitNewPasswordAPIResponse } from "../../../types";

/*
 * Imports.
 */

export async function handleSubmitNewPasswordAPI(
    formFields: APIFormField[],
    recipe: RecipeModule,
    token: string
): Promise<FormBaseAPIResponse> {
    const response: SubmitNewPasswordAPIResponse = await recipe.getHttp().post(
        "/user/password/reset",
        {
            body: JSON.stringify({ formFields, token })
        },
        EMAIL_PASSWORD_PRE_API_HOOK_ACTION.SUBMIT_NEW_PASSWORD
    );

    // Otherwise, if field errors.
    if (response.status === API_RESPONSE_STATUS.FIELD_ERROR) {
        return {
            status: FORM_BASE_API_RESPONSE.FIELD_ERROR,
            formFields: response.formFields
        };
    }

    // Otherwise, if reset password invalid token error.
    if (response.status === API_RESPONSE_STATUS.RESET_PASSWORD_INVALID_TOKEN_ERROR) {
        return {
            status: FORM_BASE_API_RESPONSE.GENERAL_ERROR,
            message: RESET_PASSWORD_INVALID_TOKEN_ERROR
        };
    }

    // Otherwise, status === OK
    if (response.status === API_RESPONSE_STATUS.OK) {
        return {
            status: FORM_BASE_API_RESPONSE.OK
        };
    }

    throw Error(SOMETHING_WENT_WRONG_ERROR);
}

export async function enterEmailAPI(formFields: APIFormField[], recipe: RecipeModule): Promise<FormBaseAPIResponse> {
    const response: EnterEmailAPIResponse = await recipe.getHttp().post(
        "/user/password/reset/token",
        {
            body: JSON.stringify({ formFields })
        },
        EMAIL_PASSWORD_PRE_API_HOOK_ACTION.SEND_RESET_PASSWORD_EMAIL
    );

    // Otherwise, if field errors.
    if (response.status === API_RESPONSE_STATUS.FIELD_ERROR) {
        return {
            status: FORM_BASE_API_RESPONSE.FIELD_ERROR,
            formFields: response.formFields
        };
    }

    // Otherwise, success.
    if (response.status === API_RESPONSE_STATUS.OK) {
        return {
            status: FORM_BASE_API_RESPONSE.OK
        };
    }

    throw Error(SOMETHING_WENT_WRONG_ERROR);
}
