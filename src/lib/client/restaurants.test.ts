import { describe, it, expect } from 'vitest';
import { isRestaurantOpen } from './restaurants';

describe('#restaurants', () => {
    describe('#isRestaurantOpen', () => {
        it('should be open', () => {
            expect(isRestaurantOpen({ open_hour: '00:00:00', close_hour: '12:00:00'}, '01:00:00' )).toBe(true);
            expect(isRestaurantOpen({ open_hour: '00:00:00', close_hour: '12:00:00'}, '00:00:00' )).toBe(true);
            expect(isRestaurantOpen({ open_hour: '00:00:00', close_hour: '12:00:00'}, '12:00:00' )).toBe(true);
        })

        it('should be closed', () => {
            expect(isRestaurantOpen({ open_hour: '01:00:00', close_hour: '12:00:00'}, '00:00:00' )).toBe(false);
            expect(isRestaurantOpen({ open_hour: '01:00:00', close_hour: '12:00:00'}, '13:00:00' )).toBe(false);
        })

        it('should be open when open > close', () => {
            expect(isRestaurantOpen({ open_hour: '23:00:00', close_hour: '02:00:00'}, '01:00:00' )).toBe(true);
            expect(isRestaurantOpen({ open_hour: '23:00:00', close_hour: '02:00:00'}, '23:30:00' )).toBe(true);
            expect(isRestaurantOpen({ open_hour: '23:00:00', close_hour: '02:00:00'}, '00:00:00' )).toBe(true);
            expect(isRestaurantOpen({ open_hour: '23:00:00', close_hour: '02:00:00'}, '23:00:00' )).toBe(true);
            expect(isRestaurantOpen({ open_hour: '23:00:00', close_hour: '02:00:00'}, '02:00:00' )).toBe(true);
        })

        it('should not be open when open > close', () => {
            expect(isRestaurantOpen({ open_hour: '23:00:00', close_hour: '02:00:00'}, '22:00:00' )).toBe(false);
            expect(isRestaurantOpen({ open_hour: '23:00:00', close_hour: '02:00:00'}, '03:30:00' )).toBe(false);
        })

        it('should be open when closing at midnight', () => {
            expect(isRestaurantOpen({ open_hour: '23:00:00', close_hour: '00:00:00'}, '23:30:00' )).toBe(true);
            expect(isRestaurantOpen({ open_hour: '23:00:00', close_hour: '00:00:00'}, '22:00:00' )).toBe(false);
            expect(isRestaurantOpen({ open_hour: '23:00:00', close_hour: '00:00:00'}, '01:00:00' )).toBe(false);
            expect(isRestaurantOpen({ open_hour: '23:00:00', close_hour: '00:00:00'}, '00:00:00' )).toBe(true);

        })
        
    })
})
