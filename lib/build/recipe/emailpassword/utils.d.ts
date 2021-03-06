import { FormField, NormalisedAppInfo, NormalisedFormField } from "../../types";
import { EmailPasswordConfig, EmailVerificationUserInput, NormalisedEmailPasswordConfig, NormalisedEmailVerificationFeatureConfig, NormalisedResetPasswordUsingTokenFeatureConfig, NormalisedSignInAndUpFeatureConfig, NormalisedSignInFormFeatureConfig, NormalisedSignUpFormFeatureConfig, ResetPasswordUsingTokenUserInput, SignInAndUpFeatureUserInput, SignInFormFeatureUserInput, SignUpFormFeatureUserInput } from "./types";
export declare function normaliseEmailPasswordConfig(config: EmailPasswordConfig): NormalisedEmailPasswordConfig;
export declare function normaliseSignInAndUpFeature(appInfo: NormalisedAppInfo, config?: SignInAndUpFeatureUserInput): NormalisedSignInAndUpFeatureConfig;
export declare function normaliseSignUpFormFeatureConfig(config?: SignUpFormFeatureUserInput): NormalisedSignUpFormFeatureConfig;
export declare function normaliseSignInFormFeatureConfig(appInfo: NormalisedAppInfo, defaultFormFields: NormalisedFormField[], config?: SignInFormFeatureUserInput): NormalisedSignInFormFeatureConfig;
export declare function getDefaultFormFields(): NormalisedFormField[];
export declare function normaliseResetPasswordUsingTokenFeature(signUpPasswordFieldValidate: (value: any) => Promise<string | undefined>, signUpEmailField: NormalisedFormField, config?: ResetPasswordUsingTokenUserInput): NormalisedResetPasswordUsingTokenFeatureConfig;
export declare function normaliseEmailVerificationFeature(config?: EmailVerificationUserInput): NormalisedEmailVerificationFeatureConfig;
export declare function mergeFormFields(defaultFormFields: NormalisedFormField[], userFormFields: FormField[]): NormalisedFormField[];
export declare function getFormattedFormField(field: NormalisedFormField): NormalisedFormField;
