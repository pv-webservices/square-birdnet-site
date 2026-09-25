import {
  BadgeCheck,
  Bird,
  Bug,
  Building2,
  Factory,
  Grid3x3,
  HelpCircle,
  PawPrint,
  ShieldCheck,
  Sparkles,
  SunMedium,
  UsersRound,
  Zap,
  type LucideIcon,
} from "lucide-react";

/**
 * Maps the string icon keys used in the data files onto Lucide components,
 * so content files never import React.
 */
const registry: Record<string, LucideIcon> = {
  team: UsersRound,
  sun: SunMedium,
  shield: ShieldCheck,
  sparkle: Sparkles,
  badge: BadgeCheck,
  building: Building2,
  factory: Factory,
  bird: Bird,
  paw: PawPrint,
  spike: Zap,
  net: Grid3x3,
  bug: Bug,
  help: HelpCircle,
};

export default function Icon({ name, size = 20 }: { name: string; size?: number }) {
  const Component = registry[name] ?? ShieldCheck;
  return <Component size={size} />;
}
