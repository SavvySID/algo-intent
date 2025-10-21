import { useState } from "react";
import { useTheme } from "next-themes";
import OrbVisual from "@/components/OrbVisual";
import QuickActions from "@/components/QuickActions";
import ChatMessage from "@/components/ChatMessage";
import ChatInput from "@/components/ChatInput";
import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleSendMessage = async (content: string) => {
    // Add user message
    const userMessage: Message = { role: "user", content };
    setMessages((prev) => [...prev, userMessage]);
    setIsProcessing(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        role: "assistant",
        content: `I understand you want to: "${content}"\n\nI'll help you create the appropriate Algorand transaction. Let me break down what we need to do...\n\n1. Verify the transaction details\n2. Construct the transaction parameters\n3. Sign and submit to the Algorand network\n\nWould you like me to proceed with this transaction?`,
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsProcessing(false);
    }, 1500);
  };

  const handleSelectPrompt = (prompt: string) => {
    handleSendMessage(prompt);
  };

  const showWelcome = messages.length === 0;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <span className="font-semibold text-lg">Algo Intent</span>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col px-6 pb-6">
        {showWelcome ? (
          <div className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto w-full">
            <OrbVisual />
            <h1 className="text-4xl font-bold text-center mb-2">
              Good evening
            </h1>
            <p className="text-xl text-center mb-8 text-foreground/80">
              Can I help you with anything?
            </p>
            <p className="text-sm text-muted-foreground text-center mb-6 max-w-md">
              Describe your Algorand transaction intent in plain English
            </p>
            <QuickActions onSelectPrompt={handleSelectPrompt} />
          </div>
        ) : (
          <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full">
            <div className="flex-1 overflow-y-auto mb-6 space-y-4">
              {messages.map((message, index) => (
                <ChatMessage
                  key={index}
                  role={message.role}
                  content={message.content}
                />
              ))}
              {isProcessing && (
                <div className="flex justify-start">
                  <div className="bg-card border border-border rounded-2xl px-4 py-3 shadow-sm">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Chat Input - Always at bottom */}
        <div className="mt-auto">
          <ChatInput
            onSendMessage={handleSendMessage}
            disabled={isProcessing}
          />
        </div>
      </main>
    </div>
  );
};

export default Index;
