import {
  BadgeCheck,
  Bird,
  Building2,
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
  bird: Bird,
  paw: PawPrint,
  spike: Zap,
  help: HelpCircle,
};

export default function Icon({ name, size = 20 }: { name: string; size?: number }) {
  const Component = registry[name] ?? ShieldCheck;
  return <Component size={size} />;
}
