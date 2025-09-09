'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  Sparkles,
  Factory,
  TestTube,
  User,
  PlusCircle,
  CreditCard,
} from 'lucide-react';
import MetamaskConnect from '@/components/auth/MetamaskConnect';
import { useStripeCheckout } from '@/lib/stripe';
import { useToast } from '@/hooks/use-toast';
import { type CardData } from '@/lib/card-data';

// ---------- Player Info ----------
const PlayerInfo = ({
  name,
  isOpponent = false,
}: {
  name: string;
  isOpponent?: boolean;
}) => (
  <div
    className={`flex items-center gap-2 ${
      isOpponent ? 'flex-row-reverse' : ''
    }`}
  >
    <div
      className={`text-lg font-headline ${
        isOpponent ? 'text-right' : 'text-left'
      }`}
    >
      <p>{name}</p>
    </div>
  </div>
);

// ---------- Field Card ----------
const FieldCard = ({ card }: { card: CardData | null }) => {
  if (!card) {
    return (
      <div className="aspect-square w-full rounded-lg border-2 border-dashed border-primary/30 bg-black/20" />
    );
  }

  return (
    <Card className="aspect-square w-full bg-card/80 backdrop-blur-sm border-2 border-primary/20 flex flex-col overflow-hidden shadow-lg">
      <CardContent className="p-0 flex-grow relative">
        <Image src={card.imageUrl} alt={card.name} fill className="object-cover" />
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-1">
          <p className="text-xs text-white truncate font-bold">{card.name}</p>
        </div>
      </CardContent>
    </Card>
  );
};

// ---------- Player Actions ----------
const PlayerActionsCard = () => {
  const { handleCheckout } = useStripeCheckout();
  const { toast } = useToast();

  const handleAddCard = () => {
    toast({
      title: 'Action Not Implemented',
      description: 'This action is for display purposes in this context.',
    });
  };

  return (
    <Card className="bg-card/60 border-primary/20">
      <CardHeader>
        <CardTitle className="font-headline text-lg">Player Actions</CardTitle>
        <CardDescription>Quick access to game features.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Button asChild className="w-full justify-start" variant="outline">
          <Link href="/mint-factory" className="flex items-center gap-2">
            <Factory className="h-4 w-4" />
            <span>Forge New Card</span>
          </Link>
        </Button>

        <Button asChild className="w-full justify-start" variant="outline">
          <Link href="/mint-labs" className="flex items-center gap-2">
            <TestTube className="h-4 w-4" />
            <span>Mint Lab</span>
          </Link>
        </Button>

        <Button asChild className="w-full justify-start" variant="outline">
          <Link href="/avatars" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>Customize Avatar</span>
          </Link>
        </Button>

        <Button
          className="w-full justify-start"
          variant="outline"
          onClick={handleAddCard}
        >
          <PlusCircle className="h-4 w-4 mr-2" />
          Add This Card
        </Button>

        <Button
          className="w-full justify-start bg-green-600 hover:bg-green-700 text-white"
          onClick={() =>
            handleCheckout({
              priceId: 'price_1PQRgRDEQaroq7ixE36zAbLg',
              quantity: 1,
            })
          }
        >
          <CreditCard className="h-4 w-4 mr-2" />
          Purchase Fuel with Stripe
        </Button>
      </CardContent>
    </Card>
  );
};

// ---------- Main Component ----------
export default function MultiplayerColiseum() {
  const [playerField] = useState<(CardData | null)[]>(Array(16).fill(null));
  const [opponentField] = useState<(CardData | null)[]>(Array(16).fill(null));

  return (
    <div className="min-h-screen bg-black text-white font-body">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-black/80 backdrop-blur">
        <div className="container flex h-16 max-w-screen-xl items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="font-bold font-headline text-lg">
                Crypto Card Clash
              </span>
            </Link>
          </div>
          <MetamaskConnect />
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-screen-xl mx-auto py-8 px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-headline text-gradient-primary">
            4v4 Coliseum
          </h1>
          <p className="text-muted-foreground mt-2">
            Challenge another pilot in a 4x4 tactical grid battle.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Opponent Field */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <PlayerInfo name="Opponent" isOpponent />
              <div className="grid grid-cols-4 gap-2 mt-2">
                {opponentField.map((card, i) => (
                  <FieldCard key={`opp-${i}`} card={card} />
                ))}
              </div>
            </div>

            {/* Player Field */}
            <div>
              <PlayerInfo name="You" />
              <div className="grid grid-cols-4 gap-2 mt-2">
                {playerField.map((card, i) => (
                  <FieldCard key={`player-${i}`} card={card} />
                ))}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <PlayerActionsCard />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
