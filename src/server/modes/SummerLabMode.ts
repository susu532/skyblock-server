import { GameModeInfo } from "./GameMode";
import { BLOCK, CHUNK_SIZE, WORLD_Y_OFFSET } from "../constants";
import { ChunkManager } from "../ChunkManager";
import { getSummerLabBlock } from "../../game/generation/SummerLabGenerator";
import { GameContext } from "../GameContext";
import { ItemType } from "../../game/Inventory";

export class SummerLabMode implements GameModeInfo {
  name: string;
  allowPvP = true;
  allowMobSpawns = true;
  allowPlayerMobSpawns = true;
  initialized: boolean = false;

  constructor(name: string) {
    this.name = name;
  }

  onTick(ctx: GameContext, delta: number, now: number) {
     if (!this.initialized) {
         this.initialized = true;
         
         const respawn = this.getRespawnPosition("system");
         for (const id in ctx.players) {
             const p = ctx.players[id];
             p.position = { x: respawn.x, y: respawn.y, z: respawn.z };
             p.velocity = { x: 0, y: 0, z: 0 };
             ctx.ioNamespace.emit("playerRespawn", { id, position: p.position, yaw: respawn.yaw });
         }
     }
  }

  isIndestructible(
    x: number,
    y: number,
    z: number,
    bakedBlocks: Map<string, number>,
    currentBlock: number = 0,
  ): boolean {
    const fx = Math.floor(x);
    const fy = Math.floor(y);
    const fz = Math.floor(z);

    if (currentBlock === 2) {
       if (fx === 29 && fy === 1 && fz === -1) return false;
       return true;
    }

    return false;
  }

  getBlockAt(
    x: number,
    y: number,
    z: number,
    chunkManager: ChunkManager,
    bakedBlocks: Map<string, number>,
  ): number {
    const cx = Math.floor(x / CHUNK_SIZE);
    const cz = Math.floor(z / CHUNK_SIZE);
    const lx = ((x % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;
    const lz = ((z % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;
    const chunkType = chunkManager.getBlockFromChunk(
      cx,
      cz,
      lx,
      Math.floor(y) - WORLD_Y_OFFSET,
      lz,
    );
    if (chunkType !== undefined) return chunkType;

    return getSummerLabBlock(x, Math.floor(y), z);
  }

  getRespawnPosition(
    playerId: string,
    playerState?: any,
    chunkManager?: ChunkManager,
    bakedBlocks?: Map<string, number>,
  ): { x: number; y: number; z: number; yaw?: number } {
    return { x: -1.5, y: 3.5, z: -1.5, yaw: Math.PI * 0.75 };
  }
}

