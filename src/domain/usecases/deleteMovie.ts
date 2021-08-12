

export interface DeleteMovie {
    delete(id: string): Promise<boolean>;
}