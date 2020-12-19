export interface EmailValidator {
	isValid({ email }: { email: string }): boolean
}
