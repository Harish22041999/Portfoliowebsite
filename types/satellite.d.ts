declare module 'satellite.js' {
  export interface SatRec {
    satnum: string;
    epochyr: number;
    epochdays: number;
    ndot: number;
    nddot: number;
    bstar: number;
    inclo: number;
    nodeo: number;
    ecco: number;
    argpo: number;
    mo: number;
    no: number;
    error?: number;
    [key: string]: any;
  }

  export interface EciVec3<T = number> {
    x: T;
    y: T;
    z: T;
  }

  export interface PositionAndVelocity {
    position: EciVec3<number> | boolean;
    velocity: EciVec3<number> | boolean;
  }

  export interface GeodeticLocation {
    longitude: number;
    latitude: number;
    height: number;
  }

  export function twoline2satrec(longstr1: string, longstr2: string): SatRec;
  export function propagate(satrec: SatRec, date: Date): PositionAndVelocity;
  export function gstime(date: Date): number;
  export function eciToGeodetic(eci: EciVec3<number>, gmst: number): GeodeticLocation;
  export function degreesLong(radians: number): number;
  export function degreesLat(radians: number): number;
}

