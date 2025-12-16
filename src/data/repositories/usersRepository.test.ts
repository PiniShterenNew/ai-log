import { describe, it, expect } from "vitest"
import { usersRepository } from "./usersRepository"
import { usersMock } from "../mock/users.mock"

describe("usersRepository", () => {
    it('returns user by id', () => {
        const result = usersRepository.getById("user-1");
        expect(result).toEqual(usersMock[0]);
    })
    it('returns null if user not found', () => {
        const result = usersRepository.getById("user-100");
        expect(result).toEqual(null);
    })
})