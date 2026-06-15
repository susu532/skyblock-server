import { ItemType } from './Inventory';
import * as THREE from 'three';

export interface InfiniteBlockData {
  x: number;
  y: number;
  z: number;
  type: number;
  name: string;
  id: string;
}

export const SUMMER_LAB_INFINITE_BLOCKS: InfiniteBlockData[] = [
  { x: -31, y: 1, z: -1, type: ItemType.STONE, name: "Infinite Stone", id: "inf_stone" },
  { x: 29, y: 1, z: -1, type: ItemType.GRASS, name: "Infinite Grass", id: "inf_grass" },
  { x: -81, y: 1, z: -1, type: ItemType.COBBLESTONE, name: "Infinite Cobblestone", id: "inf_cobble" },
  { x: 79, y: 1, z: -1, type: ItemType.WOOD, name: "Infinite Wood", id: "inf_wood" },

  // More on Z axis (spaced by 80)
  { x: -31, y: 1, z: 79, type: ItemType.STONE_BRICKS, name: "Infinite Stone Bricks", id: "inf_stone_bricks" },
  { x: 29, y: 1, z: 79, type: ItemType.BIRCH_LOG, name: "Infinite Birch Log", id: "inf_birch" },
  
  { x: -31, y: 1, z: 159, type: ItemType.BLACKSTONE, name: "Infinite Blackstone", id: "inf_blackstone" },
  { x: 29, y: 1, z: 159, type: ItemType.SPRUCE_LOG, name: "Infinite Spruce Log", id: "inf_spruce" },

  { x: -31, y: 1, z: 239, type: ItemType.END_STONE, name: "Infinite End Stone", id: "inf_end_stone" },
  { x: 29, y: 1, z: 239, type: ItemType.CHERRY_LOG, name: "Infinite Cherry Log", id: "inf_cherry" },

  { x: -31, y: 1, z: 319, type: ItemType.SANDSTONE, name: "Infinite Sandstone", id: "inf_sandstone" },
  { x: 29, y: 1, z: 319, type: ItemType.DARK_OAK_LOG, name: "Infinite Dark Oak", id: "inf_dark_oak" },

  // More on -Z axis (spaced by 80)
  { x: -31, y: 1, z: -81, type: ItemType.ANDESITE, name: "Infinite Andesite", id: "inf_andesite" },
  { x: 29, y: 1, z: -81, type: ItemType.WOOD, name: "Infinite Oak Log", id: "inf_oak_log" },

  { x: -31, y: 1, z: -161, type: ItemType.DIORITE, name: "Infinite Diorite", id: "inf_diorite" },
  { x: 29, y: 1, z: -161, type: ItemType.MANGROVE_LOG, name: "Infinite Mangrove", id: "inf_mangrove" },

  { x: -31, y: 1, z: -241, type: ItemType.GRANITE, name: "Infinite Granite", id: "inf_granite" },
  { x: 29, y: 1, z: -241, type: ItemType.ACACIA_LOG, name: "Infinite Acacia Log 2", id: "inf_acacia_2" },

  // More on X axis (spaced by 100)
  { x: -181, y: 1, z: -1, type: ItemType.MOSSY_COBBLESTONE, name: "Infinite Mossy Cobble", id: "inf_mossy_cobble" },
  { x: 179, y: 1, z: -1, type: ItemType.JUNGLE_LOG, name: "Infinite Jungle Log", id: "inf_jungle" },

  { x: -281, y: 1, z: -1, type: ItemType.SMOOTH_STONE, name: "Infinite Smooth Stone", id: "inf_smooth_stone" },
  { x: 279, y: 1, z: -1, type: ItemType.ACACIA_LOG, name: "Infinite Acacia Log", id: "inf_acacia" },

  { x: -381, y: 1, z: -1, type: ItemType.STONE_BRICKS, name: "Infinite Stone Bricks 2", id: "inf_stone_bricks_2" },
  { x: 379, y: 1, z: -1, type: ItemType.WOOD, name: "Infinite Wood 2", id: "inf_wood_2" },

  { x: -481, y: 1, z: -1, type: ItemType.COBBLED_DEEPSLATE, name: "Infinite Deepslate", id: "inf_deepslate" },
  { x: 479, y: 1, z: -1, type: ItemType.SPRUCE_LOG, name: "Infinite Spruce Log 2", id: "inf_spruce_2" },

  // Ores (Z = -321, 399 etc)
  { x: -31, y: 1, z: -321, type: ItemType.COAL_ORE, name: "Infinite Coal Ore", id: "inf_coal_ore" },
  { x: 29, y: 1, z: -321, type: ItemType.IRON_ORE, name: "Infinite Iron Ore", id: "inf_iron_ore" },
  { x: -31, y: 1, z: -401, type: ItemType.GOLD_ORE, name: "Infinite Gold Ore", id: "inf_gold_ore" },
  { x: 29, y: 1, z: -401, type: ItemType.DIAMOND_ORE, name: "Infinite Diamond Ore", id: "inf_diamond_ore" },
  { x: -31, y: 1, z: -481, type: ItemType.LAPIS_ORE, name: "Infinite Lapis Ore", id: "inf_lapis_ore" },
  { x: 29, y: 1, z: -481, type: ItemType.REDSTONE_ORE, name: "Infinite Redstone Ore", id: "inf_redstone_ore" },
  { x: -31, y: 1, z: -561, type: ItemType.EMERALD_ORE, name: "Infinite Emerald Ore", id: "inf_emerald_ore" },
  { x: 29, y: 1, z: -561, type: ItemType.COPPER_ORE, name: "Infinite Copper Ore", id: "inf_copper_ore" },

  // More basic materials
  { x: -581, y: 1, z: -1, type: ItemType.DIRT, name: "Infinite Dirt", id: "inf_dirt" },
  { x: 579, y: 1, z: -1, type: ItemType.SAND, name: "Infinite Sand", id: "inf_sand" },
  { x: -681, y: 1, z: -1, type: ItemType.OBSIDIAN, name: "Infinite Obsidian", id: "inf_obsidian" },
  { x: 679, y: 1, z: -1, type: ItemType.GLASS, name: "Infinite Glass", id: "inf_glass" },
];
