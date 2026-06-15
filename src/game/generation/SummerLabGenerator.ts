import { ItemType } from '../Inventory';

export function generateSummerLabColumn(chunk: any, x: number, z: number, worldX: number, worldZ: number): void {
  for (let fy = -20; fy <= 350; fy++) {
    const y = fy - (-60); // WORLD_Y_OFFSET
    if (y < 0 || y >= 384) continue;
    
    const block = getSummerLabBlock(worldX, fy, worldZ);
    if (block !== ItemType.AIR) {
      chunk.setBlockFast(x, y, z, block);
    }
  }
}

export function getSummerLabBlock(x: number, y: number, z: number): number {
  if (y < -3 || y > 10) return ItemType.AIR;
  
  const fy = Math.floor(y);
  
  // Basic Skyblock Island (3x3x3 dirt/grass)
  if (Math.abs(x) <= 2 && Math.abs(z) <= 2 && fy >= -2 && fy <= 0) {
    if (x === 0 && z === 0 && fy === -2) return ItemType.OBSIDIAN;
    if (fy === 0) return ItemType.GRASS;
    return ItemType.DIRT;
  }
  
  // A small tree on the island (x=1, z=1)
  if (x === 1 && z === 1) {
    if (fy >= 1 && fy <= 4) return ItemType.WOOD;
  }
  if (fy >= 3 && fy <= 5 && Math.abs(x - 1) <= 1 && Math.abs(z - 1) <= 1 && !(x===1 && z===1 && fy < 5)) {
    return ItemType.LEAVES;
  }
  if (fy === 6 && x === 1 && z === 1) {
    return ItemType.LEAVES;
  }

  // A chest for the player (x=-1, z=-1)
  if (x === -1 && fy === 1 && z === -1) {
    return ItemType.CHEST;
  }
  
  return ItemType.AIR;
}


