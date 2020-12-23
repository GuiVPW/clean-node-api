export interface Encrypter {
	encrypt({ value }: { value: string }): Promise<string>
}
